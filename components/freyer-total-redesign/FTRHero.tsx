"use client";

import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight, Search, ShieldCheck, CheckCircle2, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TrackShipmentModal } from "@/components/modals/TrackShipmentModal";

/**
 * FTRHero — EXECUTIVE LOGISTICS ENTERPRISE HERO
 *
 * Background: Real Freyer corporate video (freyer-hero.mp4 / freyer-hero-mobile.mp4)
 * - Authentic Freyer footage, no AI-generated imagery
 * - Headline: Clean, standard-weight value-proposition typography
 * - Trust Proof: CBIC AEO-LO Certified, IATA Cargo Agent, WCA World & SCN Member
 * - Action Pathways: Request Freight Quote + Track Consignment modal
 */
export function FTRHero() {
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section
      aria-label="Freyer International Logistics"
      className="bg-[#121316] text-[#F8F7F4] overflow-hidden relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 sm:pt-28 sm:pb-20"
    >
      {/* ═══════════════════════════════════════
          01. REAL FREYER CORPORATE VIDEO BACKGROUND
      ═══════════════════════════════════════ */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        <video
          ref={videoRef}
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
          02. HERO CONTENT (VALUE-PROPOSITION & TRUST)
      ═══════════════════════════════════════ */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 text-center flex flex-col items-center">

        {/* Eyebrow / Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#e1390f] animate-pulse" />
          <span className="text-2xs sm:text-xs font-mono font-semibold tracking-[0.2em] text-white/90 uppercase">
            Logistics Beyond Boundaries
          </span>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-white"
          style={{
            fontFamily: "var(--font-archivo), system-ui, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(52px, 7vw, 100px)",
            letterSpacing: "-0.025em",
            lineHeight: 1.06,
          }}
        >
          Freyer International
        </motion.h1>

        {/* Subtitle — demoted below headline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-white/50 uppercase tracking-[0.14em]"
          style={{
            fontFamily: "var(--font-ibm-plex-mono), ui-monospace, monospace",
            fontWeight: 400,
            fontSize: "clamp(10px, 1.1vw, 13px)",
          }}
        >
          Integrated Logistics &amp; Project Cargo Engineering
        </motion.p>




        {/* Trust Proof Stat Pills Bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-2xs sm:text-xs font-mono"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/12 backdrop-blur-sm text-slate-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>CBIC AEO-LO Certified</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/12 backdrop-blur-sm text-slate-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span>IATA Cargo Agent</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/12 backdrop-blur-sm text-slate-200">
            <Globe2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>WCA World & SCN Member</span>
          </div>
        </motion.div>

        {/* Dual Actions: Request Freight Quote + Track Consignment */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto"
        >
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4 ml-1" />}
            className="w-full sm:w-auto tracking-[0.16em]"
          >
            Request a Freight Quote
          </Button>

          <Button
            type="button"
            onClick={() => setIsTrackModalOpen(true)}
            variant="secondary"
            size="lg"
            icon={<Search className="w-4 h-4 mr-0.5 text-slate-300" />}
            className="w-full sm:w-auto tracking-[0.16em]"
          >
            Track Consignment
          </Button>
        </motion.div>
      </div>

      {/* Live Consignment Tracking Modal */}
      <TrackShipmentModal
        isOpen={isTrackModalOpen}
        onClose={() => setIsTrackModalOpen(false)}
      />
    </section>
  );
}
