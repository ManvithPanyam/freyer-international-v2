"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Search, ShieldCheck, CheckCircle2, Globe2, Info } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TrackShipmentModal } from "@/components/modals/TrackShipmentModal";

/**
 * FTRHero — EXECUTIVE LOGISTICS ENTERPRISE HERO
 *
 * Grounded in Section 1 verified facts and authentic institutional design:
 * - Backdrop: Approved Candidate 1 (Deep-water container terminal at dusk with amber crane lighting)
 * - Attribution: Mandatory visible AI attribution pill in bottom-right corner
 * - Headline: Clean, standard-weight value-proposition typography (no oversized animation/game font)
 * - Trust Proof: CBIC AEO-LO Certified, IATA Cargo Agent, WCA World & SCN Member
 * - Action Pathways: Dual primary CTAs (Request Freight Rate + Track Consignment modal trigger)
 */
export function FTRHero() {
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);

  return (
    <section
      aria-label="Freyer International Logistics"
      className="bg-[#121316] text-[#F8F7F4] overflow-hidden relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 sm:pt-28 sm:pb-20"
    >
      {/* ═══════════════════════════════════════
          01. APPROVED CANDIDATE 1 HERO BACKGROUND
      ═══════════════════════════════════════ */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.03 }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/ai-candidates/AI-GENERATED_NOT_A_REAL_FREYER_FACILITY_ai_port_terminal_1788788622412.jpg"
            alt="Deep-water container terminal at dusk with illuminated cranes — AI-generated conceptual illustration"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-90"
          />
        </motion.div>

        {/* Professional Architectural Vignette (Lets warm amber crane lighting glow through) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-[#121316]/55 to-[#121316]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121316]/80 via-transparent to-[#121316]/80" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#121316]/90 to-transparent" />
      </div>

      {/* ── Mandatory Attribution Badge (Visible in UI) ── */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 pointer-events-auto">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-mono text-slate-300 shadow-xl">
          <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="tracking-wide">AI-Generated Conceptual Illustration &mdash; Not a real Freyer facility</span>
        </div>
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

        {/* Clean, Non-Glow Standard Enterprise Value Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-white font-bold tracking-tight text-3xl sm:text-5xl md:text-6xl leading-[1.12] max-w-4xl"
        >
          Integrated logistics and project cargo engineering across India.
        </motion.h1>

        {/* Grounded Subtitle (Section 1 Verified Scope) */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="mt-6 text-slate-300 text-base sm:text-lg md:text-xl max-w-3xl font-light leading-relaxed"
        >
          Licensed CBIC AEO-LO Tier 2 multimodal freight forwarding, international air and ocean cargo, and heavy-lift logistics engineered up to 482 metric tons across 10 Indian branch stations.
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
            <span>CBIC AEO-LO Tier 2 Certified</span>
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
