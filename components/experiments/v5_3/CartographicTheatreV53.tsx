"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { RotateCcw, Compass, MapPin, Building2, Phone, Mail } from "lucide-react";

export interface StationItem {
  id: string;
  city: string;
  shortLabel: string;
  address: string;
  phone: string;
  email: string;
  cx: number;
  cy: number;
  labelAnchor: "start" | "end" | "middle";
  labelDx: number;
  labelDy: number;
  region: "South India" | "West India" | "North India";
  networkOrder: number;
}

// Strictly 10 operating stations across 8 cities from verified locations.json
export const FREYER_10_VERIFIED_STATIONS: StationItem[] = [
  {
    id: "chennai_egmore",
    city: "Chennai (Egmore)",
    shortLabel: "Chennai (Egmore HQ)",
    address: "TAGA Tower New No: 45 Old No 20, 1st Floor, 2nd Street, Sait Colony, Egmore, Chennai-600008.",
    phone: "+91 44 43191919",
    email: "info@freyerinternational.com",
    cx: 260,
    cy: 480,
    labelAnchor: "start",
    labelDx: 16,
    labelDy: -2,
    region: "South India",
    networkOrder: 1,
  },
  {
    id: "chennai_airport",
    city: "Chennai Airport Office",
    shortLabel: "Chennai Airport Office",
    address: "No.2 Ambedkar Street, G.S.T. Road, Meenambakkam, Chennai -600017.",
    phone: "+91 96000 41033",
    email: "info@freyerinternational.com",
    cx: 258,
    cy: 504,
    labelAnchor: "start",
    labelDx: 16,
    labelDy: 16,
    region: "South India",
    networkOrder: 1,
  },
  {
    id: "bengaluru",
    city: "Bengaluru",
    shortLabel: "Bengaluru",
    address: "No.19, KMJ AVEN, 3rd Floor, Outer Ring Road, Marathahalli, Bengaluru-560037. India",
    phone: "080 4120 0300",
    email: "Vijay.Palagiri@freyerinternational.com",
    cx: 206,
    cy: 490,
    labelAnchor: "end",
    labelDx: -16,
    labelDy: 4,
    region: "South India",
    networkOrder: 2,
  },
  {
    id: "hyderabad",
    city: "Hyderabad",
    shortLabel: "Hyderabad",
    address: "#109, 1st Floor, Ashoka Bhoopal Chambers, S.P. Road, Secunderbad-500 003, Telangana",
    phone: "040-48561797",
    email: "Vijay.Palagiri@freyerinternational.com",
    cx: 218,
    cy: 400,
    labelAnchor: "start",
    labelDx: 16,
    labelDy: 4,
    region: "South India",
    networkOrder: 3,
  },
  {
    id: "mumbai",
    city: "Mumbai",
    shortLabel: "Mumbai",
    address: "A - 401, POLARIS BUILDING, OFF MAKWANA ROAD, MAROL, ANDHERI (EAST), MUMBAI - 400 059, Maharashtra India.",
    phone: "022-46191301",
    email: "raju.jamdar@freyerinternational.com",
    cx: 114,
    cy: 370,
    labelAnchor: "end",
    labelDx: -16,
    labelDy: 4,
    region: "West India",
    networkOrder: 4,
  },
  {
    id: "coimbatore",
    city: "Coimbatore",
    shortLabel: "Coimbatore",
    address: "3A, 1264, Mayflower Valencia, 5th Floor, Krisan Workspaces, Avinashi Road, Nava India, Coimbatore, TN - 641004, India.",
    phone: "+91 9962541554",
    email: "shivakumar.ps@freyerinternational.com",
    cx: 196,
    cy: 526,
    labelAnchor: "end",
    labelDx: -16,
    labelDy: 6,
    region: "South India",
    networkOrder: 5,
  },
  {
    id: "tuticorin",
    city: "Tuticorin",
    shortLabel: "Tuticorin",
    address: "J GARDEN 4A/C, 278, Housing Board RTC Nagar, Tuticorin -628001.",
    phone: "+91 87544 46077",
    email: "donald@freyerinternational.com",
    cx: 208,
    cy: 566,
    labelAnchor: "end",
    labelDx: -16,
    labelDy: 8,
    region: "South India",
    networkOrder: 5,
  },
  {
    id: "visakhapatnam",
    city: "Visakhapatnam",
    shortLabel: "Visakhapatnam",
    address: "YCN Complex, D.No.58-1-256, NAD X Road, Visakhapatnam, Andhra Pradesh - 530009.",
    phone: "+91 97402 20069",
    email: "Vijay.Palagiri@freyerinternational.com",
    cx: 318,
    cy: 396,
    labelAnchor: "start",
    labelDx: 16,
    labelDy: 4,
    region: "South India",
    networkOrder: 5,
  },
  {
    id: "ahmedabad",
    city: "Ahmedabad",
    shortLabel: "Ahmedabad",
    address: "Office No. 220, Flexi Business HUB, 2nd Floor, Madhur Complex, Opp. Gwalia Sweets, Near Stadium Cross Road, Navrangpur, Ahmedabad - 380009.",
    phone: "+91 98214 65939",
    email: "raju.jamdar@freyerinternational.com",
    cx: 108,
    cy: 294,
    labelAnchor: "end",
    labelDx: -16,
    labelDy: -6,
    region: "West India",
    networkOrder: 6,
  },
  {
    id: "delhi",
    city: "Delhi",
    shortLabel: "Delhi",
    address: "Plot No. 524, First Floor, Udyog Vihar Phase 5, Gurugram - 122016, Haryana.",
    phone: "0124-4068388",
    email: "info@freyerinternational.com",
    cx: 195,
    cy: 186,
    labelAnchor: "middle",
    labelDx: 0,
    labelDy: -16,
    region: "North India",
    networkOrder: 6,
  },
];

