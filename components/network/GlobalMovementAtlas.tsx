"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  DOCUMENTED_MOVEMENTS,
  PUBLISHED_TRAFFIC_LANES,
  NETWORK_PARTNERS,
  INSTITUTIONAL_ACCREDITATIONS,
  GLOBAL_NETWORK_METRICS,
  DocumentedMovement,
} from "@/data/global-network";
import {
  WORLD_VIEWBOX,
  WORLD_LAND_PATH,
  VERIFIED_COUNTRY_PATHS,
  projectGeo,
  getRouteArcPath,
} from "@/data/world-map-paths";
import {
  Anchor,
  Navigation,
  Box,
  Scale,
  Calendar,
  Maximize2,
  FileCheck2,
  Filter,
  X,
  ShieldCheck,
  Award,
  ChevronRight,
} from "lucide-react";

interface GlobalMovementAtlasProps {
  initialSelectedId?: string;
}

export default function GlobalMovementAtlas({
  initialSelectedId = "MV-01",
}: GlobalMovementAtlasProps) {
  const [selectedMovementId, setSelectedMovementId] = useState<string>(initialSelectedId);
  const [selectedLaneId, setSelectedLaneId] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [hoveredMovementId, setHoveredMovementId] = useState<string | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);
  const [mobileDossierOpen, setMobileDossierOpen] = useState<boolean>(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);
      const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener("change", listener);
      return () => mediaQuery.removeEventListener("change", listener);
    }
  }, []);

  // Filtered movements based on category
  const filteredMovements = useMemo(() => {
    return DOCUMENTED_MOVEMENTS.filter((m) => {
      if (categoryFilter === "all") return true;
      if (categoryFilter === "heavy") return (m.weightTons || 0) >= 100;
      if (categoryFilter === "breakbulk") return m.category === "breakbulk" || m.category === "roro";
      if (categoryFilter === "flat-rack") return m.category === "flat-rack";
      return true;
    });
  }, [categoryFilter]);

  const selectedMovement = useMemo(() => {
    return DOCUMENTED_MOVEMENTS.find((m) => m.id === selectedMovementId) || DOCUMENTED_MOVEMENTS[0];
  }, [selectedMovementId]);

  // Unique ports for markers
  const verifiedPorts = useMemo(() => {
    const map = new Map<string, { port: string; city: string; country: string; coords: { lat: number; lng: number } }>();
    DOCUMENTED_MOVEMENTS.forEach((m) => {
      map.set(m.origin.port, {
        port: m.origin.port,
        city: m.origin.city,
        country: m.origin.country,
        coords: m.origin.coordinates,
      });
      map.set(m.destination.port, {
        port: m.destination.port,
        city: m.destination.city,
        country: m.destination.country,
        coords: m.destination.coordinates,
      });
      if (m.destination.secondaryCoordinates) {
        map.set("King Abdulaziz Port (Dammam)", {
          port: "King Abdulaziz Port",
          city: "Dammam",
          country: "Saudi Arabia",
          coords: m.destination.secondaryCoordinates,
        });
      }
    });
    return Array.from(map.values());
  }, []);

  return (
    <div className="w-full bg-[#F7F6F2] text-[#17181B] selection:bg-[#E33B12]/20">
      {/* SECTION HEADER: Editorial Industrial Typography */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-6 border-b border-[#DCDCD7]">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#E33B12]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#E33B12] font-semibold">
              WHERE FREYER MOVES &bull; INTERNATIONAL PROJECT CARGO
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#17181B] font-[family-name:var(--font-barlow-condensed)]">
            World Movement Atlas
          </h2>

          <p className="text-[#62656B] max-w-3xl text-sm sm:text-base leading-relaxed font-sans">
            Every movement charted is derived directly from original project documentation.
            Verified heavy-lift, breakbulk, and out-of-gauge industrial consignments across 10 countries represented in documented project movements.
          </p>
        </div>

        {/* VERIFIED EMPIRICAL KPI BAR (Strictly Documented Facts — No Inferred Totals) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-6">
          <div className="bg-white border border-[#DCDCD7] rounded-lg p-3.5 shadow-xs">
            <div className="text-[10px] font-mono text-[#62656B] uppercase tracking-wider">Documented Evidence</div>
            <div className="text-xl sm:text-2xl font-bold text-[#17181B] font-[family-name:var(--font-barlow-condensed)] mt-0.5">
              11 <span className="text-xs font-mono font-normal text-[#62656B]">PROJECT MOVEMENTS</span>
            </div>
          </div>

          <div className="bg-white border border-[#DCDCD7] rounded-lg p-3.5 shadow-xs">
            <div className="text-[10px] font-mono text-[#62656B] uppercase tracking-wider">Largest Movement</div>
            <div className="text-xl sm:text-2xl font-bold text-[#E33B12] font-[family-name:var(--font-barlow-condensed)] mt-0.5">
              1,156 <span className="text-xs font-mono font-normal text-[#62656B]">MT (17 × 68 MT)</span>
            </div>
          </div>

          <div className="bg-white border border-[#DCDCD7] rounded-lg p-3.5 shadow-xs">
            <div className="text-[10px] font-mono text-[#62656B] uppercase tracking-wider">Longest Cargo Consignment</div>
            <div className="text-xl sm:text-2xl font-bold text-[#17181B] font-[family-name:var(--font-barlow-condensed)] mt-0.5">
              2,700 <span className="text-xs font-mono font-normal text-[#62656B]">CM (27 M)</span>
            </div>
          </div>

          <div className="bg-white border border-[#DCDCD7] rounded-lg p-3.5 shadow-xs">
            <div className="text-[10px] font-mono text-[#62656B] uppercase tracking-wider">Project Countries</div>
            <div className="text-xl sm:text-2xl font-bold text-[#17181B] font-[family-name:var(--font-barlow-condensed)] mt-0.5">
              10 <span className="text-xs font-mono font-normal text-[#62656B]">COUNTRIES</span>
            </div>
          </div>

          <div className="bg-white border border-[#DCDCD7] rounded-lg p-3.5 col-span-2 sm:col-span-1 shadow-xs">
            <div className="text-[10px] font-mono text-[#62656B] uppercase tracking-wider">Customs License</div>
            <div className="text-xl sm:text-2xl font-bold text-[#17181B] font-[family-name:var(--font-barlow-condensed)] flex items-center gap-1.5 mt-0.5">
              AEO (LO) <ShieldCheck className="w-4 h-4 text-[#E33B12]" />
            </div>
          </div>
        </div>
      </div>

      {/* FILTER & ROUTE SELECTOR RAIL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 border-b border-[#DCDCD7]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          {/* Classification Filter */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 no-scrollbar">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#62656B] shrink-0 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Filter:
            </span>
            {[
              { id: "all", label: "All Movements (11)" },
              { id: "heavy", label: "Heavy Lift > 100 MT (5)" },
              { id: "breakbulk", label: "Breakbulk & RoRo (4)" },
              { id: "flat-rack", label: "Flat Rack (2)" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setCategoryFilter(f.id)}
                className={`px-2.5 py-1 rounded text-xs font-mono whitespace-nowrap transition border ${
                  categoryFilter === f.id
                    ? "bg-[#17181B] border-[#17181B] text-[#F7F6F2] font-semibold"
                    : "bg-white border-[#DCDCD7] text-[#62656B] hover:text-[#17181B] hover:border-[#17181B]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Quick Route Selector Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 no-scrollbar">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#62656B] shrink-0 mr-1">
              Manifest:
            </span>
            {filteredMovements.map((m) => {
              const isSelected = m.id === selectedMovementId;
              return (
                <button
                  key={m.id}
                  onClick={() => {
                    setSelectedMovementId(m.id);
                    setMobileDossierOpen(true);
                  }}
                  className={`px-2 py-0.5 rounded text-[11px] font-mono transition border whitespace-nowrap flex items-center gap-1 ${
                    isSelected
                      ? "bg-[#E33B12] border-[#E33B12] text-white font-bold shadow-xs"
                      : "bg-white border-[#DCDCD7] text-[#62656B] hover:text-[#17181B] hover:border-[#17181B]"
                  }`}
                >
                  <span>{m.id}</span>
                  <span className="opacity-70 text-[10px]">{m.origin.city}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* MAIN CARTO-THEATRE STAGE: Clean 12-Column Editorial Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* CARTOGRAPHIC VECTOR STAGE (8 Columns on Desktop) */}
          <div className="lg:col-span-8 relative bg-white rounded-xl border border-[#DCDCD7] p-4 sm:p-6 overflow-hidden flex flex-col justify-between shadow-xs">
            
            {/* Subtle Grid Canvas */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#17181B 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            {/* Stage Header Info */}
            <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-[#62656B] border-b border-[#DCDCD7] pb-2.5 mb-2">
              <div className="flex items-center gap-2 text-[#17181B]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E33B12]" />
                <span className="font-semibold uppercase tracking-wider">INTERNATIONAL MOVEMENT THEATRE</span>
              </div>
              <div className="font-mono text-[#62656B]">
                ACTIVE MANIFEST: <span className="text-[#E33B12] font-bold">{selectedMovement.id}</span>
              </div>
            </div>

            {/* THE WORLD SVG CANVAS */}
            <div className="relative w-full aspect-[2/1] my-auto select-none">
              <svg
                viewBox={WORLD_VIEWBOX}
                className="w-full h-full"
              >
                <defs>
                  {/* Landmass Fills */}
                  <linearGradient id="worldLandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#DCDCD7" />
                    <stop offset="100%" stopColor="#DCDCD7" />
                  </linearGradient>

                  <linearGradient id="verifiedCountryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4D4CE" />
                    <stop offset="100%" stopColor="#D4D4CE" />
                  </linearGradient>

                  <linearGradient id="indiaSovereignGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C2C2BB" />
                    <stop offset="100%" stopColor="#C2C2BB" />
                  </linearGradient>

                  {/* Soft Route Glow Filter */}
                  <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* 1. Subtle Cartographic Coordinate Lines */}
                <g className="opacity-40 stroke-[#DCDCD7] stroke-[0.5]" strokeDasharray="2 4">
                  <line x1="0" y1="250" x2="1000" y2="250" />
                  <line x1="0" y1="184.7" x2="1000" y2="184.7" />
                  <line x1="0" y1="315.3" x2="1000" y2="315.3" />
                  <line x1="500" y1="0" x2="500" y2="500" />
                  <line x1="750" y1="0" x2="750" y2="500" />
                  <line x1="250" y1="0" x2="250" y2="500" />
                </g>

                {/* 2. Base World Landmass Silhouette */}
                <path
                  d={WORLD_LAND_PATH}
                  fill="url(#worldLandGradient)"
                  stroke="rgba(23, 24, 27, 0.15)"
                  strokeWidth="0.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />

                {/* 3. Verified Project Origin/Destination Countries */}
                {Object.entries(VERIFIED_COUNTRY_PATHS).map(([iso, pathD]) => {
                  const isIndia = iso === "IN";
                  const isSelectedOrigin = selectedMovement.origin.countryCode.includes(iso);
                  const isSelectedDest = selectedMovement.destination.countryCode.includes(iso);
                  const isHighlighted = isSelectedOrigin || isSelectedDest;

                  return (
                    <path
                      key={iso}
                      d={pathD}
                      fill={
                        isIndia
                          ? "url(#indiaSovereignGradient)"
                          : isHighlighted
                          ? "#C8C8C2"
                          : "url(#verifiedCountryGradient)"
                      }
                      stroke={
                        isIndia
                          ? "#E33B12"
                          : isHighlighted
                          ? "#E33B12"
                          : "#B8B8B2"
                      }
                      strokeWidth={isIndia ? 1.0 : isHighlighted ? 1.2 : 0.6}
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      className="transition-colors duration-200"
                    />
                  );
                })}

                {/* 4. Documented Movement Route Arcs */}
                <g className="movement-routes">
                  {filteredMovements.map((movement) => {
                    const isSelected = movement.id === selectedMovementId;
                    const isHovered = movement.id === hoveredMovementId;
                    const p1 = projectGeo(movement.origin.coordinates.lat, movement.origin.coordinates.lng);
                    const p2 = projectGeo(movement.destination.coordinates.lat, movement.destination.coordinates.lng);
                    const arcD = getRouteArcPath(p1.x, p1.y, p2.x, p2.y);
                    const pSecondary = movement.destination.secondaryCoordinates
                      ? projectGeo(movement.destination.secondaryCoordinates.lat, movement.destination.secondaryCoordinates.lng)
                      : null;
                    const secondaryArcD = pSecondary
                      ? getRouteArcPath(p2.x, p2.y, pSecondary.x, pSecondary.y, 0.1)
                      : null;

                    return (
                      <g
                        key={movement.id}
                        className="cursor-pointer"
                        onClick={() => {
                          setSelectedMovementId(movement.id);
                          setMobileDossierOpen(true);
                        }}
                        onMouseEnter={() => setHoveredMovementId(movement.id)}
                        onMouseLeave={() => setHoveredMovementId(null)}
                      >
                        {/* Hit area for click/tap */}
                        <path
                          d={arcD}
                          fill="none"
                          stroke="transparent"
                          strokeWidth="16"
                        />
                        {secondaryArcD && (
                          <path
                            d={secondaryArcD}
                            fill="none"
                            stroke="transparent"
                            strokeWidth="16"
                          />
                        )}

                        {/* Subtle soft glow for selected route */}
                        {isSelected && (
                          <>
                            <path
                              d={arcD}
                              fill="none"
                              stroke="#E33B12"
                              strokeWidth="3.5"
                              strokeOpacity="0.25"
                              filter="url(#softGlow)"
                            />
                            {secondaryArcD && (
                              <path
                                d={secondaryArcD}
                                fill="none"
                                stroke="#E33B12"
                                strokeWidth="3.5"
                                strokeOpacity="0.25"
                                filter="url(#softGlow)"
                              />
                            )}
                          </>
                        )}

                        {/* Clean editorial route stroke */}
                        <path
                          d={arcD}
                          fill="none"
                          stroke={
                            isSelected
                              ? "#E33B12"
                              : isHovered
                              ? "#E33B12"
                              : "#62656B"
                          }
                          strokeWidth={isSelected ? "2.2" : isHovered ? "1.6" : "0.9"}
                          strokeOpacity={isSelected ? 1 : isHovered ? 0.85 : 0.35}
                          strokeDasharray={isSelected ? "none" : "3 3"}
                          className="transition-all duration-150"
                        />
                        {secondaryArcD && (
                          <path
                            d={secondaryArcD}
                            fill="none"
                            stroke={
                              isSelected
                                ? "#E33B12"
                                : isHovered
                                ? "#E33B12"
                                : "#62656B"
                            }
                            strokeWidth={isSelected ? "2.0" : isHovered ? "1.4" : "0.8"}
                            strokeOpacity={isSelected ? 0.9 : isHovered ? 0.75 : 0.3}
                            strokeDasharray="2 2"
                            className="transition-all duration-150"
                          />
                        )}
                      </g>
                    );
                  })}
                </g>

                {/* 5. Minimalist Port Pins & High-End Editorial Labels */}
                <g className="port-nodes pointer-events-none">
                  {verifiedPorts.map((node) => {
                    const pt = projectGeo(node.coords.lat, node.coords.lng);
                    const isOrigin = selectedMovement.origin.port === node.port;
                    const isDest =
                      selectedMovement.destination.port.includes(node.port) ||
                      selectedMovement.destination.city.includes(node.city);
                    const isFocus = isOrigin || isDest;

                    return (
                      <g key={node.port} transform={`translate(${pt.x}, ${pt.y})`}>
                        {/* Outer Pin Dot */}
                        <circle
                          r={isFocus ? 4 : 2}
                          fill={
                            isFocus
                              ? isOrigin
                                ? "#17181B"
                                : "#E33B12"
                              : "#62656B"
                          }
                          stroke="#FFFFFF"
                          strokeWidth={isFocus ? 1.5 : 0.8}
                        />

                        {/* Center White Pinpoint */}
                        {isFocus && <circle r="1.2" fill="#ffffff" />}

                        {/* Editorial Port Tag for Active Route */}
                        {isFocus && (
                          <g transform="translate(0, -8)">
                            <rect
                              x={-node.city.length * 3.0 - 5}
                              y="-9"
                              width={node.city.length * 6.0 + 10}
                              height="11"
                              rx="2"
                              fill="#17181B"
                              stroke="#17181B"
                              strokeWidth="0.6"
                              opacity="0.95"
                            />
                            <text
                              textAnchor="middle"
                              y="-1.5"
                              fill="#ffffff"
                              fontSize="6.2"
                              fontFamily="monospace"
                              fontWeight="bold"
                            >
                              {node.city.toUpperCase()}
                            </text>
                          </g>
                        )}
                      </g>
                    );
                  })}
                </g>
              </svg>
            </div>

            {/* Cartographic Legend */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono text-[#62656B] pt-3 border-t border-[#DCDCD7]">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E33B12]" />
                  <span className="text-[#17181B]">Discharge / Destination Port</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#17181B]" />
                  <span className="text-[#17181B]">Origin Port / Documented Lanes</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#62656B]" />
                  <span className="text-[#17181B]">Network Ports</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded bg-[#C2C2BB] border border-[#E33B12]" />
                  <span className="text-[#17181B]">India Sovereign Base</span>
                </div>
              </div>
              <div className="text-[9px] text-[#62656B] font-mono">
                SOURCE: <code className="text-[#17181B]">freyer-forensics-v2/raw/html/project.html</code>
              </div>
            </div>
          </div>

          {/* EDITORIAL ROUTE DOSSIER (4 Columns on Desktop) */}
          <div className="lg:col-span-4 space-y-5">
            
            {/* Active Manifest Card */}
            <div className="bg-white rounded-xl border border-[#DCDCD7] p-5 sm:p-6 shadow-xs relative overflow-hidden">
              
              {/* Dossier Header */}
              <div className="border-b border-[#DCDCD7] pb-3.5 mb-4">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-[#E33B12] text-white">
                    {selectedMovement.id}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#62656B]">
                    TIER-D PROJECT RECORD
                  </span>
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-[#17181B] font-[family-name:var(--font-barlow-condensed)] mt-1.5">
                  {selectedMovement.route}
                </h3>
              </div>

              {/* ORIGIN & DESTINATION */}
              <div className="grid grid-cols-2 gap-3 p-3 bg-[#F7F6F2] rounded-lg border border-[#DCDCD7] mb-4">
                <div>
                  <div className="text-[9px] font-mono text-[#62656B] uppercase tracking-widest flex items-center gap-1">
                    <Anchor className="w-3 h-3 text-[#17181B]" /> ORIGIN
                  </div>
                  <div className="text-sm font-bold text-[#17181B] mt-1">
                    {selectedMovement.origin.city}
                  </div>
                  <div className="text-xs text-[#62656B] font-mono truncate">
                    {selectedMovement.origin.port}
                  </div>
                  <div className="text-[10px] text-[#62656B] font-mono mt-0.5">
                    {selectedMovement.origin.country}
                  </div>
                </div>

                <div className="border-l border-[#DCDCD7] pl-3">
                  <div className="text-[9px] font-mono text-[#62656B] uppercase tracking-widest flex items-center gap-1">
                    <Navigation className="w-3 h-3 text-[#E33B12]" /> DESTINATION
                  </div>
                  <div className="text-sm font-bold text-[#17181B] mt-1">
                    {selectedMovement.destination.city}
                  </div>
                  <div className="text-xs text-[#62656B] font-mono truncate">
                    {selectedMovement.destination.port}
                  </div>
                  <div className="text-[10px] text-[#62656B] font-mono mt-0.5">
                    {selectedMovement.destination.country}
                  </div>
                </div>
              </div>

              {/* DOCUMENTED PROJECT: Exact Verified Specifications */}
              <div className="space-y-2.5 mb-4">
                <div className="text-[10px] font-mono text-[#62656B] uppercase tracking-widest">
                  Documented Project Manifest
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {selectedMovement.weightTons && (
                    <div className="bg-[#F7F6F2] p-2.5 rounded border border-[#DCDCD7]">
                      <div className="text-[9px] font-mono text-[#62656B] uppercase flex items-center gap-1">
                        <Scale className="w-3 h-3 text-[#62656B]" /> Weight
                      </div>
                      <div className="text-lg font-bold text-[#17181B] font-[family-name:var(--font-barlow-condensed)]">
                        {selectedMovement.weightTons.toLocaleString()} MT
                      </div>
                      {selectedMovement.weightKg && (
                        <div className="text-[10px] font-mono text-[#62656B]">
                          ({selectedMovement.weightKg.toLocaleString()} KG)
                        </div>
                      )}
                    </div>
                  )}

                  {selectedMovement.volumeCbm && (
                    <div className="bg-[#F7F6F2] p-2.5 rounded border border-[#DCDCD7]">
                      <div className="text-[9px] font-mono text-[#62656B] uppercase flex items-center gap-1">
                        <Box className="w-3 h-3 text-[#62656B]" /> Volume
                      </div>
                      <div className="text-lg font-bold text-[#17181B] font-[family-name:var(--font-barlow-condensed)]">
                        {selectedMovement.volumeCbm} CBM
                      </div>
                      {selectedMovement.packageCount && (
                        <div className="text-[10px] font-mono text-[#62656B]">
                          {selectedMovement.packageCount} Packages
                        </div>
                      )}
                    </div>
                  )}

                  {selectedMovement.dimensions && (
                    <div className="col-span-2 bg-[#F7F6F2] p-2.5 rounded border border-[#DCDCD7]">
                      <div className="text-[9px] font-mono text-[#62656B] uppercase flex items-center gap-1">
                        <Maximize2 className="w-3 h-3 text-[#62656B]" /> Dimensions
                      </div>
                      <div className="text-xs font-mono font-bold text-[#17181B] mt-0.5">
                        {selectedMovement.dimensions}
                      </div>
                    </div>
                  )}

                  {selectedMovement.date && (
                    <div className="col-span-2 bg-[#F7F6F2] p-2 rounded border border-[#DCDCD7] flex items-center justify-between text-xs">
                      <span className="text-[9px] font-mono text-[#62656B] uppercase flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#62656B]" /> Record Date
                      </span>
                      <span className="font-mono font-semibold text-[#17181B]">
                        {selectedMovement.date}
                      </span>
                    </div>
                  )}
                </div>

                {selectedMovement.details && (
                  <div className="bg-[#F7F6F2] p-2.5 rounded border border-[#DCDCD7] text-xs text-[#62656B] leading-relaxed font-sans">
                    <span className="text-[9px] font-mono text-[#17181B] uppercase block mb-0.5 font-semibold">
                      Loading / Shipment Description:
                    </span>
                    {selectedMovement.details}
                  </div>
                )}
              </div>

              {/* SOURCE PROVENANCE */}
              <div className="border-t border-[#DCDCD7] pt-3 space-y-1.5">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-[#62656B] uppercase">Original Source Record</span>
                  <span className="text-[#17181B] font-semibold flex items-center gap-1">
                    <FileCheck2 className="w-3 h-3 text-[#E33B12]" /> VERIFIED
                  </span>
                </div>
                <div className="p-2.5 bg-[#F7F6F2] rounded border border-[#DCDCD7] text-[11px] font-mono text-[#17181B] italic leading-snug">
                  "{selectedMovement.exactWording}"
                </div>
                <div className="text-[9px] font-mono text-[#62656B]">
                  FILE: <code className="text-[#17181B]">{selectedMovement.sourceFile}</code>
                </div>
              </div>
            </div>

            {/* SECONDARY CONTEXT: Published Shipping Corridors */}
            <div className="bg-white rounded-xl border border-[#DCDCD7] p-4 space-y-3 shadow-xs">
              <div className="flex items-center justify-between border-b border-[#DCDCD7] pb-2">
                <div className="text-xs font-mono uppercase tracking-widest text-[#17181B] flex items-center gap-1.5 font-semibold">
                  <Navigation className="w-3.5 h-3.5 text-[#E33B12]" /> Published Shipping Corridors
                </div>
                <span className="text-[10px] font-mono text-[#62656B]">SECONDARY</span>
              </div>
              <p className="text-[11px] text-[#62656B] leading-relaxed font-sans">
                Commercial shipping corridors documented in Freyer service archives and corroborated by project records.
              </p>
              <div className="space-y-1.5">
                {PUBLISHED_TRAFFIC_LANES.map((lane) => {
                  const isLaneActive = selectedLaneId === lane.id;
                  return (
                    <button
                      key={lane.id}
                      onClick={() => {
                        setSelectedLaneId(isLaneActive ? null : lane.id);
                        if (!isLaneActive && lane.associatedMovements.length > 0) {
                          setSelectedMovementId(lane.associatedMovements[0]);
                        }
                      }}
                      className={`w-full text-left p-2 rounded-lg border text-xs font-mono transition flex items-center justify-between gap-2 ${
                        isLaneActive
                          ? "bg-[#17181B] border-[#17181B] text-[#F7F6F2]"
                          : "bg-[#F7F6F2] border-[#DCDCD7] text-[#62656B] hover:text-[#17181B] hover:border-[#17181B]"
                      }`}
                    >
                      <div>
                        <div className={`font-semibold text-[11px] ${isLaneActive ? "text-[#F7F6F2]" : "text-[#17181B]"}`}>{lane.name}</div>
                        <div className={`text-[10px] line-clamp-1 ${isLaneActive ? "text-[#F7F6F2]/70" : "text-[#62656B]"}`}>{lane.corridor}</div>
                      </div>
                      <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${isLaneActive ? "rotate-90 text-[#E33B12]" : "text-[#62656B]"}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SECONDARY CONTEXT: Network Partner Accreditations */}
            <div className="bg-white rounded-xl border border-[#DCDCD7] p-4 space-y-3 shadow-xs">
              <div className="flex items-center justify-between border-b border-[#DCDCD7] pb-2">
                <div className="text-xs font-mono uppercase tracking-widest text-[#17181B] flex items-center gap-1.5 font-semibold">
                  <Award className="w-3.5 h-3.5 text-[#E33B12]" /> Network Memberships & Awards
                </div>
                <span className="text-[10px] font-mono text-[#62656B]">TIER-C</span>
              </div>
              
              <div className="space-y-2 text-xs">
                {/* WPA */}
                <div className="p-2.5 bg-[#F7F6F2] rounded border border-[#DCDCD7] space-y-1">
                  <div className="flex items-center justify-between font-bold text-[#17181B]">
                    <span>Worldwide Partners Alliance (WPA)</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[#E33B12]/10 text-[#E33B12] border border-[#E33B12]/20 font-semibold">
                      GLOBAL WINNER
                    </span>
                  </div>
                  <div className="text-[10px] text-[#62656B] font-mono">
                    &bull; Global Winner 2022/23: Most Valuable Member South Asia (Bangkok)
                  </div>
                  <div className="text-[10px] text-[#62656B] font-mono">
                    &bull; Global Winner 2023/24: Excellent Sales (Phuket)
                  </div>
                </div>

                {/* SCN */}
                <div className="p-2.5 bg-[#F7F6F2] rounded border border-[#DCDCD7] space-y-1">
                  <div className="flex items-center justify-between font-bold text-[#17181B]">
                    <span>Security Cargo Network (SCN)</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-slate-200 text-[#17181B] border border-slate-300 font-semibold">
                      MEMBER #420
                    </span>
                  </div>
                  <div className="text-[10px] text-[#62656B] font-mono">
                    Member in Good Standing 2024 &bull; Member since Feb 2019 (Colorado, USA)
                  </div>
                </div>

                {/* AEO Government Certificate */}
                <div className="p-2.5 bg-[#F7F6F2] rounded border border-[#DCDCD7] space-y-1">
                  <div className="flex items-center justify-between font-bold text-[#17181B]">
                    <span>Indian Customs AEO Certificate</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[#E33B12]/10 text-[#E33B12] border border-[#E33B12]/20 font-semibold">
                      TIER-A
                    </span>
                  </div>
                  <div className="text-[10px] text-[#17181B] font-mono font-medium">
                    Classification: LO (Freight Forwarder) &bull; No: INAAQCA4076M0F243
                  </div>
                  <div className="text-[9px] text-[#62656B] font-mono">
                    Issued by CBIC, Ministry of Finance &bull; Valid upto 19/08/2029
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* MOBILE DOSSIER BOTTOM SHEET */}
      {mobileDossierOpen && (
        <div className="fixed inset-x-0 bottom-0 z-50 lg:hidden bg-[#F7F6F2] border-t border-[#DCDCD7] p-5 rounded-t-2xl shadow-2xl max-h-[85vh] overflow-y-auto">
          <div className="flex items-center justify-between border-b border-[#DCDCD7] pb-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-[#E33B12] text-white">
                {selectedMovement.id}
              </span>
              <h4 className="text-lg font-bold text-[#17181B] font-[family-name:var(--font-barlow-condensed)]">
                {selectedMovement.route}
              </h4>
            </div>
            <button
              onClick={() => setMobileDossierOpen(false)}
              className="p-1 rounded bg-black/5 text-[#17181B] hover:text-[#E33B12]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-3 text-xs">
            <div className="grid grid-cols-2 gap-2 bg-white p-2.5 rounded-lg border border-[#DCDCD7]">
              <div>
                <span className="text-[9px] font-mono text-[#62656B] block">ORIGIN</span>
                <span className="font-bold text-[#17181B]">{selectedMovement.origin.city}</span>
                <span className="text-[10px] text-[#62656B] block">{selectedMovement.origin.country}</span>
              </div>
              <div>
                <span className="text-[9px] font-mono text-[#62656B] block">DESTINATION</span>
                <span className="font-bold text-[#17181B]">{selectedMovement.destination.city}</span>
                <span className="text-[10px] text-[#62656B] block">{selectedMovement.destination.country}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {selectedMovement.weightTons && (
                <div className="bg-white p-2 rounded-lg border border-[#DCDCD7]">
                  <span className="text-[9px] font-mono text-[#62656B] block">WEIGHT</span>
                  <span className="text-base font-bold text-[#E33B12] font-[family-name:var(--font-barlow-condensed)]">
                    {selectedMovement.weightTons.toLocaleString()} MT
                  </span>
                </div>
              )}
              {selectedMovement.dimensions && (
                <div className="bg-white p-2 rounded-lg border border-[#DCDCD7]">
                  <span className="text-[9px] font-mono text-[#62656B] block">DIMENSIONS</span>
                  <span className="font-mono text-[11px] font-bold text-[#17181B] block truncate">
                    {selectedMovement.dimensions}
                  </span>
                </div>
              )}
            </div>

            <div className="bg-white p-2.5 rounded-lg border border-[#DCDCD7] italic text-[#62656B] text-[11px]">
              "{selectedMovement.exactWording}"
            </div>

            <button
              onClick={() => setMobileDossierOpen(false)}
              className="w-full py-2.5 bg-[#17181B] hover:bg-[#E33B12] text-white font-mono text-xs rounded-lg transition"
            >
              Close Dossier
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
