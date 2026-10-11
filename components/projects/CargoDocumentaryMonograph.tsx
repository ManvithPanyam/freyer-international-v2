"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CargoProjectRecord } from "@/data/cargo-records";
import { MapPin, Ship, Scale, Box, CheckCircle2, ChevronRight, FileText } from "lucide-react";

interface DocumentaryMonographProps {
  record: CargoProjectRecord;
}

export default function CargoDocumentaryMonograph({ record }: DocumentaryMonographProps) {
  const [activePhoto, setActivePhoto] = useState<"9.1" | "9.2">("9.1");

  return (
    <div className="w-full bg-[#17181B] border border-white/10 rounded-2xl overflow-hidden shadow-2xl text-[#F7F6F2]">
      {/* ── TOP EDITORIAL STRIP ── */}
      <div className="px-6 sm:px-10 py-5 bg-[#1F2228] border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E33B12] animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#E33B12] font-bold">
            OPTION A: DOCUMENTARY EDITORIAL MONOGRAPH
          </span>
          <span className="text-white/30 hidden sm:inline">&bull;</span>
          <span className="text-xs font-mono text-white/50 hidden sm:inline">
            ARCHIVAL FIELD PHOTOGRAPHY • VERIFIED RECORD #09
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-white/40">CLASSIFICATION:</span>
          <span className="px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-white font-bold tracking-wider uppercase">
            {record.shipment_type || "HEAVY BREAKBULK"}
          </span>
        </div>
      </div>

      {/* ── MONUMENTAL HERO COMPOSITION ── */}
      <div className="p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* LEFT COLUMN: 482 MT TYPOGRAPHIC MONUMENT (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
          {/* Header & Origin/Destination Badge */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded bg-black/40 border border-white/15 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-white font-bold tracking-widest uppercase">
                {record.route_origin} → {record.route_destination}
              </span>
              <span className="text-white/40">| MARITIME PASSAGE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-[family-name:var(--font-barlow-condensed)] leading-none">
              MASSIVE FABRICATED INDUSTRIAL BREAKBULK
            </h2>
            <p className="text-sm font-sans text-white/60 leading-relaxed font-light max-w-xl">
              Heavy breakbulk stowage engineered by Freyer International from the Port of Shanghai to the Port of Jebel Ali. Documented under commercial bills of lading and authentic quayside operations.
            </p>
          </div>

          {/* MONUMENTAL TONNAGE CALLOUT */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-black/60 border border-white/10 relative overflow-hidden">
            <div className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 mb-2">
              GROSS CERTIFIED METRIC WEIGHT
            </div>
            <div className="flex items-baseline gap-4 sm:gap-6">
              <span className="text-7xl sm:text-9xl font-black tracking-tight text-white font-[family-name:var(--font-barlow-condensed)] leading-none">
                {record.weight_mt}
              </span>
              <div>
                <span className="text-3xl sm:text-4xl font-black uppercase text-[#E33B12] font-[family-name:var(--font-barlow-condensed)] leading-none block">
                  METRIC TONS
                </span>
                <span className="text-xs font-mono text-white/50 tracking-wider">
                  482,000 KG HEAVY DISPLACEMENT
                </span>
              </div>
            </div>

            {/* ROUTE GEOMETRY DOCK */}
            <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div>
                <div className="text-white/40 text-[10px] uppercase tracking-wider">CUBIC VOLUME</div>
                <div className="text-xl sm:text-2xl font-bold text-white font-[family-name:var(--font-barlow-condensed)] mt-0.5">
                  {record.volume_cbm} CBM
                </div>
                <div className="text-[10px] text-white/40">Hold Stowage</div>
              </div>

              <div>
                <div className="text-white/40 text-[10px] uppercase tracking-wider">PACKAGE UNITS</div>
                <div className="text-xl sm:text-2xl font-bold text-white font-[family-name:var(--font-barlow-condensed)] mt-0.5">
                  {record.packages} PKG
                </div>
                <div className="text-[10px] text-white/40">Fabricated Steel</div>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <div className="text-white/40 text-[10px] uppercase tracking-wider">SOURCE CONFIDENCE</div>
                <div className="text-sm font-bold text-emerald-400 mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% VERIFIED
                </div>
                <div className="text-[10px] text-white/40">Archive Record #09</div>
              </div>
            </div>
          </div>

          {/* VERBATIM ARCHIVE AUDIT LINE */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-xs text-white/60 space-y-1">
            <span className="text-white/40 text-[10px] uppercase tracking-widest block font-bold">
              VERBATIM ARCHIVE TRANSCRIPT (PROJECT.HTML):
            </span>
            <code className="text-amber-300 block text-[11px]">
              &quot;SHANGHAI TO JEBEL ALI — Break Bulk Shipment 29 PKG, 796 cbm with a weight of 482 MT&quot;
            </code>
          </div>
        </div>

        {/* RIGHT COLUMN: DOCUMENTARY PHOTOGRAPHIC PLATES (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/15 shadow-2xl bg-black">
            <Image
              src={activePhoto === "9.1" ? "/images/9.1.jpg" : "/images/9.2.jpg"}
              alt={activePhoto === "9.1" ? "Shanghai Quayside Night Staging" : "Shanghai Vessel Hold Loading"}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

            {/* Photo Badge */}
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white tracking-widest uppercase">
              {activePhoto === "9.1" ? "PLATE 9.1 • QUAYSIDE NIGHT STAGING" : "PLATE 9.2 • VESSEL CRANE HOIST"}
            </div>

            {/* Photo Caption */}
            <div className="absolute bottom-3 left-3 right-3 text-xs font-mono text-white/80 backdrop-blur-sm bg-black/60 p-2.5 rounded-lg border border-white/10">
              {activePhoto === "9.1"
                ? "Fabricated structural steel breakbulk consignment staged under quayside spotlights at Port of Shanghai prior to vessel loading."
                : "Heavy-lift port crane hoisting 482 MT structural consignment into vessel hold for ocean voyage to Port of Jebel Ali."}
            </div>
          </div>

          {/* Photo Switcher Selector */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setActivePhoto("9.1")}
              className={`p-3 rounded-xl border text-left transition flex items-center gap-3 ${
                activePhoto === "9.1"
                  ? "bg-white/10 border-white/30 text-white"
                  : "bg-black/30 border-white/10 text-white/50 hover:text-white"
              }`}
            >
              <div className="relative w-12 h-10 rounded overflow-hidden shrink-0 border border-white/20">
                <Image src="/images/9.1.jpg" alt="Thumb 9.1" fill className="object-cover" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-mono font-bold uppercase truncate">Field Photo 9.1</div>
                <div className="text-[9px] font-mono text-white/40 truncate">Terminal Staging</div>
              </div>
            </button>

            <button
              onClick={() => setActivePhoto("9.2")}
              className={`p-3 rounded-xl border text-left transition flex items-center gap-3 ${
                activePhoto === "9.2"
                  ? "bg-white/10 border-white/30 text-white"
                  : "bg-black/30 border-white/10 text-white/50 hover:text-white"
              }`}
            >
              <div className="relative w-12 h-10 rounded overflow-hidden shrink-0 border border-white/20">
                <Image src="/images/9.2.jpg" alt="Thumb 9.2" fill className="object-cover" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-mono font-bold uppercase truncate">Field Photo 9.2</div>
                <div className="text-[9px] font-mono text-white/40 truncate">Crane Hold Hoist</div>
              </div>
            </button>
          </div>

          {/* Documentary Monograph Statement */}
          <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs font-mono text-white/60">
            <span className="text-white font-semibold">Editorial Industrial Standard:</span> We let the authentic physical photography and raw audited numbers speak. No speculative renders or artificial wireframes.
          </div>
        </div>
      </div>
    </div>
  );
}
