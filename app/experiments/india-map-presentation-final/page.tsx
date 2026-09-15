"use client";

import React from "react";
import Link from "next/link";
import { PresentationIndiaMap } from "@/components/experiments/india_map_presentation/PresentationIndiaMap";
import { ArrowLeft, CheckCircle2, Shield } from "lucide-react";

export default function IndiaMapPresentationFinalPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white selection:bg-[#e1390f] selection:text-white">
      {/* Top Editorial Breadcrumb Bar */}
      <header className="border-b border-white/10 bg-black/40 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/experiments/world-class-final-home"
              className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Master Homepage
            </Link>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <div className="hidden sm:flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                Customer Presentation Cut &bull; Geometry Approved
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300">
              10 Operating Stations
            </span>
            <span className="px-2.5 py-1 rounded text-[11px] font-mono bg-[#e1390f]/15 border border-[#e1390f]/30 text-[#e1390f] font-semibold">
              Zero Synthetic Corridors
            </span>
          </div>
        </div>
      </header>

      {/* Main Map Presentation Component */}
      <PresentationIndiaMap />

      {/* Editorial Footnote: Physical Footprint Summary */}
      <section className="py-12 border-t border-white/10 bg-[#02050b] text-slate-400 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <div className="text-white font-semibold text-sm flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#e1390f]" /> Owned Customs Licenses
            </div>
            <p className="text-slate-400 leading-relaxed font-sans text-xs">
              Customs Broker License No. R-74/2012 registered at Custom House, Chennai. Direct filing and examination handling across ports and air cargo complexes.
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-white font-semibold text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#e1390f]" /> Direct Port Presence
            </div>
            <p className="text-slate-400 leading-relaxed font-sans text-xs">
              Deep-water and breakbulk gateways at Chennai Port, Kamarajar (Ennore), Kattupalli, V.O. Chidambaranar (Tuticorin), Visakhapatnam, and Nhava Sheva (JNPT).
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-white font-semibold text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#e1390f]" /> Central Corporate Command
            </div>
            <p className="text-slate-400 leading-relaxed font-sans text-xs">
              TAGA Tower, Sait Colony, Egmore, Chennai. Centralized coordination of heavy lift charters, ocean consolidations, and national inland distribution.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}