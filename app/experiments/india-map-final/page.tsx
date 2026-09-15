"use client";

import React from "react";
import { AuthoritativeIndiaMap } from "@/components/experiments/india_map_final/AuthoritativeIndiaMap";

export default function IndiaMapFinalExperimentPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white selection:bg-[#e1390f] selection:text-white">
      {/* Top Banner */}
      <header className="border-b border-white/10 bg-[#030712]/90 backdrop-blur-md px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono text-[#e1390f] uppercase tracking-widest">
              Cartographic Benchmark Experiment
            </div>
            <h1 className="text-sm font-bold text-white tracking-tight">
              Authoritative Survey of India Map Geometry (Albers Conic Projection)
            </h1>
          </div>
          <div className="text-xs font-mono text-slate-400">
            Source: Survey of India Official Extent (DataMeet)
          </div>
        </div>
      </header>

      {/* The Rebuilt Map Experience */}
      <AuthoritativeIndiaMap />

      {/* Comparative Diagnostic Footnote */}
      <footer className="border-t border-white/10 bg-black/60 py-12 px-6">
        <div className="max-w-7xl mx-auto space-y-4 text-xs font-mono text-slate-400">
          <div className="text-white font-bold uppercase tracking-wider text-sm">
            Cartographic Verification Notes
          </div>
          <p className="max-w-3xl leading-relaxed text-slate-300 font-light">
            This map rebuild replaces the previous simplified polygon with 2,257 vertices derived directly from official Survey of India boundary vectors. The Albers Equal-Area Conic projection accurately retains the sovereign northern boundaries of Jammu & Kashmir and Ladakh, the intricate Kathiawar and Rann of Kutch contours of Gujarat, the natural southward taper to Kanyakumari, the Siliguri corridor, the complete seven northeastern sister states, and the Andaman & Nicobar archipelago.
          </p>
        </div>
      </footer>
    </main>
  );
}
