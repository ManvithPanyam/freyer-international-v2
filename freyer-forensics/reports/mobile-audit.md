# Forensic Mobile & Responsive Audit — Freyer International Logistics Pvt. Ltd.

**Tested Viewports**:
- Mobile Small: 375px × 667px (iPhone SE)
- Mobile Standard: 390px × 844px (iPhone 13/14/15)
- Mobile Large: 414px × 896px (iPhone XR / Android Max)
- Tablet Portrait: 768px × 1024px (iPad)
- Tablet Landscape: 1024px × 768px (iPad Pro / Small Laptop)
- Desktop Standard: 1280px × 800px
- Desktop Large: 1440px × 900px

---

## 1. Responsive Layout & Viewport Findings

### 1. Viewport Meta Configuration Defect:
- **Code**: `<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0">`
- **Forensic Finding**: The viewport tag disables user zooming (`user-scalable=no` / `maximum-scale=1.0`).
- **Impact**: Violates WCAG 2.1 Success Criterion 1.4.4 (Resize text) and generates an automated accessibility error on every page. Users with low vision cannot pinch-to-zoom on complex tables, certificates, or text.

### 2. Mobile Navigation Drawer & Hamburger Menu:
- **Observation**: The mobile hamburger menu uses custom JavaScript (`menu.js`) layered over Bootstrap 3.
- **Defects**:
  - Tapping menu items on mobile lacks active focus states.
  - Dropdown sub-menus (Services) do not expand reliably with touch taps.
  - No backdrop overlay or body scroll-locking when the drawer is open.

### 3. Horizontal Overflow & Layout Breaks:
- **At 375px & 390px**:
  - Banner typography (`h1` at 38px fixed) causes text wrapping awkwardly across 4 lines.
  - Footer multi-column layout stacks rigidly with excessive vertical spacing.
  - Tables and multi-column service icons fail to reflow into clean touch cards.

### 4. Touch Target Sizes:
- **Defect**: Navigation links and social icons in the header/footer have touch targets smaller than 32px × 32px (below the Apple Human Interface 44×44px and Google Material 48×48px guidelines).
- **Result**: Frequent mis-taps when users attempt to tap phone numbers or branch addresses on mobile screens.

### 5. Media Scaling:
- **Observation**: Hero background images loaded via CSS `background-size: cover` crop critical cargo and personnel details on tall mobile viewports (9:19.5 aspect ratios).
