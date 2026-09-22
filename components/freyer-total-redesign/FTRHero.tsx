"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Shield, Anchor } from "lucide-react";
import { motion } from "motion/react";

/**
 * FTRHero — EDITORIAL MARITIME SHOWCASE
 *
 * Feature:
 * - Prominent, beautifully crafted "FREYER INTERNATIONAL" brand statement.
 * - Precision letterspacing, refined line weight, and optical vertical centering.
 * - Direct capability sub-lead and uncluttered action pathways.
 * - Full-screen cinematic maritime backdrop with deep edge lighting.
 */

const STATS = [
  { value: "482 MT", label: "MAX HEAVY LIFT", sub: "Record #9 · Breakbulk Stowage" },
  { value: "10 STATIONS", label: "INDIAN GATEWAYS", sub: "Direct Pan-India Presence" },
  { value: "CBIC AEO-LO", label: "TIER 2 VERIFIED", sub: "INAAQCA4076M0F243 License" },
  { value: "1M+ SQ FT", label: "CONTRACT STORAGE", sub: "WMS · Bonded CFS Facilities" },
];

export function FTRHero() {
  return (
    <section
      aria-label="Freyer International Logistics"
      className="bg-[#030712] text-white overflow-hidden relative flex flex-col justify-between"
      style={{ minHeight: "100svh" }}
    >
      {/* ═══════════════════════════════════════
          CINEMATIC FULL-SCREEN BACKGROUND
      ═══════════════════════════════════════ */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* High-res poster fallback */}
        <Image
          src="/images/slide2.jpg"
          alt="Freyer International Container Vessels and Terminals"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "62% 42%" }}
        />

        {/* Video loop in rich contrast */}
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
            objectPosition: "62% 42%",
            filter: "brightness(0.60) contrast(1.12)",
          }}
        />

        {/* Architectural Vignette for clean legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, rgba(3,7,18,0.95) 0%, rgba(3,7,18,0.85) 38%, rgba(3,7,18,0.42) 70%, rgba(3,7,18,0.18) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #030712 0%, rgba(3,7,18,0.92) 18%, transparent 55%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(3,7,18,0.75) 0%, transparent 25%)",
          }}
        />
      </div>

      {/* ═══════════════════════════════════════
          HERO MAIN STAGE
      ═══════════════════════════════════════ */}
      <div className="relative z-10 w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 pt-32 sm:pt-36 pb-12 sm:pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl">

          {/* Sub-Brand Monospace Kicker */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e1390f] opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e1390f]" />
            </span>
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.28em] text-slate-300 font-medium">
              Global Logistics &amp; Project Cargo Forwarding
            </span>
          </motion.div>

          {/* Core Brand Lockup: FREYER INTERNATIONAL — Plain H1 for instant LCP render */}
          <div>
            <h1
              className="text-white font-black tracking-[-0.03em] leading-[0.88] uppercase"
              style={{
                fontFamily: "var(--font-barlow-condensed), system-ui, sans-serif",
                fontSize: "clamp(3.8rem, 9.5vw, 8.8rem)",
              }}
            >
              FREYER <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-white/65">
                INTERNATIONAL
              </span>
              <span className="text-[#e1390f]">.</span>
            </h1>
          </div>

          {/* Concise Business Definition */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-6 text-slate-300 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-2xl"
          >
            Licensed CBIC AEO-LO Tier 2 multimodal freight forwarding, international air and ocean cargo,
            and heavy-lift logistics engineered up to{" "}
            <span className="text-white font-semibold border-b border-[#e1390f]">
              482 metric tons
            </span>{" "}
            across 10 Indian branch stations.
          </motion.p>

          {/* Action Pathways */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.34 }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-[#e1390f] hover:bg-[#c42f0b] text-white px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] font-mono rounded transition-all duration-150 shadow-xl shadow-[#e1390f]/25 hover:shadow-[#e1390f]/40 hover:scale-[1.01] active:scale-[0.99]"
            >
              Request Freight Rate
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href="#cargo-monument"
              className="inline-flex items-center gap-2 bg-white/[0.08] hover:bg-white/[0.14] text-white px-6 py-3.5 text-xs font-mono uppercase tracking-[0.2em] border border-white/20 hover:border-white/35 rounded transition-all duration-150 backdrop-blur-sm"
            >
              <Anchor className="w-3.5 h-3.5 text-[#e1390f]" />
              Inspect 482 MT Record
            </a>

            <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-white/15 text-[11px] font-mono text-white/45">
              <Shield className="w-3.5 h-3.5 text-[#e1390f]" />
              <span>AEO-LO Tier 2 Licensed Broker</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          DOCKED METRICS BAR
      ═══════════════════════════════════════ */}
      <div
        className="relative z-10 w-full border-t border-white/10 backdrop-blur-xl shrink-0"
        style={{ background: "rgba(3, 7, 18, 0.90)" }}
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
                <div
                  className="font-bold text-white tracking-tight leading-none text-xl sm:text-2xl lg:text-3xl"
                  style={{ fontFamily: "var(--font-barlow-condensed), system-ui, sans-serif" }}
                >
                  {s.value}
                </div>
                <div className="mt-1.5 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.16em] text-[#e1390f] font-semibold">
                  {s.label}
                </div>
                <div className="mt-0.5 text-[10px] font-mono text-white/40 truncate">
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
