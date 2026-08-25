# Forensic Performance & Core Web Vitals Audit — Freyer International Logistics Pvt. Ltd.

**Testing Tool**: Google Lighthouse 13.4.1 CLI executed via Chromium against `https://www.freyerinternational.com/`  
**Execution Date**: August 25, 2026  
**Raw Test Artifacts**:
- Mobile Audit JSON: [`freyer-forensics/data/raw_lighthouse_mobile.json`](file:///home/p4cketsn1ff3r/Downloads/Projects_and_Development/Freyer%20International%20Logistics%20Pvt.%20Ltd/freyer-forensics/data/raw_lighthouse_mobile.json)
- Desktop Audit JSON: [`freyer-forensics/data/raw_lighthouse_desktop.json`](file:///home/p4cketsn1ff3r/Downloads/Projects_and_Development/Freyer%20International%20Logistics%20Pvt.%20Ltd/freyer-forensics/data/raw_lighthouse_desktop.json)

---

## 1. Verified Measured Performance Metrics

| Core Metric | Measured Mobile (Live) | Measured Desktop (Live) | Google CWV Threshold | Forensic Evaluation |
|---|---|---|---|---|
| **Lighthouse Score** | **38 / 100** | **69 / 100** | ≥ 90 / 100 | 🔴 Critical Mobile Latency / 🟠 Mediocre Desktop |
| **First Contentful Paint (FCP)** | **4.3 s** | **1.0 s** | ≤ 1.8 s | 🔴 Poor (Mobile) / 🟢 Good (Desktop) |
| **Largest Contentful Paint (LCP)** | **5.5 s** | **1.1 s** | ≤ 2.5 s | 🔴 Severe Mobile Render Latency |
| **Cumulative Layout Shift (CLS)**| **0.461** | **0.416** | ≤ 0.10 | 🔴 Critical Visual Instability |
| **Total Blocking Time (TBT)** | **250 ms** | **10 ms** | ≤ 200 ms | 🟡 Needs Improvement (Mobile) |
| **Speed Index** | **8.5 s** | **3.5 s** | ≤ 3.4 s | 🔴 Poor |
| **Total Byte Weight / Resource Transfer**| **3,569 KiB (~3.57 MB)** | **4,674 KiB (~4.79 MB)** | ≤ 1,500 KiB | 🔴 Excess Uncompressed Payload |

---

## 2. Network & Render-Blocking Analysis

- **Stylesheet & Script Requests**: The local repository contains 11 CSS files and 15 JS files, while live browser network traces generate up to 19 stylesheet requests and 38 script requests due to dynamic third-party resources, webfonts, and video embeds.
- **Uncompressed Assets**: `slide4.jpg` (2.3 MB), `slide1.jpg` (1.4 MB), `slide6.jpg` (1.2 MB), `slide5.jpg` (1.1 MB), `AEO.jpg` (1.1 MB) served without WebP/AVIF compression.
- **Layout Shift Root Cause**: Sliders and embed containers lack explicit HTML `width` and `height` dimensions, causing severe layout reflows (CLS 0.461).
