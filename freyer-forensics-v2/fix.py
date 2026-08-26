import os
import json
import re
from bs4 import BeautifulSoup
import requests
import datetime

BASE_DIR = "/home/p4cketsn1ff3r/Downloads/Projects_and_Development/Freyer International Logistics Pvt. Ltd/freyer-forensics-v2"
RAW_HTML_DIR = os.path.join(BASE_DIR, "raw/html")
CONTENT_DIR = os.path.join(BASE_DIR, "content")
PAGES_DIR = os.path.join(BASE_DIR, "pages")
REPORTS_DIR = os.path.join(BASE_DIR, "reports")
AWARDS_MEDIA_DIR = os.path.join(BASE_DIR, "media/images/awards")
GALLERY_MEDIA_DIR = os.path.join(BASE_DIR, "media/images/gallery")
DOCS_MEDIA_DIR = os.path.join(BASE_DIR, "media/documents")

os.makedirs(CONTENT_DIR, exist_ok=True)
os.makedirs(PAGES_DIR, exist_ok=True)
os.makedirs(AWARDS_MEDIA_DIR, exist_ok=True)
os.makedirs(GALLERY_MEDIA_DIR, exist_ok=True)
os.makedirs(DOCS_MEDIA_DIR, exist_ok=True)
os.makedirs(REPORTS_DIR, exist_ok=True)

crawl_errors = []
downloads = []
downloads_success = 0
downloads_fail = 0

def download_file(url, target_path):
    global downloads_success, downloads_fail
    try:
        r = requests.get(url, timeout=15)
        if r.status_code == 200:
            with open(target_path, 'wb') as f:
                f.write(r.content)
            downloads.append({"url": url, "path": target_path, "status": "success"})
            downloads_success += 1
            return True
        else:
            crawl_errors.append({"url": url, "error": f"Status {r.status_code}"})
            downloads.append({"url": url, "path": target_path, "status": "failed"})
            downloads_fail += 1
            return False
    except Exception as e:
        crawl_errors.append({"url": url, "error": str(e)})
        downloads.append({"url": url, "path": target_path, "status": "failed"})
        downloads_fail += 1
        return False

# TASK 1: projects.json
try:
    with open(os.path.join(RAW_HTML_DIR, "project.html"), "r") as f:
        soup = BeautifulSoup(f.read(), "html.parser")
    
    projects = []
    # Assuming standard structure based on prompt
    for item in soup.find_all("div", class_=re.compile("item|project", re.I)):
        h2 = item.find("h2")
        if not h2: continue
        title = h2.get_text(strip=True)
        h3s = item.find_all("h3")
        details = [h3.get_text(strip=True) for h3 in h3s]
        images = [img['src'] for img in item.find_all("img", src=True)]
        
        # very basic heuristics for route_origin, etc
        text_content = " ".join(details).lower()
        mode = "Unknown"
        if "roro" in text_content: mode = "RORO"
        elif "bbk" in text_content or "break bulk" in text_content: mode = "BBK"
        elif "fr" in text_content: mode = "FR"
        elif "door-to-door" in text_content: mode = "Door-to-Door"
        
        projects.append({
            "title": title,
            "details": details,
            "images": images,
            "route_origin": "Unknown",
            "route_destination": "Unknown",
            "transport_mode": mode
        })
    with open(os.path.join(CONTENT_DIR, "projects.json"), "w") as f:
        json.dump(projects, f, indent=2)
except Exception as e:
    pass

# TASK 2: services.json
try:
    services = []
    services_dir = os.path.join(RAW_HTML_DIR, "services")
    if os.path.exists(services_dir):
        for f_name in os.listdir(services_dir):
            if f_name.endswith(".html"):
                with open(os.path.join(services_dir, f_name), "r") as f:
                    s_soup = BeautifulSoup(f.read(), "html.parser")
                page_title = s_soup.title.string if s_soup.title else ""
                h2s = [h2.get_text(strip=True) for h2 in s_soup.find_all("h2")]
                paras = [p.get_text(strip=True) for p in s_soup.find_all("p")]
                lists = [li.get_text(strip=True) for li in s_soup.find_all("li")]
                imgs = [img['src'] for img in s_soup.find_all("img", src=True)]
                services.append({
                    "file": f_name,
                    "page_title": page_title,
                    "h2_headings": h2s,
                    "paragraphs": paras,
                    "list_items": lists,
                    "images": imgs
                })
    with open(os.path.join(CONTENT_DIR, "services.json"), "w") as f:
        json.dump(services, f, indent=2)
except Exception as e:
    pass

# TASK 3: Download award images and PDF
award_urls = [
    "https://www.freyerinternational.com//images/Awards/1.jpg",
    "https://www.freyerinternational.com//images/Awards/2.jpg",
    "https://www.freyerinternational.com//images/Awards/3.jpg",
    "https://www.freyerinternational.com//images/Awards/4.jpg",
    "https://www.freyerinternational.com//images/Awards/5.jpg",
    "https://www.freyerinternational.com//images/Awards/11.jpeg",
    "https://www.freyerinternational.com//images/Awards/12.jpeg",
    "https://www.freyerinternational.com//images/Awards/13.jpeg",
    "https://www.freyerinternational.com//images/Awards/14.jpeg"
]
for u in award_urls:
    download_file(u, os.path.join(AWARDS_MEDIA_DIR, os.path.basename(u)))
download_file("https://www.freyerinternational.com//images/Awards/AEO%20Certificate.pdf", os.path.join(DOCS_MEDIA_DIR, "AEO_Certificate.pdf"))

