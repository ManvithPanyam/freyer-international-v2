import os
import re

js_dir = "freyer-forensics/raw/js"
css_dir = "freyer-forensics/raw/css"

print("=== JAVASCRIPT VERSIONS ===")
for fname in sorted(os.listdir(js_dir)):
    fpath = os.path.join(js_dir, fname)
    with open(fpath, "r", errors="ignore") as f:
        head = "".join([f.readline() for _ in range(15)])
        # search for version in head
        v_match = re.search(r'v[0-9]+\.[0-9]+(?:\.[0-9]+)?|[Vv]ersion[:\s]+[0-9]+\.[0-9]+(?:\.[0-9]+)?|jQuery v[0-9\.]+|Bootstrap v[0-9\.]+|Masonry v[0-9\.]+|Slick v[0-9\.]+|YTPlayer - v[0-9\.]+|WOW - v[0-9\.]+', head, re.I)
        print(f"[{fname}] -> {v_match.group(0) if v_match else 'No explicit version header'}")
        if not v_match:
            # check whole file for version regex
            with open(fpath, "r", errors="ignore") as f_all:
                all_text = f_all.read(2048)
                v2 = re.search(r'v[0-9]+\.[0-9]+(?:\.[0-9]+)?|[Vv]ersion[:\s]+[0-9]+\.[0-9]+(?:\.[0-9]+)?|jQuery v[0-9\.]+|Bootstrap v[0-9\.]+|Masonry v[0-9\.]+|Slick v[0-9\.]+|YTPlayer - v[0-9\.]+|WOW - v[0-9\.]+', all_text, re.I)
                if v2:
                    print(f"   (found in top 2KB: {v2.group(0)})")

print("\n=== CSS VERSIONS ===")
for fname in sorted(os.listdir(css_dir)):
    fpath = os.path.join(css_dir, fname)
    with open(fpath, "r", errors="ignore") as f:
        head = "".join([f.readline() for _ in range(10)])
        v_match = re.search(r'v[0-9]+\.[0-9]+(?:\.[0-9]+)?|[Vv]ersion[:\s]+[0-9]+\.[0-9]+(?:\.[0-9]+)?|Bootstrap v[0-9\.]+|Animate\.css - [0-9\.]+|Slick v[0-9\.]+', head, re.I)
        print(f"[{fname}] -> {v_match.group(0) if v_match else 'No explicit version header'}")
