# SITE DNA — FREYER INTERNATIONAL LOGISTICS PVT. LTD.
**Locked Source of Truth & Technical Baseline (Version 2.1 — Final Verified)**  
**Target URL**: `https://www.freyerinternational.com/`  
**Audit Date**: August 25, 2026  
**Auditor**: Senior Web Forensic Analyst & Technical Auditor  
**Status**: LOCKED FOR DEVELOPMENT — Zero Speculative Claims.

---

## 1. Verified Corporate Identity & Factual Baseline

| Parameter | Value | Verification Status & Evidence Source |
|---|---|---|
| **Legal Entity Name** | Freyer International Logistics Pvt. Ltd. | `VERIFIED` — Website footer, Contact page, MCA records. |
| **Incorporation Year** | 2018 | `VERIFIED` — MCA Registration records. *(Note: Any claim of "20+ Year Legacy" is CONTRADICTED and REMOVED).* |
| **Corporate Identification Number (CIN)** | Under External Reconfirmation | `EXTERNAL SOURCE` — Multiple MCA listings exist (`U63090KA2018PTC111326` vs `U74999KA2018PTC109274`). Must be reconfirmed with Freyer management prior to legal footer publication. |
| **Registered Corporate Office** | No.19, KMJ AVEN, 3rd Floor, Outer Ring Road, Marathahalli, Bengaluru - 560037, Karnataka, India | `VERIFIED` — Source: `__locations.html` & MCA filings. |
| **Primary Operational / Contact Hub** | TAGA Tower New No: 45 Old No 20, 1st Floor, 2nd Street, Sait Colony Egmore, Chennai - 600008, Tamil Nadu, India | `VERIFIED` — Source: `__contact_us.html` (Lines 45–55). |
| **HQ Reconciliation Note** | Dual-Hub Setup: Registered Office is Bengaluru; Primary Operational/Contact Hub on site is Chennai. | `CONTRADICTION FLAGGED` — Formal hierarchy to be aligned with leadership for new layout. |
| **Key Executive Contact** | Arun Sharma (Managing Director) | `VERIFIED` — LinkedIn Corporate Profile & MCA filings. *(Individual executive bios require direct input from Freyer).* |
| **Verified Branch Network (10 Hubs)** | 1. **Bengaluru** (Marathahalli) <br>2. **Chennai** (Egmore) <br>3. **Chennai Airport** (Meenambakkam) <br>4. **Delhi / NCR** (Gurugram Udyog Vihar) <br>5. **Mumbai** (Andheri East) <br>6. **Hyderabad** (Secunderabad) <br>7. **Visakhapatnam** (NAD X Road) <br>8. **Coimbatore** (Avinashi Road) <br>9. **Tuticorin** (RTC Nagar) <br>10. **Ahmedabad** (Navrangpur) | `VERIFIED` — Extracted directly from `__locations.html` raw text and individual branch listings. *(Unverified cities Kolkata, Kochi, Tirupur removed).* |

---

## 2. Verified Technical Stack & Version Forensics

| Layer | Detected Technology | Exact Version | Forensic Evidence Source | Obsolescence Status |
|---|---|---|---|---|
| **Web Server** | Apache HTTP Server | 2.4.x | `Server: Apache` response header; HTTP/2 protocol. | 🟡 Legacy Configuration |
| **Backend Runtime** | PHP | **7.4.33** | `x-powered-by: PHP/7.4.33` response header on all requests. | 🔴 **CRITICAL EOL** (Nov 28, 2022) |
| **JS Core Library** | jQuery | **1.12.4** | `raw/js/jquery.js` line 2: `jQuery JavaScript Library v1.12.4` (May 20, 2016). | 🔴 **OBSOLETE** (10 years old) |
| **CSS Framework** | Bootstrap | **3.4.1** | `raw/css/bootstrap.min.css`: `Bootstrap v3.4.1` (Feb 13, 2019). | 🔴 **OBSOLETE** (Bootstrap 3 EOL) |
| **Layout Library** | Masonry | **3.0.0** | `raw/js/masonry.pkgd.min.js`: `v3.0.0` (2013). | 🔴 **OBSOLETE** (13 years old) |
| **Slider Plugin** | Slick Carousel | **1.6.0** | `raw/js/slick.min.js`: `Version: 1.6.0` (2016). | 🟡 Legacy |
| **Video Background** | jquery.mb.YTPlayer | **3.1.11** | `raw/js/jquery.mb.YTPlayer.js`: `Version: 3.1.11` (2017). | 🔴 **OBSOLETE** |
| **Lightbox Modal** | SimpleLightbox | **2.2.1** | `raw/js/simple-lightbox.js`: `Version 2.2.1`. | 🟡 Legacy |
| **Animation Plugin** | WOW.js / Animate.css | 2013 Build | `raw/js/wow.js` and `raw/css/animate.css`. | 🔴 **OBSOLETE** |
| **Icon System** | Font Awesome | 4.7.0 (Inferred) | Glyph mappings in `style.css` (`\f105`, `\f00e`). | 🟡 Legacy Webfont |
| **Legacy Element** | `<marquee>` | HTML Tag | `index.html` line 459: `<marquee scrollamount="5" direction="left">`. | 🔴 **OBSOLETE** |

*Network Note*: The codebase contains 11 local CSS files and 15 local JS files; live network traces capture up to 19 stylesheet requests and 38 script requests due to dynamic third-party resources and fonts.

---

## 3. Real Measured Performance & Accessibility Benchmarks

