"use client";

import React from "react";
import Link from "next/link";
import { EditorialHero } from "@/components/experiments/v2/EditorialHero";
import { EditorialNetwork } from "@/components/experiments/v2/EditorialNetwork";
import { EditorialProjectCargo } from "@/components/experiments/v2/EditorialProjectCargo";
import { EditorialServices } from "@/components/experiments/v2/EditorialServices";
import { ArrowLeft } from "lucide-react";

export default function HomepageV2ExperimentPage() {
  return (
    <div className="min-h-screen bg-[#060d17] text-white selection:bg-[#e1390f] selection:text-white font-sans antialiased">
      {/* Discreet Navigation Anchor Strip */}
      <nav className="sticky top-0 z-50 bg-[#060d17]/85 backdrop-blur-xl border-b border-white/5 px-6 sm:px-10 lg:px-16 py-4 flex items-center justify-between text-xs font-light">
        <div className="flex items-center gap-4">
          <Link
            href="/experiments"
            className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Pass 1 Prototypes</span>
          </Link>
          <span className="text-white/20">&bull;</span>
          <span className="text-white tracking-widest uppercase">
            Pass 2: Premium Industrial Editorial
          </span>
        </div>

        <div className="flex items-center gap-6 sm:gap-8 tracking-wider uppercase text-slate-400 text-[11px]">
          <a href="#network-section" className="hover:text-white transition-colors">
            Network
          </a>
          <a href="#project-cargo-section" className="hover:text-white transition-colors">
            Project Cargo
          </a>
          <a href="#services-section" className="hover:text-white transition-colors">
            Services
          </a>
        </div>
      </nav>

      {/* The Unified Editorial Story Flow */}
      <main className="relative">
        {/* Section 1: Hero */}
        <EditorialHero />

        {/* Section 2: India Network */}
        <EditorialNetwork />

        {/* Section 3: Project Cargo */}
        <EditorialProjectCargo />

        {/* Section 4: Services */}
        <EditorialServices />
      </main>

      {/* Editorial Footer */}
      <footer className="border-t border-white/5 bg-[#03060c] py-16 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-6 text-xs text-slate-400 font-light">
          <div>
            <div className="text-white text-sm font-normal mb-1">
              Freyer International Logistics Pvt Ltd
            </div>
            <div>CBIC AEO-LO (INAAQCA4076M0F243) &bull; 10 Stations Across 8 Cities</div>
          </div>
          <div className="text-slate-400">
            Pass 2 Editorial Experiment &bull; Isolated Route (/experiments/homepage-v2)
          </div>
        </div>
      </footer>
    </div>
  );
}
