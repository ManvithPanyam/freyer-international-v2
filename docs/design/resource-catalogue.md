# Freyer International Logistics — Technology & Design Resource Catalogue

> **Document Type**: Persistent Project Technical & Design Reference Library  
> **Target Path**: `docs/design/resource-catalogue.md`  
> **Status**: APPROVED RESEARCH & REFERENCE BASELINE  
> **Scope**: Technology evaluation, open-source library catalogue, commercial licensing audit, animation architecture, and asset curation for the Freyer International Logistics web platform rebuild.

---

## 1. Executive Summary

This document serves as the permanent, authoritative technology and design resource catalogue for the rebuild of **Freyer International Logistics** (founded in 2018, headquartered in Chennai, 9 Indian branch offices, ~150 supply-chain specialists).

### Core Directives
1. **Target Aesthetic: Premium Industrial Editorial**
   - High typographic discipline, confident whitespace, technical precision, and authentic industrial/logistics visual language (telemetry, route corridors, maritime and air freight motifs).
   - The site must project immediate institutional authority to enterprise directors and Fortune 500 supply-chain leaders.
2. **Rejection of Generic AI & Template Tropes**
   - No generic SaaS landing-page tropes, purple/cyan neon blobs, floating decorative particles, bouncy jelly animations, or uncurated component kits that override the brand's identity.
3. **Commercial-Grade Integrity & Legal Cleanliness**
   - 100% audited for commercial client safety (MIT, Apache 2.0, BSD-3, ISC, SIL OFL). Zero uncredited attribution obligations or viral copyleft hazards.
4. **Performance & Accessibility First**
   - Strict adherence to WCAG 2.1 AA (screen reader tags, keyboard navigation, full `prefers-reduced-motion` fallbacks) and strict Core Web Vitals budgets (zero CLS, sub-100ms INP, sub-1.8s LCP).

---

## 2. Core Resource Catalogue

### Recommendations Legend
- **CORE**: Primary production tool; fundamental to the architectural stack.
- **SELECTIVE**: Approved for specific, isolated high-impact features with strict boundaries.
- **OPTIONAL**: Approved alternative or drop-in utility if specific edge cases arise.
- **REFERENCE**: Consult for code patterns, visual inspiration, or component architecture; do not copy wholesale.
- **AVOID**: Redundant, legacy, proprietary, or misaligned with project standards.

---

### Master Catalogue Table

