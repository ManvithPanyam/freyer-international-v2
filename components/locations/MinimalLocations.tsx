"use client";

import React, { useState } from "react";
import {
  MAINLAND_PATH,
  ISLAND_PATHS,
  STATIONS_DATA,
  type StationData,
} from "@/components/experiments/india_map_final/AuthoritativeIndiaMap";
import {
  Phone,
  Mail,
  MapPin,
  Copy,
  Check,
  Building2,
  Anchor,
  Plane,
  ArrowUpRight,
} from "lucide-react";
import { FreyerCard, FreyerButton } from "@/components/ui/design-system";

export function MinimalLocations() {
  const [selectedId, setSelectedId] = useState<string>("chennai_egmore");
  const [copied, setCopied] = useState(false);

  const selectedStation = STATIONS_DATA.find((s) => s.id === selectedId) || STATIONS_DATA[0];

  const copyAddress = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(selectedStation.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-12">
      {/* ── Interactive India Cartography Stage ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Authoritative India Map Silhouette */}
        <div className="lg:col-span-7 bg-[#181A1F]/90 border border-white/10 rounded-xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between min-h-[580px] sm:min-h-[640px]">
          {/* Subtle Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(225,57,15,0.08),transparent_60%)] pointer-events-none" />

          {/* Header Indicator */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4 mb-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#e1390f] font-semibold">
                Survey of India Geometry
              </span>
              <div className="text-lg sm:text-xl font-bold font-mono text-white mt-0.5">
                Authoritative Boundary Alignment
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-white/40">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>10 Direct Company Gateways</span>
            </div>
          </div>

          {/* SVG Map Container */}
          <div className="relative z-10 w-full flex-1 flex items-center justify-center py-4">
            <svg
              viewBox="0 0 1000 1208"
              className="w-full max-w-[560px] h-auto select-none filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)]"
              aria-label="Authoritative Freyer India Branch Network Map"
            >
              <defs>
                <linearGradient id="minLocIndiaLandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22252B" />
                  <stop offset="50%" stopColor="#1A1C22" />
                  <stop offset="100%" stopColor="#14161B" />
                </linearGradient>

                <filter id="minLocCoastlineGlow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#FFFFFF" floodOpacity="0.12" />
                </filter>
              </defs>

              {/* Authoritative Mainland Geometry */}
              <path
                d={MAINLAND_PATH}
                fill="url(#minLocIndiaLandGradient)"
                stroke="rgba(255, 255, 255, 0.30)"
                strokeWidth="1.2"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeOpacity="0.9"
                filter="url(#minLocCoastlineGlow)"
              />

              {/* Authoritative Island Territories (Andaman, Nicobar, Lakshadweep) */}
              {ISLAND_PATHS.map((pathStr, i) => (
                <path
                  key={`island-${i}`}
                  d={pathStr}
                  fill="url(#minLocIndiaLandGradient)"
                  stroke="rgba(255, 255, 255, 0.25)"
                  strokeWidth="1.0"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeOpacity="0.75"
                />
              ))}

              {/* Station Markers with Clean Offset Labels */}
              {STATIONS_DATA.map((st) => {
                const isSelected = st.id === selectedId;
                const isLeftAligned =
                  st.city === "Mumbai" ||
                  st.city === "Ahmedabad" ||
                  st.city === "Bengaluru" ||
                  st.city === "Coimbatore";

                const labelX = isLeftAligned ? st.cx - 16 : st.cx + 16;
                const labelY =
                  st.id === "chennai_egmore"
                    ? st.cy - 6
                    : st.id === "chennai_airport"
                    ? st.cy + 16
                    : st.cy + 4;

                return (
                  <g
                    key={st.id}
                    onClick={() => setSelectedId(st.id)}
                    className="cursor-pointer group"
                  >
                    {/* Active Radar Pulse */}
                    {isSelected && (
                      <>
                        <circle
                          cx={st.cx}
                          cy={st.cy}
                          r={st.isHQ ? 24 : 20}
                          fill="none"
                          stroke="#e1390f"
                          strokeWidth="1.5"
                          strokeDasharray="4 3"
                          className="animate-spin"
                          style={{
                            animationDuration: "10s",
                            transformOrigin: `${st.cx}px ${st.cy}px`,
                          }}
                        />
                        <circle
                          cx={st.cx}
                          cy={st.cy}
                          r={st.isHQ ? 14 : 12}
                          fill="none"
                          stroke="#e1390f"
                          strokeWidth="1"
                          className="opacity-50"
                        />
                      </>
                    )}

                    {/* Outer Marker Core */}
                    <circle
                      cx={st.cx}
                      cy={st.cy}
                      r={isSelected ? 9 : st.isHQ ? 8 : 6.5}
                      fill={isSelected ? "#e1390f" : st.isHQ ? "#f59e0b" : "#ffffff"}
                      stroke="#121316"
                      strokeWidth={2}
                      className="transition-all duration-200 group-hover:scale-125"
                    />

                    {/* Inner Center Dot */}
                    <circle
                      cx={st.cx}
                      cy={st.cy}
                      r={isSelected ? 3.5 : 2}
                      fill={isSelected ? "#ffffff" : "#121316"}
                    />

                    {/* Clean Station City Label */}
                    <text
                      x={labelX}
                      y={labelY}
                      textAnchor={isLeftAligned ? "end" : "start"}
                      fontSize={isSelected ? "14" : "12"}
                      fontWeight={isSelected ? "bold" : "600"}
                      fontFamily="ui-monospace, monospace"
                      fill={isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.75)"}
                      dominantBaseline="middle"
                      className="transition-colors duration-200 select-none group-hover:fill-white"
                    >
                      {st.short}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Footer instruction */}
          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-white/40 pt-3 border-t border-white/10">
            <span>Select any node on the silhouette to inspect station dossier</span>
            <span className="text-[#e1390f] font-medium">10 Active Stations</span>
          </div>
        </div>

        {/* Right Column: Selected Station Dossier Plate */}
        <div className="lg:col-span-5 space-y-6">
          <FreyerCard className="p-6 sm:p-8" hoverEffect={false}>
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#e1390f] font-semibold">
                  Station Dossier
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                  {selectedStation.name}
                </h3>
              </div>
              {selectedStation.isHQ && (
                <span className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.16em] bg-[#e1390f]/15 text-[#e1390f] border border-[#e1390f]/30 rounded">
                  Corporate HQ
                </span>
              )}
            </div>

            {/* Address */}
            <div className="mt-6">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mb-2">
                Physical Office Address
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
                {selectedStation.address}
              </p>
              <button
                type="button"
                onClick={copyAddress}
                className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-mono text-white/50 hover:text-white transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Address copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy address</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Contacts */}
            <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-white/40 mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3 h-3 text-[#e1390f]" />
                  <span>Telephone</span>
                </div>
                <a
                  href={`tel:${selectedStation.phone.replace(/\s+/g, "")}`}
                  className="text-xs sm:text-sm font-mono text-white hover:text-[#e1390f] transition-colors"
                >
                  {selectedStation.phone}
                </a>
              </div>

              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-white/40 mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3 h-3 text-white/40" />
                  <span>Email Desk</span>
                </div>
                <a
                  href={`mailto:${selectedStation.email}`}
                  className="text-xs sm:text-sm font-mono text-white/70 hover:text-white transition-colors truncate block"
                >
                  {selectedStation.email}
                </a>
              </div>
            </div>

            {/* Station Action Pathway */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between gap-4">
              <FreyerButton href="/contact" size="sm" variant="primary">
                Dispatch to Station
              </FreyerButton>
              <div className="text-[10px] font-mono text-white/40 text-right">
                AEO-LO Certified Handling
              </div>
            </div>
          </FreyerCard>

          {/* Quick Station Grid Navigation */}
          <div className="grid grid-cols-2 gap-2">
            {STATIONS_DATA.map((st) => (
              <button
                key={st.id}
                type="button"
                onClick={() => setSelectedId(st.id)}
                className={`text-left p-3 rounded border text-xs font-mono transition-all ${
                  st.id === selectedId
                    ? "bg-[#e1390f]/15 border-[#e1390f] text-white font-semibold"
                    : "bg-[#181A1F]/80 border-white/10 text-white/60 hover:text-white hover:border-white/20"
                }`}
              >
                <div className="truncate">{st.city}</div>
                <div className="text-[10px] opacity-50 truncate mt-0.5">{st.phone}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Complete 10 Physical Stations Verified Directory ── */}
      <div className="mt-16 pt-12 border-t border-white/10">
        <div className="text-xs font-mono uppercase tracking-[0.24em] text-[#e1390f] font-semibold mb-6">
          Directory &middot; Verified Pan-India Station Infrastructure
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STATIONS_DATA.map((station) => (
            <FreyerCard key={station.id} className="p-6">
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="text-lg font-bold text-white font-mono">{station.name}</div>
                {station.isHQ && (
                  <span className="text-[9px] font-mono uppercase bg-[#e1390f]/20 text-[#e1390f] px-2 py-0.5 rounded shrink-0">
                    HQ
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed mb-4 min-h-[48px]">
                {station.address}
              </p>
              <div className="pt-3 border-t border-white/10 space-y-1.5 text-xs font-mono">
                <div className="flex items-center gap-2 text-white/70">
                  <Phone className="w-3 h-3 text-[#e1390f]" />
                  <span>{station.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-white/50 truncate">
                  <Mail className="w-3 h-3 text-white/30" />
                  <span className="truncate">{station.email}</span>
                </div>
              </div>
            </FreyerCard>
          ))}
        </div>
      </div>
    </div>
  );
}
