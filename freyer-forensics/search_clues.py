import os
import re

for d in ["html", "css", "js"]:
    p = os.path.join("freyer-forensics/raw", d)
    for fname in os.listdir(p):
        fpath = os.path.join(p, fname)
        with open(fpath, "r", errors="ignore") as f:
            content = f.read()
            # search for author, theme, agency, developer, designed by, template
            matches = re.findall(r'(?:author|theme|agency|developer|designed|created|copyright|template|themeforest|envato)[^;\n\r]{0,100}', content, re.I)
            if matches:
                print(f"[{d}/{fname}] Clues:")
                for m in set(matches[:5]):
                    print(f"   {m.strip()}")
