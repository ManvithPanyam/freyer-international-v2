"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Shield, Anchor } from "lucide-react";
import { motion } from "motion/react";

/**
 * FTRHero — AWARD-WINNING INDUSTRIAL AUTHORITY
 *
 * Sizing & Placement Principles:
 * 1. Clean vertical structure: Nav (72px) -> Centered High-Legibility Title Block -> Docked Stats Bar.
 * 2. Uncluttered layout: Eliminate competing ticker strips that cramp the headline.
 * 3. Proportional headline typography:
 *    - Balanced clamp(2.5rem, 5.5vw, 5.2rem) so it commands the page without swallowing the viewport.
 * 4. Multi-plane cinematic lighting:
 *    - Preserves rich video color at top/center while providing seamless high-contrast dark foundation.
 */

const STATS = [
  { value: "482 MT", label: "MAX HEAVY LIFT", sub: "Record #9 · Breakbulk Stowage" },
  { value: "10 STATIONS", label: "INDIAN GATEWAYS", sub: "Pan-India Direct Network" },
  { value: "CBIC AEO-LO", label: "TIER 2 VERIFIED", sub: "INAAQCA4076M0F243 Brokerage" },
  { value: "1M+ SQ FT", label: "CONTRACT STORAGE", sub: "WMS · Bonded CFS Facilities" },
];

export function FTRHero() {
  return (
    <section
      aria-label="Freyer International Logistics"
      className="bg-[#040812] text-white overflow-hidden relative flex flex-col justify-between"
      style={{ minHeight: "100svh" }}
    >
      {/* ═══════════════════════════════════════
          FULL-SCREEN CINEMATIC MARITIME VIDEO
      ═══════════════════════════════════════ */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* High-res poster fallback */}
        <Image
          src="/images/slide2.jpg"
          alt="Freyer International Logistics Vessels & Port Terminals"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "60% 45%" }}
        />

        {/* Video loop in rich cinematic color */}
        <video
          src="/video/freyer-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: "60% 45%",
            filter: "brightness(0.62) contrast(1.1)",
          }}
        />

        {/* Architectural Vignette:
            Darkens the left and bottom reading zones with 100% text readability,
            while keeping the top-right video view wide open and vibrant. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, rgba(4,8,18,0.95) 0%, rgba(4,8,18,0.85) 35%, rgba(4,8,18,0.45) 65%, rgba(4,8,18,0.2) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #040812 0%, rgba(4,8,18,0.92) 20%, transparent 55%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(4,8,18,0.75) 0%, transparent 22%)",
          }}
        />
      </div>

      {/* ═══════════════════════════════════════
          CONTENT CONTAINER — CENTERED & PROPORTIONED
      ═══════════════════════════════════════ */}
      <div className="relative z-10 w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 pt-28 sm:pt-32 pb-12 sm:pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">

          {/* Operational Kicker Tag */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2.5 px-3 py-1 rounded bg-white/[0.06] border border-white/12 backdrop-blur-sm mb-5 text-[11px] font-mono uppercase tracking-[0.2em] text-slate-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e1390f] opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e1390f]" />
            </span>
            <span>Multimodal Freight &amp; Project Cargo Forwarding</span>
          </motion.div>

          {/* Balanced Headline (Proportional & Readable) */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="text-white font-extrabold tracking-tight leading-[1.05]"
            style={{
              fontSize: "clamp(2.4rem, 5.2vw, 5rem)",
            }}
          >
            Precision At <br />
            Industrial <span className="text-[#e1390f]">Scale.</span>
          </motion.h1>

          {/* Subheading with Authority and Precision */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="mt-5 text-slate-200/90 text-base sm:text-lg font-light leading-relaxed max-w-2xl"
          >
            End-to-end international air and ocean freight, licensed CBIC AEO-LO customs brokerage,
            and heavy-lift project cargo engineering. Proven single-lift execution up to{" "}
            <span className="text-white font-medium border-b border-[#e1390f]">482 metric tons</span>{" "}
            across 10 direct Indian branch stations.
          </motion.p>

          {/* Primary Action Group */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.32 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-[#e1390f] hover:bg-[#c42f0b] text-white px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] font-mono rounded transition-all duration-150 shadow-lg shadow-[#e1390f]/25 hover:shadow-[#e1390f]/40 hover:scale-[1.01] active:scale-[0.99]"
            >
              Request Freight Rate
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href="#cargo-monument"
              className="inline-flex items-center gap-2 bg-white/[0.07] hover:bg-white/[0.14] text-white px-6 py-3.5 text-xs font-mono uppercase tracking-[0.18em] border border-white/15 hover:border-white/30 rounded transition-colors backdrop-blur-sm"
            >
              <Anchor className="w-3.5 h-3.5 text-[#e1390f]" />
              Inspect 482 MT Record
            </a>

            <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-white/15 text-[11px] font-mono text-white/45">
              <Shield className="w-3.5 h-3.5 text-[#e1390f]" />
              <span>CBIC AEO-LO Tier 2 Accredited</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          DOCKED METRICS BAR
      ═══════════════════════════════════════ */}
      <div
        className="relative z-10 w-full border-t border-white/10 backdrop-blur-xl shrink-0"
        style={{ background: "rgba(4, 8, 18, 0.9)" }}
      >
        <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.38, delay: 0.38 + i * 0.05 }}
                className="py-4 sm:py-5 px-3 sm:px-6 group hover:bg-white/[0.02] transition-colors"
              >
                <div className="font-bold text-white tracking-tight leading-none text-xl sm:text-2xl font-mono">
                  {s.value}
                </div>
                <div className="mt-1.5 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.16em] text-[#e1390f] font-semibold">
                  {s.label}
                </div>
                <div className="mt-0.5 text-[10px] font-mono text-white/45 truncate">
                  {s.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
