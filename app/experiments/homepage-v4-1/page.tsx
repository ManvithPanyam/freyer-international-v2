"use client";

import React from "react";
import Link from "next/link";
import { HeroScene } from "@/components/experiments/v4-1/HeroScene";
import { NetworkScene } from "@/components/experiments/v4-1/NetworkScene";
import { CargoScene } from "@/components/experiments/v4-1/CargoScene";
import { ServicesScene } from "@/components/experiments/v4-1/ServicesScene";
import { ClosingScene } from "@/components/experiments/v4-1/ClosingScene";
import { ArrowLeft } from "lucide-react";

export default function HomepageV41ExperimentPage() {
  return (
    <div className="min-h-screen bg-[#060e1a] text-white selection:bg-[#e1390f] selection:text-white font-sans antialiased">
      {/* Unobtrusive Header: non-sticky on mobile to prevent obscuring content */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 sm:px-10 lg:px-16 py-4 flex items-center justify-between text-xs font-light pointer-events-auto">
        <div className="flex items-center gap-3">
          <Link
            href="/experiments"
            className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Prototypes</span>
          </Link>
          <span className="text-white/20">&bull;</span>
          <span className="text-white tracking-widest uppercase font-medium">
            Pass 4.1: Signature Polish
          </span>
        </div>

        {/* Minimal Anchor Quick-Jumps (Desktop only) */}
        <div className="hidden sm:flex items-center gap-6 tracking-wider uppercase text-slate-400 text-[11px] font-mono">
          <a href="#hero-scene" className="hover:text-white transition-colors">
            Hero
          </a>
          <a href="#network-scene" className="hover:text-white transition-colors">
            Locations
          </a>
          <a href="#cargo-scene" className="hover:text-white transition-colors">
            Project Cargo
          </a>
          <a href="#services-scene" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#contact-scene" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </nav>

      {/* The Master Continuous Journey */}
      <main className="relative">
        <HeroScene />
        <NetworkScene />
        <CargoScene />
        <ServicesScene />
        <ClosingScene />
      </main>
    </div>
  );
}
