"use client";

import React, { useState } from "react";
import { CargoScaleFinalist } from "@/components/experiments/world_class_audit_final/CargoScaleFinalist";
import { CargoToServicesBridge } from "@/components/experiments/services_bridge/CargoToServicesBridge";
import { ServicesEditorialA } from "@/components/experiments/services_bridge/ServicesEditorialA";
import { ServicesPhysicalB } from "@/components/experiments/services_bridge/ServicesPhysicalB";
import { ServicesSequentialC } from "@/components/experiments/services_bridge/ServicesSequentialC";

export default function ServicesBridgeWorkbenchPage() {
  const [selectedConcept, setSelectedConcept] = useState<"all" | "a" | "b" | "c">("all");

  return (
    <main className="min-h-screen bg-[#040810] text-white selection:bg-[#e1390f] selection:text-white pb-32">
      {/* Workbench Sticky Navigation */}
      <div className="sticky top-0 z-50 bg-[#040810]/95 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-[10px] font-mono text-[#e1390f] uppercase tracking-widest">
              Workbench / Services & Cargo Bridge
            </div>
            <div className="text-sm font-bold text-white tracking-tight">
              Radically Different Services Concepts (A, B, C)
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedConcept("all")}
              className={`px-3 py-1.5 rounded text-xs font-mono transition ${
                selectedConcept === "all"
                  ? "bg-[#e1390f] text-white font-bold"
                  : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
              }`}
            >
              All 3 Parallel
            </button>
            <button
              onClick={() => setSelectedConcept("a")}
              className={`px-3 py-1.5 rounded text-xs font-mono transition ${
                selectedConcept === "a"
                  ? "bg-[#e1390f] text-white font-bold"
                  : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
              }`}
            >
              Concept A (Editorial)
            </button>
            <button
              onClick={() => setSelectedConcept("b")}
              className={`px-3 py-1.5 rounded text-xs font-mono transition ${
                selectedConcept === "b"
                  ? "bg-[#e1390f] text-white font-bold"
                  : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
              }`}
            >
              Concept B (Physical)
            </button>
            <button
              onClick={() => setSelectedConcept("c")}
              className={`px-3 py-1.5 rounded text-xs font-mono transition ${
                selectedConcept === "c"
                  ? "bg-[#e1390f] text-white font-bold"
                  : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
              }`}
            >
              Concept C (Sequential)
            </button>
          </div>
        </div>
      </div>

      {/* Cargo Scale Finalist (Benchmark) */}
      <CargoScaleFinalist />

      {/* The Crucial Transition Bridge */}
      <CargoToServicesBridge conceptName={selectedConcept.toUpperCase()} />

      {/* Concept Variations */}
      {(selectedConcept === "all" || selectedConcept === "a") && (
        <div className="relative">
          <div className="bg-[#e1390f]/10 border-y border-[#e1390f]/30 px-6 py-2 text-center text-xs font-mono text-[#e1390f] uppercase tracking-widest">
            — Concept A: Large-Format Editorial —
          </div>
          <ServicesEditorialA />
        </div>
      )}

      {(selectedConcept === "all" || selectedConcept === "b") && (
        <div className="relative">
          <div className="bg-[#e1390f]/10 border-y border-[#e1390f]/30 px-6 py-2 text-center text-xs font-mono text-[#e1390f] uppercase tracking-widest">
            — Concept B: Physical / Material Domains —
          </div>
          <ServicesPhysicalB />
        </div>
      )}

      {(selectedConcept === "all" || selectedConcept === "c") && (
        <div className="relative">
          <div className="bg-[#e1390f]/10 border-y border-[#e1390f]/30 px-6 py-2 text-center text-xs font-mono text-[#e1390f] uppercase tracking-widest">
            — Concept C: Quiet Visual Sequence —
          </div>
          <ServicesSequentialC />
        </div>
      )}
    </main>
  );
}
