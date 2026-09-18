"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Shield, Phone, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

/**
 * WORLD-CLASS ENTERPRISE HERO — CINEMATIC INDUSTRIAL PRECISION
 * 
 * Design Architecture:
 * 1. Cinematic Background: High-contrast ocean container vessel aerial (hero-poster.jpg)
 *    + subtle looping maritime video with dark vignette and industrial grid lines.
 * 2. Top Operational Telemetry: Live network status, Chennai HQ coordinate, CBIC AEO-LO credential.
 * 3. Hero Statement: Swiss-modernist typography with zero clipping, high-contrast white & slate-200.
 * 4. Verified Metrics Bar: 482 MT Heavy Lift, 10 Indian Stations, 1,000,000+ sq ft WMS, AEO-LO Tier 2.
 * 5. Instant Commercial Gateway: Dual-action routing (Request Rate / Explore Project Archive).
 */

const VERIFIED_METRICS = [
  {
    label: "MAX HEAVY LIFT",
    value: "482 MT",
    detail: "Record #9 · Breakbulk Stowage",
    badge: "Documented",
  },
  {
    label: "WAREHOUSING FOOTPRINT",
    value: "1,000,000+",
    unit: "SQ FT",
    detail: "WMS-Enabled · Multi-Client CFS",
    badge: "Contract Storage",
  },
  {
    label: "INDIAN NETWORK",
    value: "10 STATIONS",
    detail: "8 Strategic Cities · 100% Direct",
    badge: "Pan-India",
  },
  {
    label: "STATUTORY CLEARANCE",
    value: "CBIC AEO-LO",
    detail: "Tier 2 · INAAQCA4076M0F243",
    badge: "Licensed Brokerage",
  },
];

export function FTRHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;
    const handleCanPlay = () => setVideoLoaded(true);
    video.addEventListener("canplay", handleCanPlay);
    if (video.readyState >= 3) setVideoLoaded(true);
    return () => video.removeEventListener("canplay", handleCanPlay);
  }, [reducedMotion]);

  return (
    <section
      aria-label="Freyer International Logistics — Command Hero"
      className="relative min-h-screen flex flex-col justify-between bg-[#040812] text-white overflow-hidden"
    >
      {/* ── BACKGROUND LAYER: Cinematic Ocean Vessel ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* High-res aerial poster */}
        <Image
          src="/images/hero-poster.jpg"
          alt="Freyer International Container Shipping Aerial"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="object-cover object-center brightness-[0.42] contrast-[1.15] transition-opacity duration-1000"
          style={{ opacity: videoLoaded ? 0.35 : 0.85 }}
        />

        {/* Cinematic video loop */}
        {!reducedMotion && (
          <video
            ref={videoRef}
            src="/video/freyer-hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000"
            style={{
              opacity: videoLoaded ? 0.45 : 0,
              filter: "saturate(0.85) contrast(1.1)",
            }}
          />
        )}

        {/* Industrial precision overlays: dark vignettes + engineering grid */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040812] via-[#040812]/75 to-[#040812]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040812] via-[#040812]/85 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* ── TOP OPERATIONAL TELEMETRY BAR ── */}
      <div className="relative z-10 w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 pt-24 sm:pt-28 pb-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 text-[11px] font-mono"
        >
          {/* Left: Operational status */}
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e1390f] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e1390f]" />
            </span>
            <span className="uppercase tracking-[0.2em] text-white/70 font-semibold">
              Global Operations Active
            </span>
            <span className="text-white/20">|</span>
            <span className="text-white/40 hidden sm:inline">
              10 Indian Stations · Ocean & Air Gateways
            </span>
          </div>

          {/* Right: Verified Coordinates & Direct Desk */}
          <div className="flex items-center gap-5 text-white/50">
            <span className="hidden md:inline">
              HQ: <strong className="text-white/80 font-normal">13.0827° N, 80.2707° E</strong> (Chennai)
            </span>
            <span className="text-white/20 hidden md:inline">|</span>
            <a
              href="tel:+914443191919"
              className="flex items-center gap-1.5 text-white/80 hover:text-[#e1390f] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#e1390f]" />
              +91 44 43191919
            </a>
          </div>
        </motion.div>
      </div>

      {/* ── PRIMARY HERO CONTENT: MONUMENTAL ARCHITECTURE ── */}
      <div className="relative z-10 w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 py-8 sm:py-12 my-auto">
        <div className="max-w-4xl space-y-7">

          {/* Kicker badge */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded bg-white/[0.04] border border-white/10 text-[11px] font-mono uppercase tracking-[0.22em] text-slate-300"
          >
            <span className="w-2 h-2 rounded-full bg-[#e1390f]" />
            Tier-1 Multimodal Logistics & Project Cargo Forwarding
          </motion.div>

          {/* Headline — Monumental, precise, never clipped */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-[1.04]"
          >
            PRECISION AT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/60">
              INDUSTRIAL SCALE.
            </span>
          </motion.h1>

          {/* Subheadline with verified authority */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg lg:text-xl text-slate-300 font-light leading-relaxed max-w-2xl"
          >
            International air and ocean freight forwarding, licensed CBIC AEO-LO customs
            brokerage, and out-of-gauge project cargo. Proven execution up to{" "}
            <span className="text-white font-medium border-b border-[#e1390f]">
              482 metric tons
            </span>{" "}
            from 10 strategic Indian branch stations.
          </motion.p>

          {/* Call to action cluster */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42 }}
            className="pt-2 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded bg-[#e1390f] hover:bg-[#c42f0b] text-white px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] font-mono transition-all duration-150 shadow-lg shadow-[#e1390f]/20 hover:shadow-[#e1390f]/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Request Freight Rate
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href="#cargo-monument"
              className="inline-flex items-center gap-2 rounded bg-white/5 hover:bg-white/10 text-white/80 hover:text-white px-6 py-4 text-xs font-mono uppercase tracking-[0.16em] border border-white/10 hover:border-white/20 transition-colors"
            >
              Inspect 482 MT Record
              <ChevronRight className="w-3.5 h-3.5 text-[#e1390f]" />
            </a>

            <div className="hidden xl:flex items-center gap-3 pl-4 border-l border-white/10 text-[11px] font-mono text-white/40">
              <Shield className="w-4 h-4 text-[#e1390f]" />
              <span>CBIC AEO-LO Tier 2 Verified Broker</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── BOTTOM METRICS BAR: REAL OPERATIONAL PROOF ── */}
      <div className="relative z-10 w-full border-t border-white/10 bg-[#060c18]/80 backdrop-blur-md">
        <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {VERIFIED_METRICS.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                className="border-l-2 border-[#e1390f]/40 pl-4 py-0.5 space-y-1 group hover:border-[#e1390f] transition-colors"
              >
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-slate-400">
                  {metric.label}
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold font-mono text-white tracking-tight flex items-baseline gap-1">
                  <span>{metric.value}</span>
                  {metric.unit && (
                    <span className="text-xs font-normal text-white/40">{metric.unit}</span>
                  )}
                </div>
                <div className="text-[11px] font-mono text-white/45 truncate">
                  {metric.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
