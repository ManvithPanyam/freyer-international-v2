# FREYER FORENSIC EXTRACTION — V2 AUDIT REPORT
**Extracted from live site:** https://www.freyerinternational.com/  
**Archive:** `freyer-forensics-v2/`  
**Date:** 2026-08-27  
**Status:** READY FOR V2 CONTENT + DESIGN PLANNING

---

## ACTUAL COUNTS (from raw HTML)

| Item | Count |
|---|---|
| HTML pages crawled | 14 (13 top-level + 6 service sub-pages) |
| Discovered URLs | 22 unique |
| Project movements | **11** (with real dimensions, weights, routes) |
| Project images referenced | **39** (`/images/project/1.jpg` → `11.4.jpg`) |
| Award images | 11 (5 × physical trophies, AEO cert PDF, SCN cert PNG, 4 × unknown) |
| Award certificate (PDF) | 1 — AEO Certificate.pdf |
| Service pages | 6 |
| Video on live site | 1 — `WhatsApp Video 2022-12-09 at 16.02.01.mp4` (old) |
| Social links | 3 (Facebook, Twitter, LinkedIn — all `href="#"`, i.e. **not linked**) |
| Contact phone | `044-4319 1919` |
| Contact email | `info@freyerinternational.com` |
| Powered by | Horizon Softnet (https://www.horizonsoftnet.com/) |

---

## THE 11 PROJECT MOVEMENTS — COMPLETE DATASET

This is the highest-value recovered content. All dimensions, weights, and routes are exact from source HTML.

| # | Route | Cargo Details | Date |
|---|---|---|---|
| 1 | **Kobe → Chennai** | RORO movement. 904 × 310 × 316 cm / WT 37,100 KG | April 2023 |
| 2 | **Masan → Chennai** | BB movement. 22 packages / 837 CBM / WT 200 MT | May 2023 |
| 3 | **Qingdao → Sohar & Dammam** | 4 × BBK unit on cntr. vessel 760 × 615 × 50 cm / 16 MT + 1 × 20 FR and 1 × 40 FR for each POD | — |
| 4 | **Al Jubail → Jebel Ali** | Door-delivery. Heaviest piece 2 × 148 MT + Accessories | — |
| 5 | **Ex Nhava Sheva → Mogadishu** | 5 × 40 FR – WT 27,000 KG each | — |
| 6 | **Ex Genoa → Sohar** | 8 × 40 FR – 319 × 231 × 360 cm – WT 39,800 KG each (lots of 2 × 40 FR on consecutive vessels) | — |
| 7 | **Ex Genoa → Jebel Ali** | 360 × 263 × 400 cm – WT 68,000 KG each. **Total 17 units** moved in different lots (Door to Door) | — |
| 8 | **Hamburg → Jeddah** | Ex-Works. Break Bulk Shipment | — |
| 9 | **Shanghai → Jebel Ali** | Break Bulk. 29 PKG / 796 CBM / WT 482 MT | — |
| 10 | **Venice → Mundra** | Ex-Works. 410 × 345 × 495 cm – 21,000 KG | — |
| 11 | **Venice → Mundra** | Boom Crane – 2,700 × 400 × 455 cm – WT 37,600 KG. Ex-Works terms including road permit, loaded as BBK on cntr. vessel | — |

**Images already in the redesign repo:** All 39 project images (`/images/project/`) are already present in `/public/images/` as `1.jpg`, `2.1.jpg`–`2.6.jpg`, `3.jpg`…`11.4.jpg`. ✓

---

## SERVICE CONTENT RECOVERED

### Warehousing (`/services/warehouse`)
**Key claims (exact wording):**
- "Foot print that equates to over 1,000,000 square feet."
- "All facilities are Warehouse Management Systems enabled with Multi-Client and multi-location capabilities."
- "Close proximity to major ports, rail ramps and highways."

**Distribution & Fulfilment capabilities:**
Pick and Pack / Fulfillment / Storage (short and long-term) / Inventory control and management / Cross docking / Kitting / Vendor Consolidation Programs / Reporting / Transportation Management / Reverse Logistics / Quality Control

**Value Added Services:**
Assembly / Finishing / Tagging / Conditioning / Kitting / (Re) Packaging / Packing / Labelling

### Project Cargo (`/services/project-cargo`)
**Exact source copy:**
> "Moving oversized cargo is no easy task, Since each shipment has its own unique requirements, as a Supplier or Buyer you need an expert logistics partner that you can rely on from A to Z. Freyer international's Project Cargo has the knowledge, experience, resources and network to take care of your entire logistics chain for your project cargo."

> "Freyer International offers a one-stop solution for all projects relating to the energy sector, offshore industry, wind farm development, machinery, steel and metal. From the heaviest pieces to the smallest accompanying bolt, we will arrange everything for you: disassembly of the project cargo at the construction site, transport to the port, intermediate storage, loading aboard the ship and unloading again at the port of arrival (using mobile heavy cargo cranes whenever necessary), onward transport and delivery to the final destination. Throughout the logistics chain, we continuously consider the smartest routes and the most economical cargo configurations and of course we also take care of all the paperwork, from transport permits to customs formalities."

**Industries served:** Energy / Offshore / Wind farm development / Machinery / Steel and metal

**Services in scope:** Disassembly at construction site → transport to port → intermediate storage → ship loading/unloading → onward transport → final delivery → permits + customs

---

## AWARDS PAGE — ASSETS IDENTIFIED

| Asset | URL |
|---|---|
| Award image 1 | `/images/Awards/1.jpg` |
| Award image 2 | `/images/Awards/2.jpg` |
| Award image 3 | `/images/Awards/3.jpg` |
| Award image 4 | `/images/Awards/4.jpg` |
| Award image 5 | `/images/Awards/5.jpg` |
| Award image 11 | `/images/Awards/11.jpeg` |
| Award image 12 | `/images/Awards/12.jpeg` |
| Award image 13 | `/images/Awards/13.jpeg` |
| Award image 14 | `/images/Awards/14.jpeg` |
| AEO certificate (JPG) | `/images/Awards/AEO.jpg` ✓ already in repo |
| AEO certificate (PDF) | `/images/Awards/AEO Certificate.pdf` |
| SCN membership cert | `/images/Awards/SCN -Member_certificate.png` ✓ already in repo |

**Notes:** Award images 1–5 and 11–14 are NOT yet in the redesign repo. They need to be downloaded from the live site for V2 Awards page.

---

## SOCIAL MEDIA — CONFIRMED STATUS

All three social links on the live site point to `href="#"`. **No real social accounts are linked.** Facebook, Twitter/X, LinkedIn icons exist in footer but go nowhere. Do not create fake social profile links in V2 without confirmation of real URLs.

---

## CLAIMS REQUIRING CONFIRMATION BEFORE V2 USE

| Claim | Source | Exact Wording | Confirm? |
|---|---|---|---|
| Warehouse footprint | `/services/warehouse` | "over 1,000,000 square feet" | ✓ Use — sourced from their own page |
| WMS-enabled | `/services/warehouse` | "Warehouse Management Systems enabled" | ✓ Use |
| AEO certification | `/awards` + PDF | AEO Certificate exists as PDF | ✓ Use |
| SCN membership | `/awards` | SCN Member certificate exists | ✓ Use |
| Project tonnage max | `/project` | "2 × 148 MT" (Al Jubail → Jebel Ali), "482 MT" (Shanghai → Jebel Ali) | ✓ Use — source documented |
| "Logistics Beyond Boundaries" | Site header everywhere | Tagline in header | ✓ Original brand tagline — not currently used in redesign |
| Phone | Footer | `044-4319 1919` | ✓ Confirmed |
| Email | Footer | `info@freyerinternational.com` | ✓ Confirmed |

**NOT confirmed — do not use without verification:**
- "Global network of 500+ partners" — not found in any crawled page
- Revenue / employee count — not found in any crawled page
- "10 hubs" — originated in redesign brief, NOT found in any crawled source page

---

## CONTENT GAPS — CURRENT REDESIGN vs LIVE SITE

| Category | Live Site | Current Redesign | Gap |
|---|---|---|---|
| Projects page | 11 movements, 39 images, real specs | Not present | **CRITICAL** |
| Awards page | 11 award images + AEO PDF + SCN cert | Accreditations section (logos only) | Substantial |
| Gallery | Separate photo gallery page | Not present | Missing |
| CSR page | Separate CSR section | Not present | Missing |
| Careers | Full careers page + application | Not present | Missing |
| Network Partners | Dedicated page | Accreditations section (logos only) | Partial |
| Original tagline | "Logistics Beyond Boundaries" | Not used | Missing |
| Warehouse capabilities | 19-item service list, 1M sq ft claim | 6-line description | Severely truncated |
| Project Cargo copy | Full sector breakdown + methodology | "Moving what ordinary logistics cannot" | Severely truncated |
| Award images 1–5, 11–14 | On live site | Not in repo | Not downloaded |
| AEO PDF certificate | `/images/Awards/AEO Certificate.pdf` | Not in repo | Not downloaded |

---

## VIDEO PERFORMANCE — ASSESSMENT

The live old site uses `jquery.mb.YTPlayer` (YouTube background player), not a local MP4.  
The redesign hero uses `/video/freyer-hero.mp4` — a local 1080p MP4 at ~16.2 MB / 5.3 Mbps.

**Key issues to investigate on Vercel:**
1. Is the MP4 moov atom at front? (requires `ffmpeg -movflags faststart`) — if not, browser must download entire file before playback
2. Does Vercel serve `Accept-Ranges: bytes`? Large static assets on Vercel edge may have range request limitations
3. `preload="metadata"` is set correctly — but if moov atom is at end, "metadata" download = full file
4. The `canplay` event fires only after enough data buffered — on slow connections this can be 5–10s on a non-faststart MP4

**Recommendation:** Run `ffprobe -v quiet -print_format json -show_format /path/to/freyer-hero.mp4` to verify atom position. If moov is at end, re-encode with `ffmpeg -i input.mp4 -movflags faststart -c copy output.mp4`.

---

## ARCHIVE LOCATION

```
/home/p4cketsn1ff3r/Downloads/Projects_and_Development/
  Freyer International Logistics Pvt. Ltd/
    freyer-forensics-v2/
      raw/html/          ← 14 complete HTML pages
      raw/html/services/ ← 6 service pages
      reports/           ← this report + inventory files
```

---

## READY FOR V2 CONTENT + DESIGN PLANNING

Next step: design the **Projects page** — 11 real movements, real photography, real specs. That single page will do more for Freyer's credibility than anything else in V2.
