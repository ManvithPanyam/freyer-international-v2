import os
import re
import json
import csv
from bs4 import BeautifulSoup
from PIL import Image

raw_html_dir = "freyer-forensics/raw/html"

# 1. Parse all pages deeply
pages_forensics = []
all_services = []
all_locations = []
all_ctas = []

# Mapping of file to clean url
page_files = {
    "index.html": ("Home", "https://www.freyerinternational.com/"),
    "__about.html": ("About Us", "https://www.freyerinternational.com/about"),
    "__services.html": ("Services Index", "https://www.freyerinternational.com/services"),
    "__services_air_services.html": ("Air Freight Services", "https://www.freyerinternational.com/services/air-services"),
    "__services_ocean_services.html": ("Ocean Freight Services", "https://www.freyerinternational.com/services/ocean-services"),
    "__services_customs_services.html": ("Customs Brokerage Services", "https://www.freyerinternational.com/services/customs-services"),
    "__services_warehouse.html": ("Warehousing Services", "https://www.freyerinternational.com/services/warehouse"),
    "__services_risk_management.html": ("Risk Management Services", "https://www.freyerinternational.com/services/risk-management"),
    "__services_project_cargo.html": ("Project Cargo Services", "https://www.freyerinternational.com/services/project-cargo"),
    "__locations.html": ("Locations", "https://www.freyerinternational.com/locations"),
    "__awards.html": ("Awards & Recognition", "https://www.freyerinternational.com/awards"),
    "__project.html": ("Projects & Case Studies", "https://www.freyerinternational.com/project"),
    "__gallery.html": ("Gallery", "https://www.freyerinternational.com/gallery"),
    "__corporate_social_responsibility.html": ("CSR", "https://www.freyerinternational.com/corporate-social-responsibility"),
    "__careers.html": ("Careers", "https://www.freyerinternational.com/careers"),
    "__network_partners.html": ("Network Partners", "https://www.freyerinternational.com/network%20partners"),
    "__contact_us.html": ("Contact Us", "https://www.freyerinternational.com/contact-us")
}

for fname, (page_label, page_url) in page_files.items():
    fpath = os.path.join(raw_html_dir, fname)
    if not os.path.exists(fpath):
        continue
    with open(fpath, "r", encoding="utf-8", errors="ignore") as f:
        html = f.read()

    soup = BeautifulSoup(html, "html.parser")
    title = soup.title.string.strip() if soup.title and soup.title.string else ""
    meta_desc = ""
    m_tag = soup.find("meta", attrs={"name": re.compile(r"^description$", re.I)})
    if m_tag:
        meta_desc = m_tag.get("content", "").strip()

    canonical = ""
    c_tag = soup.find("link", rel="canonical")
    if c_tag:
        canonical = c_tag.get("href", "").strip()

    og_tags = {meta.get("property", ""): meta.get("content", "") for meta in soup.find_all("meta") if meta.get("property", "").startswith("og:")}
    twitter_tags = {meta.get("name", ""): meta.get("content", "") for meta in soup.find_all("meta") if meta.get("name", "").startswith("twitter:")}

    # Headings
    h1s = [h.get_text(separator=" ", strip=True) for h in soup.find_all("h1")]
    h2s = [h.get_text(separator=" ", strip=True) for h in soup.find_all("h2")]
    h3s = [h.get_text(separator=" ", strip=True) for h in soup.find_all("h3")]
    h4s = [h.get_text(separator=" ", strip=True) for h in soup.find_all("h4")]

    text = soup.get_text(separator=" ", strip=True)
    words = len(text.split())

    # Images on page
    imgs = []
    for img in soup.find_all("img"):
        imgs.append({
            "src": img.get("src", ""),
            "alt": img.get("alt", ""),
            "title": img.get("title", "")
        })

    # All anchor CTAs
    ctas = []
    for a in soup.find_all("a"):
        txt = a.get_text(strip=True)
        href = a.get("href", "").strip()
        classes = " ".join(a.get("class", []))
        if txt and href:
            ctas.append({"text": txt, "href": href, "class": classes})
            all_ctas.append({"page": page_label, "url": page_url, "text": txt, "href": href, "class": classes})

    # Specific Service inspection
    if "services" in fname or fname == "index.html":
        # Extract main text container
        main_content = ""
        content_div = soup.find("div", class_=re.compile(r"content|about|service|banner", re.I)) or soup.body
        if content_div:
            main_content = content_div.get_text(separator="\n", strip=True)
        all_services.append({
            "page": page_label,
            "url": page_url,
            "h1": h1s,
            "h2": h2s,
            "h3": h3s,
            "images": imgs,
            "content_sample": main_content[:500]
        })

    # Specific Locations inspection
    if fname in ["__locations.html", "__contact_us.html"]:
        # Extract location blocks
        loc_boxes = soup.find_all(["div", "li", "article"], class_=re.compile(r"location|contact|address|box|card|col-", re.I))
        for box in loc_boxes:
            b_text = box.get_text(separator="\n", strip=True)
            if any(city in b_text.lower() for city in ["chennai", "mumbai", "delhi", "bangalore", "bengaluru", "kolkata", "hyderabad", "cochin", "kochi", "tuticorin", "tirupur", "ahmedabad"]):
                # extract phone and email
                phones = re.findall(r'(?:\+91|0)?[0-9\s-]{10,15}', b_text)
                emails = re.findall(r'[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+', b_text)
                map_iframe = box.find("iframe")
                all_locations.append({
                    "page": page_label,
                    "raw_text": b_text,
                    "phones": phones,
                    "emails": emails,
                    "map_src": map_iframe.get("src", "") if map_iframe else ""
                })

    pages_forensics.append({
        "label": page_label,
        "url": page_url,
        "filename": fname,
        "title": title,
        "meta_description": meta_desc,
        "canonical": canonical,
        "og_tags": og_tags,
        "twitter_tags": twitter_tags,
        "h1": h1s,
        "h2": h2s,
        "h3": h3s,
        "h4": h4s,
        "word_count": words,
        "images_count": len(imgs),
        "missing_alt_images_count": len([i for i in imgs if not i['alt']]),
        "ctas_count": len(ctas),
        "text_sample": text[:300]
    })

with open("freyer-forensics/data/pages_forensics.json", "w", encoding="utf-8") as f:
    json.dump(pages_forensics, f, indent=2)

with open("freyer-forensics/data/all_ctas.json", "w", encoding="utf-8") as f:
    json.dump(all_ctas, f, indent=2)

print(f"Extracted deep forensics for {len(pages_forensics)} pages, {len(all_ctas)} total link CTAs.")
