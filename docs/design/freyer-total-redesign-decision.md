# FREYER INTERNATIONAL — TOTAL REDESIGN: DECISION RECORD

**Date**: September 2026  
**Winner**: Direction C — MASS  
**Score**: 94/100  
**Companion**: `docs/design/freyer-total-redesign-directions.md`

---

## 1. The Decision

**Direction C — MASS** is selected as the sole implementation target.

---

## 2. Why Direction C Wins

### 2.1 The Holy Shit Test Answer

Ask: *What will the visitor remember 24 hours later?*

**Answer**: The number `482` — in enormous display type — with the actual breakbulk cargo stowage photograph visible *through the interior of the digits*.

No other freight forwarder can produce that visual. It requires:
- The actual verified project record (Project Archive #9)
- The actual field photograph (`/images/2.1.jpg`)
- The design intelligence to make a number that large into a window on real physical evidence

That is a Freyer-specific memory. Not a technique that could be reused by DHL, Maersk, or any regional forwarder who cannot document 482 metric tons.

### 2.2 Technical Specifics of the Signature Moment

The CSS `background-clip: text` technique fills the `482` numeral with the cargo photograph:

```css
.cargo-number {
  background-image: url('/images/2.1.jpg');
  background-size: 120% auto;
  background-position: center;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: clamp(12rem, 28vw, 28rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 0.85;
}
```

On scroll entry, `background-size` animates from `160% auto` to `110% auto`, creating a subtle zoom-through-the-number reveal. Zero WebGL. Zero Three.js. Zero canvas. Full browser support. Respects `prefers-reduced-motion`.

### 2.3 Why Not Direction A (Physical Document)

Direction A scored 88/100. Its strength — radical brutalist typography — is also its weakness for Freyer's commercial context. The purely black-and-white palette with no warmth creates too much friction for mid-market commercial clients who may interpret it as harsh or unapproachable. It would work better for a creative or art-direction studio. Freyer needs to close freight contracts, not win design awards.

### 2.4 Why Not Direction B (Meridian)

Direction B scored 87/100. The amber/navy maritime palette is excellent and has the highest Freyer brand fit of the three directions. However, it fails the distinctiveness test: **it is too close to Maersk**. Maersk uses a blue/white system; Meridian's amber version is different enough visually, but the enterprise-maritime-command-center aesthetic is precisely what the largest competitor in the sector already owns. Freyer must not look like a smaller version of Maersk.

---

## 3. What Was Discarded from the Old System

| Component | Verdict | Reason |
|-----------|---------|--------|
| `CleanHeroFinalist.tsx` — video + centered headline | **REPLACED** | Generic dark-video hero convention. Not distinctive. |
| `CargoToServicesBridge.tsx` — plain text bridge | **REPLACED** | Editorial copy orphan — no visual design. |
| `ServicesToNetworkBridge.tsx` — plain text bridge | **REPLACED** | Same issue as above. |
| `DirectDispatchFinalist.tsx` — basic form + contacts | **REPLACED** | Not a product-grade conversion experience. |
| `Footer` — 2-line mono colophon | **REPLACED** | Zero utility, zero personality. |
| Transparent-to-solid header animation | **KEPT & RETHOUGHT** | The behavior is right; the visual design is upgraded. |
| `CargoScaleFinalist.tsx` — toggle between records | **SUPERSEDED** | The monument approach is more powerful than a toggle. |

---

## 4. What Was Preserved

| Asset / System | Verdict | Reason |
|----------------|---------|--------|
| All verified facts (482 MT, 37.6 MT, routes, dimensions) | **KEPT** | Non-negotiable truth anchor |
| D3-Geo India map geometry | **KEPT** | Mathematically correct, already verified |
| Station data (10 stations, addresses, phones, emails) | **KEPT** | Verified from source records |
| `STATIONS_DATA` from `AuthoritativeIndiaMap.tsx` | **REUSED** | No reason to duplicate verified data |
| `MAINLAND_PATH` and `ISLAND_PATHS` SVG geometry | **REUSED** | Verified correct geographic paths |
| Poppins typeface system | **KEPT** | Official Freyer brand typeface |
| Color system (navy, red, white) | **KEPT** | Freyer identity |
| AEO-LO, IATA, WCA, SCN accreditations | **KEPT** | Verified credentials |
| Sequential services editorial pattern | **KEPT (elevated)** | The 6-service alternating layout is strong — made bolder |

---

## 5. New Visual Language

```
GROUND:       #05090f  — Industrial near-black (blue-shifted)
SURFACE:      #09111e  — Elevated surface
ACCENT RED:   #e1390f  — Physical evidence numbers, primary CTAs only
WHITE:        #ffffff  — Primary text on dark
DIM TEXT:     #94a3b8  — Secondary metadata
BORDER:       rgba(255,255,255,0.10) — Section dividers

TYPOGRAPHY:
  Display:    Poppins 700, clamp(8rem, 22vw, 22rem) — cargo monument numbers
  Headline:   Poppins 700, clamp(2.5rem, 5vw, 4.5rem)
  Subhead:    Poppins 600, clamp(1.5rem, 3vw, 3rem)
  Body:       Poppins 400, 16–18px, leading 1.6
  Mono/Label: ui-monospace, 10–13px, tracking 0.1em uppercase
  
SCALE CONTRAST: 28:1 ratio between largest display number (cargo) and smallest label
```

---

## 6. New Navigation Strategy

**Desktop**:
- Fixed header: transparent on homepage hero, solid dark on scroll
- Logo (Freyer wordmark) — left
- Nav links in Poppins medium small caps — center: Services · Projects · About · Locations · Contact
- Persistent: mono phone number + red "Request Rate" button — right
- No mega-menu dropdown (flat navigation preserves focus clarity)

**Mobile**:
- Hamburger triggers full-screen dark drawer
- Drawer: large nav links with generous touch targets (48px min)
- Bottom of drawer: "Request Quote" (full-width red) + "Call Chennai HQ" (full-width ghost)
- No bottom nav bar (not a native app — avoid app mimicry on a B2B logistics site)

---

## 7. New Homepage Narrative

The page answers 5 questions in sequence with zero filler:

```
[WHO IS FREYER?]
Asymmetric editorial hero — wordmark + capability statement + credentials.
The right column is raw documentary evidence (breakbulk photo), not decoration.

[CAN THEY BE TRUSTED?]
Single-line accreditation ribbon: AEO-LO · IATA · WCA · SCN · AMTOI
One quiet line. No boast. Institutional brevity.

[HOW MUCH CAN THEY MOVE?]
The 482 MT cargo monument — the number, carved from the photograph.
The 37.6 MT boom crane record below. Two records. No invented claims.

[WHAT DO THEY DO FOR MY SHIPMENT?]
Six services in editorial sequence. Real photography. Verified specs.
The same company that moves 482 MT also handles my FCL container.

[WHERE ARE THEY IN INDIA?]
10 stations. 8 cities. The real India, accurately drawn.
Tap a station, get a direct phone number.

[HOW DO I REACH THEM?]
Direct. Name. Company. Service. Message. Submit.
Or: here is the Chennai HQ phone, address, and email.
```

---

## 8. Signature Interaction

**The CSS Photo-Clip Monument**:
The `482` numeral at 28vw in Poppins Bold 700, with the breakbulk cargo photograph as its fill color via `background-clip: text`. On scroll entry, the `background-size` animates from slightly zoomed to natural, creating the illusion of the photograph slowly revealing itself through the number.

This is not a gimmick. It is a typographic device that makes the number *inseparable* from its physical evidence. You cannot see `482` without seeing the cargo. That is design in service of truth.

---

## 9. Mobile Strategy

- Hero: Stacked — wordmark fills 100vw, cargo photo below at 50vh
- Cargo monument: Number at 40vw, photo above, data plate below
- Services: Full-width stacked blocks. Step number at 8vw (readable, not overwhelming)
- Network: Station chip rail (horizontal scroll) above the map; map below
- Dispatch: Single-column form then contact data below
- Navigation: Dark full-screen drawer with generous touch targets
- No scroll-pinning on mobile — let native touch govern

---

## 10. Performance Strategy

| Risk | Mitigation |
|------|-----------|
| CSS text-clip photo loading | Image preloaded via `priority` on `FTRCargoMonument` |
| India SVG path size | Paths reused from existing verified component (no re-parsing) |
| Heavy section photography | Next.js `Image` with lazy loading on all services images |
| Animation performance | Only CSS `transform` and `opacity` animated — zero layout triggers |
| Mobile animation cost | All Intersection Observer animations disabled on `(prefers-reduced-motion: reduce)` |
| Three.js / WebGL | **Not used** |
| Scroll hijacking | **Not used** |
| Lenis smooth scroll | **Not used** — native scroll only per design doctrine |

---

## 11. Remaining Risks

1. **Hero photo quality**: `/images/2.1.jpg` (141 KB) is adequate for web use but was originally a smaller scan. The CSS clip technique makes the photo quality less critical (low resolution reads as texture within the clip), but a medium-format replacement from active port operations would be superior.

2. **Right-column hero on very wide viewports**: At 2560px+, the right-column photo may feel disconnected from the left text column. This is mitigated by capping the layout container at 1600px and having the photo fill to the right viewport edge via absolute positioning.

3. **"FREYER" at 22vw on small laptops (1280px)**: At this size, "FREYER" is approximately 280px tall. This may clip awkwardly if the font loads slowly. Mitigated by system-font fallback with similar weight and Poppins font-display: swap.

4. **Cargo photo clip on Safari**: `background-clip: text` requires the `-webkit-` prefix on Safari. This is included in the implementation.

5. **The network map on ultrawide**: The India SVG viewBox is set to 620×1200. At ultrawide viewports, this creates excessive empty space left and right. Mitigated by constraining the map section's max-width.

---

## 12. Next Implementation Steps (Post-Homepage)

1. Graduate `FTRNav.tsx` as the permanent production header (replace `components/layout/Header.tsx`)
2. Build `/services` page as the exhaustive service catalog using the MASS visual language
3. Build `/projects` page with the spec-card grid using real project archive data
4. Build `/locations` page using the FTRNetwork component as a standalone page
5. Rebuild `/about` as an editorial milestone timeline
6. Rebuild `/contact` as a full-page version of FTRDispatch with a progressive 3-step RFQ wizard
7. Update production `app/page.tsx` to reference the new experiment once approved
