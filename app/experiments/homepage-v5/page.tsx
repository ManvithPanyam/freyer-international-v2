import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HeroSceneV5 } from "@/components/experiments/v5/HeroSceneV5";
import { IndiaMapV5 } from "@/components/experiments/v5/IndiaMapV5";
import { CargoMotionFilmV5 } from "@/components/experiments/v5/CargoMotionFilmV5";
import { ServicesCinematicV5 } from "@/components/experiments/v5/ServicesCinematicV5";
import { SectionRouteConnector } from "@/components/experiments/v5/RouteMotionSystemV5";
import { ClosingSceneV5 } from "@/components/experiments/v5/ClosingSceneV5";

export const metadata = {
  title: "Pass 5.1: Motion Art Direction | Freyer Logistics",
  description:
    "Refined cinematic motion: 7-stage luxury cartography reveal, directional displacement project cargo film, medium-tailored service choreography, and seamless cross-section transit corridor.",
};

export default function HomepageV5() {
  return (
    <main className="min-h-screen bg-[#040914] text-white selection:bg-[#e1390f] selection:text-white">
      {/* Floating Minimal HUD / Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-white/10 bg-[#040914]/80 px-6 py-4 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <Link
            href="/experiments"
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Experiments
          </Link>
          <span className="text-white/20">|</span>
          <span className="text-xs font-mono uppercase tracking-widest text-[#e1390f] font-semibold">
            Pass 5.1 &bull; Motion Art Direction
          </span>
        </div>

        {/* Sub-experiment Quick Switcher */}
        <div className="hidden lg:flex items-center gap-3 text-xs font-mono">
          <Link
            href="/experiments/map-v5"
            className="text-slate-400 hover:text-white transition px-2 py-1"
          >
            A: Cartography
          </Link>
          <span className="text-white/10">&bull;</span>
          <Link
            href="/experiments/cargo-v5"
            className="text-slate-400 hover:text-white transition px-2 py-1"
          >
            B: Cargo Film
          </Link>
          <span className="text-white/10">&bull;</span>
          <Link
            href="/experiments/routes-v5"
            className="text-slate-400 hover:text-white transition px-2 py-1"
          >
            C: Route Vector
          </Link>
          <span className="text-white/10">&bull;</span>
          <Link
            href="/experiments/services-v5"
            className="text-slate-400 hover:text-white transition px-2 py-1"
          >
            D: Services
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/experiments/homepage-v4-2"
            className="rounded border border-white/20 px-3 py-1.5 text-xs font-mono uppercase tracking-widest text-slate-300 transition hover:border-white hover:text-white"
          >
            V4.2 Base
          </Link>
        </div>
      </header>

      {/* 1. Cinematic Hero */}
      <section className="relative pt-16">
        <HeroSceneV5 />
      </section>

      {/* Invisible Infrastructure Corridor: Hero -> India Network */}
      <SectionRouteConnector
        sourceCity="Port of Chennai"
        destinationCity="10 Stations Network"
        theme="darkToLight"
      />

      {/* 2. Experiment A: India Luxury Cartography with 7-Stage Sequence */}
      <section id="network" className="relative">
        <IndiaMapV5 />
      </section>

      {/* Invisible Infrastructure Corridor: Network -> Project Cargo */}
      <SectionRouteConnector
        sourceCity="10 Operating Stations"
        destinationCity="Heavy Lift (482 MT)"
        theme="lightToDark"
      />

      {/* 3. Experiment B: Project Cargo Signature Motion Film */}
      <section id="cargo" className="relative">
        <CargoMotionFilmV5 />
      </section>

      {/* 4. Global Seamless Corridor: Project Cargo's Final Route Vector Continuing Naturally into Services */}
      <div className="relative bg-gradient-to-b from-[#040912] via-[#040814] to-[#040914] py-8 flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
          {/* Continuous Drawing Transit Corridor Line */}
          <div className="relative w-4 h-24 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 16 96">
              <line
                x1="8"
                y1="0"
                x2="8"
                y2="96"
                stroke="rgba(245, 158, 11, 0.3)"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
              <line
                x1="8"
                y1="0"
                x2="8"
                y2="96"
                stroke="#e1390f"
                strokeWidth="2"
              />
              <circle cx="8" cy="90" r="3" fill="#ffffff" />
            </svg>
          </div>
          <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-slate-400 mt-2">
            Discharge Voyage &bull; Integrated Multimodal Transfer
          </div>
        </div>
      </div>

      {/* 5. Experiment D: Environmental Services Choreography */}
      <section id="services" className="relative">
        <ServicesCinematicV5 />
      </section>

      {/* 6. Closing & Verified Contact Directory */}
      <ClosingSceneV5 />
    </main>
  );
}
