"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "lucide-react";

export function CinematicHeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scroll linked choreography
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.0, 1.12]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [0.38, 0.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero-scene"
      className="relative min-h-screen flex flex-col justify-between bg-[#060e1a] text-white overflow-hidden selection:bg-[#e1390f] selection:text-white"
    >
      {/* Background Photography with Scroll-Linked Scale & Drift */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          style={{ scale: imageScale, opacity: imageOpacity }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/ai-candidates/AI-GENERATED_NOT_A_REAL_FREYER_FACILITY_ai_port_terminal_1788788622412.jpg"
            alt="Maritime cargo terminal at twilight"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-90"
          />
        </motion.div>

        {/* Cinematic Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060e1a] via-[#060e1a]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060e1a] via-[#060e1a]/75 to-transparent" />

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

      {/* Main Hero Statement with Scroll Parallax */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24"
      >
        <div className="max-w-5xl">
          {/* Main Title: Monumental Scale */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-white leading-[0.92]">
            LOGISTICS <br />
            <span className="font-normal text-white">BEYOND BOUNDARIES.</span>
          </h1>

          {/* Editorial Lead Copy */}
          <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <p className="md:col-span-8 text-lg sm:text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl">
              Logistics helps you realise your business goals with a broad range of transport and
              logistics services. We deliver cost-effective and efficient solutions by leveraging our
              long established carrier relationships with years of expertise across ocean freight, air
              carriage, customs clearance, and heavy industrial cargo.
            </p>

            {/* Restrained Text Link CTA */}
            <div className="md:col-span-4 flex md:justify-end">
              <a
                href="#network-scene"
                className="group inline-flex items-center gap-3 text-sm tracking-widest uppercase text-amber-400 hover:text-white transition-colors"
              >
                <span>Enter India Network</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Editorial Transition Bridge: Borderless Data Band */}
      <div className="relative z-10 border-t border-white/10 bg-[#040810]/75 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
                10
              </div>
              <div className="text-xs uppercase tracking-widest text-slate-400 mt-1">
                Stations Across 8 Cities
              </div>
              <div className="text-[11px] text-slate-400 font-light mt-0.5">
                Chennai HQ &amp; Airport Station distinct
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
                AEO-LO
              </div>
              <div className="text-xs uppercase tracking-widest text-slate-400 mt-1">
                CBIC Certified Operator
              </div>
              <div className="text-[11px] text-slate-400 font-light mt-0.5">
                INAAQCA4076M0F243 &bull; Valid to 2029
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
                1,000,000+
              </div>
              <div className="text-xs uppercase tracking-widest text-slate-400 mt-1">
                Sq. Ft. Warehousing Footprint
              </div>
              <div className="text-[11px] text-slate-400 font-light mt-0.5">
                Bonded CFS &amp; 3PL facilities
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-amber-400 tracking-tight">
                482 MT
              </div>
              <div className="text-xs uppercase tracking-widest text-slate-400 mt-1">
                Peak Documented Lift
              </div>
              <div className="text-[11px] text-slate-400 font-light mt-0.5">
                Verified Breakbulk Project Shipment
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
