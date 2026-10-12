"use client";

import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight, Search, ShieldCheck, CheckCircle2, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TrackShipmentModal } from "@/components/modals/TrackShipmentModal";

/**
 * LTHero — EXPERIMENTAL LIGHT THEME HERO
 */
export function LTHero() {
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);
  const [trackNumber, setTrackNumber] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackNumber.trim()) {
      setIsTrackModalOpen(true);
    }
  };

  return (
    <section
      aria-label="Freyer International Logistics"
      className="bg-[var(--color-dark-surface)] text-white overflow-hidden relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-0"
    >
      {/* ═══════════════════════════════════════
          01. REAL FREYER CORPORATE VIDEO / AIRCRAFT BACKGROUND
      ═══════════════════════════════════════ */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover object-right lg:object-center brightness-[0.82]"
          aria-hidden="true"
        >
          <source src="/video/freyer-hero-mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
          <source src="/video/freyer-hero.mp4" type="video/mp4" />
        </video>

        {/* Directional Gradient Scrim: Dark on the left (for text contrast), clear on the right (lets aircraft breathe) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark-surface)]/95 via-[var(--color-dark-surface)]/75 sm:via-[var(--color-dark-surface)]/60 to-transparent lg:w-3/4" />
        <div className="absolute inset-x-0 bottom-0 h-32 sm:h-36 bg-gradient-to-t from-[var(--color-dark-surface)]/95 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[var(--color-dark-surface)]/80 to-transparent" />
      </div>

      {/* ═══════════════════════════════════════
          02. LEFT-ALIGNED HERO CONTENT
      ═══════════════════════════════════════ */}
      <div className="relative z-10 max-w-[1560px] w-full mx-auto px-6 sm:px-10 lg:px-16 my-auto pt-2 sm:pt-4">
        <div className="max-w-2xl text-left flex flex-col items-start">

          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-md mb-4 sm:mb-5"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand-orange)] animate-pulse" />
            <span className="text-xs font-medium tracking-wide text-white/95">
              Licensed customs broker · Pan-India branch network
            </span>
          </motion.div>

          {/* Hero Headline — Controlled Two-Line Editorial Composition */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="text-white tracking-tight"
            style={{
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(44px, 5.8vw, 76px)",
              letterSpacing: "-0.03em",
              lineHeight: 1.04,
            }}
          >
            Freyer<br />International
          </motion.h1>

          {/* Tightened Type Hierarchy: Clear Subhead + 55-char high contrast descriptor */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 space-y-2 max-w-[55ch]"
          >
            <p
              className="text-white font-medium text-lg sm:text-xl tracking-tight"
              style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              Freight forwarding and project cargo from India.
            </p>
            <p
              className="text-white/80 font-normal leading-relaxed text-sm sm:text-base"
              style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              Direct ocean allocations, air handling, and licensed customs clearance across primary Indian trade lanes.
            </p>
          </motion.div>

          {/* Actions: Primary CTA + Integrated Tracking Input Field */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto"
          >
            <Button
              href="/contact"
              size="lg"
              icon={<ArrowRight className="w-4 h-4 ml-1" />}
              className="w-full sm:w-auto font-medium bg-[var(--color-cta)] text-white hover:bg-[var(--color-cta-hover)] border-transparent shadow-lg text-sm shrink-0 tracking-tight"
            >
              Get a quote
            </Button>

            {/* Quick Live Tracking Field */}
            <form
              onSubmit={handleTrackSubmit}
              className="flex items-center rounded-lg bg-black/50 border border-white/35 backdrop-blur-md p-1 focus-within:border-[var(--color-brand-orange)] focus-within:ring-2 focus-within:ring-[var(--color-brand-orange)]/40 transition-all w-full sm:w-[290px] h-[46px]"
            >
              <input
                type="text"
                value={trackNumber}
                onChange={(e) => setTrackNumber(e.target.value)}
                placeholder="Enter AWB / BL number..."
                className="bg-transparent text-xs text-white placeholder-white/70 px-3 py-2 w-full focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white/15 hover:bg-[var(--color-brand-orange)] text-white rounded-md p-2 transition-colors shrink-0 flex items-center justify-center h-8 w-8"
                aria-label="Track consignment"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          03. STATS PROOF STRIP (Merged at Hero Bottom)
      ═══════════════════════════════════════ */}
      <div className="relative z-10 w-full border-t border-white/10 bg-black/45 backdrop-blur-md mt-8 sm:mt-10 py-2.5 sm:py-3">
        <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {/* Stat 1 */}
            <div className="text-center sm:text-left sm:pr-8">
              <div className="text-[20px] xs:text-[24px] sm:text-[30px] font-semibold text-white leading-tight tracking-tight">
                10
              </div>
              <div className="text-[10px] xs:text-[11px] sm:text-xs text-white/60 font-normal mt-0.5 tracking-normal">
                Indian branch offices
              </div>
            </div>

            {/* Stat 2 */}
            <div className="text-center sm:text-left px-2 sm:px-8">
              <div className="text-[20px] xs:text-[24px] sm:text-[30px] font-semibold text-white leading-tight tracking-tight">
                Direct
              </div>
              <div className="text-[10px] xs:text-[11px] sm:text-xs text-white/60 font-normal mt-0.5 tracking-normal">
                Operations &amp; customs
              </div>
            </div>

            {/* Stat 3 */}
            <div className="text-center sm:text-left pl-2 sm:pl-8">
              <div className="text-[20px] xs:text-[24px] sm:text-[30px] font-semibold text-white leading-tight tracking-tight">
                482 MT
              </div>
              <div className="text-[10px] xs:text-[11px] sm:text-xs text-white/60 font-normal mt-0.5 tracking-normal">
                Breakbulk shipment
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Consignment Tracking Modal */}
      <TrackShipmentModal
        isOpen={isTrackModalOpen}
        onClose={() => setIsTrackModalOpen(false)}
      />
    </section>
  );
}
