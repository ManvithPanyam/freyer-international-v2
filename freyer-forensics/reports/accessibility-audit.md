# Forensic Web Accessibility (WCAG 2.1 AA) Audit — Freyer International Logistics Pvt. Ltd.

**Testing Tool**: Axe-Core 4.13.0 (via `@axe-core/puppeteer` and Lighthouse 13.4.1 environment)  
**Scope**: 17 Discovered Public Pages  
**Raw Test Artifact**: [`freyer-forensics/data/a11y_results.json`](file:///home/p4cketsn1ff3r/Downloads/Projects_and_Development/Freyer%20International%20Logistics%20Pvt.%20Ltd/freyer-forensics/data/a11y_results.json)  
**Total Measured Violations**: **193 page-level instances** affecting **497 DOM nodes**.

---

## 1. Verified Axe-Core Violation Breakdown

| Violation Rule ID | Impact Level | Affected Nodes | Affected Pages | WCAG Rule & Description | Remediation |
|---|---|---|---|---|---|
| **link-name** | 🟠 **Serious** | **116 nodes** | 17 pages | WCAG 4.1.2: Links must have discernible text (social icons, lightbox triggers). | Add `aria-label` or visible text. |
| **image-alt** | 🔴 **Critical** | **98 nodes** | 17 pages | WCAG 1.1.1: Informative images missing alternative text. | Add descriptive `alt="..."`. |
| **region** | 🟡 **Moderate** | **83 nodes** | 17 pages | WCAG 1.3.1: Page content not wrapped in landmarks. | Wrap in `<header>`, `<main>`, `<footer>`. |
| **landmark-unique** | 🟡 **Moderate** | **67 nodes** | 17 pages | WCAG 1.3.1: Non-unique landmark identifiers. | Provide distinct `aria-label` per landmark. |
| **color-contrast** | 🟠 **Serious** | **18 nodes** | 17 pages | WCAG 1.4.3: Text contrast below 4.5:1 ratio. | Darken red text (`#e1390f`). |
| **meta-viewport** | 🟡 **Moderate** | **17 nodes** | 17 pages | WCAG 1.4.4: Disables mobile zoom (`user-scalable=no`). | Remove zoom restriction flags. |
| **landmark-one-main** | 🟡 **Moderate** | **15 nodes** | 15 pages | WCAG 1.3.1: Missing single `<main>` element. | Add `<main>` tag. |
| **label** | 🔴 **Critical** | **8 nodes** | 1 page | WCAG 3.3.2: Careers form inputs lack `<label>` elements. | Attach `<label for="...">` tags. |
| **frame-title** | 🟠 **Serious** | **2 nodes** | 2 pages | WCAG 4.1.2: Google Maps `<iframe>` missing `title` attribute. | Add `title="Google Maps"`. |
| **marquee** | 🟠 **Serious** | **1 node** | 1 page | WCAG 2.2.2: Deprecated `<marquee>` tag causes uncontrollable scrolling. | Replace with CSS/Motion carousel. |