### Verified Lighthouse 13.4.1 Results:
*Audit Run Date: August 25, 2026 | Raw Files: `data/raw_lighthouse_mobile.json` & `data/raw_lighthouse_desktop.json`*

| Benchmark Metric | Real Measured Mobile Value | Real Measured Desktop Value | Status / Evaluation |
|---|---|---|---|
| **Lighthouse Performance Score** | **38 / 100** | **69 / 100** | 🔴 Critical Mobile Latency / 🟠 Mediocre Desktop |
| **Lighthouse Accessibility Score**| **64 / 100** | **64 / 100** | 🔴 Multiple Critical Violations |
| **Lighthouse Best Practices Score**| **85 / 100** | **88 / 100** | 🟡 Moderate |
| **Lighthouse SEO Score** | **73 / 100** | **73 / 100** | 🟡 Moderate |
| **First Contentful Paint (FCP)** | **4.3 s** | **1.0 s** | 🔴 Severe Mobile First Paint Delay |
| **Largest Contentful Paint (LCP)** | **5.5 s** | **1.1 s** | 🔴 Unacceptable Mobile Render Time |
| **Cumulative Layout Shift (CLS)** | **0.461** | **0.416** | 🔴 Severe Visual Layout Instability (Threshold ≤ 0.10) |
| **Total Blocking Time (TBT)** | **250 ms** | **10 ms** | 🟡 Mobile Main-Thread Blocking |
| **Speed Index** | **8.5 s** | **3.5 s** | 🔴 Poor |
| **Total Byte Weight / Resource Transfer**| **3,569 KiB (~3.57 MB)** | **4,674 KiB (~4.79 MB)** | 🔴 Uncompressed Image & Video Payload |

### Verified Axe-Core 4.13.0 Results:
*Scanned across 17 public pages | Raw File: `data/a11y_results.json`*
- **Total Violation Instances**: 193 page-level instances across 17 pages.
- **Total Affected DOM Nodes**: **497 nodes**.
- **Key Violation Rules**:
  - `link-name`: 116 nodes (Missing discernible link text on icon links and lightbox triggers).
  - `image-alt`: 98 nodes (Missing alternative text on informative project/award images).
  - `region` & `landmark`: 150+ nodes (Content outside semantic HTML5 landmarks).
  - `color-contrast`: 18 nodes (Text contrast below 4.5:1 ratio).
  - `meta-viewport`: 17 pages (Disables user pinch-to-zoom via `user-scalable=no`).
  - `label`: 8 nodes (Careers form inputs lack `<label for="...">` elements).
  - `marquee`: 1 node (Deprecated `<marquee>` scrolling tag on Homepage).

---

## 4. Brand Design Tokens (Forensically Extracted)

- **Primary Maritime Navy**: `#0b2144` / `#0f2b5c` (Dominant headers, cards, deep backgrounds).
- **Primary Logistics Red**: `#e1390f` / `#fd1723` (Active accents, primary CTA highlights, borders).
- **Secondary Slate Blue**: `#3282e6` (Link hover states).
- **Neutrals**: `#ffffff` (Pure White), `#f8f9fa` (Light Canvas Gray).
- **Typography Direction**: `Inter` / `Poppins` sans-serif paired with clean geometric hierarchy.
- **Visual Design Philosophy**: **Operational Evidence over Decorative Fluff** — Driven by real heavy-lift cargo photography, authentic route maps, verified branch infrastructure, and genuine accreditation badges (AEO, IATA, WCA, SCN).

---

## 5. Locked Development Architecture & Production Stack

```
[Production Rebuild Architecture]
├── Vercel (Edge Hosting & Global CDN)
│   └── Next.js 16 (App Router) + React 19 + TypeScript
│       ├── Static Site Generation (SSG) for high-speed content delivery
│       ├── Server Actions for type-safe form validation & API dispatch
│       ├── Tailwind CSS v4 (Zero-runtime utility CSS, <30 KB bundle)
│       └── Motion ("motion/react") for surgical, lightweight micro-interactions
├── Firebase (Backend & Data Layer)
│   ├── Cloud Firestore (RFQs, inquiries, branch directory, case study metadata)
│   ├── Firebase Storage (Shipper document attachments: packing lists, invoices)
│   └── Firebase App Check (Production API abuse prevention)
└── Resend API (Transactional Email Gateway -> Sales Desk / Arun Sharma)
```

---

## 6. Verifiable Acceptance Criteria for the Rebuild

| Acceptance Metric | Target Benchmark | Measurement Method |
|---|---|---|
| **Mobile Lighthouse Performance** | **≥ 90 / 100** | Automated Lighthouse 13.x mobile preset run |
| **Mobile Accessibility** | **≥ 95 / 100** | Zero critical/serious Axe-core 4.x violations |
| **SEO Score** | **≥ 95 / 100** | Unique titles, meta descriptions, Schema.org JSON-LD |
| **Best Practices Score** | **≥ 95 / 100** | Modern HTTPS, zero EOL libraries, secure headers |
| **Largest Contentful Paint (LCP)** | **< 2.5 s** | Real-device & emulated 4G mobile trace |
| **Cumulative Layout Shift (CLS)** | **< 0.10** | Explicit image dimensions & CSS aspect-ratios |
| **Total Blocking Time (TBT)** | **< 200 ms** | Minimal client JS, zero legacy jQuery execution |
| **Factual Integrity** | **100% Evidence-Backed** | Zero hallucinated statistics, SLA promises, or legacy dates |