| Resource | Category | Official / GitHub URL | What It Does | Why Useful for Freyer | Best Possible Use Case | License | Commercial Use | Maturity / Activity | Performance Considerations | Complexity | Recommendation |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Radix Primitives** | UI Foundation | [github.com/radix-ui/primitives](https://github.com/radix-ui/primitives) | Headless, unstyled accessible UI primitives (Dialog, Popover, Dropdown, Tabs, Accordion). | Provides WAI-ARIA compliance out of the box with zero imposed styling, allowing 100% custom industrial UI styling. | Navigation dropdowns, Quote inquiry modals, branch location selectors, compliance accordions. | MIT | Yes (Permissive) | Exceptionally High / Industry Standard | High (Zero CSS overhead) | Low–Medium | **CORE** |
| **shadcn/ui** | UI Foundation | [github.com/shadcn-ui/ui](https://github.com/shadcn-ui/ui) | Copy-paste Tailwind CSS + Radix component architecture living directly in project source code. | Full code ownership; no external runtime npm dependency lock-in; tailored to industrial typography and borders. | Form inputs, Select boxes, Tooltips, Tabs, Sheet drawers, Buttons. | MIT | Yes (Code copied directly) | Extremely High / Actively Maintained | High (Optimized Tailwind utility output) | Low | **CORE** |
| **Motion** *(formerly Framer Motion)* | UI Motion | [github.com/motiondivision/motion](https://github.com/motiondivision/motion) | Declarative React motion library with spring physics, layout animations, and gesture tracking. | Best-in-class declarative layout transitions, drawer slide-ins, micro-interactions, and reactive DOM states. | Navbar menu transitions, interactive service card state changes, modal entries, spring hover states. | MIT | Yes (Permissive) | Extremely High / Modern Standard | High (Hardware-accelerated CSS/WAAPI where possible) | Low–Medium | **CORE** |
| **GSAP + ScrollTrigger** | Cinematic Motion | [github.com/greensock/GSAP](https://github.com/greensock/GSAP) | High-performance imperative timeline engine and scroll-linked pinning/scrubbing coordinator. | Absolute precision in multi-step visual storytelling, path drawing, and scroll-pinned industrial narrative sequences. | Project Cargo case-study scroll narratives, multi-stage logistics timeline scrubbing, complex SVG route tracing. | Standard GreenSock (Free for standard client web; Commercial license only if end users pay a direct subscription fee for site access) | Yes (Standard commercial corporate site is 100% free) | Legendary / 15+ years active | Exceptional (Industry benchmark for FPS) | Medium–High | **SELECTIVE** |
| **Lenis** | Smooth Scroll | [github.com/darkroomengineering/lenis](https://github.com/darkroomengineering/lenis) | Lightweight, accessible smooth-scroll engine with native scroll synchronization. | Eliminates jitter during scroll-linked pinning and allows synchronized frame calculations across GSAP and Three.js. | Whole-page smooth scrolling wrapper with automatic touch/reduced-motion bypass. | MIT | Yes (Permissive) | High / Active by Darkroom Engineering | High (Uses RAF, preserves native thread) | Low | **SELECTIVE** |
| **react-spring** | Physics Engine | [github.com/pmndrs/react-spring](https://github.com/pmndrs/react-spring) | Physics-first reactive animation engine driving numbers/interpolations outside React render cycles. | Ultra-light, continuous interactive physics without triggering component re-renders. | Interactive 3D mesh transforms, cursor-following coordinate displays, R3F spring bindings. | MIT | Yes (Permissive) | High / Maintained by Poimandres | Very High (Bypasses React vDOM render cycle) | Medium | **SELECTIVE** |
| **AutoAnimate** | Animation Tool | [github.com/formkit/auto-animate](https://github.com/formkit/auto-animate) | Zero-configuration drop-in layout animation for lists and dynamic DOM additions. | Automatic smoothing of FAQ accordions or filtered branch listings without manual animation wiring. | Location filter tab results, FAQ expand/collapse transitions. | MIT | Yes (Permissive) | Medium–High / FormKit | High | Very Low | **OPTIONAL** |
| **Rive** | Interactive Vectors | [rive.app](https://rive.app) | State-machine driven vector animation runtime running on a custom C++ WebGL/Canvas renderer. | Extremely compact, interactive technical diagrams (e.g., interactive customs flow engine or vessel loading diagram). | Interactive supply chain process diagrams with state-driven hover loops. | MIT (Runtime engine) / Free editor tier | Yes (Runtime is MIT; art files created in Rive) | High / Rapidly Growing | Very High (60fps Canvas render) | Medium | **OPTIONAL** |
| **Three.js** | 3D Graphics | [github.com/mrdoob/three.js](https://github.com/mrdoob/three.js) | Standard WebGL 3D scene graph, math, and rendering engine. | Foundational engine for interactive globe, vessel/container models, and geospatial trade lanes. | WebGL rendering pipeline for interactive network visualizations. | MIT | Yes (Permissive) | Universal Standard / Actively Maintained | Scalable (Requires strict geometry/draw call budgets) | High | **CORE (3D)** |
| **React Three Fiber (R3F)** | 3D React Binding | [github.com/pmndrs/react-three-fiber](https://github.com/pmndrs/react-three-fiber) | Declarative React reconciler for Three.js. | Enables modular, reusable React component architecture for 3D scenes with clean mount/unmount lifecycles. | Freyer Interactive Global Trade Globe, Project Cargo dimensional models. | MIT | Yes (Permissive) | High / Poimandres Ecosystem Standard | High (Direct wrapper, no rendering overhead) | Medium–High | **CORE (3D)** |
| **@react-three/drei** | R3F Utilities | [github.com/pmndrs/drei](https://github.com/pmndrs/drei) | Production-ready helpers, camera controls, loaders, shaders, and abstractions for R3F. | Drastically reduces boilerplate for GLTF loading, environment maps, orbit controls, and HTML overlays in 3D space. | OrbitControls, GLTF suspense loaders, Float effects, Canvas billboarding. | MIT | Yes (Permissive) | High / Highly Active | High | Medium | **CORE (3D)** |
| **r3f-scroll-rig** | 3D Scroll Glue | [github.com/14islands/r3f-scroll-rig](https://github.com/14islands/r3f-scroll-rig) | Synchronizes DOM layout boxes with WebGL 3D viewports under a single full-screen canvas. | Smoothly embeds 3D elements inside responsive DOM scroll containers without multiple WebGL canvas contexts. | Embedding 3D cargo schematics inline within editorial text sections. | MIT | Yes (Permissive) | Medium–High / 14islands | Very High (Single WebGL context) | Medium–High | **SELECTIVE** |
| **MapLibre GL JS** | Geospatial / Maps | [github.com/maplibre/maplibre-gl-js](https://github.com/maplibre/maplibre-gl-js) | Open-source, community-governed WebGL vector map rendering engine (free fork of Mapbox GL). | Completely independent of paid proprietary token limits (Mapbox), high-performance vector rendering for Indian hubs and global routes. | Interactive Indian Branch Map (9 hubs) and Global Freight Corridor visualizer. | BSD-3-Clause | Yes (Zero API lock-in) | High / Linux Foundation Supported | High (WebGL vector tile rendering) | Medium | **CORE (Maps)** |
| **react-map-gl** | Map React Binding | [github.com/visgl/react-map-gl](https://github.com/visgl/react-map-gl) | React wrapper suite for MapLibre GL and Mapbox. | Allows declarative React integration with custom marker overlays, popups, and camera fly-to actions. | Branch network locator with interactive popup cards and camera transitions. | MIT | Yes (Permissive) | High / Vis.gl (OpenJS Foundation) | High | Medium | **CORE (Maps)** |
| **deck.gl** | WebGL Data Layers | [github.com/visgl/deck.gl](https://github.com/visgl/deck.gl) | High-performance WebGL-powered data visualization layers (ArcLayer, GreatCircleLayer). | Massive parallel rendering of high-density global trade arcs and maritime shipping density lines. | Global multi-carrier corridor visualizer if dataset exceeds 500+ simultaneous routes. | MIT | Yes (Permissive) | High / OpenJS Foundation | Very High (GPU buffer instancing) | Medium–High | **OPTIONAL** |
| **Lucide Icons** | Visual Assets | [github.com/lucide-icons/lucide](https://github.com/lucide-icons/lucide) | Clean, consistent, tree-shakeable SVG icon system (community fork of Feather). | Complete set of crisp, technical logistics, transport, navigation, and interface icons with zero runtime bloat. | UI controls, service category markers (Air, Ocean, Customs, Warehouse, Heavy Lift), metadata tags. | ISC | Yes (Permissive) | Extremely High / Very Active | High (Tree-shaken SVGs) | Low | **CORE** |
| **Simple Icons** | Brand Assets | [github.com/simple-icons/simple-icons](https://github.com/simple-icons/simple-icons) | High-quality, verified SVG icons for global brands, carriers, and social platforms. | Verified vector logos for enterprise technology partners, shipping lines (Maersk, MSC), and verified social links. | Partner carrier badges, verified social link icons in footer. | CC0 1.0 Universal | Yes (Public Domain) | Exceptionally High / Daily Updates | High (Raw SVG data) | Low | **CORE** |
| **Plus Jakarta Sans** | Typography (Display) | [github.com/tokotype/PlusJakartaSans](https://github.com/tokotype/PlusJakartaSans) | Geometric sans-serif with clean proportions, tight tracking, and authoritative industrial weight. | Provides immediate executive authority for display headlines without looking generic or dated. | H1–H4 Headings, key editorial callouts, stat counter numbers. | SIL OFL 1.1 | Yes (Free commercial use) | High / Actively Maintained | High (Variable WOFF2 font) | Low | **CORE** |
| **Inter** | Typography (Body) | [github.com/rsms/inter](https://github.com/rsms/inter) | Highly legible workhorse UI sans-serif designed for screen readability at small optical sizes. | Crisp readability for complex logistics tables, tariffs, branch addresses, and dense technical copy. | Body text, forms, navigation labels, technical metadata labels. | SIL OFL 1.1 | Yes (Free commercial use) | Extremely High / Gold Standard | High (Variable WOFF2 font) | Low | **CORE** |
| **JetBrains Mono** | Typography (Technical) | [github.com/JetBrains/JetBrainsMono](https://github.com/JetBrains/JetBrainsMono) | Highly readable monospace font with clear tabular numbers and code ligature capability. | Reinforces the "technical supply-chain metadata" aesthetic (bill of lading IDs, coordinates, metrics, tariffs). | GPS coordinates, Branch office codes, container tracking tags, timestamp counters. | SIL OFL 1.1 | Yes (Free commercial use) | High / JetBrains Maintained | High (Variable WOFF2) | Low | **CORE** |
| **Motion Primitives** | Component Reference | [motion-primitives.com](https://motion-primitives.com) | Open-source UI animation building blocks built on Motion and Tailwind. | Clean reference implementation for subtle text reveals, smooth accordion expansions, and dock-style interactions. | Reference for interactive quote stepper and animated card reveals. | MIT | Yes (Reference/Copy-Paste) | Active Community | High | Low | **REFERENCE** |
| **Origin UI** | Component Reference | [originui.com](https://originui.com) | Extensive collection of sophisticated Radix + Tailwind input, form, and table patterns. | Provides production-ready patterns for complex enterprise quote forms and multi-input filters. | Quote inquiry form fields, branch filter dropdowns, search inputs. | MIT | Yes (Code snippets) | High / Actively Updated | High | Low | **REFERENCE** |
| **Aceternity UI** | Component Reference | [ui.aceternity.com](https://ui.aceternity.com) | Tailwind + Motion interactive component recipes. | Visual inspiration for subtle grid backgrounds, card hover spotlights, and technical borders. | Selective reference for technical background grids and subtle glow borders. *(Rule: do not copy flashy cyber/neon effects)*. | MIT | Yes (Code snippets) | Active | High | Medium | **REFERENCE** |
| **React Bits** | Component Reference | [reactbits.dev](https://reactbits.dev) | Standalone interactive animation and physics recipes for React. | Reference for magnetic button physics, interactive hover text distortions, and subtle background textures. | Reference for custom hero micro-interactions. | MIT | Yes | Active | Medium–High | Medium | **REFERENCE** |
| **21st.dev** | Component Directory | [21st.dev](https://21st.dev) | Community marketplace for Tailwind and React UI components. | Inspiration repository for technical cards, data displays, and stat counter patterns. | Reference library for modern enterprise UI patterns. | Various (Check per snippet; prefer MIT) | Verify per snippet | Highly Active | Variable | Variable | **REFERENCE** |
| **Anime.js** | Animation Utility | [github.com/juliangarnier/anime](https://github.com/juliangarnier/anime) | General-purpose JavaScript animation engine for CSS, SVG, DOM, and objects. | Capable, but overlaps heavily with GSAP and Motion without offering React-native lifecycle ergonomics. | Complex standalone SVG path animation outside React tree. | MIT | Yes | High (v4 in dev) | High | Medium | **AVOID** |
| **React Transition Group** | Transition Engine | [github.com/reactjs/react-transition-group](https://github.com/reactjs/react-transition-group) | Legacy React component transition lifecycles. | Outdated imperative CSS-class based lifecycle model; superseded entirely by Motion's `AnimatePresence`. | N/A | BSD-3-Clause | Yes | Maintenance Only / Legacy | Medium | Medium | **AVOID** |

---

## 3. Animation Competition & Architecture

### Detailed Comparative Analysis

| Evaluation Criterion | Motion (Framer Motion) | GSAP + ScrollTrigger | react-spring | CSS Transitions / Keyframes | AutoAnimate |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **React Integration** | **Native**: Declarative JSX, `AnimatePresence`, hooks (`useMotionValue`). | **Ref-based**: Requires manual ref bindings and `useGSAP` hook cleanup. | **Hook-based**: `useSpring`, `animated.div` bypassing render cycle. | **Native**: CSS classes and inline style transitions. | **Ref-based**: Drop-in ref hook (`useAutoAnimate`). |
| **Declarative vs Imperative** | Declarative | Imperative (Timelines, labels, scrubbers) | Declarative / Imperative hybrid | Declarative | Zero-config Imperative |
| **Layout Animation** | **Best-in-class**: Hardware-accelerated `layout` and `layoutId`. | Complex: Requires the GSAP Flip plugin. | Difficult / Manual | Limited: Transitionable layout properties only. | **Excellent**: Great for simple list reordering. |
| **Spring Physics** | **Natural & Restrained**: Purposeful stiffness/damping config. | Requires custom cubic-bezier or physics plugin. | **Pure Physics Engine**: High-frequency mass/tension/friction. | None: Approximated cubic-bezier curves only. | Preset hardcoded spring curve. |
| **Scroll-Driven Animation** | Great for simple element reveals (`whileInView`). | **Industry Standard**: Multi-step pinning, scrubbing, velocity control. | Possible with scroll hooks, but verbose. | Modern CSS `scroll-timeline` (limited browser support). | None |
| **Complex Choreography** | Good via staggered children and orchestration delays. | **Unbeatable**: Absolute timeline labels, relative offsets, timeline nesting. | Difficult | Very difficult | None |
| **SVG Tracing & Morphing** | High: Path length, dash offset, smooth morphs. | **Legendary**: DrawSVG and MorphSVG plugins. | Moderate | Basic path animation | None |
| **R3F / WebGL Binding** | Good via custom motion values. | High: Direct object property mutation in `useFrame`. | **Native**: Direct Poimandres ecosystem synergy. | None | None |
| **Bundle Size Overhead** | ~30–35 KB (Gzip, tree-shakeable) | ~25–30 KB (Core + ScrollTrigger) | ~15–20 KB (Gzip) | **0 KB** | **~2 KB** |
| **Accessibility Handling** | **Automatic**: Native `ReducedMotionConfig` integration. | Manual: Requires `prefers-reduced-motion` conditional checks. | Manual | **Native**: `@media (prefers-reduced-motion)` query. | Automatic |
| **Licensing** | **MIT** (100% Free) | **Standard GreenSock** (Free for standard web) | **MIT** (100% Free) | **Open Standard** | **MIT** (100% Free) |

---

### Determined Motion Architecture

To prevent library duplication, the project enforces a clear separation of motion concerns:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    FREYER VERIFIED MOTION ARCHITECTURE                      │
├────────────────────────────────┬─────────────────────┬──────────────────────┤
│ Scope                          │ Assigned Tool       │ Primary Purpose      │
├────────────────────────────────┼─────────────────────┼──────────────────────┤
│ 1. Simple State Transitions    │ Tailwind CSS        │ Hover, focus, colors │
│ 2. Standard React UI Animation │ Motion (v11+)       │ Modals, drawers, tabs│
│ 3. Complex Scroll Storytelling │ GSAP + ScrollTrigger│ Pinned case studies  │
│ 4. Smooth Scroll Container     │ Lenis               │ Frame sync & jitter  │
│ 5. Continuous 3D/R3F Physics   │ react-spring / R3F  │ Canvas mesh motion   │
│ 6. Automatic List Smoothing    │ AutoAnimate         │ Dynamic filter lists │
└────────────────────────────────┴─────────────────────┴──────────────────────┘
```

---

## 4. Signature Freyer Experiences

### 1. Global Trade Corridor Hero
* **Purpose**: Establish immediate global scale and Indian connectivity upon first paint.
* **Visual Concept**: A dark ink canvas featuring an interactive, mathematically precise 3D dot-density globe showing real-time trade arcs connecting Indian hubs (Chennai, Mumbai, Delhi) to Rotterdam, Singapore, Dubai, and New York.
* **Recommended Technology**: **Three.js + React Three Fiber (R3F) + Drei**.
* **Fallback**: When WebGL is disabled or on low-power mobile devices, smoothly degrade to an interactive 2D SVG vector corridor map rendered via MapLibre or standard inline SVG.
* **Performance Considerations**: Limit globe geometry to < 2,500 points; render arcs with custom instanced line shaders; throttle rendering to idle when the canvas scrolls out of the viewport.

### 2. Project Cargo & Heavy Lift Scroll Narrative
* **Purpose**: Showcase Freyer’s specialized engineering capabilities in out-of-gauge (OOG) and heavy industrial transport.
* **Visual Concept**: A multi-stage, scroll-driven visual teardown of a 350-tonne transformer shipment. The viewport pins while step indicators, clearance route diagrams, and vessel stowage schematics transition smoothly.
* **Recommended Technology**: **GSAP + ScrollTrigger + Lenis**.
* **Fallback**: Standard vertical stepped cards with subtle Motion viewport fade-ins on mobile or reduced-motion environments.
* **Performance Considerations**: Use pure CSS transforms (`transform: translate3d`) for all pinned visual elements; avoid triggering browser layout/reflow during scrub.

### 3. Freyer Indian Network Command Center
* **Purpose**: Interactive proof of Freyer's nationwide infrastructure across 9 strategic commercial branch offices.
* **Visual Concept**: A high-contrast, dark architectural vector map of India highlighting Chennai (HQ), Mumbai, Delhi, Bengaluru, Hyderabad, Kolkata, Ahmedabad, Cochin, and Tuticorin. Selecting a hub zooms the camera and displays gateway metadata (nearest container terminal, IATA airport code, customs clearance turnaround time).
* **Recommended Technology**: **MapLibre GL JS + react-map-gl** with custom dark vector GeoJSON.
* **Fallback**: High-resolution interactive SVG map overlay with CSS hover pins and accessible semantic HTML list below.
* **Performance Considerations**: Load MapLibre asynchronously via dynamic import; use local vector GeoJSON boundaries rather than heavy external tile server requests.

### 4. Enterprise Freight Quote Configurator
* **Purpose**: Streamline enterprise freight inquiries into structured, high-conversion leads for air, ocean, customs, and warehousing.
* **Visual Concept**: A multi-step interactive configurator that smoothly morphs layout bounds as the user toggles between cargo modes, origin/destination ports, and container dimensions.
* **Recommended Technology**: **Radix Primitives + shadcn/ui + Motion (`layoutId`)**.
* **Fallback**: Standard multi-step semantic HTML form.
* **Performance Considerations**: Keep state management local; validate inputs with Zod without unmounting step DOM trees unnecessarily.

### 5. Technical Stat & Telemetry Counters
* **Purpose**: Communicate corporate track record ("9 Indian Branches", "150+ Supply Chain Specialists", "Est. 2018", "99.4% On-Time Clearance") with industrial precision.
* **Visual Concept**: Counters that animate into view with high-precision tabular numerals (`font-feature-settings: "tnum"`), simulating industrial digital telemetry readouts.
* **Recommended Technology**: **Custom `requestAnimationFrame` + Motion `useInView`**.
* **Fallback**: Static rendered tabular numerals.
* **Performance Considerations**: Single-run animation; zero external heavy counter libraries; zero layout shifts during count-up.

---

## 5. Design Reference Library

| Reference Domain / Sector | Benchmark Entities | Key Patterns to Learn & Adapt | What to Avoid |
| :--- | :--- | :--- | :--- |
| **Global Maritime & Terminal Operators** | Maersk, DP World, Hapag-Lloyd | Monospaced vessel/cargo identifiers, high-density telemetry badges, clean container grid layouts. | Outdated corporate portals, cluttered navigational mega-menus with 80+ unstructured links. |
| **Precision Aerospace & Defense** | Lockheed Martin, Planet Labs, Boeing | High-contrast dark ink backgrounds, orbital arc graphics, crisp micro-borders, authoritative technical typography. | Flashy sci-fi gaming HUDs, gratuitous glowing cyan accents. |
| **Swiss & German Industrial Engineering** | Siemens, Leica, Zeiss, Festo | Strict 12-column grid discipline, 1px subtle divider lines, generous whitespace, pristine product photography. | Boring monochrome text walls without visual rhythm or interactive engagement. |
| **High-End Interactive Digital Studios** | Active Theory, Resn, Build in Amsterdam | Buttery smooth scroll transitions, synchronized audio/visual cues, flawless mobile gesture response. | Heavy WebGL loaders, inaccessible custom scrollbars, flash-over-substance navigation. |

---

## 6. Commercial & Licensing Audit

### License Assessment Matrix

| License Type | Permitted for Commercial Use? | Redistribution Restrictions | Attribution Obligations | Freyer Project Compliance Action |
| :--- | :--- | :--- | :--- | :--- |
| **MIT License** | **YES** | None | Keep copyright notice in bundle source | Standard inclusion across all primary UI libraries (Radix, Motion, Three.js). |
| **Apache 2.0** | **YES** | None | Keep copyright & NOTICE file in source | Standard inclusion; safe for enterprise client delivery. |
| **BSD-3-Clause** | **YES** | Cannot use project name for endorsement | Keep copyright notice in source | Approved (MapLibre GL JS). |
| **ISC License** | **YES** | None | Keep copyright notice in source | Approved (Lucide Icons). |
| **SIL OFL 1.1** | **YES** | Cannot sell font files alone | Keep OFL license text intact | Approved for Plus Jakarta Sans, Inter, JetBrains Mono. Fonts must be self-hosted. |
| **GreenSock Standard** | **YES (Free)** | Free for standard commercial corporate sites | Standard GreenSock credit in JS bundle | Free for Freyer corporate site. Commercial license required only if users are charged a recurring fee to access the site. |
| **ODbL (OpenStreetMap)** | **CONDITIONAL** | Database derivative share-alike | Attribution must appear on map view | **ACTION REQUIRED**: Do not directly embed raw OSM raster tiles; use custom MapLibre vector layers with standard map attribution line. |
| **GPL / AGPL** | **STRICTLY PROHIBITED** | Viral copyleft (requires open-sourcing client codebase) | Mandatory open source | **AUDIT CHECK**: Zero GPL/AGPL dependencies permitted in production bundle. |

---

## 7. Performance Guidelines & Targets

### Project Performance Budgets (Targets)

> *Note: These are strict engineering targets for the Freyer project to ensure optimal loading for enterprise supply-chain directors worldwide.*

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                 FREYER ENGINEERING PERFORMANCE TARGETS                      │
├───────────────────────────────┬────────────────────┬────────────────────────┤
│ Metric / Asset Class          │ Budget Target      │ Enforcement Mechanism  │
├───────────────────────────────┼────────────────────┼────────────────────────┤
│ Initial JS Bundle (Gzip)      │ < 160 KB           │ Code-splitting / Next  │
│ Largest Contentful Paint (LCP)│ < 1.8 seconds      │ Font/Image Preloading  │
│ Interaction to Next Paint(INP)│ < 100 ms           │ Pure CSS/WAAPI Hovers  │
│ Cumulative Layout Shift (CLS) │ 0.000              │ Explicit Aspect Ratios │
│ WebGL GPU Memory Footprint    │ < 35 MB VRAM       │ KTX2 texture compress  │
│ WebGL Draw Calls              │ < 30 calls/frame   │ Mesh batching/instance │
│ Imagery Format Standard       │ AVIF / WebP        │ Next.js Image Pipeline │
│ Background Video Payloads     │ < 2.5 MB (H.264)   │ Muted, looped, no audio│
└───────────────────────────────┴────────────────────┴────────────────────────┘
```

### Critical Optimization Strategies
1. **Dynamic Imports**: Three.js/R3F canvases and MapLibre map containers must be loaded via `next/dynamic` with `ssr: false` inside lazy-rendered viewport wrappers.
2. **Font Self-Hosting**: All fonts (`.woff2`) must be self-hosted within `public/fonts/` with `font-display: swap` to eliminate external Google CDN network hops.
3. **Hardware Acceleration**: Only animate composite-friendly properties (`transform: translate3d`, `opacity`, `filter`). Never animate `width`, `height`, `margin`, `padding`, or `top/left`.

---

## 8. Anti-Patterns & Prohibited Elements

To protect Freyer from looking like an AI-generated prototype or cheap SaaS clone, the following anti-patterns are strictly **PROHIBITED**:

- ❌ **Excessive Glassmorphism**: Overlapping blurry translucent panels that degrade text contrast and GPU performance.
- ❌ **Neon Gradients & Glowing Blobs**: Irrelevant purple/cyan glow blobs that evoke Web3 or crypto scams rather than enterprise logistics.
- ❌ **Gratuitous 3D Objects**: Floating 3D coins, generic spinning cubes, or decorative models that provide zero informational value.
- ❌ **Meaningless Particle Systems**: Drifting dust or particle meshes that add GPU lag and distract from core messaging.
- ❌ **Jelly / Bouncy Spring Physics**: Overshooting, playful bouncy animations that undermine institutional reliability.
- ❌ **Infinite Scrolling Marquees on Everything**: Cluttered marquees cycling random logos; use clean, structured static trust grids instead.
- ❌ **Generic AI Imagery**: Stock photos of corporate actors holding empty clipboards in clean warehouses or AI-generated human figures with distorted anatomy.
- ❌ **Inconsistent Border Radii**: Mixing sharp square edges with pill-shaped cards; stick strictly to the established design system tokens (`md: 8px`, `lg: 12px`).

---

## 9. Final Recommended Stack

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                   FREYER FINAL RECOMMENDED TECHNOLOGY STACK                 │
├───────────────────────────────┬─────────────────────────────────────────────┤
│ Technology Layer              │ Selection                                   │
├───────────────────────────────┼─────────────────────────────────────────────┤
│ **Core Application Framework**│ Next.js 14+ (App Router), React 18/19, TS   │
│ **Styling & Design Tokens**   │ Tailwind CSS v3.4+, Custom Tokens (tokens.ts│
│ **Accessible Headless UI**    │ Radix Primitives + shadcn/ui Architecture   │
│ **Primary UI Motion Engine**  │ Motion (Framer Motion v11+)                 │
│ **Cinematic Scroll & Story**  │ GSAP 3.12+ (ScrollTrigger) + Lenis Scroll   │
│ **3D / WebGL Visualizations** │ Three.js + React Three Fiber (R3F) + Drei   │
│ **Geospatial & Vector Maps**  │ MapLibre GL JS + react-map-gl (GeoJSON)     │
│ **Iconography System**        │ Lucide React (Tree-shaken SVGs)             │
│ **Typography System**         │ Plus Jakarta Sans (Headings), Inter (Body), │
│                               │ JetBrains Mono (Technical Metadata / Labels)│
│ **Quality & Accessibility**   │ axe-core, ESLint-plugin-jsx-a11y            │
└───────────────────────────────┴─────────────────────────────────────────────┘
```

---

## 10. Decision Guide: "When to Use What"

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           WHEN TO USE WHAT: RUNTIME GUIDE                   │
├─────────────────────────────────────────────────────────────────────────────┤
│ • Use CSS Transitions when:                                                 │
│   Toggling hover colors, focus rings, simple opacity fades, or border shifts│
│                                                                             │
│ • Use Motion when:                                                          │
│   Animating component mounts/unmounts (AnimatePresence), mobile drawers,    │
│   dropdown menus, modal dialogs, tab switching, and spring micro-interaction│
│                                                                             │
│ • Use GSAP + ScrollTrigger when:                                            │
│   Building multi-phase pinned scroll sequences (e.g. Project Cargo breakdown│
│   animating complex SVG trade route paths across multiple viewports.        │
│                                                                             │
│ • Use react-spring when:                                                    │
│   Handling high-frequency, non-vDOM spring physics directly on 3D meshes or │
│   cursor-following coordinate overlays.                                     │
│                                                                             │
│ • Use R3F / Three.js when:                                                  │
│   Rendering the interactive 3D global trade network or orbital route arcs.  │
│                                                                             │
│ • Use MapLibre GL JS when:                                                  │
│   Displaying interactive, pannable geographic vector maps of Indian branch  │
│   offices and multimodal transport routes with custom styled markers.       │
│                                                                             │
│ • AVOID WebGL / 3D when:                                                    │
│   Displaying standard information (forms, service listings, compliance data,│
│   contact info, branch addresses). Always use clean semantic DOM for content│
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 11. Top Recommendations & Summary

### Top 15 Resources Worth Keeping
1. **Next.js (App Router)** — Robust framework with SSR and image optimization.
2. **Tailwind CSS** — Utility-first styling tied strictly to tokens.
3. **Radix Primitives** — Headless accessible foundation.
4. **shadcn/ui** — In-repo UI component ownership.
5. **Motion (Framer Motion)** — React declarative motion standard.
6. **GSAP + ScrollTrigger** — Unbeatable timeline pinning and scrubbing.
7. **Lenis** — Frame-synchronized smooth scroll engine.
8. **Three.js** — Core WebGL engine.
9. **React Three Fiber (R3F)** — Declarative React 3D scenes.
10. **@react-three/drei** — R3F helper utilities.
11. **MapLibre GL JS** — Zero-cost open-source vector maps.
12. **react-map-gl** — React binding for vector maps.
13. **Lucide Icons** — Crisp, tree-shaken SVGs.
14. **Plus Jakarta Sans (OFL)** — Authoritative industrial display font.
15. **JetBrains Mono (OFL)** — Precision telemetry font.

### Top 5 Resources Most Likely to Create a Genuine "Wow" Moment
1. **R3F Interactive Global Trade Corridor Hero**: Precision 3D arcs connecting Indian hubs to global trade routes.
2. **GSAP Pinned Project Cargo Narrative**: Interactive scroll-driven breakdown of heavy-lift industrial cargo transport.
3. **MapLibre 9-Branch Command Center**: High-resolution, dark architectural vector map of India with instant hub telemetries.
4. **Motion Shared-Layout Freight Configurator**: Seamless quote builder that morphs smoothly between cargo mode selections.
5. **Precision Telemetry Stat Displays**: High-density monospaced counters with zero-jitter tabular numerals.

### Top 5 Resources Most Likely to Damage Quality if Misused
1. **Unconstrained WebGL / Three.js**: Can destroy mobile battery and trigger severe frame drops if unbudgeted.
2. **Over-animated Framer Motion springs**: Bouncy, playful physics will make a serious enterprise logistics firm feel like a toy app.
3. **Aceternity UI / Flashy Cyberpunk Snippets**: Neon glowing borders and particle fields will immediately undermine B2B credibility.
4. **Unoptimized Video Headers**: Large MP4 hero loops will cripple Core Web Vitals (LCP) and mobile data.
5. **Uncoordinated Scroll Jitter**: Running multiple competing scroll listeners without Lenis/GSAP synchronization.

### Biggest Commercial & Licensing Risks
* **Font Privacy & Hosting**: Never fetch fonts from Google Fonts at runtime; always self-host `.woff2` files to ensure GDPR compliance.
* **Mapbox Token Costs**: Do not use proprietary Mapbox GL; use open-source MapLibre GL to eliminate recurring token bills.
* **Asset Copyright**: Never use uncredited web images for logistics assets; ensure all photography is owned or CC0/licensed.

### Biggest Performance Risks
* **Un-split 3D / Map Bundles**: Failing to lazy-load R3F or MapLibre will balloon the initial JS bundle above 500 KB.
* **Main-Thread Layout Thrashing**: Animating non-composite properties (`width`, `top`, `margin`) during scroll.

### Open Questions for Later Verification
1. Does Freyer possess high-resolution photography of their actual Indian branch facilities and port operations, or will curated editorial stock be required?
2. Are live container/airway bill tracking APIs available from Freyer's backend for real-time tracking integration?
3. What are the exact lat/long coordinates and operational specifications (customs EDI code, nearest seaport/airport) for all 9 Indian branches?
