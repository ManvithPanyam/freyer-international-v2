"use client";

import React from "react";
import Link from "next/link";
import { CinematicHeroScene } from "@/components/experiments/v3/CinematicHeroScene";
import { AliveNetworkScene } from "@/components/experiments/v3/AliveNetworkScene";
import { MonumentalCargoScene } from "@/components/experiments/v3/MonumentalCargoScene";
import { TransformingServicesScene } from "@/components/experiments/v3/TransformingServicesScene";
import { ClosingContactScene } from "@/components/experiments/v3/ClosingContactScene";
import { ArrowLeft } from "lucide-react";

export default function HomepageV3ExperimentPage() {
  return (
    <div className="min-h-screen bg-[#060e1a] text-white selection:bg-[#e1390f] selection:text-white font-sans antialiased">
      {/* Floating Chapter Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#060e1a]/85 backdrop-blur-xl border-b border-white/10 px-6 sm:px-10 lg:px-16 py-3.5 flex items-center justify-between text-xs font-light">
        <div className="flex items-center gap-4">
          <Link
            href="/experiments"
            className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Prototypes</span>
          </Link>
          <span className="text-white/20">&bull;</span>
          <span className="text-white tracking-widest uppercase font-medium">
            Pass 3: The Freyer Scroll
          </span>
        </div>

        {/* Chapter Anchors */}
        <div className="flex items-center gap-4 sm:gap-6 tracking-wider uppercase text-slate-400 text-[11px] font-mono">
          <a href="#hero-scene" className="hover:text-white transition-colors">
            01 Hero
          </a>
          <a href="#network-scene" className="hover:text-white transition-colors">
            02 Network
          </a>
          <a href="#cargo-scene" className="hover:text-white transition-colors">
            03 Cargo
          </a>
          <a href="#services-scene" className="hover:text-white transition-colors">
            04 Services
          </a>
          <a href="#contact-scene" className="hover:text-white transition-colors">
            05 Contact
          </a>
        </div>
      </nav>

      {/* The Master Continuous Scroll Flow (Light & Dark Chapters) */}
      <main className="relative pt-12">
        {/* Chapter 01: Hero (Deep Navy) */}
        <CinematicHeroScene />

        {/* Chapter 02: Network (Warm Off-White) */}
        <AliveNetworkScene />

        {/* Chapter 03: Project Cargo (Theatrical Dark) */}
        <MonumentalCargoScene />

        {/* Chapter 04: Services (Crisp Pale Slate) */}
        <TransformingServicesScene />

        {/* Chapter 05: Closing & Contact (Deep Navy) */}
        <ClosingContactScene />
      </main>
    </div>
  );
}
