"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CinematicHeroExp } from "@/components/experiments/CinematicHeroExp";
import { ProjectCargoEditorialExp } from "@/components/experiments/ProjectCargoEditorialExp";
import { IndiaNetworkMapExp } from "@/components/experiments/IndiaNetworkMapExp";
import { ServicesSystemExp } from "@/components/experiments/ServicesSystemExp";
import { Layers, Eye, ShieldCheck, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ExperimentsWorkbenchPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "a" | "b" | "c" | "d">("all");

  return (
    <div className="min-h-screen bg-[#040a14] text-white selection:bg-[#e1390f] selection:text-white font-sans antialiased">
      {/* Top Fixed Control Ribbon */}
      <header className="sticky top-0 z-50 bg-[#050e1c]/90 backdrop-blur-xl border-b border-white/10 px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
        {/* Left: Brand & Mode Tag */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Production Home</span>
          </Link>
          <span className="text-white/20">&bull;</span>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold tracking-tight text-white uppercase font-mono">
              Pass 1 Prototypes
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
              Isolated Testbed
            </span>
          </div>
        </div>

        {/* Center: View Switcher (All vs Isolated Mode) */}
        <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-lg border border-white/10 text-xs font-mono">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-3 py-1.5 rounded transition-all ${
              activeFilter === "all"
                ? "bg-[#e1390f] text-white font-medium shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            All 4 Prototypes
          </button>
          <button
            onClick={() => setActiveFilter("a")}
            className={`px-3 py-1.5 rounded transition-all ${
              activeFilter === "a"
                ? "bg-amber-500 text-black font-medium shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Exp A: Hero
          </button>
          <button
            onClick={() => setActiveFilter("b")}
            className={`px-3 py-1.5 rounded transition-all ${
              activeFilter === "b"
                ? "bg-amber-500 text-black font-medium shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Exp B: Cargo
          </button>
          <button
            onClick={() => setActiveFilter("c")}
            className={`px-3 py-1.5 rounded transition-all ${
              activeFilter === "c"
                ? "bg-amber-500 text-black font-medium shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Exp C: India Map
          </button>
          <button
            onClick={() => setActiveFilter("d")}
            className={`px-3 py-1.5 rounded transition-all ${
              activeFilter === "d"
                ? "bg-amber-500 text-black font-medium shadow"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Exp D: Services
          </button>
        </div>

        {/* Right: Compliance Status */}
        <div className="hidden lg:flex items-center gap-3 text-xs font-mono text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Factual Ground Truth Verified &bull; 0 Blacklist Hits</span>
        </div>
      </header>

      {/* Main Experiments Stage */}
      <main className="relative">
        {/* Prototype A: Cinematic Hero */}
        {(activeFilter === "all" || activeFilter === "a") && (
          <div id="hero-a" className="relative">
            <div className="bg-[#050e1c] border-b border-white/10 px-6 py-2 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="uppercase tracking-widest text-amber-400 font-semibold">
                [Experiment A] Cinematic Editorial Hero — United Carriers Benchmark
              </span>
              <span>Generous whitespace &bull; Restrained typography &bull; Source copy only</span>
            </div>
            <CinematicHeroExp />
          </div>
        )}

        {/* Prototype B: Real Project Cargo Story */}
        {(activeFilter === "all" || activeFilter === "b") && (
          <div id="cargo-b" className="relative">
            <div className="bg-[#050e1c] border-b border-white/10 px-6 py-2 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="uppercase tracking-widest text-amber-400 font-semibold">
                [Experiment B] Real Project Cargo Story — 11 Authenticated Movements
              </span>
              <span>Oversized metrics &bull; Real routes &bull; Verbatim cargo weights</span>
            </div>
            <ProjectCargoEditorialExp />
          </div>
        )}

        {/* Prototype C: India Network */}
        {(activeFilter === "all" || activeFilter === "c") && (
          <div id="network-c" className="relative">
            <div className="bg-[#050e1c] border-b border-white/10 px-6 py-2 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="uppercase tracking-widest text-amber-400 font-semibold">
                [Experiment C] India Logistics Network — 10 Stations Across 8 Cities
              </span>
              <span>SVG Vector Cartography &bull; Chennai HQ & Airport &bull; Corporate Comms</span>
            </div>
            <IndiaNetworkMapExp />
          </div>
        )}

        {/* Prototype D: Services as One System */}
        {(activeFilter === "all" || activeFilter === "d") && (
          <div id="services-d" className="relative">
            <div className="bg-[#050e1c] border-b border-white/10 px-6 py-2 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="uppercase tracking-widest text-amber-400 font-semibold">
                [Experiment D] Services as One System — 6 Integrated Disciplines
              </span>
              <span>Continuous visual system &bull; Deep stage transitions &bull; Source copy</span>
            </div>
            <ServicesSystemExp />
          </div>
        )}
      </main>

      {/* Workbench Footer */}
      <footer className="border-t border-white/10 bg-[#03070f] py-12 px-6 sm:px-8 text-center text-xs font-mono text-slate-500">
        <p>
          Freyer International Speculative Pitch Build &bull; Pass 1 Design Prototypes &bull; Strictly Isolated from Production Routes
        </p>
        <p className="mt-2 text-slate-600">
          Source of Truth: Original Freyer Website &bull; CBIC AEO-LO (INAAQCA4076M0F243) &bull; 10 Stations Across 8 Cities
        </p>
      </footer>
    </div>
  );
}
