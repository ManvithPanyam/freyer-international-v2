import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HeroSceneV5 } from "@/components/experiments/v5/HeroSceneV5";
import { IndiaMapV5 } from "@/components/experiments/v5/IndiaMapV5";
import { CargoMotionFilmV5 } from "@/components/experiments/v5/CargoMotionFilmV5";
import { CargoScene3DV5 } from "@/components/experiments/v5/CargoScene3DV5";
import { ServicesCinematicV5 } from "@/components/experiments/v5/ServicesCinematicV5";
import { SectionRouteConnector } from "@/components/experiments/v5/RouteMotionSystemV5";
import { ClosingSceneV5 } from "@/components/experiments/v5/ClosingSceneV5";

export const metadata = {
  title: "Pass 5: Cinematic Industrial Editorial | Freyer V5",
  description:
    "An integrated cinematic journey combining geographic vector cartography, native scroll project cargo film, medium-tailored service transitions, and sparse WebGL container geometry.",
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
            Pass 5 &bull; Cinematic Motion
          </span>
        </div>

        {/* Sub-experiment Quick Switcher */}
        <div className="hidden lg:flex items-center gap-3 text-xs font-mono">
          <Link
            href="/experiments/map-v5"
            className="text-slate-400 hover:text-white transition px-2 py-1"
          >
            A: Map
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
            C: Route Line
          </Link>
          <span className="text-white/10">&bull;</span>
          <Link
            href="/experiments/services-v5"
            className="text-slate-400 hover:text-white transition px-2 py-1"
          >
            D: Services
          </Link>
          <span className="text-white/10">&bull;</span>
          <Link
            href="/experiments/three-v5"
            className="text-slate-400 hover:text-white transition px-2 py-1"
          >
            E: 3D
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

      {/* Corridor: Hero -> India Network */}
      <SectionRouteConnector
        label="Operational Corridor"
        sourceCity="Port of Chennai"
        destinationCity="10 Stations Network"
        theme="darkToLight"
      />

      {/* 2. Experiment A: India Geographic Vector Network */}
      <section id="network" className="relative">
        <IndiaMapV5 />
      </section>

      {/* Corridor: Network -> Project Cargo */}
      <SectionRouteConnector
        label="Heavy Engineering Corridor"
        sourceCity="10 Operating Stations"
        destinationCity="482 MT Heavy Lift"
        theme="lightToDark"
      />

      {/* 3. Experiment B: Project Cargo Motion Film */}
      <section id="cargo" className="relative">
        <CargoMotionFilmV5 />
      </section>

      {/* Corridor: Cargo -> 3D Signature */}
      <SectionRouteConnector
        label="Intermodal Vector"
        sourceCity="Breakbulk Discharge"
        destinationCity="Container Yard"
        theme="darkToDark"
      />

      {/* 4. Experiment E: One 3D Signature Intermodal Bay */}
      <section id="intermodal-3d" className="relative py-16 bg-[#040914] border-t border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                Spatial Perspective &bull; Intermodal Spatial Geometry
              </span>
              <h2 className="mt-2 text-2xl md:text-4xl font-light tracking-tight text-white">
                Multimodal Logistics Yard Architecture
              </h2>
            </div>
            <p className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Procedural WebGL &bull; Three.js
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-[520px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
            <CargoScene3DV5 className="h-full w-full" />
          </div>
        </div>
      </section>

      {/* Corridor: 3D -> Integrated Services */}
      <SectionRouteConnector
        label="Comprehensive Integration"
        sourceCity="Container Freight Station"
        destinationCity="6 Core Disciplines"
        theme="darkToDark"
      />

      {/* 5. Experiment D: Specialized Cinematic Services */}
      <section id="services" className="relative">
        <ServicesCinematicV5 />
      </section>

      {/* 6. Closing & Verified Contact Directory */}
      <ClosingSceneV5 />
    </main>
  );
}
