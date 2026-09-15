import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HeroSceneV5 } from "@/components/experiments/v5/HeroSceneV5";
import { CartographicTheatreV53 } from "@/components/experiments/v5_3/CartographicTheatreV53";
import { CargoFilmV53 } from "@/components/experiments/v5_3/CargoFilmV53";
import { ContinuousVoyageV53 } from "@/components/experiments/v5_3/ContinuousVoyageV53";
import { ClosingSceneV5 } from "@/components/experiments/v5/ClosingSceneV5";

export const metadata = {
  title: "Pass 5.3: The Signature Cut | Freyer Logistics",
  description:
    "The Signature Cut: Factual source sanitization, stillness-driven motion language, origin-outward India cartography, and a native scroll-driven continuum from Project Cargo into Services.",
};

export default function HomepageV53() {
  return (
    <main className="min-h-screen bg-[#05080e] text-white selection:bg-[#e1390f] selection:text-white">
      {/* Top Quiet Minimal HUD */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-white/10 bg-[#05080e]/90 px-4 sm:px-6 py-3.5 backdrop-blur-md">
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/experiments"
            className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-slate-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Experiments
          </Link>
          <span className="text-white/20">|</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#e1390f]" />
            <span className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Pass 5.3 &bull; The Signature Cut
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/experiments/homepage-v5-2"
            className="hidden sm:inline-flex items-center gap-1.5 rounded border border-white/20 px-3 py-1 text-xs font-mono uppercase tracking-wider text-slate-300 transition hover:border-[#e1390f] hover:text-white"
          >
            <span>Compare V5.2</span>
          </Link>
          <a
            href="#project-cargo-film-section"
            className="rounded bg-[#e1390f] px-3 py-1 text-xs font-mono uppercase tracking-wider text-white font-semibold hover:bg-[#ff552e] transition"
          >
            Project Cargo
          </a>
        </div>
      </header>

      {/* 01. EDITORIAL HERO SCENE */}
      <HeroSceneV5 />

      {/* 02. CARTOGRAPHIC THEATRE (Origin-Outward India Reveal, Finite Reticle, Stillness) */}
      <CartographicTheatreV53 />

      {/* 03. PROJECT CARGO SIGNATURE FILM (5 Mini-Films, Sanitized Copy, Stillness Rhythm) */}
      <CargoFilmV53 />

      {/* 04. CONTINUOUS VOYAGE (Native Scroll-Driven Continuum into Services) */}
      <ContinuousVoyageV53 />

      {/* 05. VERIFIED CLOSING ACCREDITATIONS & CONTACT DIRECTORY */}
      <ClosingSceneV5 />
    </main>
  );
}
