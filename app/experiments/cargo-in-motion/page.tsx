"use client";

import React from "react";
import Link from "next/link";
import CargoInMotionCinematic from "@/components/projects/CargoInMotionCinematic";
import {
  ArrowLeft,
  Ship,
  FileText,
  Layers,
  CheckCircle2,
  Box,
  Compass,
} from "lucide-react";

export default function CargoInMotionExperimentPage() {
  return (
    <main className="min-h-screen bg-[#0a0c10] text-[#f1f5f9] selection:bg-[#e1390f] selection:text-white">
      {/* Top Editorial Sticky Navigation */}
      <header className="border-b border-white/10 bg-[#0a0c10]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/experiments/global-movement-atlas"
              className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition"
            >
              <ArrowLeft className="w-4 h-4" /> Back to World Movement Atlas
            </Link>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <div className="hidden sm:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#e1390f]" />
              <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                Freyer Documented Project Movements
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/experiments"
              className="px-3 py-1.5 rounded text-xs font-mono bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition"
            >
              All Experiments
            </Link>
          </div>
        </div>
      </header>

      {/* EDITORIAL OPENING COMPOSITION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 pb-6 border-b border-white/10">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono tracking-[0.25em] text-[#e1390f] uppercase font-bold">
              PROJECTS
            </span>
            <span className="text-slate-600">&bull;</span>
            <span className="text-xs font-mono tracking-[0.2em] text-slate-400 uppercase">
              11 DOCUMENTED MOVEMENTS
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-[family-name:var(--font-barlow-condensed)]">
            PROJECT ARCHIVE / CARGO IN MOTION
          </h1>

          <p className="text-slate-300 max-w-3xl text-sm sm:text-base leading-relaxed font-sans font-light">
            An industrial documentary experience navigating Freyer’s historical project archive.
            Physical cargo representations are creative 3D visualizations grounded in verbatim project records
            and archival photography—structured as an editorial monograph rather than software simulation.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono text-slate-400">
            <span className="text-white font-semibold">Verified Test Movements:</span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">Record #09: Shanghai → Jebel Ali</span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">Record #07: Genoa → Jebel Ali</span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">Record #11: Venice → Mundra</span>
          </div>
        </div>
      </section>

      {/* THE EDITORIAL ARCHIVE STAGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-8">
        <CargoInMotionCinematic />
      </section>

      {/* THREE ARCHIVAL RECORD PROFILES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-12 border-t border-white/10">
        <div className="mb-6 space-y-1">
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white font-[family-name:var(--font-barlow-condensed)]">
            Three Distinct Cargo Morphologies
          </h2>
          <p className="text-xs font-mono text-slate-400">
            Every movement features a distinct procedural physical representation faithful to its documented cargo profile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card A: Shanghai */}
          <div className="bg-[#0f1217] border border-white/10 rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-[#e1390f] font-bold">RECORD #09</span>
              <span>SHANGHAI → JEBEL ALI</span>
            </div>
            <h3 className="text-lg font-bold text-white font-[family-name:var(--font-barlow-condensed)] uppercase">
              Heavy Industrial Cargo Mass
            </h3>
            <div className="text-xs font-mono text-amber-400">
              482 MT &bull; 796 CBM &bull; 29 PKG
            </div>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              Massive fabricated steel structural mass with lifting lugs and cross-lacing diaphragms.
              Classified verbatim in project.html as: <strong className="text-slate-200">BREAK BULK SHIPMENT</strong>.
            </p>
          </div>

          {/* Card B: Genoa */}
          <div className="bg-[#0f1217] border border-white/10 rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-[#e1390f] font-bold">RECORD #07</span>
              <span>EX GENOA → JEBEL ALI</span>
            </div>
            <h3 className="text-lg font-bold text-white font-[family-name:var(--font-barlow-condensed)] uppercase">
              Repeated Modular Units
            </h3>
            <div className="text-xs font-mono text-amber-400">
              17 UNITS &bull; 68,000 KG EACH
            </div>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              Precision array of heavy timber-crated monolithic machinery units (360 &times; 263 &times; 400 cm).
              Classified verbatim as: <strong className="text-slate-200">DOOR TO DOOR</strong>.
            </p>
          </div>

          {/* Card C: Venice */}
          <div className="bg-[#0f1217] border border-white/10 rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-[#e1390f] font-bold">RECORD #11</span>
              <span>VENICE → MUNDRA</span>
            </div>
            <h3 className="text-lg font-bold text-white font-[family-name:var(--font-barlow-condensed)] uppercase">
              Elongated Boom Crane
            </h3>
            <div className="text-xs font-mono text-amber-400">
              37,600 KG &bull; 2,700 × 400 × 455 CM
            </div>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              27-meter elongated lattice crane assembly with counterweight body, yellow safety walkways, and timber cradle.
              Classified verbatim as: <strong className="text-slate-200">BREAK BULK ON CONTAINER VESSEL</strong>.
            </p>
          </div>
        </div>

        {/* Source-Truth Disclaimer */}
        <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3 text-xs text-slate-400">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-200">Archival &amp; Simulation Principle:</strong> The 3D animations are creative visualizations
            grounded in documented archival weights, dimensions, and authentic quayside photography. They do not claim operational
            reconstruction of vessel stowage or handling procedures. All visible metrics match <code className="text-amber-300">project.html</code> verbatim.
          </div>
        </div>
      </section>
    </main>
  );
}
