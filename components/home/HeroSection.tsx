"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Search, ShieldCheck, CheckCircle2, Globe2, Info } from "lucide-react";
import { TrackShipmentModal } from "@/components/modals/TrackShipmentModal";

export function HeroSection() {
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);

  return (
    <section
      id="top"
      aria-label="Freyer International Overview"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center bg-[#07152b] text-white overflow-hidden pt-28 pb-20 sm:pb-24"
    >
      {/* ── Background Imagery: Candidate 1 (Port Terminal at Dusk) ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.04 }}
          transition={{ duration: 16, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/ai-candidates/AI-GENERATED_NOT_A_REAL_FREYER_FACILITY_ai_port_terminal_1788788622412.jpg"
            alt="Deep-water container terminal at dusk with illuminated cranes — AI-generated conceptual illustration"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            style={{ filter: "brightness(0.72) contrast(1.05)" }}
          />
        </motion.div>

        {/* Deep Maritime Navy Gradient Overlays (High-Contrast Readability) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040914] via-[#07152b]/75 to-[#040914]/90" />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{ boxShadow: "inset 0 0 200px 70px rgba(4,9,20,0.65)" }}
        />

        {/* ── Mandatory Attribution Badge (Visible in UI) ── */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 pointer-events-auto">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/15 text-[11px] font-mono text-slate-300 transition-colors shadow-lg">
            <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="tracking-wide">AI-Generated Conceptual Illustration &mdash; Not a real Freyer facility</span>
          </div>
        </div>
      </div>

      {/* ── Hero Content (United Carriers Authority Tier) ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Eyebrow / Tagline (Verbatim from index.html) */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs font-mono font-semibold tracking-wider text-amber-300 uppercase">
            Logistics Beyond Boundaries
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl"
        >
          Complex Cargo.
          <br />
          <span className="text-slate-200 font-light italic">
            Disciplined Execution.
          </span>
        </motion.h1>

        {/* Subtitle (Grounded in Verified Section 1 Scope) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl font-normal leading-relaxed"
        >
          Integrated logistics, international freight forwarding, and project cargo engineering &mdash; connecting Indian enterprise to global commerce across 10 stations in 8 commercial hubs.
        </motion.p>

        {/* Trust Proof Pills Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-mono"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.08] border border-white/15 backdrop-blur-sm text-slate-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>CBIC AEO-LO Certified (INAAQCA4076M0F243)</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.08] border border-white/15 backdrop-blur-sm text-slate-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
            <span>IATA Cargo Agent</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.08] border border-white/15 backdrop-blur-sm text-slate-200">
            <Globe2 className="w-3.5 h-3.5 text-amber-400" />
            <span>WCA World & SCN Member #420</span>
          </div>
        </motion.div>

        {/* Dual Actions: Request a Quote + Track Consignment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto"
        >
          <a
            href="#rfq"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#c42f0b] hover:bg-[#a82506] active:bg-[#8f1f04] text-white font-semibold px-8 py-4 rounded-xl text-sm sm:text-base transition-colors duration-150 shadow-2xl shadow-[#c42f0b]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Request a Freight Quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={() => setIsTrackModalOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 active:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl text-sm sm:text-base transition-colors duration-150 border border-white/20 backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Search className="w-4 h-4 text-slate-300" />
            <span>Track Consignment</span>
          </button>
        </motion.div>

        {/* Scroll Cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 sm:mt-20 text-[10px] font-mono tracking-[0.25em] text-slate-400 uppercase flex items-center gap-2"
        >
          <span>Scroll to explore</span>
          <span>&darr;</span>
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
