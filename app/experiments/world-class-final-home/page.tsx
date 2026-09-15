"use client";

import React from "react";
import { CleanHeroFinalist } from "@/components/experiments/world_class_audit_final/CleanHeroFinalist";
import { CargoScaleFinalist } from "@/components/experiments/world_class_audit_final/CargoScaleFinalist";
import { CargoToServicesBridge } from "@/components/experiments/services_bridge/CargoToServicesBridge";
import { ServicesSequentialC } from "@/components/experiments/services_bridge/ServicesSequentialC";
import { ServicesToNetworkBridge } from "@/components/experiments/world_class_final_home/ServicesToNetworkBridge";
import { PresentationIndiaMap } from "@/components/experiments/india_map_presentation/PresentationIndiaMap";
import { DirectDispatchFinalist } from "@/components/experiments/world_class_final_home/DirectDispatchFinalist";

export default function WorldClassFinalHomePage() {
  return (
    <main className="min-h-screen bg-[#040810] text-white selection:bg-[#e1390f] selection:text-white">
      {/* 
        ==================================================
        MASTER HOMEPAGE NARRATIVE PROGRESSION:
        1. WHO IS FREYER?         -> Clean Hero (Documentary Field Authority & Accreditations)
        2. WHAT CAN THEY HANDLE?  -> 482 MT Cargo Monument (The Physical Industrial Benchmark)
        3. WHAT ELSE DO THEY DO?  -> Bridge + Services Sequential Flow (Ocean, Air, Customs, 1M sq ft Warehouse, Risk, Project)
        4. WHERE ARE THEY?        -> Bridge + Truthful India Network (10 Branch Stations / 8 Cities, Zero Fake Lines)
        5. HOW DO I ENGAGE?       -> Direct Commercial Dispatch (Direct Line to Chennai HQ & Station Network)
        ==================================================
      */}

      {/* Act I: Identity & Statutory Standing */}
      <CleanHeroFinalist />

      {/* Act II: The Physical Industrial Benchmark */}
      <CargoScaleFinalist />

      {/* Act III: The Bridge — Operational Rigor Continuity */}
      <CargoToServicesBridge />

      {/* Act IV: Core Capability Sequence (Winning Concept C) */}
      <ServicesSequentialC isMasterPage={true} />

      {/* Act V: The Bridge — Physical Ground Infrastructure */}
      <ServicesToNetworkBridge />

      {/* Act VI: National Geographic Reality (10 Stations / 8 Cities) */}
      <PresentationIndiaMap />

      {/* Act VII: Direct Commercial Dispatch & Closing Dossier */}
      <DirectDispatchFinalist />

      {/* Grounded Terminal Colophon */}
      <footer className="bg-black text-slate-500 py-8 border-t border-white/10 text-center text-xs font-mono">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            &copy; {new Date().getFullYear()} Freyer International Logistics Pvt Ltd. All rights reserved.
          </div>
          <div>
            Registered Chennai HQ &bull; AEO-LO Certified &bull; IATA Approved
          </div>
        </div>
      </footer>
    </main>
  );
}