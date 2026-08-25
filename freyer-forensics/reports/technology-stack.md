# Technical Stack Forensics & Evidence — Freyer International Logistics Pvt. Ltd.

**Target**: `https://www.freyerinternational.com/`  
**Evaluation Standard**: Forensic Source Verification & Version Header Analysis

---

## 1. Executive Technology Summary Table

| Layer | Detected Technology | Exact Version | Status | Evidence Source | Security / Obsolescence Impact |
|---|---|---|---|---|---|
| **Server / Gateway** | Apache HTTP Server | 2.4.x (Sub-version concealed) | 🟡 Legacy Config | `Server: Apache` response header | Server reveals OS/module info; lacks modern edge caching headers. |
| **Backend Runtime** | PHP | **7.4.33** | 🔴 **CRITICAL EOL** | `x-powered-by: PHP/7.4.33` HTTP header | Reached End-of-Life on Nov 28, 2022 (>3.5 years unpatched). Exposed publicly. |
| **JS Core Library** | jQuery | **1.12.4** | 🔴 **CRITICAL OBSOLETE** | `raw/js/jquery.js` Line 2: `jQuery v1.12.4` | Released May 20, 2016 (10 years old). Known XSS vulnerabilities. |
| **CSS Framework** | Bootstrap | **3.4.1** | 🔴 **OBSOLETE** | `raw/css/bootstrap.min.css`: `Bootstrap v3.4.1` | Bootstrap 3 EOL in 2019. Float-based grid; inflexible mobile responsiveness. |
| **Grid / Layout** | Masonry | **3.0.0** | 🔴 **OBSOLETE** | `raw/js/masonry.pkgd.min.js`: `v3.0.0` | Released 2013. Heavy JS DOM calculations causing layout thrashing. |
| **Slider / Carousel** | Slick Carousel | **1.6.0** | 🟡 **LEGACY** | `raw/js/slick.min.js`: `Version: 1.6.0` | Released 2016. High input latency, jQuery dependency. |
| **Video Background** | jquery.mb.YTPlayer | **3.1.11** | 🔴 **OBSOLETE** | `raw/js/jquery.mb.YTPlayer.js`: `Version: 3.1.11` | Released 2017. Heavy unthrottled YouTube iframe loading. |
| **Lightbox Modal** | SimpleLightbox | **2.2.1** | 🟡 **LEGACY** | `raw/js/simple-lightbox.js`: `Version 2.2.1` | Lacks WCAG ARIA dialog semantics and focus management. |
| **Animation** | WOW.js / Animate.css | **Legacy 2013** | 🔴 **OBSOLETE** | `raw/js/wow.js`, `raw/css/animate.css` | Unpassive scroll listeners; poor frame pacing on mobile GPUs. |
| **Icons** | Font Awesome | **4.7.0 (Inferred)** | 🟡 **LEGACY** | Glyph mappings in `style.css` (`105`, `00e`) | Font-based icon system; blocks initial font rendering. |
| **Maps** | Google Maps Embed | Basic `<iframe>` | 🟡 **BASIC** | Plain iframe embeds on locations and contact pages | Lacks interactive routing, custom styling, or cluster capabilities. |

---

## 2. Deep Dive: PHP 7.4.33 Production Exposure

### Evidence:
Raw HTTP response headers on `https://www.freyerinternational.com/`:
```http
HTTP/2 200 
x-powered-by: PHP/7.4.33
content-type: text/html; charset=UTF-8
date: Tue, 25 Aug 2026 17:08:45 GMT
server: Apache
```

### Forensic Assessment:
1. **End of Life (EOL)**: Official PHP 7.4 security support ended on **November 28, 2022**. The production server has been running an unmaintained backend runtime for over 3.5 years.
2. **Information Disclosure**: The `x-powered-by` header explicitly advertises the exact obsolete PHP version to any crawler or automated vulnerability scanner.
3. **Migration Priority**: **P0 (Critical)**. In the upcoming modernization, PHP must either be completely eliminated in favor of a modern edge Jamstack architecture (Next.js / Astro) or upgraded to PHP 8.3+ with strict security hardening.

---

## 3. Deep Dive: jQuery 1.12.4 Obsolescence

### Evidence:
Inspecting `freyer-forensics/raw/js/jquery.js` (Line 1-3):
```javascript
/*!
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */
```

### Forensic Assessment:
1. jQuery 1.12.4 was released on **May 20, 2016** (specifically for legacy Internet Explorer 6-8 compatibility).
2. Modern browsers (Chrome 120+, Safari 17+, Edge) have native DOM APIs (`fetch`, `querySelector`, `IntersectionObserver`, CSS Grid, Flexbox, native dialogs) that render jQuery completely obsolete.
3. All UI widgets on the site (menus, lightbox, slick slider, video player) are tied to this 10-year-old runtime, creating a massive technical debt chain.