export const NETWORK_CORRIDORS = [
  { id: "c-blr", from: [260, 480], to: [206, 490], step: 2 },
  { id: "c-hyd", from: [260, 480], to: [218, 400], step: 3 },
  { id: "hyd-bom", from: [218, 400], to: [114, 370], step: 4 },
  { id: "c-cbe", from: [260, 480], to: [196, 526], step: 5 },
  { id: "c-tut", from: [260, 480], to: [208, 566], step: 5 },
  { id: "c-viz", from: [260, 480], to: [318, 396], step: 5 },
  { id: "bom-amd", from: [114, 370], to: [108, 294], step: 6 },
  { id: "hyd-del", from: [218, 400], to: [195, 186], step: 6 },
];

export function CartographicTheatreV53() {
  const [selectedStationId, setSelectedStationId] = useState<string>("chennai_egmore");
  const [theatreStep, setTheatreStep] = useState<number>(0);
  const [sequenceKey, setSequenceKey] = useState<number>(0);
  const [isSettled, setIsSettled] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // KINETIC CHOREOGRAPHY:
  // 1. empty parchment (0ms)
  // 2. Chennai Egmore appears (400ms)
  // 3. Chennai reticle activates (pulses twice, then locks) (900ms)
  // 4. verified station corridors draw outward (1400ms - 2800ms)
  // 5. India coastline resolves (3500ms)
  // 6. remaining verified stations settle (4200ms)
  // 7. map becomes COMPLETELY STATIC (5000ms)
  useEffect(() => {
    setIsSettled(false);
    const timings = [
      { step: 1, delay: 350 },
      { step: 2, delay: 850 },
      { step: 3, delay: 1400 },
      { step: 4, delay: 2000 },
      { step: 5, delay: 2600 },
      { step: 6, delay: 3200 },
      { step: 7, delay: 3900 },
      { step: 8, delay: 4800 },
    ];

    const timeouts = timings.map((t) =>
      setTimeout(() => {
        setTheatreStep(t.step);
        if (t.step === 8) {
          setIsSettled(true);
        }
      }, t.delay)
    );

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [sequenceKey]);

  const replayTheatre = () => {
    setTheatreStep(0);
    setIsSettled(false);
    setSequenceKey((k) => k + 1);
  };

  const selectedStation =
    FREYER_10_VERIFIED_STATIONS.find((s) => s.id === selectedStationId) ||
    FREYER_10_VERIFIED_STATIONS[0];

  return (
    <section
      ref={containerRef}
      id="india-cartography-section"
      className="relative w-full min-h-screen bg-[#f6f5f1] text-[#0a1424] py-16 md:py-24 px-4 sm:px-6 lg:px-12 border-b border-[#0a1424]/10 select-none overflow-hidden"
    >
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#0a1424]/15 pb-8">
        <div>
          <div className="flex items-center gap-3 mb-2 font-mono text-xs text-[#64748b]">
            <span className="w-2 h-2 rounded-full bg-[#e1390f]" />
            <span className="uppercase tracking-widest text-[#e1390f] font-semibold">
              India Network Cartography
            </span>
            <span>[10 Operating Stations • 8 Cities]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0a1424]">
            OPERATING STATIONS
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="font-mono text-xs text-[#64748b] bg-[#e9e7e1] px-3 py-1.5 rounded border border-[#0a1424]/10">
            {isSettled ? "STATE: SETTLED" : `CONSTRUCTING: STEP ${theatreStep}/8`}
          </div>

          <button
            onClick={replayTheatre}
            className="flex items-center gap-2 px-3.5 py-1.5 bg-[#0a1424] text-white hover:bg-[#e1390f] transition-colors text-xs font-mono tracking-wider uppercase rounded"
            title="Replay sequence"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Replay</span>
          </button>
        </div>
      </div>

      {/* Cartographic Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Unboxed Geographic Vector Canvas */}
        <div className="lg:col-span-7 xl:col-span-8 relative flex justify-center items-center py-4">
          <div className="relative w-full max-w-[560px] aspect-[450/640]">
            <svg
              viewBox="0 0 450 640"
              className="w-full h-full overflow-visible"
              key={`theatre-svg-${sequenceKey}`}
            >
              <defs>
                <pattern id="theatre-grid-v53" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
                </pattern>
              </defs>

              {/* Grid Background */}
              <rect
                width="450"
                height="640"
                fill="url(#theatre-grid-v53)"
                opacity={theatreStep >= 7 ? 0.5 : 0.15}
              />

              {/* STEP 5: INDIA CONTINENTAL SILHOUETTE RESOLVES AROUND NETWORK */}
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
                fill={theatreStep >= 7 ? "#eaeef4" : "none"}
                stroke={theatreStep >= 7 ? "#94a3b8" : "transparent"}
                strokeWidth="1.6"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: theatreStep >= 7 ? 1 : 0,
                  opacity: theatreStep >= 7 ? 1 : 0,
                }}
                transition={{
                  pathLength: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
                  opacity: { duration: 0.4 },
                }}
              />

              {/* Coastal Definition Curve */}
              <motion.path
                d="M 54 292 C 72 308, 98 335, 114 370 C 138 412, 166 462, 182 520 C 196 558, 208 586, 214 586 C 228 565, 246 524, 260 480 C 275 432, 294 380, 318 340 C 334 316, 342 290, 336 270"
                fill="none"
                stroke="#64748b"
                strokeWidth="1.2"
                strokeDasharray="4 3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: theatreStep >= 7 ? 1 : 0,
                  opacity: theatreStep >= 7 ? 0.75 : 0,
                }}
                transition={{ duration: 1.0, ease: "easeOut" }}
              />

              {/* Sri Lanka Reference Baseline (southern marker) */}
              <motion.path
                d="M 235 580 C 242 585, 246 595, 242 602 C 238 608, 230 605, 228 596 C 226 588, 230 582, 235 580 Z"
                fill="#f1f5f9"
                stroke="#cbd5e1"
                strokeWidth="1"
                initial={{ opacity: 0 }}
                animate={{ opacity: theatreStep >= 7 ? 0.75 : 0 }}
                transition={{ duration: 0.5 }}
              />

              {/* ACTIVE CORRIDORS: SEQUENTIALLY DRAWING OUT FROM CHENNAI */}
              {NETWORK_CORRIDORS.map((corridor) => {
                const isCorridorActive = theatreStep >= corridor.step;
                return (
                  <motion.line
                    key={corridor.id}
                    x1={corridor.from[0]}
                    y1={corridor.from[1]}
                    x2={corridor.to[0]}
                    y2={corridor.to[1]}
                    stroke="#e1390f"
                    strokeWidth="1.5"
                    strokeDasharray="4 3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: isCorridorActive ? 1 : 0,
                      opacity: isCorridorActive ? 0.85 : 0,
                    }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                );
              })}

              {/* STEP 2-3: CHENNAI RETICLE (Pulses twice during reveal, then locks to STILLNESS) */}
              {theatreStep >= 1 && (
                <g>
                  {/* Caliper ticks at Chennai */}
                  <line x1="244" y1="480" x2="276" y2="480" stroke="#e1390f" strokeWidth="1" opacity={0.6} />
                  <line x1="260" y1="464" x2="260" y2="496" stroke="#e1390f" strokeWidth="1" opacity={0.6} />
                  {/* Pulse ring: executes exactly twice, then finishes */}
                  {!isSettled && (
                    <motion.circle
                      cx="260"
                      cy="480"
                      r={24}
                      fill="none"
                      stroke="#e1390f"
                      strokeWidth="1.5"
                      initial={{ scale: 0.4, opacity: 1 }}
                      animate={{ scale: [0.4, 1.8], opacity: [0.9, 0] }}
                      transition={{ repeat: 2, duration: 1.4, ease: "easeOut" }}
                    />
                  )}
                  {/* Static Reticle Halo once settled */}
                  <circle cx="260" cy="480" r="10" fill="none" stroke="#e1390f" strokeWidth="1" opacity={0.5} />
                </g>
              )}

              {/* STATION NODES: SEQUENTIALLY UNVEILED, THEN STATIC */}
              {FREYER_10_VERIFIED_STATIONS.map((st) => {
                const isRevealed = theatreStep >= st.networkOrder;
                const isSelected = st.id === selectedStationId;
                const isOrigin = st.id === "chennai_egmore";

                return (
                  <motion.g
                    key={st.id}
                    onClick={() => setSelectedStationId(st.id)}
                    className="cursor-pointer group"
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{
                      opacity: isRevealed ? 1 : 0,
                      scale: isRevealed ? 1 : 0.3,
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Node Core */}
                    <circle
                      cx={st.cx}
                      cy={st.cy}
                      r={isOrigin ? 5 : isSelected ? 4.5 : 3.5}
                      fill={isOrigin ? "#e1390f" : isSelected ? "#e1390f" : "#0a1424"}
                      stroke="#ffffff"
                      strokeWidth="1.5"
                    />

                    {/* Desktop Station Label (Hidden on small mobile to avoid any collision) */}
                    <text
                      x={st.cx + st.labelDx}
                      y={st.cy + st.labelDy}
                      textAnchor={st.labelAnchor}
                      className={`hidden sm:inline font-mono text-[11px] select-none transition-colors ${
                        isSelected
                          ? "fill-[#e1390f] font-bold"
                          : isOrigin
                          ? "fill-[#0a1424] font-bold"
                          : "fill-[#475569] font-medium group-hover:fill-[#e1390f]"
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

        {/* Right: Verified Technical Dossier (Source-Only) */}
        <div className="lg:col-span-5 xl:col-span-4 bg-white border border-[#0a1424]/12 shadow-sm rounded p-6">
          <div className="flex items-center justify-between border-b border-[#0a1424]/10 pb-4 mb-5">
            <div>
              <span className="font-mono text-[10px] text-[#e1390f] uppercase tracking-wider font-semibold">
                Operating Station
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
                Office Address
              </span>
              <div className="flex items-start gap-2 text-[#1e293b]">
                <Building2 className="w-4 h-4 text-[#e1390f] shrink-0 mt-0.5" />
                <p className="font-mono leading-relaxed">{selectedStation.address}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[#0a1424]/8">
              <div>
                <span className="font-mono text-[#64748b] text-[10px] uppercase tracking-widest block mb-1">
                  Telephone
                </span>
                <div className="flex items-center gap-2 text-[#0a1424] font-mono">
                  <Phone className="w-3.5 h-3.5 text-[#e1390f]" />
                  <span>{selectedStation.phone}</span>
                </div>
              </div>

              <div>
                <span className="font-mono text-[#64748b] text-[10px] uppercase tracking-widest block mb-1">
                  Email
                </span>
                <div className="flex items-center gap-2 text-[#0a1424] font-mono truncate">
                  <Mail className="w-3.5 h-3.5 text-[#e1390f]" />
                  <span className="truncate">{selectedStation.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Station Selector (10 Verified Stations) */}
          <div className="mt-6 pt-5 border-t border-[#0a1424]/10">
            <span className="font-mono text-[10px] text-[#64748b] uppercase tracking-wider block mb-2">
              Select Operating Station ({FREYER_10_VERIFIED_STATIONS.length} Verified):
            </span>
            <div className="grid grid-cols-2 gap-1.5 font-mono text-[11px]">
              {FREYER_10_VERIFIED_STATIONS.map((st) => (
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
