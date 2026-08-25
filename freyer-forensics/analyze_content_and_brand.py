import os
import re
import json
from bs4 import BeautifulSoup
from PIL import Image

raw_html_dir = "freyer-forensics/raw/html"

print("========================================")
print("1. DETAILED PAGE-BY-PAGE TEXT & STRUCTURE")
print("========================================")

files = sorted(os.listdir(raw_html_dir))
for fname in files:
    if not fname.endswith(".html"):
        continue
    fpath = os.path.join(raw_html_dir, fname)
    with open(fpath, "r", encoding="utf-8", errors="ignore") as f:
        soup = BeautifulSoup(f.read(), "html.parser")
    
    # remove scripts and styles
    for s in soup(["script", "style", "noscript"]):
        s.extract()
    
    title = soup.title.string.strip() if soup.title and soup.title.string else "No Title"
    h1s = [h.get_text(strip=True) for h in soup.find_all("h1")]
    h2s = [h.get_text(strip=True) for h in soup.find_all("h2")]
    h3s = [h.get_text(strip=True) for h in soup.find_all("h3")]
    
    print(f"\n--- FILE: {fname} ---")
    print(f"Title: {title}")
    print(f"H1: {h1s}")
    print(f"H2: {h2s}")
    print(f"H3: {h3s[:5]}")
    
    # Body main text preview
    main_text = "\n".join([p.get_text(strip=True) for p in soup.find_all(["p", "li", "span", "div"]) if len(p.get_text(strip=True)) > 40])
    lines = [line for line in main_text.split("\n") if line.strip()]
    unique_lines = []
    for l in lines:
        if l not in unique_lines:
            unique_lines.append(l)
    print("Content Highlights:")
    for l in unique_lines[:6]:
        print(f"  * {l[:120]}")

print("\n========================================")
print("2. BRAND FORENSICS (CSS COLORS & LOGO)")
print("========================================")
css_path = "freyer-forensics/raw/css/style.css"
with open(css_path, "r", errors="ignore") as f:
    css_text = f.read()

hex_colors = set(re.findall(r'#(?:[0-9a-fA-F]{3}){1,2}\b', css_text))
rgb_colors = set(re.findall(r'rgba?\([0-9\s,\.]+\)', css_text))
print("HEX Colors found in style.css:", sorted(list(hex_colors)))
print("RGB Colors found in style.css:", sorted(list(rgb_colors))[:10])

# Inspect logo
logo_path = "freyer-forensics/raw/images/logo.png"
if os.path.exists(logo_path):
    with Image.open(logo_path) as img:
        print(f"Logo details: format={img.format}, size={img.size}, mode={img.mode}")
        # get dominant colors from logo
        img_rgb = img.convert("RGB")
        colors = img_rgb.getcolors(maxcolors=100000)
        if colors:
            colors.sort(key=lambda x: x[0], reverse=True)
            print("Logo Top Colors (count, RGB):", colors[:5])

print("\n========================================")
print("3. ACCESSIBILITY VIOLATIONS SUMMARY")
print("========================================")
if os.path.exists("freyer-forensics/data/a11y_results.json"):
    with open("freyer-forensics/data/a11y_results.json", "r") as f:
        a11y = json.load(f)
    for page_name, data in a11y.items():
        print(f"Page '{page_name}': {data['violationsCount']} violations")
        for v in data['violations']:
            print(f"   [{v['impact']}] {v['id']} ({v['nodesCount']} nodes): {v['help']}")

