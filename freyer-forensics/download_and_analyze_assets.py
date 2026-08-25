import os
import re
import csv
import json
import urllib.parse
import hashlib
import requests
import mimetypes
from PIL import Image
import io

session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 ForensicAuditor/1.0"
})

with open("freyer-forensics/data/assets_raw.json", "r") as f:
    assets_raw = json.load(f)

downloaded_assets = []
hashes = {}

# Also scan raw html files for any additional asset links (background-image, data-src, etc.)
raw_html_dir = "freyer-forensics/raw/html"
for fname in os.listdir(raw_html_dir):
    if fname.endswith(".html"):
        with open(os.path.join(raw_html_dir, fname), "r", encoding="utf-8") as f:
            content = f.read()
            # find background-image urls
            bg_matches = re.findall(r'url\([\'"]?([^\'")]+)[\'"]?\)', content)
            for bg in bg_matches:
                if not bg.startswith("data:"):
                    norm = urllib.parse.urljoin("https://www.freyerinternational.com/", bg)
                    if norm not in assets_raw:
                        assets_raw[norm] = {"type": "bg_image", "first_seen": fname, "src": bg}

print(f"Total assets to evaluate/download: {len(assets_raw)}")

for url, meta in assets_raw.items():
    parsed = urllib.parse.urlparse(url)
    if not parsed.scheme or not parsed.netloc:
        continue
    
    # Decide local directory based on asset type or extension
    ext = os.path.splitext(parsed.path)[1].lower()
    asset_type = meta.get("type", "other")
    
    local_subdir = "other-assets"
    if ext in [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg", ".bmp", ".ico"]:
        local_subdir = "images"
    elif ext in [".css"]:
        local_subdir = "css"
    elif ext in [".js"]:
        local_subdir = "js"
    elif ext in [".woff", ".woff2", ".ttf", ".eot", ".otf"]:
        local_subdir = "fonts"
    elif ext in [".pdf", ".doc", ".docx", ".xls", ".xlsx"]:
        local_subdir = "documents"
    elif ext in [".mp4", ".webm", ".ogv"]:
        local_subdir = "videos"

    # Clean filename
    clean_filename = os.path.basename(parsed.path)
    if not clean_filename or clean_filename.endswith("/"):
        clean_filename = f"asset_{hashlib.md5(url.encode()).hexdigest()[:8]}{ext or '.bin'}"
    else:
        # Avoid illegal characters
        clean_filename = re.sub(r'[^a-zA-Z0-9_.-]', '_', clean_filename)

    local_path = os.path.join("freyer-forensics/raw", local_subdir, clean_filename)
    
    # Download
    file_size = 0
    mime_type = ""
    width, height = 0, 0
    file_hash = ""
    is_duplicate = False

    try:
        r = session.get(url, timeout=15, verify=False)
        if r.status_code == 200:
            content = r.content
            file_size = len(content)
            mime_type = r.headers.get("content-type", mimetypes.guess_type(clean_filename)[0] or "application/octet-stream")
            file_hash = hashlib.sha256(content).hexdigest()

            if file_hash in hashes:
                is_duplicate = True
            else:
                hashes[file_hash] = url

            # Write file if not exists or unique
            with open(local_path, "wb") as out_f:
                out_f.write(content)

            # If image, get dimensions
            if local_subdir == "images" and ext in [".jpg", ".jpeg", ".png", ".gif", ".webp", ".bmp"]:
                try:
                    with Image.open(io.BytesIO(content)) as img:
                        width, height = img.size
                except Exception as img_err:
                    pass
        else:
            print(f"Failed to fetch {url}: HTTP {r.status_code}")
    except Exception as e:
        print(f"Error fetching {url}: {e}")

    downloaded_assets.append({
        "url": url,
        "local_path": local_path,
        "filename": clean_filename,
        "type": local_subdir,
        "mime_type": mime_type,
        "dimensions": f"{width}x{height}" if width and height else "",
        "width": width,
        "height": height,
        "file_size": file_size,
        "page_first_seen": meta.get("first_seen", ""),
        "alt_text": meta.get("alt", ""),
        "hash": file_hash,
        "is_duplicate": is_duplicate
    })

# Write assets CSV
with open("freyer-forensics/data/assets.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=["url", "local_path", "filename", "type", "mime_type", "dimensions", "width", "height", "file_size", "page_first_seen", "alt_text", "hash", "is_duplicate"])
    writer.writeheader()
    for row in downloaded_assets:
        writer.writerow(row)

# Also write images.csv, scripts.csv, stylesheets.csv
with open("freyer-forensics/data/images.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=["url", "local_path", "filename", "dimensions", "file_size", "alt_text", "hash", "is_duplicate", "page_first_seen"])
    writer.writeheader()
    for row in downloaded_assets:
        if row["type"] == "images":
            writer.writerow({
                "url": row["url"],
                "local_path": row["local_path"],
                "filename": row["filename"],
                "dimensions": row["dimensions"],
                "file_size": row["file_size"],
                "alt_text": row["alt_text"],
                "hash": row["hash"],
                "is_duplicate": row["is_duplicate"],
                "page_first_seen": row["page_first_seen"]
            })

with open("freyer-forensics/data/scripts.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=["url", "local_path", "filename", "file_size", "hash", "page_first_seen"])
    writer.writeheader()
    for row in downloaded_assets:
        if row["type"] == "js":
            writer.writerow({
                "url": row["url"],
                "local_path": row["local_path"],
                "filename": row["filename"],
                "file_size": row["file_size"],
                "hash": row["hash"],
                "page_first_seen": row["page_first_seen"]
            })

with open("freyer-forensics/data/stylesheets.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=["url", "local_path", "filename", "file_size", "hash", "page_first_seen"])
    writer.writeheader()
    for row in downloaded_assets:
        if row["type"] == "css":
            writer.writerow({
                "url": row["url"],
                "local_path": row["local_path"],
                "filename": row["filename"],
                "file_size": row["file_size"],
                "hash": row["hash"],
                "page_first_seen": row["page_first_seen"]
            })

print("Assets processed and saved.")
