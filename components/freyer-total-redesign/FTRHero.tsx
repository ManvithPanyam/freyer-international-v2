"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Shield, Anchor, Globe2 } from "lucide-react";
import { motion } from "motion/react";

/**
 * FTRHero — WORLD-CLASS EDITORIAL INDUSTRIAL COMMAND
 *
 * Typography:
 *   - Headings & Massive Titles: Barlow Condensed (Condensed, Ultra-Bold, Swiss/German industrial weight)
 *   - Body & Subtitles: Inter / Geist / System Clean
 *   - Monospace telemetry: Space Grotesk / JetBrains Mono
 *
 * Layout:
 *   - Full-screen dramatic maritime video
 *   - Balanced golden-ratio typographic hierarchy
 *   - High-contrast editorial contrast curtain
 */

const STATS = [
  { value: "482 MT",    label: "MAX LIFT RECORD", sub: "Record #9 · Shanghai → Jebel Ali"  },
  { value: "10 STATIONS", label: "INDIAN GATEWAYS", sub: "Pan-India Direct Stations"       },
  { value: "AEO-LO TIER 2", label: "CBIC ACCREDITED", sub: "INAAQCA4076M0F243"             },
  { value: "1,000,000+", label: "SQ FT CONTRACT CFS", sub: "WMS · Bonded & Multi-Client"  },
];

export function FTRHero() {
  return (
    <section
      aria-label="Freyer International Logistics"
      className="bg-[#030712] text-white overflow-hidden relative flex flex-col justify-between"
      style={{ minHeight: "100svh" }}
    >
      {/* ═══════════════════════════════════════
          FULL-SCREEN CINEMATIC MARITIME VIDEO
      ═══════════════════════════════════════ */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* High-res poster */}
        <Image
          src="/images/slide2.jpg"
          alt="Freyer International Logistics Vessels & Port Terminals"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "62% 45%" }}
        />

        {/* Video loop in crisp natural saturation */}
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
            objectPosition: "62% 45%",
            filter: "brightness(0.68) contrast(1.1)",
          }}
        />

        {/* Precision multi-stop architectural gradient:
            Darkens base where typography docks while letting ocean/sky shine at top */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(3,7,18,0.7) 0%, rgba(3,7,18,0.2) 25%, rgba(3,7,18,0.4) 50%, rgba(3,7,18,0.85) 75%, #030712 100%)",
          }}
        />

        {/* Subtle lateral gradient for sharp left-aligned reading */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(3,7,18,0.7) 0%, rgba(3,7,18,0.3) 45%, transparent 100%)",
          }}
        />

        {/* Subtle industrial grid line overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ═══════════════════════════════════════
          TOP TELEMETRY BAR
      ═══════════════════════════════════════ */}
      <div
        className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16"
        style={{ paddingTop: "88px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3.5 text-[11px] font-mono tracking-[0.18em]"
        >
          {/* Status signal */}
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e1390f] opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e1390f]" />
            </span>
            <span className="font-semibold text-white/90 uppercase text-[10px] sm:text-[11px]">
              OPERATIONS ACTIVE
            </span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="text-white/50 hidden sm:inline text-[10px] sm:text-[11px]">
              Direct Ocean &amp; Air Gateways
            </span>
          </div>

          {/* Coordinates & Contact */}
          <div className="flex items-center gap-5 text-white/50 text-[10px] sm:text-[11px]">
            <span className="hidden md:inline flex items-center gap-1.5">
              <Globe2 className="w-3 h-3 text-white/40" />
              HQ: 13.0827° N, 80.2707° E (Chennai)
            </span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <a
              href="tel:+914443191919"
              className="font-medium text-white/80 hover:text-[#e1390f] transition-colors"
            >
              +91 44 43191919
            </a>
          </div>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════
          HERO EDITORIAL CONTENT (ANCHORED)
      ═══════════════════════════════════════ */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-6 sm:pb-8 my-auto">
        <div className="max-w-4xl">

          {/* Precision Kicker Pill */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.07] border border-white/15 backdrop-blur-md mb-4 sm:mb-5 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.22em] text-white/90"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#e1390f]" />
            Tier-1 Multimodal Logistics &amp; Breakbulk
          </motion.div>

          {/* Massive Display Title with Condensed Industrial Typography */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="font-black tracking-[-0.02em] uppercase leading-[0.92] text-white"
            style={{
              fontFamily: "var(--font-barlow-condensed), system-ui, sans-serif",
              fontSize: "clamp(3.5rem, 8.5vw, 8rem)",
            }}
          >
            PRECISION AT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">
              INDUSTRIAL
            </span>{" "}
            <span className="text-[#e1390f]">SCALE.</span>
          </motion.div>

          {/* Subtitle with High-Legibility Modern Weight */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-4 sm:mt-5 text-slate-200/90 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-2xl"
          >
            International air &amp; ocean forwarding, licensed CBIC AEO-LO customs brokerage,
            and out-of-gauge engineering. Proven single-lift capacity to{" "}
            <span className="text-white font-semibold border-b border-[#e1390f]">
              482 metric tons
            </span>{" "}
            across 10 direct Indian branch stations.
          </motion.p>

          {/* Industrial Action Bar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.36 }}
            className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-[#e1390f] hover:bg-[#c42f0b] text-white px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] font-mono transition-all duration-150 shadow-xl shadow-[#e1390f]/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              Request Freight Rate
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href="#cargo-monument"
              className="inline-flex items-center gap-2 bg-white/[0.08] hover:bg-white/[0.15] text-white px-6 py-3.5 text-xs font-mono uppercase tracking-[0.2em] border border-white/20 hover:border-white/40 transition-all duration-150 backdrop-blur-sm"
            >
              <Anchor className="w-3.5 h-3.5 text-[#e1390f]" />
              Inspect 482 MT Record
            </a>

            <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-white/15 text-[10px] font-mono text-white/45 tracking-wider">
              <Shield className="w-3.5 h-3.5 text-[#e1390f]" />
              <span>CBIC AEO-LO TIER 2 VERIFIED</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          DIVERSIFIED TELEMETRY & STATS DOCK
      ═══════════════════════════════════════ */}
      <div
        className="relative z-10 w-full border-t border-white/10 backdrop-blur-xl shrink-0"
        style={{ background: "rgba(3, 7, 18, 0.88)" }}
      >
        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.42 + i * 0.06 }}
                className="py-4 sm:py-5 px-3 sm:px-6 group hover:bg-white/[0.02] transition-colors"
              >
                <div
                  className="font-bold text-white tracking-tight leading-none text-xl sm:text-2xl lg:text-3xl"
                  style={{ fontFamily: "var(--font-barlow-condensed), system-ui, sans-serif" }}
                >
                  {s.value}
                </div>
                <div className="mt-1 text-[10px] font-mono uppercase tracking-[0.16em] text-[#e1390f]/90 font-medium">
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
