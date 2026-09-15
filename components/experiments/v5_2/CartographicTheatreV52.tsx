"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RotateCcw, Compass, Radio, MapPin, Building2, Phone, Mail, ArrowUpRight } from "lucide-react";

export interface StationItem {
  id: string;
  city: string;
  shortLabel: string;
  address: string;
  phone: string;
  email: string;
  gateways: string;
  cx: number;
  cy: number;
  labelAnchor: "start" | "end" | "middle";
  labelDx: number;
  labelDy: number;
  region: "South" | "West" | "North" | "East";
  networkOrder: number; // 1: Chennai Origin, 2: Bengaluru, 3: Hyderabad, 4: Mumbai, 5: South Gateways, 6: National Grid
}

export const FREYER_10_STATIONS: StationItem[] = [
  {
    id: "chennai_egmore",
    city: "Chennai (Egmore)",
    shortLabel: "Chennai (Egmore HQ)",
    address: "TAGA Tower, New No: 45 Old No 20, 1st Floor, Sait Colony, Egmore, Chennai - 600008",
    phone: "+91 44 4296 1111",
    email: "info@freyerinternational.com",
    gateways: "Chennai Port Trust & Ennore Kamarajar Port",
    cx: 260,
    cy: 480,
    labelAnchor: "start",
    labelDx: 16,
    labelDy: -2,
    region: "South",
    networkOrder: 1,
  },
  {
    id: "chennai_airport",
    city: "Chennai (Airport)",
    shortLabel: "Chennai (Air Cargo)",
    address: "No.2 Ambedkar Street, G.S.T. Road, Meenambakkam, Chennai - 600017",
    phone: "+91 44 4296 1111",
    email: "info@freyerinternational.com",
    gateways: "Chennai International Airport (MAA) Cargo Terminal",
    cx: 258,
    cy: 504,
    labelAnchor: "start",
    labelDx: 16,
    labelDy: 16,
    region: "South",
    networkOrder: 1,
  },
  {
    id: "bengaluru",
    city: "Bengaluru",
    shortLabel: "Bengaluru",
    address: "No.19, KMJ AVEN, 3rd Floor, Outer Ring Road, Marathahalli, Bengaluru - 560037",
    phone: "+91 80 4120 0300",
    email: "info@freyerinternational.com",
    gateways: "Kempegowda International Airport (BLR) & Whitefield ICD",
    cx: 206,
    cy: 490,
    labelAnchor: "end",
    labelDx: -16,
    labelDy: 4,
    region: "South",
    networkOrder: 2,
  },
  {
    id: "hyderabad",
    city: "Hyderabad",
    shortLabel: "Hyderabad",
    address: "#109, 1st Floor, Ashoka Bhoopal Chambers, S.P. Road, Secunderabad - 500003",
    phone: "+91 40 4010 1919",
    email: "info@freyerinternational.com",
    gateways: "Rajiv Gandhi International Airport (HYD) & Sanathnagar ICD",
    cx: 218,
    cy: 400,
    labelAnchor: "start",
    labelDx: 16,
    labelDy: 4,
    region: "South",
    networkOrder: 3,
  },
  {
    id: "mumbai",
    city: "Mumbai",
    shortLabel: "Mumbai",
    address: "A-401, Polaris Building, Off Makwana Road, Marol, Andheri (East), Mumbai - 400059",
    phone: "+91 22 4619 1301",
    email: "info@freyerinternational.com",
    gateways: "Jawaharlal Nehru Port Trust (JNPT / Nhava Sheva) & BOM Air Cargo",
    cx: 114,
    cy: 370,
    labelAnchor: "end",
    labelDx: -16,
    labelDy: 4,
    region: "West",
    networkOrder: 4,
  },
  {
    id: "coimbatore",
    city: "Coimbatore",
    shortLabel: "Coimbatore",
    address: "3A, 1264, Mayflower Valencia, 5th Floor, Krisan Workspaces, Avinashi Road, Nava India, Coimbatore - 641004",
    phone: "+91 422 439 1919",
    email: "info@freyerinternational.com",
    gateways: "Coimbatore International Airport (CJB) & Irugur ICD",
    cx: 196,
    cy: 526,
    labelAnchor: "end",
    labelDx: -16,
    labelDy: 6,
    region: "South",
    networkOrder: 5,
  },
  {
    id: "tuticorin",
    city: "Tuticorin",
    shortLabel: "Tuticorin",
    address: "J Garden 4A/C, 278, Housing Board RTC Nagar, Tuticorin - 628001",
    phone: "+91 461 400 1919",
    email: "info@freyerinternational.com",
    gateways: "V.O. Chidambaranar Port Trust (VOC)",
    cx: 208,
    cy: 566,
    labelAnchor: "end",
    labelDx: -16,
    labelDy: 8,
    region: "South",
    networkOrder: 5,
  },
  {
    id: "visakhapatnam",
    city: "Visakhapatnam",
    shortLabel: "Visakhapatnam",
    address: "YCN Complex, D.No.58-1-256, NAD X Road, Visakhapatnam - 530009",
    phone: "+91 891 278 4910",
    email: "info@freyerinternational.com",
    gateways: "Visakhapatnam Port Authority (VPA) & Gangavaram Port",
    cx: 318,
    cy: 396,
    labelAnchor: "start",
    labelDx: 16,
    labelDy: 4,
    region: "East",
    networkOrder: 5,
  },
  {
    id: "ahmedabad",
    city: "Ahmedabad",
    shortLabel: "Ahmedabad",
    address: "Office No. 220, Flexi Business HUB, 2nd Floor, Madhur Complex, Near Stadium Cross Road, Navrangpur, Ahmedabad - 380009",
    phone: "+91 79 4891 1919",
    email: "info@freyerinternational.com",
    gateways: "Mundra Port (INMUN), Kandla Port & Khodiyar ICD",
    cx: 108,
    cy: 294,
    labelAnchor: "end",
    labelDx: -16,
    labelDy: -6,
    region: "West",
    networkOrder: 6,
  },
  {
    id: "delhi",
    city: "Delhi / NCR",
    shortLabel: "Delhi / NCR",
    address: "Plot No. 524, 1st Floor, Udyog Vihar Phase 5, Gurugram - 122016",
    phone: "+91 124 406 8388",
    email: "info@freyerinternational.com",
    gateways: "Indira Gandhi International Airport (DEL) & Tuglakabad ICD",
    cx: 195,
    cy: 186,
    labelAnchor: "middle",
    labelDx: 0,
    labelDy: -16,
    region: "North",
    networkOrder: 6,
  },
];

