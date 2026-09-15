import React from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles, Navigation } from "lucide-react";
import { HeroSceneV5 } from "@/components/experiments/v5/HeroSceneV5";
import { CartographicTheatreV52 } from "@/components/experiments/v5_2/CartographicTheatreV52";
import { CargoFilmV52 } from "@/components/experiments/v5_2/CargoFilmV52";
import { SeamlessJourneyV52 } from "@/components/experiments/v5_2/SeamlessJourneyV52";
import { ClosingSceneV5 } from "@/components/experiments/v5/ClosingSceneV5";

export const metadata = {
  title: "Pass 5.2: Signature Moments | Freyer Logistics",
  description:
    "A piece of motion design that happens to be a logistics website: Cargo centerpiece mini-films, cartographic theatre origin-outward India reveal, and seamless vector continuity into Services.",
};

export default function HomepageV52() {
  return (
    <main className="min-h-screen bg-[#05080e] text-white selection:bg-[#e1390f] selection:text-white">
      {/* HUD Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-white/10 bg-[#05080e]/85 px-4 sm:px-6 py-3.5 backdrop-blur-md">
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/experiments"
            className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-slate-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Experiments
          </Link>
          <span className="text-white/20">|</span>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#e1390f] animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Pass 5.2 &bull; Signature Moments
            </span>
          </div>
        </div>

        {/* Quick Route Switcher to compare with V5.1 */}
        <div className="flex items-center gap-3">
          <Link
            href="/experiments/homepage-v5"
            className="hidden sm:inline-flex items-center gap-1.5 rounded border border-white/20 px-3 py-1 text-xs font-mono uppercase tracking-wider text-slate-300 transition hover:border-[#e1390f] hover:text-white"
          >
            <span>Compare V5.1</span>
          </Link>
          <a
            href="#project-cargo-film-section"
            className="rounded bg-[#e1390f] px-3 py-1 text-xs font-mono uppercase tracking-wider text-white font-semibold hover:bg-[#ff552e] transition"
          >
            Jump to Cargo
          </a>
        </div>
      </header>

      {/* 01. EDITORIAL HERO SCENE */}
      <HeroSceneV5 />

      {/* 02. SIGNATURE 2: CARTOGRAPHIC THEATRE (Origin-Outward India Construction) */}
      <CartographicTheatreV52 />

      {/* 03. SIGNATURE 1: PROJECT CARGO CENTERPIECE (5 Mini Motion Films) */}
      <CargoFilmV52 />

      {/* 04. SIGNATURE 3: UNBROKEN CONTINUOUS VECTOR INTO SERVICES */}
      <SeamlessJourneyV52 />

      {/* 05. CLOSING VERIFIED STATIONS & ACCREDITATIONS DOSSIER */}
      <ClosingSceneV5 />
    </main>
  );
}
