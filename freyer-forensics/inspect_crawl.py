import json

with open("freyer-forensics/data/pages_raw.json", "r") as f:
    pages = json.load(f)

print(f"Total crawled page entries: {len(pages)}")
for p in pages:
    print(f"URL: {p['url']} | Title: {p['title'][:40]} | H1: {p['h1']} | Words: {p['word_count']} | CTAs: {p['ctas_count']}")

with open("freyer-forensics/data/forms_raw.json", "r") as f:
    forms = json.load(f)
print(f"\nTotal forms: {len(forms)}")
for form in forms:
    print(form)

