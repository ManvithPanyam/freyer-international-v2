"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Shield } from "lucide-react";
import { motion } from "motion/react";

/**
 * FTRHero — SPLIT EDITORIAL LAYOUT
 *
 * Left panel: Pure #040812 — giant FREYER wordmark + tagline + CTAs.
 *             Zero overlay needed, zero bleed from video.
 * Right panel: Video (colorful, full brightness) CONTAINED in its own column.
 *              The video can be as warm/vivid as it wants — it never bleeds left.
 *
 * This breaks the "full-bleed bg + text overlay" cliché entirely.
 */

const STATS = [
  { value: "482 MT",   label: "Max Heavy Lift",  sub: "Record #9 · Shanghai → Jebel Ali" },
  { value: "10",       label: "Indian Stations",  sub: "Pan-India Direct Network"         },
  { value: "AEO-LO",  label: "CBIC Certified",   sub: "Tier 2 · INAAQCA4076M0F243"       },
  { value: "1M+ SQFT",label: "Warehousing",       sub: "WMS-Enabled · Multi-Client CFS"   },
];

export function FTRHero() {
  return (
    <section
      aria-label="Freyer International — Hero"
      className="bg-[#040812] text-white overflow-hidden"
      style={{ minHeight: "100svh", display: "flex", flexDirection: "column" }}
    >
      {/* ═══════════════════════════════════════════
          MAIN AREA — flex-1, split left/right
      ═══════════════════════════════════════════ */}
      <div style={{ flex: 1, display: "flex", minHeight: 0 }}>

        {/* ─── LEFT PANEL — pure dark, text only ─── */}
        <div
          className="flex flex-col justify-between"
          style={{
            width: "55%",
            minWidth: 0,
            paddingTop: "84px",
            paddingBottom: "40px",
            paddingLeft: "clamp(24px, 5vw, 80px)",
            paddingRight: "clamp(24px, 4vw, 64px)",
            borderRight: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {/* TOP — operational status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-mono uppercase tracking-[0.2em] text-white/35"
          >
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e1390f] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#e1390f]" />
            </span>
            <span className="text-white/55">Global Operations Active</span>
            <span className="text-white/15 hidden sm:inline">·</span>
            <span className="hidden sm:inline">10 Indian Stations</span>
            <span className="text-white/15 hidden md:inline">·</span>
            <span className="hidden md:inline">Chennai · 13.08°N 80.27°E</span>
            <span className="text-white/15 hidden md:inline">·</span>
            <a
              href="tel:+914443191919"
              className="hidden md:inline hover:text-white/70 transition-colors"
            >
              +91 44 43191919
            </a>
          </motion.div>

          {/* MIDDLE — identity + headline + body + CTAs */}
          <div className="flex flex-col">

            {/* FREYER — the primary visual statement */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="font-black text-white leading-none tracking-tight"
                style={{ fontSize: "clamp(3.8rem, 9vw, 8.5rem)", letterSpacing: "-0.04em" }}
              >
                FREYER
              </div>
              <div
                className="text-white/28 font-light uppercase tracking-[0.42em] mt-2"
                style={{ fontSize: "clamp(0.6rem, 1.2vw, 0.85rem)" }}
              >
                International Logistics
              </div>
            </motion.div>

            {/* Red rule — editorial separator */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.22, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
              className="w-10 h-[2px] bg-[#e1390f] my-5 sm:my-6"
            />

            {/* Tagline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="font-bold text-white leading-[1.08]"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.6rem)", letterSpacing: "-0.015em" }}
            >
              Precision at<br />
              Industrial Scale.
            </motion.h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.36 }}
              className="mt-4 text-white/45 leading-relaxed"
              style={{ fontSize: "clamp(0.78rem, 1.25vw, 0.9rem)", maxWidth: "36ch" }}
            >
              Air &amp; ocean freight, licensed CBIC AEO-LO customs brokerage,
              and out-of-gauge project cargo — proven to{" "}
              <span className="text-white/80 font-medium">482 metric tons</span>{" "}
              across 10 Indian branch stations.
            </motion.p>

            {/* CTAs — sharp corners, industrial */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.44 }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#e1390f] hover:bg-[#c42f0b] text-white px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] font-mono transition-colors duration-150 shadow-lg shadow-[#e1390f]/20"
              >
                Request Rate
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href="#cargo-monument"
                className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 px-5 py-2.5 text-[11px] font-mono uppercase tracking-[0.2em] border border-white/10 hover:border-white/20 transition-colors duration-150"
              >
                482 MT Record
              </a>

              <div className="hidden xl:flex items-center gap-1.5 pl-4 border-l border-white/[0.08] text-[9px] font-mono text-white/22 uppercase tracking-[0.15em]">
                <Shield className="w-3 h-3 text-[#e1390f] shrink-0" />
                CBIC AEO-LO Tier 2
              </div>
            </motion.div>
          </div>

          {/* BOTTOM — accreditations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.55 }}
            className="text-[9px] font-mono text-white/18 uppercase tracking-[0.16em] leading-relaxed"
          >
            INAAQCA4076M0F243 · IATA · WCA · AMTOI · SCN Member
          </motion.div>
        </div>

        {/* ─── RIGHT PANEL — VIDEO, contained & colorful ─── */}
        <div
          className="relative overflow-hidden hidden md:block"
          style={{ flex: 1 }}
        >
          {/* Static image fallback (shows while video loads) */}
          <Image
            src="/images/slide2.jpg"
            alt="Container port — Freyer International"
            fill
            priority
            sizes="45vw"
            className="object-cover"
            style={{ objectPosition: "55% 50%" }}
          />

          {/* Video — full color, contained here, NOT full-bleed across the page */}
          <video
            src="/video/freyer-hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "55% 50%", filter: "brightness(0.6) contrast(1.05)" }}
          />

          {/* Left-side vignette so it feathers into the dividing line */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(4,8,18,0.45) 0%, transparent 30%)",
            }}
          />
          {/* Bottom vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(4,8,18,0.7) 0%, transparent 35%)",
            }}
          />

          {/* 482 ghost inside image panel */}
          <div
            aria-hidden="true"
            className="absolute bottom-5 right-4 select-none pointer-events-none"
            style={{
              fontSize: "clamp(70px, 11vw, 180px)",
              fontWeight: 900,
              letterSpacing: "-0.05em",
              lineHeight: 1,
              color: "transparent",
              WebkitTextStroke: "1px rgba(255,255,255,0.14)",
            }}
          >
            482
          </div>

          {/* Top-right label */}
          <div className="absolute top-5 right-5 text-[9px] font-mono text-white/30 uppercase tracking-[0.18em]">
            Freyer · Record Breakbulk
          </div>
        </div>

        {/* Mobile: show image as subtle bg (no right panel on small screens) */}
        <div className="absolute inset-0 md:hidden z-0 pointer-events-none">
          <Image
            src="/images/slide2.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#040812]/80 via-[#040812]/60 to-[#040812]/90" />
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          STATS BAR — full width, pinned bottom
      ═══════════════════════════════════════════ */}
      <div
        className="w-full border-t border-white/[0.07] shrink-0"
        style={{ background: "rgba(4,8,18,0.96)" }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.38, delay: 0.5 + i * 0.07 }}
              className={[
                "py-4 sm:py-5",
                "px-4 sm:px-6",
                i < 3 ? "border-r border-white/[0.07]" : "",
                i >= 2 ? "border-t border-white/[0.07] lg:border-t-0" : "",
              ].join(" ")}
            >
              <div
                className="font-bold font-mono text-white tracking-tight leading-none"
                style={{ fontSize: "clamp(1rem, 1.8vw, 1.4rem)" }}
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
