import os
import re

css_dir = "freyer-forensics/raw/css"
html_dir = "freyer-forensics/raw/html"

print("=== FONT AND ICON SEARCH IN CSS ===")
for fname in sorted(os.listdir(css_dir)):
    fpath = os.path.join(css_dir, fname)
    with open(fpath, "r", errors="ignore") as f:
        content = f.read()
        font_faces = re.findall(r'@font-face\s*\{([^}]+)\}', content, re.DOTALL)
        if font_faces:
            print(f"[{fname}] found {len(font_faces)} @font-face rules:")
            for ff in font_faces[:5]:
                print("   " + ff.replace("\n", " ")[:120])
        font_families = set(re.findall(r'font-family\s*:\s*([^;]+);', content, re.I))
        if font_families:
            print(f"[{fname}] font-families: {list(font_families)[:5]}")
        fa_matches = re.findall(r'fontawesome|font-awesome|glyphicon|fa-[a-z0-9-]+', content, re.I)
        if fa_matches:
            print(f"[{fname}] Icon references: {set(fa_matches[:10])}")

print("\n=== GOOGLE FONTS / CDN FONTS IN HTML ===")
for fname in sorted(os.listdir(html_dir)):
    fpath = os.path.join(html_dir, fname)
    with open(fpath, "r", errors="ignore") as f:
        content = f.read()
        links = re.findall(r'<link[^>]+>', content, re.I)
        for l in links:
            if "fonts.googleapis.com" in l or "font-awesome" in l or "cdnjs" in l or "cloudflare" in l:
                print(f"[{fname}] {l}")
        break # check first page for standard header