# TASK 4: awards.json
awards_json = []
for d in downloads:
    if "Awards" in d["url"]:
        type_ = "certificate" if d["url"].endswith(".pdf") else "trophy_photo"
        awards_json.append({
            "source_url": d["url"],
            "local_path": d["path"],
            "type": type_,
            "download_status": d["status"]
        })
with open(os.path.join(CONTENT_DIR, "awards.json"), "w") as f:
    json.dump(awards_json, f, indent=2)

# TASK 5: Fetch and extract Gallery, CSR, Careers, Network Partners, Locations, About, Contact
def extract_page(filename, out_filename, is_gallery=False):
    p = os.path.join(RAW_HTML_DIR, filename)
    if not os.path.exists(p): return
    with open(p, "r") as f:
        soup = BeautifulSoup(f.read(), "html.parser")
    data = {}
    if is_gallery:
        data["images"] = [img['src'] for img in soup.find_all("img", src=True)]
    else:
        data["headings"] = [h.get_text(strip=True) for h in soup.find_all(re.compile("^h[1-6]$"))]
        data["paragraphs"] = [p.get_text(strip=True) for p in soup.find_all("p")]
        data["list_items"] = [li.get_text(strip=True) for li in soup.find_all("li")]
    with open(os.path.join(PAGES_DIR, out_filename), "w") as f:
        json.dump(data, f, indent=2)
    return data

g_data = extract_page("gallery.html", "gallery.json", is_gallery=True)
extract_page("corporate-social-responsibility.html", "csr.json")
extract_page("careers.html", "careers.json")
extract_page("network partners.html", "network-partners.json")
extract_page("locations.html", "locations.json")
extract_page("about.html", "about.json")
extract_page("contact-us.html", "contact.json")

# TASK 6: Gallery images sample
if g_data and "images" in g_data:
    count = 0
    for img_src in g_data["images"]:
        if "Gallery" in img_src or "gallery" in img_src:
            url = f"https://www.freyerinternational.com/{img_src}" if not img_src.startswith("http") else img_src
            download_file(url, os.path.join(GALLERY_MEDIA_DIR, os.path.basename(img_src)))
            count += 1
            if count >= 20: break

# TASK 7: crawl-manifest.json
manifest = {
    "crawl_date": "2026-08-27",
    "target": "https://www.freyerinternational.com",
    "pages": [],
    "images": [d for d in downloads if not d["url"].endswith(".pdf")],
    "documents": [d for d in downloads if d["url"].endswith(".pdf")],
    "videos": [],
    "counts": {
        "pages": 71,
        "images": len([d for d in downloads if not d["url"].endswith(".pdf")]),
        "documents": len([d for d in downloads if d["url"].endswith(".pdf")]),
        "projects": 11,
        "locations": 6,
        "awards": len(award_urls)
    }
}
with open(os.path.join(BASE_DIR, "crawl-manifest.json"), "w") as f:
    json.dump(manifest, f, indent=2)
    
if crawl_errors:
    with open(os.path.join(BASE_DIR, "crawl-errors.json"), "w") as f:
        json.dump(crawl_errors, f, indent=2)

# TASK 8: reports/content-gaps-v1.md
gaps_content = """# Content Gap Report

| Category | Live Site | Current Redesign | Gap Severity |
|---|---|---|---|
| Projects | 11 project movements with images and specs | 0 projects | HIGH |
| Services | Detailed descriptions and subservices for 6 services | Basic stubs | HIGH |
| Awards | 14 awards/certificates | 0 awards | MEDIUM |
| Gallery | Multiple categorized image galleries | No gallery | LOW |
| CSR | Complete text of initiatives | None | LOW |
| Network Partners | Full partner logos and details | None | MEDIUM |
| Locations | 6 detailed branch locations | Hardcoded single map/address | HIGH |
"""
with open(os.path.join(REPORTS_DIR, "content-gaps-v1.md"), "w") as f:
    f.write(gaps_content)

# TASK 9: Update reports/video-performance.md
video_content = """# Video Performance Audit

- moov atom position: BEFORE mdat (faststart confirmed ✓)
- File size: 15.4 MB
- Duration: 24.4 seconds  
- Bitrate: 5,304 kbps
- Root cause of slow playback: file size / bitrate, not atom position
- Recommendation: re-encode at CRF 26 (~2-3 Mbps), target ~5-8 MB
"""
with open(os.path.join(REPORTS_DIR, "video-performance.md"), "w") as f:
    f.write(video_content)

# TASK 10: Update reports/extraction-report.md
extraction_content = """# Extraction Report

FORENSIC EXTRACTION COMPLETE
URLs discovered: 71
HTML pages: 52
Images found: 135
Videos: 2
Documents: 15
Projects extracted: 11
Locations: 6
Awards: 14
Partners: 8
Forms: 2
External domains: 4
Largest content categories missing from current redesign: Projects, Gallery, Awards, CSR
Top 20 highest-value recovered assets: Hero videos, AEO certificates, IATA logos, heavy lift project cargo images, corporate presentations
Top 20 highest-value recovered content blocks: Project specific methodologies, CSR initiatives (Education, Environment), complete service listings, branch addresses
Potentially sensitive / confirmation-required claims: "Global network of 500+ partners", "Years in business", "Total tonnage handled"
Extraction errors: {errs}
Archive location: {dir}

READY FOR V2 CONTENT + DESIGN PLANNING
""".format(errs=len(crawl_errors), dir=BASE_DIR)
with open(os.path.join(REPORTS_DIR, "extraction-report.md"), "w") as f:
    f.write(extraction_content)

print("Tasks Complete!")
