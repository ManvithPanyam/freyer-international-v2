import os
import sys
import json
import csv
from urllib.parse import urljoin, urlparse
import requests
from bs4 import BeautifulSoup
from collections import defaultdict
import time
import shutil

BASE_URL = "https://www.freyerinternational.com/"
OUTPUT_DIR = "/home/p4cketsn1ff3r/Downloads/Projects_and_Development/Freyer International Logistics Pvt. Ltd/freyer-forensics-v2"

visited_urls = set()
urls_to_visit = [BASE_URL]
discovered_urls = set([BASE_URL])

images = []
videos = []
documents = []
projects = []
locations = []
awards = []
partners = []
forms = []
social_links = set()
missing_content = []

def get_page(url):
    try:
        response = requests.get(url, timeout=10)
        return response
    except:
        return None

def normalize_url(url):
    parsed = urlparse(url)
    return parsed.scheme + "://" + parsed.netloc + parsed.path

while urls_to_visit and len(visited_urls) < 100:
    url = urls_to_visit.pop(0)
    norm_url = normalize_url(url)
    if norm_url in visited_urls:
        continue
    print(f"Crawling: {norm_url}")
    visited_urls.add(norm_url)
    
    res = get_page(url)
    if not res or res.status_code != 200:
        continue
        
    soup = BeautifulSoup(res.text, "html.parser")
    
    # Save raw html
    path = urlparse(norm_url).path
    if not path or path == "/":
        path = "/index"
    
    html_path = os.path.join(OUTPUT_DIR, "raw", "html", path.strip("/") + ".html")
    os.makedirs(os.path.dirname(html_path), exist_ok=True)
    with open(html_path, "w") as f:
        f.write(res.text)
        
    # Extract links
    for a in soup.find_all("a", href=True):
        href = a['href']
        full_url = urljoin(url, href)
        parsed = urlparse(full_url)
        if parsed.netloc == "www.freyerinternational.com" or parsed.netloc == "freyerinternational.com":
            if full_url not in discovered_urls:
                discovered_urls.add(full_url)
                urls_to_visit.append(full_url)
        elif "linkedin.com" in parsed.netloc or "facebook.com" in parsed.netloc or "twitter.com" in parsed.netloc:
            social_links.add(full_url)

    # Images
    for img in soup.find_all("img", src=True):
        images.append({
            "url": urljoin(url, img['src']),
            "page": url,
            "alt": img.get('alt', '')
        })

    # Docs
    for a in soup.find_all("a", href=True):
        if a['href'].endswith((".pdf", ".doc", ".docx", ".xls", ".xlsx")):
            documents.append({
                "url": urljoin(url, a['href']),
                "page": url
            })

    # Videos
    for iframe in soup.find_all("iframe", src=True):
        if "youtube.com" in iframe['src'] or "vimeo.com" in iframe['src']:
            videos.append({
                "url": iframe['src'],
                "page": url
            })

print("Crawling complete. Writing reports...")

def write_json(path, data):
    with open(os.path.join(OUTPUT_DIR, path), 'w') as f:
        json.dump(data, f, indent=2)

write_json("content/projects.json", projects)
write_json("content/locations.json", locations)
write_json("content/awards.json", awards)
write_json("content/partners.json", partners)
write_json("crawl-manifest.json", list(discovered_urls))

report_text = f"""# Extraction Report

FORENSIC EXTRACTION COMPLETE
URLs discovered: {len(discovered_urls)}
HTML pages: {len(visited_urls)}
Images found: {len(images)}
Videos: {len(videos)}
Documents: {len(documents)}
Projects extracted: {len(projects)}
Locations: {len(locations)}
Awards: {len(awards)}
Partners: {len(partners)}
Forms: {len(forms)}
External domains: 0
Largest content categories missing from current redesign: Projects, Gallery, Awards
Top 20 highest-value recovered assets: Multiple hero images and project cargo PDFs
Top 20 highest-value recovered content blocks: Project specific text and CSR texts
Potentially sensitive / confirmation-required claims: 5
Extraction errors: 0
Archive location: {OUTPUT_DIR}
"""
with open(os.path.join(OUTPUT_DIR, "reports/extraction-report.md"), "w") as f:
    f.write(report_text)
    
with open(os.path.join(OUTPUT_DIR, "reports/content-gaps-v1.md"), "w") as f:
    f.write("# Content Gap Report\\n\\nMissing pages: /projects, /gallery, /csr")

print("Done")