// Sequential Corridors radiating from Chennai outwards
export const SEQUENTIAL_CORRIDORS = [
  { id: "c-blr", from: [260, 480], to: [206, 490], step: 2, label: "CHENNAI → BENGALURU" },
  { id: "c-hyd", from: [260, 480], to: [218, 400], step: 3, label: "CHENNAI → HYDERABAD" },
  { id: "hyd-bom", from: [218, 400], to: [114, 370], step: 4, label: "HYDERABAD → MUMBAI" },
  { id: "c-cbe", from: [260, 480], to: [196, 526], step: 5, label: "CHENNAI → COIMBATORE" },
  { id: "c-tut", from: [260, 480], to: [208, 566], step: 5, label: "CHENNAI → TUTICORIN" },
  { id: "c-viz", from: [260, 480], to: [318, 396], step: 5, label: "CHENNAI → VISAKHAPATNAM" },
  { id: "bom-amd", from: [114, 370], to: [108, 294], step: 6, label: "MUMBAI → AHMEDABAD" },
  { id: "hyd-del", from: [218, 400], to: [195, 186], step: 6, label: "HYDERABAD → DELHI / NCR" },
];

export function CartographicTheatreV52() {
  const [selectedStationId, setSelectedStationId] = useState<string>("chennai_egmore");
  const [theatreStep, setTheatreStep] = useState<number>(0);
  const [sequenceKey, setSequenceKey] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Theatre Sequence Timeline:
  // Step 0: Blank Paper Field
  // Step 1: Chennai Origin Appears (Reticle + Coordinates)
  // Step 2: Corridors travel north-west to Bengaluru
  // Step 3: Corridors branch north to Hyderabad
  // Step 4: Corridor extends west to Mumbai
  // Step 5: Southern gateways (Coimbatore, Tuticorin) & East Coast (Visakhapatnam)
  // Step 6: Northern axis to Ahmedabad & Delhi / NCR
  // Step 7: THE LANDMASS RESOLVES: India coastline & international frontier draw around network
  // Step 8: Topographic fill settles, full interactive dossier unlocked
  useEffect(() => {
    if (!isPlaying) return;

    const timings = [
      { step: 1, delay: 350 },  // Chennai appears
      { step: 2, delay: 900 },  // Bengaluru line shoots
      { step: 3, delay: 1550 }, // Hyderabad line shoots
      { step: 4, delay: 2200 }, // Mumbai line shoots
      { step: 5, delay: 2850 }, // Coimbatore, Tuticorin, Vizag
      { step: 6, delay: 3500 }, // Ahmedabad & Delhi
      { step: 7, delay: 4200 }, // Coastline & borders resolve around network!
      { step: 8, delay: 5200 }, // Final lock & interactive dossier
    ];

    const timeouts = timings.map((t) =>
      setTimeout(() => {
        setTheatreStep(t.step);
      }, t.delay)
    );

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [sequenceKey, isPlaying]);

  const replayTheatre = () => {
    setTheatreStep(0);
    setIsPlaying(true);
    setSequenceKey((k) => k + 1);
  };

  const selectedStation =
    FREYER_10_STATIONS.find((s) => s.id === selectedStationId) || FREYER_10_STATIONS[0];

  const currentStepTitle = [
    "00 // SILENT FIELD",
    "01 // CHENNAI OPERATIONAL ORIGIN",
    "02 // DECCAN CORRIDOR: BENGALURU",
    "03 // CENTRAL AXIS: HYDERABAD",
    "04 // WESTERN COMMERCIAL GATEWAY: MUMBAI",
    "05 // PENINSULAR & COROMANDEL GATEWAYS",
    "06 // NATIONAL CAPITAL & GUJARAT REACH",
    "07 // INDIA SILHOUETTE RESOLVES AROUND NETWORK",
    "08 // ACTIVE NATIONAL CARTOGRAPHY",
  ][theatreStep] || "ACTIVE CARTOGRAPHY";

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#f6f5f1] text-[#0a1424] py-16 md:py-24 px-4 sm:px-6 lg:px-12 border-b border-[#0a1424]/10 select-none overflow-hidden"
    >
      {/* Top Technical Header */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#0a1424]/15 pb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#e1390f] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#e1390f] font-semibold">
              Cartographic Theatre // Origin-Outward Reveal
            </span>
            <span className="font-mono text-xs text-[#64748b]">
              [10 Stations • 8 Cities • Zero Inference]
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0a1424]">
            INDIA OPERATING STATIONS
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#475569] max-w-2xl font-light leading-relaxed">
            The operational network defines the territory. Starting at Chennai head office, active
            transit corridors branch outward before the geographic coastline resolves around the
            infrastructure.
          </p>
        </div>

        {/* Action Controls & Realtime Phase Tracker */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="bg-[#e9e7e1] border border-[#0a1424]/10 px-3.5 py-2 font-mono text-xs text-[#0a1424] tracking-wider rounded">
            <span className="text-[#e1390f] font-bold mr-2">PHASE:</span>
            {currentStepTitle}
          </div>

          <button
            onClick={replayTheatre}
            className="flex items-center gap-2 px-4 py-2 bg-[#0a1424] text-white hover:bg-[#e1390f] transition-colors text-xs font-mono tracking-wider uppercase rounded"
            title="Replay cartographic theatre sequence"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Replay Sequence</span>
          </button>
        </div>
      </div>

      {/* Main Cartographic Display Area */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left / Center: Unboxed SVG Cartography Canvas */}
        <div className="lg:col-span-7 xl:col-span-8 relative flex justify-center items-center py-4">
          <div className="relative w-full max-w-[560px] aspect-[450/640]">
            {/* Subtle Engineering Watermark */}
            <div className="absolute top-2 left-2 font-mono text-[10px] text-[#94a3b8] tracking-widest pointer-events-none z-10 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-[#e1390f]" />
              <span>FREYER VECTOR CARTOGRAPHY • 450×640 PROJECTION</span>
            </div>

            <svg
              viewBox="0 0 450 640"
              className="w-full h-full overflow-visible"
              key={`theatre-svg-${sequenceKey}`}
            >
              <defs>
                <pattern id="theatre-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
                </pattern>
              </defs>

              {/* Step 7-8: Subtle Coordinates Grid in Background */}
              <motion.rect
                width="450"
                height="640"
                fill="url(#theatre-grid)"
                initial={{ opacity: 0 }}
                animate={{ opacity: theatreStep >= 7 ? 0.6 : 0.15 }}
                transition={{ duration: 1 }}
              />

              {/* STEP 7: INDIA LANDMASS & COASTLINE RESOLVES *AROUND* THE NETWORK */}
              {/* Outer Continental Silhouette Stroke & Fill */}
              <motion.path
                d="M 188 68 
                   C 202 75, 215 88, 224 95 
                   C 236 92, 248 108, 252 118 
                   C 246 132, 260 144, 272 152 
                   C 292 156, 314 162, 332 168 
                   C 358 174, 386 182, 396 195 
                   C 388 208, 362 216, 348 226 
                   C 336 238, 324 246, 338 265 
                   C 346 285, 338 312, 322 332 
                   C 305 355, 294 382, 285 412 
                   C 278 440, 268 472, 258 505 
                   C 248 532, 235 558, 222 576 
                   C 214 586, 206 588, 198 574 
                   C 188 546, 180 514, 172 478 
                   C 160 435, 142 398, 122 368 
                   C 98 344, 68 322, 54 292 
                   C 52 272, 70 258, 92 248 
                   C 114 238, 134 220, 154 186 
                   C 168 152, 176 112, 188 68 Z"
                fill={theatreStep >= 8 ? "#eaeef4" : theatreStep >= 7 ? "#f1f5f9" : "none"}
                stroke={theatreStep >= 7 ? "#94a3b8" : "transparent"}
                strokeWidth="1.6"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: theatreStep >= 7 ? 1 : 0,
                  opacity: theatreStep >= 7 ? 1 : 0,
                }}
                transition={{
                  pathLength: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
                  opacity: { duration: 0.5 },
                }}
              />

              {/* Coastal Definition Curve (Arabian Sea to Bay of Bengal) */}
              <motion.path
                d="M 54 292 C 72 308, 98 335, 114 370 C 138 412, 166 462, 182 520 C 196 558, 208 586, 214 586 C 228 565, 246 524, 260 480 C 275 432, 294 380, 318 340 C 334 316, 342 290, 336 270"
                fill="none"
                stroke="#64748b"
                strokeWidth="1.2"
                strokeDasharray="4 3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: theatreStep >= 7 ? 1 : 0,
                  opacity: theatreStep >= 7 ? 0.8 : 0,
                }}
                transition={{ duration: 1.1, ease: "easeOut" }}
              />

              {/* Sri Lanka Reference Outline (Southern baseline reference) */}
              <motion.path
                d="M 235 580 C 242 585, 246 595, 242 602 C 238 608, 230 605, 228 596 C 226 588, 230 582, 235 580 Z"
                fill="#f1f5f9"
                stroke="#cbd5e1"
                strokeWidth="1"
                initial={{ opacity: 0 }}
                animate={{ opacity: theatreStep >= 7 ? 0.75 : 0 }}
                transition={{ duration: 0.6 }}
              />

              {/* ACTIVE CORRIDORS: SEQUENTIALLY DRAWING OUT FROM CHENNAI */}
              {SEQUENTIAL_CORRIDORS.map((corridor) => {
                const isCorridorActive = theatreStep >= corridor.step;
                return (
                  <g key={corridor.id}>
                    <motion.line
                      x1={corridor.from[0]}
                      y1={corridor.from[1]}
                      x2={corridor.to[0]}
                      y2={corridor.to[1]}
                      stroke="#e1390f"
                      strokeWidth="1.6"
                      strokeDasharray="5 3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{
                        pathLength: isCorridorActive ? 1 : 0,
                        opacity: isCorridorActive ? 0.85 : 0,
                      }}
                      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </g>
                );
              })}

              {/* STEP 1: CHENNAI ORIGIN RETICLE & PULSE BEACON */}
              {theatreStep >= 1 && (
                <g>
                  {/* Outer Pulsing Ping */}
                  <motion.circle
                    cx="260"
                    cy="480"
                    r={28}
                    fill="none"
                    stroke="#e1390f"
                    strokeWidth="1.5"
                    initial={{ scale: 0.3, opacity: 1 }}
                    animate={{ scale: [0.5, 2.0, 0.5], opacity: [0.9, 0, 0.9] }}
                    transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                  />
                  {/* Caliper Measurement Hairlines around Chennai */}
                  <line x1="244" y1="480" x2="276" y2="480" stroke="#e1390f" strokeWidth="1" opacity={0.6} />
                  <line x1="260" y1="464" x2="260" y2="496" stroke="#e1390f" strokeWidth="1" opacity={0.6} />
                  <circle cx="260" cy="480" r="4" fill="#e1390f" />
                </g>
              )}

              {/* STATION NODES: SEQUENTIALLY UNVEILED BY NETWORK ORDER */}
              {FREYER_10_STATIONS.map((st) => {
                const isRevealed = theatreStep >= st.networkOrder;
                const isSelected = st.id === selectedStationId;
                const isOrigin = st.id === "chennai_egmore";

                return (
                  <motion.g
                    key={st.id}
                    onClick={() => setSelectedStationId(st.id)}
                    className="cursor-pointer group"
                    initial={{ opacity: 0, scale: 0.2 }}
                    animate={{
                      opacity: isRevealed ? 1 : 0,
                      scale: isRevealed ? 1 : 0.2,
                    }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Hover & Selection Halo */}
                    <circle
                      cx={st.cx}
                      cy={st.cy}
                      r={isSelected ? 14 : isOrigin ? 10 : 8}
                      fill={isSelected ? "rgba(225,57,15,0.18)" : "transparent"}
                      stroke={isSelected ? "#e1390f" : "none"}
                      strokeWidth="1.2"
                      className="transition-all duration-300"
                    />

                    {/* Node Core */}
                    <circle
                      cx={st.cx}
                      cy={st.cy}
                      r={isOrigin ? 5 : isSelected ? 4.5 : 3.5}
                      fill={isOrigin ? "#e1390f" : isSelected ? "#e1390f" : "#0a1424"}
                      stroke="#ffffff"
                      strokeWidth="1.5"
                    />

                    {/* Typographic Label */}
                    <text
                      x={st.cx + st.labelDx}
                      y={st.cy + st.labelDy}
                      textAnchor={st.labelAnchor}
                      className={`font-mono text-[11px] select-none transition-colors duration-200 ${
                        isSelected
                          ? "fill-[#e1390f] font-bold"
                          : isOrigin
                          ? "fill-[#0a1424] font-bold"
                          : "fill-[#334155] font-medium group-hover:fill-[#e1390f]"
                      }`}
                    >
                      {st.shortLabel}
                    </text>
                  </motion.g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Right: Technical Operating Station Dossier */}
        <div className="lg:col-span-5 xl:col-span-4 bg-white border border-[#0a1424]/12 shadow-sm rounded p-6">
          <div className="flex items-center justify-between border-b border-[#0a1424]/10 pb-4 mb-5">
            <div>
              <span className="font-mono text-[11px] text-[#e1390f] uppercase tracking-wider font-semibold">
                Verified Station Dossier
              </span>
              <h3 className="text-2xl font-bold text-[#0a1424] tracking-tight">
                {selectedStation.city}
              </h3>
            </div>
            <div className="bg-[#f1f5f9] px-2.5 py-1 text-[11px] font-mono font-bold text-[#0a1424] rounded border border-[#0a1424]/10">
              {selectedStation.region}
            </div>
          </div>

          <div className="space-y-4 text-xs">
            <div>
              <span className="font-mono text-[#64748b] text-[10px] uppercase tracking-widest block mb-1">
                Operating Address
              </span>
              <div className="flex items-start gap-2.5 text-[#1e293b]">
                <Building2 className="w-4 h-4 text-[#e1390f] shrink-0 mt-0.5" />
                <p className="font-mono leading-relaxed">{selectedStation.address}</p>
              </div>
            </div>

            <div>
              <span className="font-mono text-[#64748b] text-[10px] uppercase tracking-widest block mb-1">
                Connected Gateways
              </span>
              <div className="flex items-start gap-2.5 text-[#1e293b]">
                <MapPin className="w-4 h-4 text-[#0a1424] shrink-0 mt-0.5" />
                <p className="font-sans font-medium leading-relaxed">{selectedStation.gateways}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[#0a1424]/8">
              <div>
                <span className="font-mono text-[#64748b] text-[10px] uppercase tracking-widest block mb-1">
                  Direct Station Phone
                </span>
                <div className="flex items-center gap-2 text-[#0a1424] font-mono">
                  <Phone className="w-3.5 h-3.5 text-[#e1390f]" />
                  <span>{selectedStation.phone}</span>
                </div>
              </div>

              <div>
                <span className="font-mono text-[#64748b] text-[10px] uppercase tracking-widest block mb-1">
                  Station Communications
                </span>
                <div className="flex items-center gap-2 text-[#0a1424] font-mono truncate">
                  <Mail className="w-3.5 h-3.5 text-[#e1390f]" />
                  <span className="truncate">{selectedStation.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Switch Buttons for All 10 Stations */}
          <div className="mt-6 pt-5 border-t border-[#0a1424]/10">
            <span className="font-mono text-[10px] text-[#64748b] uppercase tracking-wider block mb-2">
              Select Operating Station ({FREYER_10_STATIONS.length} Verified):
            </span>
            <div className="grid grid-cols-2 gap-1.5 font-mono text-[11px]">
              {FREYER_10_STATIONS.map((st) => (
                <button
                  key={st.id}
                  onClick={() => setSelectedStationId(st.id)}
                  className={`px-2.5 py-1.5 text-left truncate rounded border transition-colors ${
                    st.id === selectedStationId
                      ? "bg-[#0a1424] text-white border-[#0a1424]"
                      : "bg-[#f8fafc] text-[#334155] border-[#e2e8f0] hover:border-[#0a1424]"
                  }`}
                >
                  {st.city}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
