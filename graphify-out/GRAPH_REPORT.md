# Graph Report - Freyer International Logistics Pvt. Ltd  (2026-08-28)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 536 nodes · 678 edges · 73 communities (64 shown, 9 thin omitted)
- Extraction: 97% EXTRACTED · 3% INFERRED · 0% AMBIGUOUS · INFERRED: 17 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1a71b4d5`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- jquery.js
- WOW
- app/page.tsx
- devDependencies
- dependencies
- include
- compilerOptions
- package.json
- RfqProduct.tsx
- jquery.mb.YTPlayer.js
- services/page.tsx
- matcherFromTokens
- Footer.tsx
- e
- verified_qa.js
- Header.tsx
- buildFragment
- about/page.tsx
- Animation
- simple-lightbox.js
- v1_1_final_qa.js
- AnimOnScroll.js
- bootstrap.min.js
- imagesloaded.js
- network-partners/page.tsx
- capture_audit_screenshots.js
- take_screenshots_and_a11y.js
- projects/page.tsx
- [slug]/page.tsx
- capture_hero_restoration.js
- live_prod_verification.js
- measure_home_geometry.js
- qa_home_editorial.js
- layout.tsx
- defaultDisplay
- client.ts
- run_qa.js
- index.ts
- contact/page.tsx
- locations/page.tsx
- NetworkGrid.tsx
- rfq-failure-suite.js
- sitemap.ts
- createCache
- inspectPrefiltersOrTransports
- next.config.ts

## God Nodes (most connected - your core abstractions)
1. `WOW()` - 24 edges
2. `compilerOptions` - 16 edges
3. `Footer()` - 14 edges
4. `Header()` - 14 edges
5. `include` - 13 edges
6. `Util()` - 9 edges
7. `e()` - 9 edges
8. `n()` - 8 edges
9. `scripts` - 7 edges
10. `i()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `RfqProduct()` --calls--> `submitRfqAction()`  [EXTRACTED]
  components/home/RfqProduct.tsx → app/actions/submitRfq.ts

## Import Cycles
- None detected.

## Communities (73 total, 9 thin omitted)

