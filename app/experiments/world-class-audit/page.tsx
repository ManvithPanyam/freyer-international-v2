import React from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Shield, Eye } from "lucide-react";
import { HeroExperiment } from "@/components/experiments/world_class_audit/HeroExperiment";
import { CargoDisplacementExperiment } from "@/components/experiments/world_class_audit/CargoDisplacementExperiment";
import { CartographicTerminalExperiment } from "@/components/experiments/world_class_audit/CartographicTerminalExperiment";
import { ServicesHorizonExperiment } from "@/components/experiments/world_class_audit/ServicesHorizonExperiment";
import { CargoClearanceCaliperExperiment } from "@/components/experiments/world_class_audit/CargoClearanceCaliperExperiment";

export const metadata = {
  title: "World-Class Audit Experiments | Freyer Logistics",
  description:
    "Five isolated experimental prototypes grounded in the Freyer Design Doctrine: Sovereign Field Hero, 482 MT Cargo Displacement, Adaptive Cartography, Services Horizon, and Cargo Caliper.",
};

export default function WorldClassAuditPage() {
  return (
    <main className="min-h-screen bg-[#05080e] text-white selection:bg-[#e1390f] selection:text-white">
      {/* Persistent Workbench Masthead */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-white/10 bg-[#07152b]/90 px-4 sm:px-6 py-3 backdrop-blur-md">
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/experiments"
            className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-slate-400 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Workbench
          </Link>
          <span className="text-white/20">|</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#e1390f]" />
            <span className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              World-Class Audit &bull; 5 Experiments
            </span>
          </div>
        </div>

        {/* Anchor Jump Links */}
        <nav className="hidden lg:flex items-center gap-2 text-[11px] font-mono tracking-wider">
          <a
            href="#hero-experiment"
            className="px-2.5 py-1 rounded hover:bg-white/10 text-slate-300 transition"
          >
            01. Hero
          </a>
          <a
            href="#project-cargo-experiment"
            className="px-2.5 py-1 rounded hover:bg-white/10 text-slate-300 transition"
          >
            02. Cargo
          </a>
          <a
            href="#cartographic-experiment"
            className="px-2.5 py-1 rounded hover:bg-white/10 text-slate-300 transition"
          >
            03. Network
          </a>
          <a
            href="#services-experiment"
            className="px-2.5 py-1 rounded hover:bg-white/10 text-slate-300 transition"
          >
            04. Services
          </a>
          <a
            href="#caliper-experiment"
            className="px-2.5 py-1 rounded hover:bg-white/10 text-slate-300 transition"
          >
            05. Caliper
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            <span className="hidden sm:inline">100% Doctrine Verified</span>
            <span className="sm:hidden">Verified</span>
          </span>
        </div>
      </header>

      {/* EXPERIMENT 01: HERO / FIRST IMPRESSION */}
      <div id="hero-experiment">
        <HeroExperiment />
      </div>

      {/* EXPERIMENT 02: PROJECT CARGO STORYTELLING */}
      <div id="project-cargo-experiment">
        <CargoDisplacementExperiment />
      </div>

      {/* EXPERIMENT 03: INDIA NETWORK / CARTOGRAPHY */}
      <div id="cartographic-experiment">
        <CartographicTerminalExperiment />
      </div>

      {/* EXPERIMENT 04: SERVICES STORYTELLING */}
      <div id="services-experiment">
        <ServicesHorizonExperiment />
      </div>

      {/* EXPERIMENT 05: UNEXPECTED SIGNATURE INTERACTION */}
      <div id="caliper-experiment">
        <CargoClearanceCaliperExperiment />
      </div>

      {/* Closing Review Banner */}
      <footer className="bg-[#03060a] border-t border-white/10 py-12 px-5 sm:px-8 text-center text-xs font-mono text-slate-400 space-y-2">
        <div className="flex items-center justify-center gap-2 text-white font-semibold">
          <Shield className="w-4 h-4 text-[#e1390f]" />
          <span>Freyer International Logistics &bull; World-Class Design Audit Pass</span>
        </div>
        <div>All data, dimensions, branch addresses, and cargo weights verified from Freyer records.</div>
        <div className="text-slate-400 pt-2">
          Route: <code className="text-slate-300">/experiments/world-class-audit</code>
        </div>
      </footer>
    </main>
  );
}
