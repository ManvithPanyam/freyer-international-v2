import csv
import json
import os
import re

with open("freyer-forensics/data/pages_raw.json", "r") as f:
    pages_raw = json.load(f)

# 1. urls.csv
urls = []
for p in pages_raw:
    urls.append({
        "url": p["url"],
        "status_code": p["status"],
        "content_type": "text/html; charset=UTF-8",
        "title": p["title"],
        "meta_description": p["meta_description"],
        "canonical": p["canonical"],
        "word_count": p["word_count"],
        "internal_links": p["internal_links_count"],
        "external_links": p["external_links_count"],
        "images_count": p["images_count"]
    })

with open("freyer-forensics/data/urls.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=["url", "status_code", "content_type", "title", "meta_description", "canonical", "word_count", "internal_links", "external_links", "images_count"])
    writer.writeheader()
    for row in urls:
        writer.writerow(row)

# 2. pages.csv
pages_summary = []
for p in pages_raw:
    # classify page
    url = p["url"]
    label = url.replace("https://www.freyerinternational.com", "")
    if not label or label in ["/", "//"]:
        name = "Home"
        action = "REDESIGN"
        rationale = "Core entry point. Extremely low information density (283 words), missing clear value propositions, interactive tools, or modern RFQ."
    elif "about" in label:
        name = "About Us"
        action = "REWRITE"
        rationale = "Valuable corporate narrative and leadership background, but poorly structured, lacks executive bios, metrics, and modern trust visual signals."
    elif "air-services" in label:
        name = "Air Freight Services"
        action = "REWRITE"
        rationale = "Essential core service. Content is brief and lacks carrier network details, charter options, SLA tiers, temperature-controlled cargo, and direct RFQ form."
    elif "ocean-services" in label:
        name = "Ocean Freight Services"
        action = "REWRITE"
        rationale = "High-revenue service line. Contains standard FCL/LCL text but lacks port coverage, sailing schedules, container specs, and interactive rate quoting."
    elif "customs-services" in label:
        name = "Customs Brokerage"
        action = "REWRITE"
        rationale = "Critical differentiator for Indian logistics. Needs detailed regulatory compliance, AEO tier explanation, HS code assistance, and tariff guides."
    elif "warehouse" in label:
        name = "Warehousing Services"
        action = "REWRITE"
        rationale = "Important infrastructure capability. Current text is generic; needs square footage specs, WMS integration capabilities, multi-city footprint map."
    elif "risk-management" in label:
        name = "Risk Management"
        action = "MERGE"
        rationale = "Thin standalone page (cargo insurance). Should be merged into Value-Added Services / Customs & Compliance rather than top-level silo."
    elif "project-cargo" in label:
        name = "Project Cargo Services"
        action = "REDESIGN"
        rationale = "High-margin showcase. Needs rich multimodal case study format, technical specs, heavy-lift imagery, engineering diagrams, and downloadable whitepapers."
    elif "services" in label:
        name = "Services Hub"
        action = "REDESIGN"
        rationale = "Hub page has only 123 words with static image cards. Needs interactive service selector, industry cross-linking, and fast-quote triggers."
    elif "locations" in label:
        name = "Locations"
        action = "REDESIGN"
        rationale = "Essential for multi-branch credibility. Currently static list; needs interactive map, branch manager contacts, Google Maps API, and localized SEO schemas."
    elif "awards" in label:
        name = "Awards"
        action = "MERGE"
        rationale = "Only 85 words, static image scans. Should be merged into About Us / Trust Hub rather than standalone orphan-like page."
    elif "project" in label:
        name = "Projects / Case Studies"
        action = "REDESIGN"
        rationale = "Contains real case studies (34 images) but rendered in an unfilterable masonry gallery without case study write-ups, client names, or metrics."
    elif "gallery" in label:
        name = "Gallery"
        action = "DELETE"
        rationale = "Generic photo dumping ground without context or captions. Real project images should live in dedicated Project Case Studies, cultural photos in Careers."
    elif "corporate-social-responsibility" in label:
        name = "CSR"
        action = "MERGE"
        rationale = "218 words on basic initiatives. Better suited as a rich dedicated section under Company / About Us."
    elif "careers" in label:
        name = "Careers"
        action = "REDESIGN"
        rationale = "Broken form (action='#', duplicate field names), no live job openings listed, no ATS integration, no employee value proposition."
    elif "network" in label:
        name = "Network Partners"
        action = "MERGE"
        rationale = "Lists 5 network logos (WCA, SCN, etc.) in 90 words. Should be a trust bar across the entire site and a dedicated section in About Us."
    elif "contact-us" in label:
        name = "Contact Us"
        action = "REDESIGN"
        rationale = "No interactive contact form, only static address and phone numbers. Needs multi-department routing, branch selector, and interactive map."
    elif "career-plus.php" in label:
        name = "Career Plus (Legacy PHP)"
        action = "DELETE"
        rationale = "Orphan legacy PHP script endpoint. Unsecured and redundant."
    else:
        name = label
        action = "UNKNOWN"
        rationale = "Discovered endpoint."

    pages_summary.append({
        "url": url,
        "page_name": name,
        "action": action,
        "rationale": rationale,
        "title": p["title"],
        "word_count": p["word_count"],
        "h1": p["h1"],
        "images_count": p["images_count"],
        "ctas_count": p["ctas_count"]
    })

with open("freyer-forensics/data/pages.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=["url", "page_name", "action", "rationale", "title", "word_count", "h1", "images_count", "ctas_count"])
    writer.writeheader()
    for row in pages_summary:
        writer.writerow(row)

# 3. technologies.csv
technologies = [
    {
        "category": "Web Server",
        "technology": "Apache HTTP Server",
        "version": "2.4.x (Exact sub-version concealed by server config)",
        "evidence": "Server: Apache response header, HTTP/2 negotiation, .htaccess rewrite behavior",
        "age_release_date": "Apache 2.4 released 2012; actively maintained",
        "status": "YELLOW (Legacy configuration)",
        "security_risk": "Low-to-Moderate: Conceals sub-version but exposes PHP version header",
        "recommendation": "Migrate to modern cloud-native edge CDN (Cloudflare / Vercel / CloudFront) with automated SSL and edge caching."
    },
    {
        "category": "Backend Runtime",
        "technology": "PHP",
        "version": "7.4.33",
        "evidence": "x-powered-by: PHP/7.4.33 HTTP response header on every request",
        "age_release_date": "PHP 7.4.33 released Nov 3, 2022. PHP 7.4 reached official End-of-Life on November 28, 2022 (>3.5 years unsupported).",
        "status": "RED (Obsolete / EOL)",
        "security_risk": "High: Unpatched security vulnerabilities, unmaintained runtime, public exposure via x-powered-by header.",
        "recommendation": "Completely deprecate legacy PHP runtime. Migrate to Node.js/TypeScript / Next.js serverless functions or headless CMS API."
    },
    {
        "category": "JavaScript Library",
        "technology": "jQuery",
        "version": "1.12.4",
        "evidence": "Header of raw/js/jquery.js: 'jQuery JavaScript Library v1.12.4' (Line 2)",
        "age_release_date": "Released May 20, 2016 (>10 years old).",
        "status": "RED (Obsolete)",
        "security_risk": "Moderate: Contains known XSS CVEs in older DOM parsing functions.",
        "recommendation": "Remove jQuery entirely. Replace with modern vanilla TypeScript / React 19 / Modern DOM APIs."
    },
    {
        "category": "CSS / UI Framework",
        "technology": "Bootstrap",
        "version": "3.4.1",
        "evidence": "Header of raw/css/bootstrap.min.css: 'Bootstrap v3.4.1 (https://getbootstrap.com/) | Copyright 2011-2019 Twitter, Inc.'",
        "age_release_date": "Bootstrap 3.4.1 released Feb 13, 2019. Bootstrap 3 branch reached End-of-Life in 2019.",
        "status": "RED (Obsolete)",
        "security_risk": "Low-to-Moderate: Obsolete float-based grid, outdated responsive breakpoints, legacy JS plugins.",
        "recommendation": "Replace with modern Tailwind CSS v4 / CSS Grid / Modern Design System Tokens."
    },
    {
        "category": "Icon System",
        "technology": "Font Awesome",
        "version": "4.7.0 (Inferred)",
        "evidence": "Unicode glyph mappings in style.css (\f105 fa-angle-right, \f00e fa-search-plus), class 'FontAwesome'",
        "age_release_date": "Font Awesome 4.7.0 released Oct 2016.",
        "status": "YELLOW (Legacy)",
        "security_risk": "Low: Render blocking webfont, extra layout shift.",
        "recommendation": "Replace font-based icons with inline, tree-shaken Lucide React SVG icons."
    },
    {
        "category": "Layout / Grid Plugin",
        "technology": "Masonry",
        "version": "3.0.0",
        "evidence": "Header of raw/js/masonry.pkgd.min.js: 'Masonry v3.0.0'",
        "age_release_date": "Released 2013.",
        "status": "RED (Obsolete)",
        "security_risk": "Low: Heavy DOM calculation on main thread causing layout thrashing.",
        "recommendation": "Replace with native CSS Grid / Flexbox or modern lightweight masonry hook."
    },
    {
        "category": "Slider / Carousel",
        "technology": "Slick Carousel",
        "version": "1.6.0",
        "evidence": "Header of raw/js/slick.min.js: 'Version: 1.6.0 | Author: Ken Wheeler'",
        "age_release_date": "Released 2016.",
        "status": "YELLOW (Legacy)",
        "security_risk": "Low: Dependent on jQuery, touch latency on modern mobile devices.",
        "recommendation": "Replace with native CSS scroll-snap or Embla Carousel / Swiper (vanilla TS)."
    },
    {
        "category": "Lightbox Plugin",
        "technology": "SimpleLightbox",
        "version": "2.2.1",
        "evidence": "Header of raw/js/simple-lightbox.js: 'Version 2.2.1'",
        "age_release_date": "Released 2020.",
        "status": "YELLOW (Legacy)",
        "security_risk": "Low: Inaccessible modal dialogs lacking ARIA focus trapping.",
        "recommendation": "Replace with accessible native HTML `<dialog>` element with Radix UI / headless dialog."
    },
    {
        "category": "Video Embed System",
        "technology": "jquery.mb.YTPlayer",
        "version": "3.1.11",
        "evidence": "Header of raw/js/jquery.mb.YTPlayer.js: 'Version: 3.1.11 | Author: Matteo Bicocchi'",
        "age_release_date": "Released 2017.",
        "status": "RED (Obsolete)",
        "security_risk": "Low-to-Moderate: Uncontrolled third-party YouTube iframes, high network overhead.",
        "recommendation": "Replace with modern HTML5 video tag with WebM/MP4 streaming or lazy-loaded lite-youtube embed."
    },
    {
        "category": "Animation Library",
        "technology": "WOW.js & Animate.css",
        "version": "Legacy WOW.js / Animate.css 2013",
        "evidence": "raw/js/wow.js and raw/css/animate.css headers",
        "age_release_date": "2013-2015.",
        "status": "RED (Obsolete)",
        "security_risk": "Low: Scroll event listener thrashing without passive listeners.",
        "recommendation": "Replace with native CSS `@keyframes`, IntersectionObserver API, or Framer Motion / Motion One."
    },
    {
        "category": "Third-Party Maps",
        "technology": "Google Maps Iframe Embed",
        "version": "Standard iframe embed",
        "evidence": "Iframe tags pointing to https://www.google.com/maps/embed on contact and location pages",
        "age_release_date": "N/A",
        "status": "YELLOW (Basic embed)",
        "security_risk": "Low: Missing frame titles (Axe violation), unoptimized layout shift.",
        "recommendation": "Integrate interactive Google Maps JavaScript API with custom branded map styling and cluster markers."
    }
]

with open("freyer-forensics/data/technologies.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=["category", "technology", "version", "evidence", "age_release_date", "status", "security_risk", "recommendation"])
    writer.writeheader()
    for row in technologies:
        writer.writerow(row)

# 4. forms.csv
forms_data = [
    {
        "page_url": "https://www.freyerinternational.com/careers",
        "form_purpose": "Job Application / Resume Submission",
        "fields_list": "Name (text), Name (text, duplicate!), Phone (number), Email (email), Current Location (text), Date of Birth (text/datepicker), Upload File (file/text mock), mesg (textarea), Submit (submit)",
        "action_endpoint": "#",
        "http_method": "POST",
        "client_validation": "HTML5 required attribute only",
        "server_validation": "None (action='#', submits to self without handler)",
        "captcha_spam_protection": "None",
        "privacy_consent": "None (No GDPR/DPDP consent checkbox or policy link)",
        "file_upload_handling": "Broken frontend mockup (input type=text coupled with unlinked type=file)",
        "ux_issues": "Form has duplicate input name='Name'; file upload fails silently; no success confirmation state; unstyled datepicker; submit button says 'Submit' without progress indicator."
    },
    {
        "page_url": "https://www.freyerinternational.com/contact-us",
        "form_purpose": "General Inquiries / Contact (MISSING)",
        "fields_list": "NONE - Contact page has no contact form, only static address and phone text",
        "action_endpoint": "N/A",
        "http_method": "N/A",
        "client_validation": "N/A",
        "server_validation": "N/A",
        "captcha_spam_protection": "N/A",
        "privacy_consent": "N/A",
        "file_upload_handling": "N/A",
        "ux_issues": "Critical conversion failure: A B2B international logistics company with no contact/inquiry form on its Contact Us page."
    },
    {
        "page_url": "https://www.freyerinternational.com/ (Global)",
        "form_purpose": "Request for Quote (RFQ) (MISSING)",
        "fields_list": "NONE - No RFQ form exists anywhere on the website",
        "action_endpoint": "N/A",
        "http_method": "N/A",
        "client_validation": "N/A",
        "server_validation": "N/A",
        "captcha_spam_protection": "N/A",
        "privacy_consent": "N/A",
        "file_upload_handling": "N/A",
        "ux_issues": "Major revenue leak: Prospective shippers looking for air/ocean freight quotes have no structured RFQ workflow to submit origin, destination, cargo weight, volume, or Incoterms."
    }
]

with open("freyer-forensics/data/forms.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=["page_url", "form_purpose", "fields_list", "action_endpoint", "http_method", "client_validation", "server_validation", "captcha_spam_protection", "privacy_consent", "file_upload_handling", "ux_issues"])
    writer.writeheader()
    for row in forms_data:
        writer.writerow(row)

# 5. links.csv
with open("freyer-forensics/data/links_raw.json", "r") as f:
    links_raw = json.load(f)

with open("freyer-forensics/data/links.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=["source_url", "target_url", "anchor_text", "is_internal", "raw_href"])
    writer.writeheader()
    for row in links_raw:
        writer.writerow(row)

print("All CSVs generated successfully.")
