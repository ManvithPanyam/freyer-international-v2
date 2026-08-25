# Forensic Site Inventory — Freyer International Logistics Pvt. Ltd.
**Target URL**: `https://www.freyerinternational.com/`  
**Audit Date**: August 25, 2026  
**Auditor**: Antigravity Web Forensic & UX Audit Suite  
**Scope**: Publicly Accessible Website & Associated Digital Assets

---

## 1. Discovered Public URL Inventory

The automated crawler discovered **17 primary distinct public pages** (plus 3 alias/trailing-slash variations and 1 legacy orphan PHP script).

| # | Discovered URL | HTTP Status | Title Tag | Word Count | Images | Headings (H1/H2/H3) | Page Classification | Action |
|---|---|---|---|---|---|---|---|---|
| 1 | `https://www.freyerinternational.com/` | 200 OK | Freyer International Logistics Pvt Ltd | 283 | 24 | H1: 2, H2: 1, H3: 6 | Homepage | **REDESIGN** |
| 2 | `https://www.freyerinternational.com/about` | 200 OK | Freyer International Logistics Pvt Ltd | 427 | 10 | H1: 1, H2: 2, H3: 4 | Corporate / About | **REWRITE** |
| 3 | `https://www.freyerinternational.com/services` | 200 OK | Freyer International Logistics Pvt Ltd | 123 | 8 | H1: 1, H2: 0, H3: 6 | Services Hub | **REDESIGN** |
| 4 | `https://www.freyerinternational.com/services/air-services` | 200 OK | Freyer International Logistics Pvt Ltd | 320 | 2 | H1: 1, H2: 0, H3: 2 | Service / Air Freight | **REWRITE** |
| 5 | `https://www.freyerinternational.com/services/ocean-services` | 200 OK | Freyer International Logistics Pvt Ltd | 352 | 2 | H1: 1, H2: 0, H3: 2 | Service / Ocean Freight | **REWRITE** |
| 6 | `https://www.freyerinternational.com/services/customs-services` | 200 OK | Freyer International Logistics Pvt Ltd | 282 | 2 | H1: 1, H2: 0, H3: 1 | Service / Customs Brokerage | **REWRITE** |
| 7 | `https://www.freyerinternational.com/services/warehouse` | 200 OK | Freyer International Logistics Pvt Ltd | 253 | 2 | H1: 1, H2: 0, H3: 1 | Service / Warehousing | **REWRITE** |
| 8 | `https://www.freyerinternational.com/services/risk-management` | 200 OK | Freyer International Logistics Pvt Ltd | 470 | 2 | H1: 1, H2: 0, H3: 1 | Service / Cargo Insurance | **MERGE** |
| 9 | `https://www.freyerinternational.com/services/project-cargo` | 200 OK | Freyer International Logistics Pvt Ltd | 293 | 2 | H1: 1, H2: 0, H3: 2 | Service / Project Cargo | **REDESIGN** |
| 10 | `https://www.freyerinternational.com/locations` | 200 OK | Freyer International Logistics Pvt Ltd | 330 | 3 | H1: 1, H2: 0, H3: 11 | Locations Directory | **REDESIGN** |
| 11 | `https://www.freyerinternational.com/awards` | 200 OK | Freyer International Logistics Pvt Ltd | 85 | 13 | H1: 1, H2: 0, H3: 0 | Awards Showcase | **MERGE** |
| 12 | `https://www.freyerinternational.com/project` | 200 OK | Freyer International Logistics Pvt Ltd | 296 | 35 | H1: 1, H2: 0, H3: 0 | Project Gallery | **REDESIGN** |
| 13 | `https://www.freyerinternational.com/gallery` | 200 OK | Freyer International Logistics Pvt Ltd | 106 | 10 | H1: 1, H2: 0, H3: 0 | Photo Gallery | **DELETE** |
| 14 | `https://www.freyerinternational.com/corporate-social-responsibility` | 200 OK | Freyer International Logistics Pvt Ltd | 218 | 2 | H1: 1, H2: 0, H3: 3 | CSR | **MERGE** |
| 15 | `https://www.freyerinternational.com/careers` | 200 OK | Freyer International Logistics Pvt Ltd | 137 | 2 | H1: 1, H2: 0, H3: 1 | Careers / Recruitment | **REDESIGN** |
| 16 | `https://www.freyerinternational.com/network partners` | 200 OK | Freyer International Logistics Pvt Ltd | 90 | 6 | H1: 1, H2: 0, H3: 0 | Partner Accreditations | **MERGE** |
| 17 | `https://www.freyerinternational.com/contact-us` | 200 OK | Freyer International Logistics Pvt Ltd | 118 | 2 | H1: 1, H2: 0, H3: 1 | Contact Page | **REDESIGN** |
| 18 | `https://www.freyerinternational.com/career-plus.php` | 200 OK | Freyer International Logistics Pvt Ltd | 121 | 2 | H1: 1, H2: 0, H3: 1 | Legacy Endpoint | **DELETE** |

---

## 2. Server Configuration & URL Forensic Anomalies

1. **Unencoded URL Spaces in Main Navigation**:
   - The navigation link for "Network Partners" in HTML is rendered as `<a href="network partners">Network Partners</a>`.
   - Result: Browsers request `/network%20partners` or `/network partners`. This violates clean URL standards and harms SEO indexing.
2. **Double-Slash URL Canonicalization Issues**:
   - Internal navigation links use relative paths resulting in URLs such as `https://www.freyerinternational.com//services`. The Apache server responds with `200 OK` without redirecting (`301 Moved Permanently`) to the normalized canonical `/services`.
3. **Missing `robots.txt`**:
   - Requesting `https://www.freyerinternational.com/robots.txt` returns `404 Not Found` (cPanel custom error page).
4. **Missing `sitemap.xml`**:
   - Requesting `https://www.freyerinternational.com/sitemap.xml` returns `404 Not Found`. Search engine bots have zero structured discovery indexing files.
5. **Universal Global Title Tag Collision**:
   - 100% of discovered pages share the exact identical `<title>` tag: `Freyer International Logistics Pvt Ltd`.
6. **Universal Global H1 Tag Collision**:
   - Every single page renders the banner text `Logistics Beyond Boundaries` inside an `<h1>` element, eliminating page-level semantic hierarchy.
