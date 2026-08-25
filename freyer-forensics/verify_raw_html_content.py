import os
import re
import json
from bs4 import BeautifulSoup

raw_html_dir = "freyer-forensics/raw/html"

print("=== 1. VERIFYING ABOUT PAGE CONTENT ===")
about_file = os.path.join(raw_html_dir, "__about.html")
if os.path.exists(about_file):
    with open(about_file, "r", encoding="utf-8") as f:
        soup = BeautifulSoup(f.read(), "html.parser")
        for s in soup(["script", "style"]): s.extract()
        text = soup.get_text(separator="\n", strip=True)
        print("About page raw text:")
        for line in text.split("\n"):
            if len(line.strip()) > 30:
                print(f"  * {line.strip()}")

print("\n=== 2. VERIFYING LOCATIONS PAGE CONTENT ===")
loc_file = os.path.join(raw_html_dir, "__locations.html")
if os.path.exists(loc_file):
    with open(loc_file, "r", encoding="utf-8") as f:
        soup = BeautifulSoup(f.read(), "html.parser")
        for s in soup(["script", "style"]): s.extract()
        text = soup.get_text(separator="\n", strip=True)
        print("Locations page raw text:")
        for line in text.split("\n"):
            if line.strip():
                print(f"  | {line.strip()}")

print("\n=== 3. VERIFYING CONTACT-US PAGE CONTENT ===")
contact_file = os.path.join(raw_html_dir, "__contact_us.html")
if os.path.exists(contact_file):
    with open(contact_file, "r", encoding="utf-8") as f:
        soup = BeautifulSoup(f.read(), "html.parser")
        for s in soup(["script", "style"]): s.extract()
        text = soup.get_text(separator="\n", strip=True)
        print("Contact-Us page raw text:")
        for line in text.split("\n"):
            if line.strip():
                print(f"  > {line.strip()}")

