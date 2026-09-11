"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";

export function EditorialHero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-[#060d17] text-white overflow-hidden selection:bg-[#e1390f] selection:text-white">
      {/* Background Photography with Slow Motion Drift */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.0 }}
          transition={{ duration: 16, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/ai-candidates/AI-GENERATED_NOT_A_REAL_FREYER_FACILITY_ai_port_terminal_1788788622412.jpg"
            alt="Deepwater container terminal at dusk"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-35 brightness-95"
          />
        </motion.div>

        {/* Editorial Gradients & Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060d17] via-[#060d17]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060d17] via-[#060d17]/70 to-transparent" />

        {/* Minimal Attribution */}
        <div className="absolute bottom-6 right-8 z-10 hidden md:block text-[10px] text-slate-400/80 tracking-wider">
          Conceptual Illustration &bull; Not a real Freyer facility
        </div>
      </div>

      {/* Editorial Top Line */}
      <header className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 pt-12 flex items-baseline justify-between">
        <div className="text-xs tracking-[0.3em] uppercase text-slate-400 font-light">
          Freyer International Logistics
        </div>
        <div className="text-xs tracking-[0.2em] uppercase text-amber-400/90 font-light hidden sm:block">
          CBIC AEO-LO &bull; IATA Agent
        </div>
      </header>

      {/* Main Hero Statement */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24">
        <div className="max-w-5xl">
          {/* Main Title: Monumental Scale */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-white leading-[0.95]"
          >
            LOGISTICS <br />
            <span className="font-normal text-white">BEYOND BOUNDARIES.</span>
          </motion.h1>

          {/* Editorial Lead Copy */}
          <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-8 text-lg sm:text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl"
            >
              Logistics helps you realise your business goals with a broad range of transport and
              logistics services. We deliver cost-effective and efficient solutions by leveraging our
              long established carrier relationships with years of expertise across ocean freight, air
              carriage, customs clearance, and heavy industrial cargo.
            </motion.p>

            {/* Restrained Text Link CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:col-span-4 flex md:justify-end"
            >
              <a
                href="#network-section"
                className="group inline-flex items-center gap-3 text-sm tracking-widest uppercase text-amber-400 hover:text-white transition-colors"
              >
                <span>Discover the Network</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Editorial Data Band (NOT Cards — Open Typographic Strip) */}
      <div className="relative z-10 border-t border-white/10 bg-[#040810]/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
                10
              </div>
              <div className="text-xs uppercase tracking-widest text-slate-300 mt-1">
                Stations
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                Across 8 Commercial Cities in India
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-amber-400 tracking-tight">
                AEO-LO
              </div>
              <div className="text-xs uppercase tracking-widest text-slate-300 mt-1">
                Customs Authority
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                CBIC Accredited Logistics Operator
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
                1,000,000+
              </div>
              <div className="text-xs uppercase tracking-widest text-slate-300 mt-1">
                Square Feet
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                WMS-Enabled Warehousing Footprint
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
                482 MT
              </div>
              <div className="text-xs uppercase tracking-widest text-slate-300 mt-1">
                Single Movement
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                Shanghai to Jebel Ali Breakbulk Shipment
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
