# Video Performance & Delivery Architecture Audit (Production Verified)

## 1. Live Production Vercel Baseline vs. Adaptive HLS

Target: `https://freyer-international-logistics.vercel.app/`  
Deployed Commit: `6330440` (HLS Adaptive Bitrate Ladder)

| Metric / Property | Wi-Fi / Unthrottled | Fast 4G (1.5 Mbps, 40ms RTT) | Slow 4G (500 Kbps, 150ms RTT) |
|---|---|---|---|
| **Time to First Frame** | **503 ms** | **5,158 ms** (uncached cold) / **479 ms** (warm) | Poster immediately visible (0 ms), segments buffer in background |
| **Rendition @ First Frame** | **1920x1080 (1080p)** | **854x480 (480p)** | Poster frame fallback |
| **Final Stable Rendition** | **1920x1080 (1080p)** | **854x480 / 1280x720** | Adapts to network capacity |
| **Autoplay / Muted / PlaysInline** | `true` / `true` / `true` | `true` / `true` / `true` | `true` / `true` / `true` |
| **Console Errors** | **0** | **0** | **0** |
| **HLS Manifest / Segment Status** | 200 OK / 304 Not Modified | 200 OK / 304 Not Modified | 200 OK / 304 Not Modified |
| **CORS / MIME-Types** | `video/mp2t`, `application/vnd.apple.mpegurl` | `video/mp2t` | `video/mp2t` |

---

## 2. Architecture Comparison & Decision Matrix

| Dimension | Option A: YouTube Embed | Option B: Self-Hosted HLS Ladder (Chosen) | Option C: Cloudflare Stream | Option D: Mux Video |
|---|---|---|---|---|
| **Startup Latency** | 1.5s - 3.0s | **<500ms (Wi-Fi), fast low chunk (4G)** | <500ms | <500ms |
| **Adaptive Bitrate (ABR)** | YouTube blackbox | **HLS 1080p / 720p / 480p / 360p** | Cloudflare ABR (max 1080p) | Mux ABR |
| **Visual Quality & Control** | Low (branding, UI quirks) | **100% Native (Motion, Vignette, WCAG)** | 100% Native | 100% Native |
| **Implementation Complexity** | Low | **Low (FFmpeg segments + `hls.js`)** | Medium | Medium |
| **Platform Compatibility** | Universal iframe | **Universal (`hls.js` MSE + Native Safari/iOS)**| Universal | Universal |
| **Operating Cost** | Free | **$0 / Static Vercel CDN** | Paid | Paid |

---

## 3. Preserved Hero Design & Accessibility
- [x] Official Freyer logo mark + "Logistics Beyond Boundaries" brand lockup (+40% scale).
- [x] Headline: "Complex cargo. Precisely moved."
- [x] Action: Single primary "Request a Quote" CTA (No "Watch Film" button).
- [x] Pause/Play toggle (WCAG 2.2.2 compliance) + `prefers-reduced-motion` support.
- [x] Neutral black cinematic vignette overlay.
- [x] 0ms instant poster frame transition.
