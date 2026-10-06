import React from "react";
import Link from "next/link";

/**
 * ManifestHero
 *
 * Video block copied verbatim from FTRHero.tsx lines 30–49.
 * Only the content overlay (copy, CTA) differs.
 * No motion library used — scroll-reveal handled at page level.
 */
export function ManifestHero() {
  return (
    <section
      aria-label="Freyer International Logistics — Hero"
      className="relative bg-[#121316] text-[#F8F7F4] min-h-[100svh] pb-[72px] flex flex-col"
    >
      {/* ═══════════════════════════════════════
          01. REAL FREYER CORPORATE VIDEO BACKGROUND
          (verbatim copy from FTRHero.tsx lines 30–49)
      ═══════════════════════════════════════ */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center brightness-75"
          aria-hidden="true"
        >
          {/* Serve lighter mobile cut on narrow screens */}
          <source src="/video/freyer-hero-mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
          <source src="/video/freyer-hero.mp4" type="video/mp4" />
        </video>

        {/* Scrim: darkens video so text remains legible without hiding footage */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121316]/90 via-[#121316]/45 to-[#121316]/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121316]/60 via-transparent to-[#121316]/60" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#121316]/85 to-transparent" />
      </div>

      {/* ═══════════════════════════════════════
          02. HERO CONTENT
      ═══════════════════════════════════════ */}
      <div className="relative z-10 flex-1 flex items-end">
        <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 pb-20">

          {/* Eyebrow */}
          <p
            className="font-['var(--font-ibm-plex-mono)',ui-monospace,monospace] text-[11px] uppercase tracking-[0.16em] text-[#A1A1AA] mb-5"
          >
            Logistics Beyond Boundaries
          </p>

          {/* H1 */}
          <h1
            className="font-['var(--font-archivo)',ui-sans-serif,sans-serif] font-bold text-[clamp(44px,7vw,96px)] leading-[1.02] text-[#F8F7F4] max-w-4xl"
          >
            Freyer International
          </h1>

          {/* Sub-copy */}
          <p
            className="font-['var(--font-ibm-plex-sans)',ui-sans-serif,sans-serif] text-[17px] font-light text-[#A1A1AA] max-w-[60ch] mt-6"
          >
            Licensed CBIC AEO-LO multimodal freight forwarding, international air and ocean cargo, and heavy-lift
            logistics engineered up to 482 metric tons across 10 Indian branch stations.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 font-['var(--font-ibm-plex-mono)',ui-monospace,monospace] uppercase text-xs tracking-[0.08em] text-white bg-[#E1390F] hover:bg-[#C42F0B] h-[52px] px-8 rounded-none transition-colors duration-150"
            >
              Request a Freight Quote
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="miter"
                aria-hidden="true"
                className="transition-transform duration-150 group-hover:translate-x-1"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
