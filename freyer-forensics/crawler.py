import os
import re
import csv
import ssl
import json
import urllib.request
import urllib.parse
from html.parser import HTMLParser
import hashlib
from bs4 import BeautifulSoup
import requests
import mimetypes

BASE_URL = "https://www.freyerinternational.com"
DOMAIN = "www.freyerinternational.com"

session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 ForensicAuditor/1.0"
})

discovered_urls = set()
visited_urls = set()
pages_data = []
all_assets = {} # url -> dict
all_links = []
all_forms = []
all_technologies = []

to_visit = [BASE_URL, BASE_URL + "/"]

def normalize_url(url, current_url):
    if not url or url.startswith("javascript:") or url.startswith("mailto:") or url.startswith("tel:") or url.startswith("#"):
        return None
    url = urllib.parse.urljoin(current_url, url)
    parsed = urllib.parse.urlparse(url)
    # Strip fragment
    parsed = parsed._replace(fragment="")
    clean_url = urllib.parse.urlunparse(parsed)
    return clean_url

print("Starting discovery crawl...")

while to_visit:
    url = to_visit.pop(0)
    if url in visited_urls:
        continue
    
    parsed = urllib.parse.urlparse(url)
    if parsed.netloc not in [DOMAIN, "freyerinternational.com"]:
        continue

    visited_urls.add(url)
    print(f"Crawling: {url}")

    try:
        resp = session.get(url, timeout=15, verify=False)
        status = resp.status_code
        content_type = resp.headers.get("content-type", "")
        
        # Save header
        header_filename = f"freyer-forensics/archive/headers/{re.sub(r'[^a-zA-Z0-9]', '_', url)}.txt"
        with open(header_filename, "w", encoding="utf-8") as f:
            for k, v in resp.headers.items():
                f.write(f"{k}: {v}\n")

        if "text/html" not in content_type:
            continue

        html_text = resp.text
        # Save raw HTML
        safe_name = re.sub(r'[^a-zA-Z0-9]', '_', url.replace(BASE_URL, "")) or "index"
        raw_html_path = f"freyer-forensics/raw/html/{safe_name}.html"
        with open(raw_html_path, "w", encoding="utf-8") as f:
            f.write(html_text)

        soup = BeautifulSoup(html_text, "html.parser")

        # Page metadata
        title = soup.title.string.strip() if soup.title and soup.title.string else ""
        meta_desc = ""
        meta_desc_tag = soup.find("meta", attrs={"name": re.compile(r"^description$", re.I)})
        if meta_desc_tag:
            meta_desc = meta_desc_tag.get("content", "").strip()

        canonical = ""
        canonical_tag = soup.find("link", rel="canonical")
        if canonical_tag:
            canonical = canonical_tag.get("href", "").strip()

        h1_tags = [h.get_text(strip=True) for h in soup.find_all("h1")]
        h2_tags = [h.get_text(strip=True) for h in soup.find_all("h2")]
        h3_tags = [h.get_text(strip=True) for h in soup.find_all("h3")]

        # Text content and word count
        text = soup.get_text(separator=" ", strip=True)
        words = len(text.split())

        # Discovered links
        page_internal_links = []
        page_external_links = []

        for a in soup.find_all("a", href=True):
            href = a["href"].strip()
            norm = normalize_url(href, url)
            anchor_text = a.get_text(strip=True)
            if norm:
                p_norm = urllib.parse.urlparse(norm)
                is_internal = p_norm.netloc in [DOMAIN, "freyerinternational.com"]
                link_item = {
                    "source_url": url,
                    "target_url": norm,
                    "anchor_text": anchor_text,
                    "is_internal": is_internal,
                    "raw_href": href
                }
                all_links.append(link_item)
                if is_internal:
                    page_internal_links.append(norm)
                    if norm not in visited_urls and norm not in to_visit:
                        # Check extension to avoid queueing non-html files into to_visit directly if they are binary
                        ext = os.path.splitext(p_norm.path)[1].lower()
                        if ext not in [".jpg", ".jpeg", ".png", ".gif", ".pdf", ".zip", ".mp4", ".css", ".js", ".svg"]:
                            to_visit.append(norm)
                else:
                    page_external_links.append(norm)

        # Discovered images
        page_images = []
        for img in soup.find_all("img", src=True):
            src = img["src"].strip()
            img_url = normalize_url(src, url)
            if img_url:
                alt = img.get("alt", "")
                page_images.append({"url": img_url, "alt": alt, "src": src})
                if img_url not in all_assets:
                    all_assets[img_url] = {
                        "type": "image",
                        "first_seen": url,
                        "alt": alt,
                        "src": src
                    }

        # Discovered scripts
        page_scripts = []
        for s in soup.find_all("script"):
            src = s.get("src")
            if src:
                s_url = normalize_url(src.strip(), url)
                if s_url:
                    page_scripts.append(s_url)
                    if s_url not in all_assets:
                        all_assets[s_url] = {"type": "script", "first_seen": url, "src": src}

        # Discovered stylesheets
        page_stylesheets = []
        for l in soup.find_all("link", rel=lambda x: x and "stylesheet" in x):
            href = l.get("href")
            if href:
                css_url = normalize_url(href.strip(), url)
                if css_url:
                    page_stylesheets.append(css_url)
                    if css_url not in all_assets:
                        all_assets[css_url] = {"type": "stylesheet", "first_seen": url, "src": href}

        # Discovered videos / iframes
        page_videos = []
        for v in soup.find_all(["video", "iframe"]):
            src = v.get("src") or ""
            if not src and v.name == "video":
                source = v.find("source")
                if source:
                    src = source.get("src", "")
            if src:
                v_url = normalize_url(src.strip(), url)
                page_videos.append({"tag": v.name, "url": v_url or src})
                if v_url and v_url not in all_assets:
                    all_assets[v_url] = {"type": "video_or_embed", "first_seen": url, "src": src}

        # Forms
        for form in soup.find_all("form"):
            action = form.get("action", "")
            method = form.get("method", "GET").upper()
            form_id = form.get("id", "")
            form_name = form.get("name", "")
            inputs = []
            for inp in form.find_all(["input", "textarea", "select", "button"]):
                inputs.append({
                    "tag": inp.name,
                    "type": inp.get("type", ""),
                    "name": inp.get("name", ""),
                    "id": inp.get("id", ""),
                    "placeholder": inp.get("placeholder", ""),
                    "required": inp.has_attr("required") or "required" in inp.get("class", [])
                })
            all_forms.append({
                "page_url": url,
                "action": action,
                "method": method,
                "form_id": form_id,
                "form_name": form_name,
                "fields": inputs
            })

        # CTAs detection (buttons, links styled like buttons, or call-to-action anchor texts)
        page_ctas = []
        for btn in soup.find_all(["button", "a"]):
            text_val = btn.get_text(strip=True)
            classes = " ".join(btn.get("class", []))
            is_cta = False
            cta_keywords = ["quote", "contact", "submit", "apply", "download", "read more", "learn more", "call", "email", "view", "send", "inquire", "request", "track"]
            if any(kw in text_val.lower() for kw in cta_keywords) or "btn" in classes.lower():
                is_cta = True
            if is_cta and text_val:
                dest = btn.get("href", "") or btn.get("action", "")
                page_ctas.append({
                    "text": text_val,
                    "href": dest,
                    "class": classes,
                    "tag": btn.name
                })

        pages_data.append({
            "url": url,
            "status": status,
            "title": title,
            "meta_description": meta_desc,
            "canonical": canonical,
            "h1": " | ".join(h1_tags),
            "h2": " | ".join(h2_tags),
            "h3": " | ".join(h3_tags),
            "word_count": words,
            "internal_links_count": len(page_internal_links),
            "external_links_count": len(page_external_links),
            "images_count": len(page_images),
            "scripts_count": len(page_scripts),
            "stylesheets_count": len(page_stylesheets),
            "videos_count": len(page_videos),
            "ctas_count": len(page_ctas),
            "ctas": page_ctas,
            "images": page_images,
            "scripts": page_scripts,
            "stylesheets": page_stylesheets,
            "videos": page_videos,
            "raw_html_path": raw_html_path
        })

    except Exception as e:
        print(f"Error crawling {url}: {e}")

print(f"\nCrawling complete! Discovered {len(pages_data)} pages, {len(all_assets)} unique assets, {len(all_links)} links, {len(all_forms)} forms.")

with open("freyer-forensics/data/pages_raw.json", "w", encoding="utf-8") as f:
    json.dump(pages_data, f, indent=2)

with open("freyer-forensics/data/assets_raw.json", "w", encoding="utf-8") as f:
    json.dump(all_assets, f, indent=2)

with open("freyer-forensics/data/links_raw.json", "w", encoding="utf-8") as f:
    json.dump(all_links, f, indent=2)

with open("freyer-forensics/data/forms_raw.json", "w", encoding="utf-8") as f:
    json.dump(all_forms, f, indent=2)

