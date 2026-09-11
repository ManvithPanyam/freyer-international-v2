"use client";

import React from "react";
import Link from "next/link";
import { CargoMotionFilmV5 } from "@/components/experiments/v5/CargoMotionFilmV5";
import { ArrowLeft } from "lucide-react";

export default function CargoV5ExperimentPage() {
  return (
    <div className="min-h-screen bg-[#040912] text-white selection:bg-[#e1390f] selection:text-white font-sans antialiased">
      <nav className="border-b border-white/10 bg-[#040912]/90 backdrop-blur-md px-6 sm:px-10 py-4 flex items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          <Link
            href="/experiments"
            className="text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors font-mono"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Experiments Hub</span>
          </Link>
          <span className="text-white/20">&bull;</span>
          <span className="font-semibold uppercase tracking-widest font-mono text-amber-400">
            [Experiment B] Project Cargo Motion Film
          </span>
        </div>
        <Link
          href="/experiments/homepage-v5"
          className="text-[11px] font-mono px-3 py-1 rounded-full bg-amber-400 text-black font-semibold hover:bg-amber-300 transition-colors"
        >
          View Full Pass 5 Journey &rarr;
        </Link>
      </nav>

      <main>
        <CargoMotionFilmV5 />
      </main>
    </div>
  );
}
