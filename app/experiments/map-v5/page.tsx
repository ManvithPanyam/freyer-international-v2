"use client";

import React from "react";
import Link from "next/link";
import { IndiaMapV5 } from "@/components/experiments/v5/IndiaMapV5";
import { ArrowLeft } from "lucide-react";

export default function MapV5ExperimentPage() {
  return (
    <div className="min-h-screen bg-[#f6f5f1] text-[#0a1424] selection:bg-[#0a1424] selection:text-white font-sans antialiased">
      <nav className="border-b border-slate-300 bg-white/80 backdrop-blur-md px-6 sm:px-10 py-4 flex items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          <Link
            href="/experiments"
            className="text-slate-500 hover:text-black flex items-center gap-1.5 transition-colors font-mono"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Experiments Hub</span>
          </Link>
          <span className="text-slate-300">&bull;</span>
          <span className="font-semibold uppercase tracking-widest font-mono text-[#0a1424]">
            [Experiment A] Geographic India Cartography
          </span>
        </div>
        <Link
          href="/experiments/homepage-v5"
          className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#0a1424] text-white hover:bg-slate-800 transition-colors"
        >
          View Full Pass 5 Journey &rarr;
        </Link>
      </nav>

      <main>
        <IndiaMapV5 />
      </main>
    </div>
  );
}
