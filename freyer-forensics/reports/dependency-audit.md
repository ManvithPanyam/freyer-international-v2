# Forensic Dependency & Software Obsolescence Audit — Freyer International Logistics Pvt. Ltd.

---

## 1. Complete Software Dependency Matrix

```
[Production Web Stack]
├── Server Layer
│   └── Apache HTTP Server (2.4.x) ............................. [YELLOW - Legacy Config]
├── Backend Runtime
│   └── PHP (v7.4.33 - Released Nov 2022, EOL Nov 2022) ......... [RED - CRITICAL OBSOLETE]
├── CSS Architecture
│   ├── Bootstrap (v3.4.1 - Released Feb 2019, EOL 2019) ....... [RED - OBSOLETE]
│   ├── Animate.css (v1.0 - 2013) .............................. [RED - OBSOLETE]
│   ├── slick.min.css (v1.6.0 - 2016) .......................... [YELLOW - LEGACY]
│   └── simplelightbox.min.css (v2.2.1 - 2020) ................. [YELLOW - LEGACY]
└── JavaScript Runtime
    ├── jQuery (v1.12.4 - Released May 20, 2016) ................ [RED - CRITICAL OBSOLETE]
    ├── Bootstrap.js (v3.4.1) .................................. [RED - OBSOLETE]
    ├── Masonry (v3.0.0 - 2013) ................................ [RED - OBSOLETE]
    ├── Slick Carousel (v1.6.0 - 2016) ......................... [YELLOW - LEGACY]
    ├── jquery.mb.YTPlayer (v3.1.11 - 2017) .................... [RED - OBSOLETE]
    ├── SimpleLightbox (v2.2.1 - 2020) ......................... [YELLOW - LEGACY]
    ├── WOW.js (2013) .......................................... [RED - OBSOLETE]
    └── AnimOnScroll.js (Codrops 2013) ......................... [RED - OBSOLETE]
```

---

## 2. Obsolescence Age Analysis

- **Oldest Significant Dependency**: **AnimOnScroll.js & Masonry v3.0.0** (Released in **2013** — **13 years old**).
- **Oldest Core Library**: **jQuery v1.12.4** (Released on **May 20, 2016** — **10 years old**).
- **Most Critical Backend Vulnerability**: **PHP 7.4.33** (Official security support ended **November 28, 2022**; running unsupported in production).
