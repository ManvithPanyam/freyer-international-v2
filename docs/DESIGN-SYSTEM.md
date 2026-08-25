# Product & Visual Design Specification — Freyer Logistics
**Document Version**: 2.0  
**Design Philosophy**: **Operational Evidence over Decorative Fluff**

---

## 1. Brand Perception & Identity
- **Tone**: Industrial, authoritative, global, precise, operationally capable.
- **Identity Foundation**: Retain official Freyer Maritime Navy, Logistics Red, and pure white canvas.
- **Imagery Principle**: High-impact authentic logistics photography (heavy-lift transformers, container vessels, air cargo freighters, port cranes) over generic 3D illustrations or artificial vector art.

---

## 2. Color System Tokens (Tailwind CSS v4)

```css
@theme {
  --color-brand-navy: #0b2144;        /* Deep Maritime Navy (Primary Brand) */
  --color-brand-navy-dark: #07152b;   /* Midnight Navy (Headers / Footers) */
  --color-brand-red: #e1390f;         /* Logistics Amber Red (Primary CTA / Accents) */
  --color-brand-red-hover: #c42f0b;   /* Darkened Red (Hover / Active) */
  --color-brand-blue: #3282e6;        /* Slate Blue (Interactive Links) */
  --color-canvas-light: #f8f9fa;      /* Clean Off-White Background */
  --color-canvas-white: #ffffff;      /* Surface Card White */
  --color-text-primary: #0b2144;      /* High-Contrast Charcoal Navy */
  --color-text-muted: #5a6a85;        /* Secondary Body Slate */
  --color-border-subtle: #e2e8f0;     /* UI Divider Gray */
}
```

---

## 3. Typography Scale & Hierarchy

- **Primary Font**: `Poppins, sans-serif` (Google Font with Latin subset).
- **Fallback Stack**: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.

| Token | Size / Line-Height | Weight | Usage |
|---|---|---|---|
| **Display Hero** | 48px / 1.15 (Mobile: 36px) | 700 (Bold) | Main Hero Headlines |
| **Heading 1** | 36px / 1.20 (Mobile: 28px) | 600 (SemiBold) | Major Page Titles |
| **Heading 2** | 28px / 1.25 (Mobile: 22px) | 600 (SemiBold) | Section Headers |
| **Heading 3** | 20px / 1.35 | 500 (Medium) | Card Titles & Feature Blocks |
| **Body Standard** | 16px / 1.60 | 400 (Regular) | Primary Content Paragraphs |
| **Body Small** | 14px / 1.50 | 400 (Regular) | Metadata, Footers, Disclaimers |
| **Button / Badge**| 14px / 1.00 | 600 (SemiBold) | CTAs, Interactive Badges |

---

## 4. Component Design Specifications

### 4.1 Primary CTA Buttons
- Background: `#e1390f` (Red). Text: `#ffffff` (White). Contrast Ratio: **4.6:1** (WCAG AA Compliant).
- Border-Radius: `6px` (Restrained geometric curve, no pill shapes).
- Padding: `12px 24px` (Desktop) / `14px 28px` (Touch target ≥ 48px on mobile).

### 4.2 Trust & Accreditation Badges
- Displayed in a high-contrast horizontal proof ribbon across all pages.
- Verified badges: **AEO Certified** (Indian Customs), **IATA Approved Cargo Agent**, **WCA World Member**, **SCN Partner**, **Great Place to Work**.

### 4.3 Motion & Interaction Principles
- Framework: `motion` from `motion/react`.
- Philosophy: Subtle, high-performance micro-interactions. Zero gratuitous scrolling parallax or laggy physics.
- Reduced Motion: Respect `prefers-reduced-motion: reduce` across all animated transitions.
