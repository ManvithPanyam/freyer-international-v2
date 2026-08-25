"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Anchor, Plane, Truck } from "lucide-react";

export function HeroSection() {
  return (
    <section id="top" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center bg-[#07152b] text-white overflow-hidden pt-20 pb-16">
      {/* Background Image with Dark Maritime Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/slide4.jpg"
          alt="Heavy Lift and Multimodal Freight Forwarding Operations"
          fill
          priority
          className="object-cover object-center opacity-30 filter saturate-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07152b] via-[#07152b]/70 to-[#07152b]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#07152b]/50 to-[#07152b]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Subtle Category Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono tracking-widest uppercase mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff542e] animate-pulse" />
          <span>Multimodal Freight & Heavy-Lift Engineering</span>
        </motion.div>

        {/* Primary Statement */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08] max-w-4xl"
        >
          Complex cargo. <br className="hidden sm:inline" />
          <span className="text-slate-300 font-light">Precisely moved.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed"
        >
          International air & ocean freight forwarding, AEO-certified customs brokerage, and turnkey project cargo logistics across 10 strategic hubs in India.
        </motion.p>

        {/* Strict UI Actions: 1 Primary + 1 Quiet Secondary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#quote"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#d63309] hover:bg-[#b82a06] text-white font-semibold px-8 py-4 rounded text-sm sm:text-base transition-all duration-200 shadow-lg shadow-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Start a Shipment</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#capabilities"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/15 font-medium px-7 py-4 rounded text-sm sm:text-base transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff542e]"
          >
            <span>Explore Capabilities</span>
          </a>
        </motion.div>

        {/* Verified Proof Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 sm:mt-20 pt-8 border-t border-white/10 w-full max-w-3xl flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11px] sm:text-xs text-slate-300 font-mono tracking-wider uppercase"
        >
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> AEO Certified
          </span>
          <span className="flex items-center gap-1.5">
            <Plane className="w-3.5 h-3.5 text-sky-400" /> IATA Cargo Agent
          </span>
          <span className="flex items-center gap-1.5">
            <Anchor className="w-3.5 h-3.5 text-indigo-400" /> WCA World Member
          </span>
          <span className="flex items-center gap-1.5">
            <Truck className="w-3.5 h-3.5 text-amber-400" /> SCN Partner
          </span>
        </motion.div>
      </div>
    </section>
  );
}
