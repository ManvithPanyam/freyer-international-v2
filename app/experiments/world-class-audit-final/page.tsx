import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { CleanHeroFinalist } from "@/components/experiments/world_class_audit_final/CleanHeroFinalist";
import { CargoScaleFinalist } from "@/components/experiments/world_class_audit_final/CargoScaleFinalist";
import { TruthfulNetworkFinalist } from "@/components/experiments/world_class_audit_final/TruthfulNetworkFinalist";

export const metadata = {
  title: "Adversarial Finalists | Freyer Logistics",
  description: "The 3 surviving truthful concepts: Clean Editorial Hero, 482 MT Scale Monument, and Truthful Pan-India Footprint.",
};

export default function AuditFinalistsPage() {
  return (
    <main className="min-h-screen bg-[#060c18] text-white selection:bg-[#e1390f] selection:text-white">
      {/* Top Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-white/10 bg-[#060c18]/90 px-5 py-3 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <Link
            href="/experiments"
            className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-white transition"
          >
            <ArrowLeft className="h-4 w-4" /> Experiments
          </Link>
          <span className="text-white/20">|</span>
          <span className="text-xs font-mono uppercase tracking-widest text-white font-bold">
            The 3 Adversarial Finalists
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/experiments/world-class-audit"
            className="text-xs font-mono text-slate-400 hover:text-white transition"
          >
            View Pre-Audit 5
          </Link>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
            Zero Inferred Facts
          </span>
        </div>
      </header>

      {/* FINALIST 1: HERO */}
      <CleanHeroFinalist />

      {/* FINALIST 2: 482 MT CARGO SCALE */}
      <CargoScaleFinalist />

      {/* FINALIST 3: TRUTHFUL INDIA NETWORK */}
      <TruthfulNetworkFinalist />

      {/* Footer */}
      <footer className="bg-[#03060c] border-t border-white/10 py-10 px-6 text-center text-xs font-mono text-slate-400 space-y-2">
        <div className="flex items-center justify-center gap-2 text-white font-semibold">
          <Shield className="w-4 h-4 text-[#e1390f]" />
          <span>Freyer International Logistics &bull; Adversarial Truth Pass</span>
        </div>
        <div>All three concepts verified 100% against Freyer forensic source files. Zero synthetic jargon.</div>
      </footer>
    </main>
  );
}
