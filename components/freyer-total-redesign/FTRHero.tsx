"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Shield, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

/**
 * FTRHero — DEFINITIVE REDESIGN
 *
 * Visual strategy:
 *   - slide2.jpg (dark port scene with massive gantry cranes) as sole background
 *   - Deep left curtain gradient: text zone is fully opaque dark, image bleeds through on right
 *   - NO video — zero warm-glare risk
 *   - "482" as huge translucent watermark for scale/drama
 *   - All content guaranteed above fold on 1366×768 laptops via clamp() + flex layout
 */

const STATS = [
  { value: "482 MT", label: "Max Heavy Lift", sub: "Record #9 · Breakbulk" },
  { value: "10", label: "Indian Stations", sub: "Pan-India Direct Network" },
  { value: "AEO-LO", label: "CBIC Certified", sub: "Tier 2 · Licensed Broker" },
  { value: "1M+ SQ FT", label: "Warehousing", sub: "WMS-Enabled · Multi-Client" },
];

export function FTRHero() {
  return (
    <section
      aria-label="Freyer International Logistics — Hero"
      className="relative w-full bg-[#040812] text-white overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* ── BACKGROUND: slide2.jpg — dark port / gantry cranes / containers ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/slide2.jpg"
          alt="Freyer International — Container Port with Gantry Cranes"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "65% 50%" }}
        />
        {/* Primary left dark curtain — the text column sits over solid #040812 */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, #040812 0%, #040812 40%, rgba(4,8,18,0.80) 58%, rgba(4,8,18,0.35) 78%, rgba(4,8,18,0.10) 100%)",
          }}
        />
        {/* Bottom fade into stats bar */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #040812 0%, rgba(4,8,18,0.92) 10%, transparent 32%)",
          }}
        />
        {/* Top fade for nav */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(4,8,18,0.75) 0%, transparent 20%)",
          }}
        />
      </div>

      {/* ── 482 WATERMARK — ghost number for scale drama ── */}
      <div
        aria-hidden="true"
        className="absolute z-[1] select-none pointer-events-none hidden lg:block"
        style={{
          bottom: "6%",
          right: "-1vw",
          fontSize: "clamp(120px, 22vw, 380px)",
          fontWeight: 900,
          letterSpacing: "-0.04em",
          lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: "1.5px rgba(255,255,255,0.055)",
          fontFamily: "var(--font-geist-sans, system-ui, sans-serif)",
        }}
      >
        482
      </div>

      {/* ── MAIN CONTENT: flex column fills full viewport height ── */}
      <div className="relative z-10 flex flex-col" style={{ minHeight: "100svh" }}>

        {/* Operational status bar — below nav */}
        <div className="w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 pt-[76px] sm:pt-[84px]">
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-3"
          >
            <div className="flex items-center gap-2.5 text-[10px] font-mono uppercase tracking-[0.22em] text-white/60">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e1390f] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#e1390f]" />
              </span>
              <span>Global Operations Active</span>
              <span className="text-white/20 hidden sm:inline">·</span>
              <span className="hidden sm:inline text-white/35">10 Indian Stations · Ocean &amp; Air</span>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-mono text-white/40">
              <span className="hidden md:inline">
                HQ: <strong className="text-white/70 font-normal">Chennai</strong> · 13.08° N 80.27° E
              </span>
              <a
                href="tel:+914443191919"
                className="text-white/70 hover:text-[#e1390f] transition-colors"
              >
                +91 44 43191919
              </a>
            </div>
          </motion.div>
        </div>

        {/* Hero text — flex-1 centers it vertically */}
        <div className="flex-1 flex flex-col justify-center w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 py-8">
          <div className="max-w-[680px]">

            {/* Kicker line */}
            <motion.div
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="inline-flex items-center gap-2.5 mb-5 sm:mb-6"
            >
              <span className="block w-7 h-[2px] bg-[#e1390f]" />
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.28em] text-[#e1390f]">
                Tier-1 Multimodal Logistics &amp; Project Cargo
              </span>
            </motion.div>

            {/* Headline — 3 clean lines, always above fold on 1366×768 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.58, delay: 0.14 }}
              className="font-black text-white leading-[1.03] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 6.2vw, 5.8rem)" }}
            >
              PRECISION
              <br />
              AT INDUSTRIAL
              <br />
              <span style={{ color: "#e1390f" }}>SCALE.</span>
            </motion.h1>

            {/* Body copy */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-5 sm:mt-6 text-slate-300 leading-relaxed max-w-[500px]"
              style={{ fontSize: "clamp(0.82rem, 1.4vw, 1rem)" }}
            >
              International air &amp; ocean freight, licensed CBIC AEO-LO customs brokerage, and
              out-of-gauge project cargo — proven to{" "}
              <span className="text-white font-semibold border-b border-[#e1390f]">
                482 metric tons
              </span>{" "}
              across 10 strategic Indian branch stations.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.34 }}
              className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#e1390f] hover:bg-[#c42f0b] text-white px-6 py-3 sm:px-7 sm:py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] font-mono rounded transition-all duration-150 shadow-lg shadow-[#e1390f]/25 hover:shadow-[#e1390f]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Request Freight Rate
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href="#cargo-monument"
                className="inline-flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.12] text-white/80 hover:text-white px-5 py-3 sm:px-6 sm:py-3.5 text-[11px] font-mono uppercase tracking-[0.18em] border border-white/[0.12] hover:border-white/25 rounded transition-colors"
              >
                View 482 MT Record
                <ChevronDown className="w-3.5 h-3.5 text-[#e1390f]" />
              </a>

              <div className="hidden lg:flex items-center gap-2 pl-3 border-l border-white/10 text-[10px] font-mono text-white/35">
                <Shield className="w-3.5 h-3.5 text-[#e1390f]" />
                <span>CBIC AEO-LO Tier 2 Verified</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── STATS BAR — pinned to bottom ── */}
        <div
          className="relative z-10 w-full border-t border-white/[0.07]"
          style={{ background: "rgba(4,8,18,0.90)" }}
        >
          <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.44 + i * 0.07 }}
                  className={[
                    "py-4 sm:py-5 px-4 sm:px-5",
                    i < 3 ? "border-r border-white/[0.07]" : "",
                    i >= 2 ? "border-t border-white/[0.07] lg:border-t-0" : "",
                  ].join(" ")}
                >
                  <div
                    className="font-bold font-mono text-white tracking-tight leading-none"
                    style={{ fontSize: "clamp(1.05rem, 2vw, 1.55rem)" }}
                  >
                    {s.value}
                  </div>
                  <div className="mt-1 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.14em] text-white/50">
                    {s.label}
                  </div>
                  <div className="mt-0.5 text-[9px] sm:text-[10px] font-mono text-white/28 truncate">
                    {s.sub}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