### Community 0 - "jquery.js"
Cohesion: 0.05
Nodes (9): RFC-2616, augmentWidthOrHeight(), filterHidden(), getDisplay(), getWidthOrHeight(), internalRemoveData(), isEmptyDataObject(), NOTE: This can be skipped if there are no unmatched elements (i.e.,… (+1 more)

### Community 1 - "WOW"
Cohesion: 0.12
Nodes (4): MutationObserver(), Util(), WeakMap(), WOW()

### Community 2 - "app/page.tsx"
Cohesion: 0.09
Nodes (17): ACCREDITATIONS, AccreditationsProof(), CAPABILITIES, CapabilitiesIndex(), CapabilityItem, HeroSection(), HUB_COORDS, HubCoord (+9 more)

### Community 3 - "devDependencies"
Cohesion: 0.07
Nodes (27): @axe-core/puppeteer, eslint, lighthouse, devDependencies, @axe-core/puppeteer, eslint, lighthouse, postcss (+19 more)

### Community 4 - "dependencies"
Cohesion: 0.08
Nodes (25): clsx, firebase, firebase-admin, gsap, hls.js, lucide-react, motion, next (+17 more)

### Community 5 - "include"
Cohesion: 0.11
Nodes (18): app/**/*.ts, app/**/*.tsx, components/**/*.ts, components/**/*.tsx, freyer-forensics, freyer-forensics-v2, lib/**/*.ts, lib/**/*.tsx (+10 more)

### Community 6 - "compilerOptions"
Cohesion: 0.11
Nodes (19): dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules (+11 more)

### Community 7 - "package.json"
Cohesion: 0.11
Nodes (17): allowScripts, esbuild@0.28.2, @firebase/util@1.15.3, protobufjs@7.6.5, puppeteer@25.9.0, name, overrides, uuid (+9 more)

### Community 8 - "RfqProduct.tsx"
Cohesion: 0.17
Nodes (12): submitRfqAction(), SubmitRfqResult, CARGO_TYPES, RfqProduct(), ServiceOption, SERVICES, adminDb, adminStorage (+4 more)

### Community 9 - "jquery.mb.YTPlayer.js"
Cohesion: 0.18
Nodes (8): cancelFullscreen(), CreateVideosArray(), getVideoListFromYoutube(), launchFullscreen(), RunPrefixMethod(), setFilter(), setUnit(), uncamel()

### Community 10 - "services/page.tsx"
Cohesion: 0.20
Nodes (8): metadata, FAQItem, FAQS, ServiceFAQ(), PROJECT_EXECUTION_STAGES, PROJECT_SECTORS, ServicesExplorer(), WAREHOUSE_19_CAPABILITIES

### Community 11 - "matcherFromTokens"
Cohesion: 0.20
Nodes (12): addCombinator(), condense(), createPositionalPseudo(), elementMatcher(), markFunction(), matcherFromGroupMatchers(), matcherFromTokens(), multipleContexts() (+4 more)

### Community 12 - "Footer.tsx"
Cohesion: 0.22
Nodes (4): metadata, PRACTICE_AREAS, metadata, Footer()

### Community 13 - "e"
Cohesion: 0.55
Nodes (10): e(), i(), i(), o(), n(), n(), o(), r() (+2 more)

### Community 14 - "verified_qa.js"
Cohesion: 0.20
Nodes (10): checkUrl(), { execSync }, fs, http, OUT_DIR, path, puppeteer, REPORT_PATH (+2 more)

### Community 15 - "Header.tsx"
Cohesion: 0.27
Nodes (3): metadata, metadata, Header()

### Community 16 - "buildFragment"
Cohesion: 0.27
Nodes (10): buildFragment(), createSafeFragment(), disableScript(), domManip(), fixCloneNodeIssues(), fixDefaultChecked(), getAll(), remove() (+2 more)

### Community 17 - "about/page.tsx"
Cohesion: 0.25
Nodes (6): metadata, AboutExplorer(), ALL_AWARDS, FEATURED_AWARDS, GLOBAL_ALLIANCES, REGIONAL_BRANCHES

### Community 18 - "Animation"
Cohesion: 0.25
Nodes (9): ajaxConvert(), ajaxHandleResponses(), Animation(), createFxNow(), createTween(), defaultPrefilter(), done(), propFilter() (+1 more)

### Community 19 - "simple-lightbox.js"
Cohesion: 0.36
Nodes (8): _arrayLikeToArray(), _classCallCheck(), _createClass(), _createForOfIteratorHelper(), _defineProperties(), _defineProperty(), SimpleLightbox(), _unsupportedIterableToArray()

### Community 20 - "v1_1_final_qa.js"
Cohesion: 0.25
Nodes (8): http, path, puppeteer, ROUTES, runFinalV11QA(), { spawn }, VIEWPORTS, waitForServer()

### Community 21 - "AnimOnScroll.js"
Cohesion: 0.39
Nodes (6): AnimOnScroll(), extend(), getOffset(), getViewportH(), inViewport(), scrollY()

### Community 22 - "bootstrap.min.js"
Cohesion: 0.75
Nodes (7): e(), i(), l(), n(), r(), s(), u()

### Community 23 - "imagesloaded.js"
Cohesion: 0.36
Nodes (5): defineImagesLoaded(), ImagesLoaded(), extend(), isArray(), makeArray()

### Community 24 - "network-partners/page.tsx"
Cohesion: 0.33
Nodes (4): metadata, ALLIANCES, NetworkAlliances(), STEPS

### Community 25 - "capture_audit_screenshots.js"
Cohesion: 0.29
Nodes (6): fs, OUT_DIR, path, puppeteer, ROUTES, VIEWPORTS

### Community 26 - "take_screenshots_and_a11y.js"
Cohesion: 0.29
Nodes (6): { AxePuppeteer }, fs, PAGES, path, puppeteer, VIEWPORTS

### Community 27 - "projects/page.tsx"
Cohesion: 0.40
Nodes (3): metadata, Project, ProjectsExplorer()

### Community 29 - "capture_hero_restoration.js"
Cohesion: 0.33
Nodes (5): fs, OUT_DIR, path, puppeteer, VIEWPORTS

### Community 30 - "live_prod_verification.js"
Cohesion: 0.33
Nodes (5): fs, path, puppeteer, ROUTES, VIEWPORTS

### Community 31 - "measure_home_geometry.js"
Cohesion: 0.33
Nodes (5): fs, OUT_DIR, path, puppeteer, VIEWPORTS

### Community 32 - "qa_home_editorial.js"
Cohesion: 0.33
Nodes (5): fs, OUT_DIR, path, puppeteer, VIEWPORTS

### Community 33 - "layout.tsx"
Cohesion: 0.40
Nodes (3): metadata, poppins, viewport

### Community 34 - "defaultDisplay"
Cohesion: 0.50
Nodes (5): actualDisplay(), completed(), defaultDisplay(), detach(), showHide()

### Community 35 - "client.ts"
Cohesion: 0.40
Nodes (4): app, db, firebaseConfig, storage

### Community 36 - "run_qa.js"
Cohesion: 0.40
Nodes (4): { AxePuppeteer }, fs, puppeteer, VIEWPORTS

### Community 37 - "index.ts"
Cohesion: 0.40
Nodes (4): AccreditationBadge, BranchLocation, ProjectCaseStudy, ServiceType

## Knowledge Gaps
- **184 isolated node(s):** `FAQItem`, `CapabilityItem`, `HubCoord`, `Branch`, `BranchDetails` (+179 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.010) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.009) - this node is a cross-community bridge._
- **Why does `Footer()` connect `Footer.tsx` to `app/page.tsx`, `contact/page.tsx`, `locations/page.tsx`, `services/page.tsx`, `Header.tsx`, `about/page.tsx`, `network-partners/page.tsx`, `projects/page.tsx`, `[slug]/page.tsx`?**
  _High betweenness centrality (0.008) - this node is a cross-community bridge._
- **What connects `FAQItem`, `CapabilityItem`, `HubCoord` to the rest of the system?**
  _184 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `jquery.js` be split into smaller, more focused modules?**
  _Cohesion score 0.0524390243902439 - nodes in this community are weakly interconnected._
- **Should `WOW` be split into smaller, more focused modules?**
  _Cohesion score 0.11587301587301588 - nodes in this community are weakly interconnected._
- **Should `app/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09113300492610837 - nodes in this community are weakly interconnected._