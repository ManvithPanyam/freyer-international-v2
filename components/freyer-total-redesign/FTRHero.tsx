"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Shield } from "lucide-react";
import { motion } from "motion/react";

/**
 * FTRHero — FULL-SCREEN VIDEO, BOTTOM-ANCHORED TEXT
 *
 * The video owns the top 60% of the screen — completely visible, full color.
 * Text lives in the bottom 40% where the bottom gradient creates a natural dark zone.
 * No gradient fighting across the whole viewport. No text fighting the video.
 * This is how production-grade full-screen video heroes actually work.
 */

const STATS = [
  { value: "482 MT",    label: "Max Heavy Lift",  sub: "Record #9 · Shanghai → Jebel Ali"  },
  { value: "10",        label: "Indian Stations",  sub: "Pan-India Direct Network"           },
  { value: "AEO-LO",   label: "CBIC Certified",   sub: "Tier 2 · INAAQCA4076M0F243"        },
  { value: "1M+ SQFT", label: "Warehousing",       sub: "WMS-Enabled · Multi-Client CFS"    },
];

export function FTRHero() {
  return (
    <section
      aria-label="Freyer International — Hero"
      className="bg-[#040812] text-white overflow-hidden"
      style={{ minHeight: "100svh", display: "flex", flexDirection: "column", position: "relative" }}
    >
      {/* ═══════════════════════════════════════
          FULL-SCREEN VIDEO BACKGROUND
      ═══════════════════════════════════════ */}
      <div className="absolute inset-0 z-0">

        {/* Static fallback — shows while video loads */}
        <Image
          src="/images/slide2.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "60% 50%" }}
        />

        {/* VIDEO — full color, full screen */}
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
            objectPosition: "60% 50%",
            filter: "brightness(0.72) contrast(1.05)",
          }}
        />

        {/* Bottom dark zone — where text lives. Heavy at bottom, fades to nothing at 75% */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #040812 0%, #040812 16%, rgba(4,8,18,0.88) 32%, rgba(4,8,18,0.5) 50%, transparent 75%)",
          }}
        />

        {/* Left-side subtle lean — just enough to help text on the left edge */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(4,8,18,0.35) 0%, transparent 45%)",
          }}
        />

        {/* Top — nav clearance */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(4,8,18,0.55) 0%, transparent 22%)",
          }}
        />
      </div>

      {/* ═══════════════════════════════════════
          TOP — operational status strip
      ═══════════════════════════════════════ */}
      <div
        className="relative z-10 w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16"
        style={{ paddingTop: "84px" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-2 border-b border-white/[0.08] pb-3"
        >
          <div className="flex items-center gap-2.5 text-[10px] font-mono uppercase tracking-[0.2em] text-white/55">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e1390f] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#e1390f]" />
            </span>
            <span>Global Operations Active</span>
            <span className="text-white/20 hidden sm:inline">·</span>
            <span className="hidden sm:inline">10 Indian Stations · Ocean &amp; Air</span>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-mono text-white/40">
            <span className="hidden md:inline">Chennai · 13.08°N 80.27°E</span>
            <a
              href="tel:+914443191919"
              className="text-white/60 hover:text-white transition-colors"
            >
              +91 44 43191919
            </a>
          </div>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════
          MIDDLE — video breathes here (spacer)
      ═══════════════════════════════════════ */}
      <div className="flex-1 relative z-10" />

      {/* ═══════════════════════════════════════
          BOTTOM — text, anchored above stats bar
      ═══════════════════════════════════════ */}
      <div className="relative z-10 w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 pb-8 sm:pb-10">

        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="inline-flex items-center gap-2.5 mb-4 sm:mb-5"
        >
          <span className="block w-6 h-[2px] bg-[#e1390f] shrink-0" />
          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.26em] text-[#e1390f]">
            Tier-1 Multimodal Logistics &amp; Project Cargo
          </span>
        </motion.div>

        {/* FREYER — massive, the identity anchoring the hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
          className="font-black text-white leading-none tracking-tight"
          style={{ fontSize: "clamp(3.5rem, 10vw, 9.5rem)", letterSpacing: "-0.04em" }}
        >
          FREYER
        </motion.div>

        {/* Tagline — below the name, mixed case, restrained size */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="font-semibold text-white/80 leading-tight mt-2 sm:mt-3"
          style={{ fontSize: "clamp(1.1rem, 2.6vw, 2.2rem)", letterSpacing: "-0.01em" }}
        >
          Precision at Industrial Scale.
        </motion.h1>

        {/* Body + CTAs row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 sm:mt-5 flex flex-wrap items-center gap-x-6 gap-y-4"
        >
          {/* Short descriptor */}
          <p
            className="text-white/45 leading-relaxed shrink-0"
            style={{ fontSize: "clamp(0.78rem, 1.2vw, 0.9rem)", maxWidth: "40ch" }}
          >
            Air &amp; ocean freight · CBIC AEO-LO customs brokerage ·
            Out-of-gauge project cargo to{" "}
            <span className="text-white/75 font-medium">482 MT</span>
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#e1390f] hover:bg-[#c42f0b] text-white px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] font-mono transition-colors duration-150 shadow-lg shadow-[#e1390f]/25"
            >
              Request Rate
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href="#cargo-monument"
              className="inline-flex items-center text-white/50 hover:text-white/80 px-4 py-2.5 text-[11px] font-mono uppercase tracking-[0.18em] border border-white/[0.12] hover:border-white/25 transition-colors duration-150"
            >
              482 MT Record
            </a>

            <div className="hidden lg:flex items-center gap-1.5 pl-4 border-l border-white/[0.08] text-[9px] font-mono text-white/25 uppercase tracking-[0.12em]">
              <Shield className="w-3 h-3 text-[#e1390f] shrink-0" />
              CBIC AEO-LO Tier 2
            </div>
          </div>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════
          STATS BAR
      ═══════════════════════════════════════ */}
      <div
        className="relative z-10 w-full border-t border-white/[0.07] shrink-0"
        style={{ background: "rgba(4,8,18,0.94)" }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.38, delay: 0.38 + i * 0.07 }}
              className={[
                "py-4 sm:py-5 px-4 sm:px-6",
                i < 3 ? "border-r border-white/[0.07]" : "",
                i >= 2 ? "border-t border-white/[0.07] lg:border-t-0" : "",
              ].join(" ")}
            >
              <div
                className="font-bold font-mono text-white tracking-tight leading-none"
                style={{ fontSize: "clamp(1rem, 1.8vw, 1.45rem)" }}
              >
                {s.value}
              </div>
              <div className="mt-1 text-[10px] font-mono uppercase tracking-[0.12em] text-white/45">
                {s.label}
              </div>
              <div className="mt-0.5 text-[9px] font-mono text-white/25 truncate">
                {s.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
