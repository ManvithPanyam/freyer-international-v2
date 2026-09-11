import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CargoScene3DV5 } from "@/components/experiments/v5/CargoScene3DV5";

export const metadata = {
  title: "Experiment E: One 3D Signature | Freyer V5",
  description:
    "A sparse, high-taste Three.js intermodal container geometry with scroll-driven camera choreography.",
};

export default function ThreeV5Page() {
  return (
    <main className="min-h-screen bg-[#040914] text-white">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-[#040914]/80 px-6 py-4 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <Link
            href="/experiments"
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> All Experiments
          </Link>
          <span className="text-white/20">|</span>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
            Experiment E: One 3D Signature
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/experiments/homepage-v5"
            className="rounded bg-white/10 px-3 py-1.5 text-xs font-mono uppercase tracking-widest text-white transition hover:bg-white/20"
          >
            Combined V5 Journey &rarr;
          </Link>
        </div>
      </header>

      {/* Hero Intro */}
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-[#e1390f]">
            Spatial WebGL &bull; Three.js
          </span>
          <h1 className="mt-3 text-3xl md:text-5xl font-light tracking-tight text-white">
            Sparse Intermodal 3D Spatial Geometry
          </h1>
          <p className="mt-4 text-slate-300 font-light leading-relaxed">
            Zero cartoonish 3D models or heavy glTF downloads. Lightweight procedural geometries representing intermodal freight architecture, matte-lit with dark environmental fog and scroll-steered orbital perspective.
          </p>
        </div>
      </section>

      {/* Component */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="h-[700px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <CargoScene3DV5 className="h-full w-full" />
        </div>
      </section>
    </main>
  );
}
