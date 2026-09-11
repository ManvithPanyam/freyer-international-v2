"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RotateCcw } from "lucide-react";

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
  revealTier: 1 | 2 | 3; // 1: Chennai HQ & Airport, 2: South hubs, 3: National gateways
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
    labelDx: 14,
    labelDy: -2,
    region: "South",
    revealTier: 1,
  },
  {
    id: "chennai_airport",
    city: "Chennai (Airport)",
    shortLabel: "Chennai (Airport Station)",
    address: "No.2 Ambedkar Street, G.S.T. Road, Meenambakkam, Chennai - 600017",
    phone: "+91 44 4296 1111",
    email: "info@freyerinternational.com",
    gateways: "Chennai International Airport (MAA) Cargo Terminal",
    cx: 258,
    cy: 504,
    labelAnchor: "start",
    labelDx: 14,
    labelDy: 16,
    region: "South",
    revealTier: 1,
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
    labelDx: -14,
    labelDy: 4,
    region: "South",
    revealTier: 2,
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
    labelDx: -14,
    labelDy: 6,
    region: "South",
    revealTier: 2,
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
    labelDx: -14,
    labelDy: 8,
    region: "South",
    revealTier: 2,
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
    labelDx: 14,
    labelDy: 4,
    region: "South",
    revealTier: 2,
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
    labelDx: 14,
    labelDy: 4,
    region: "East",
    revealTier: 2,
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
    labelDx: -14,
    labelDy: 4,
    region: "West",
    revealTier: 3,
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
    labelDx: -14,
    labelDy: -6,
    region: "West",
    revealTier: 3,
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
    labelDy: -14,
    region: "North",
    revealTier: 3,
  },
];

const DOMESTIC_CORRIDORS = [
  { from: [260, 480], to: [206, 490], tier: 2 }, // Chennai -> Bengaluru
  { from: [260, 480], to: [196, 526], tier: 2 }, // Chennai -> Coimbatore
  { from: [260, 480], to: [208, 566], tier: 2 }, // Chennai -> Tuticorin
  { from: [260, 480], to: [218, 400], tier: 2 }, // Chennai -> Hyderabad
  { from: [218, 400], to: [114, 370], tier: 3 }, // Hyderabad -> Mumbai
  { from: [114, 370], to: [108, 294], tier: 3 }, // Mumbai -> Ahmedabad
  { from: [218, 400], to: [195, 186], tier: 3 }, // Hyderabad -> Delhi
  { from: [218, 400], to: [318, 396], tier: 2 }, // Hyderabad -> Visakhapatnam
];

export function IndiaMapV5() {
  const [selectedStationId, setSelectedStationId] = useState<string>("chennai_egmore");
  const [sequenceKey, setSequenceKey] = useState<number>(0);
  const [cartoPhase, setCartoPhase] = useState<number>(1); // 1: blank, 2: outline, 3: structure, 4: stations, 5: origin, 6: corridors, 7: settled

  const selectedStation =
    FREYER_10_STATIONS.find((s) => s.id === selectedStationId) || FREYER_10_STATIONS[0];

  // 7-Stage Cinematic Sequence Timer
  useEffect(() => {
    setCartoPhase(1);
    const t2 = setTimeout(() => setCartoPhase(2), 200);   // Coastline draws
    const t3 = setTimeout(() => setCartoPhase(3), 1000);  // Structure settles
    const t4 = setTimeout(() => setCartoPhase(4), 1600);  // Stations appear
    const t5 = setTimeout(() => setCartoPhase(5), 2100);  // Chennai HQ origin reticle
    const t6 = setTimeout(() => setCartoPhase(6), 2500);  // Corridors animate outward
    const t7 = setTimeout(() => setCartoPhase(7), 3200);  // Fully settled & interactive

    return () => {
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(t7);
    };
  }, [sequenceKey]);

  const handleReplay = () => {
    setSequenceKey((k) => k + 1);
  };

  // Subtle pan/zoom focus offset relative to center of map (225, 320)
  const targetX = 225 - (selectedStation.cx - 225) * 0.15;
  const targetY = 320 - (selectedStation.cy - 320) * 0.15;

  return (
    <section
      id="network-scene"
      className="relative py-20 sm:py-28 bg-[#f6f5f1] text-[#0a1424] selection:bg-[#0a1424] selection:text-white transition-colors duration-700 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-slate-300/80 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#e1390f] font-mono mb-2">
              Locations
            </div>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-[#0a1424] leading-[0.92]">
              10 Stations
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="text-sm sm:text-base text-slate-600 font-light max-w-sm">
              10 stations across 8 cities in India &bull; Ocean ports, air terminals, and inland corridors.
            </div>
            <button
              onClick={handleReplay}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-300 text-xs font-mono uppercase tracking-wider text-slate-600 hover:text-[#0a1424] hover:border-slate-500 transition-colors bg-white/60 shadow-sm"
              title="Replay Cartography Sequence"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Replay</span>
            </button>
          </div>
        </div>

        {/* Master Cartographic Stage: Unboxed Luxury Paper Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Geographic Cartography Column: Full silhouette visible with comfortable padding */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            <div className="relative w-full aspect-[4/5.3] max-w-[560px] mx-auto select-none">
              {/* Subtle Luxury Cartographic Watermark & Grid Rules */}
              <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute left-4 top-4 text-[9px] font-mono text-slate-400 tracking-widest">
                  CARTOGRAPHY // FREYER OPERATING FOOTPRINT
                </div>
                <div className="absolute right-4 bottom-4 text-[9px] font-mono text-slate-400 tracking-widest">
                  DATUM: 8 CITIES • 10 STATIONS
                </div>
              </div>

              <svg
                viewBox="0 0 450 640"
                className="w-full h-full overflow-visible"
              >
                {/* Master Geographic Transform Group with Subtle Pan & Zoom */}
                <motion.g
                  animate={{
                    x: cartoPhase >= 7 ? (targetX - 225) * 0.45 : 0,
                    y: cartoPhase >= 7 ? (targetY - 320) * 0.45 : 0,
                    scale: cartoPhase >= 7 ? 1.02 : 1.0,
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: "225px 320px" }}
                >
                  {/* Sequence 01 -> 03: Geographic Silhouette & Topographic Fill */}
                  <motion.path
                    key={`silhouette-${sequenceKey}`}
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
                    fill={cartoPhase >= 3 ? "#eaeef4" : "none"}
                    stroke="#94a3b8"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: cartoPhase >= 2 ? 1 : 0,
                      opacity: cartoPhase >= 2 ? 1 : 0,
                    }}
                    transition={{
                      pathLength: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
                      opacity: { duration: 0.4 },
                    }}
                  />

                  {/* Coastline Definition & Coastal Corridors */}
                  <motion.path
                    key={`coastline-${sequenceKey}`}
                    d="M 54 292 C 72 308, 98 335, 114 370 C 138 412, 166 462, 182 520 C 196 558, 208 586, 214 586 C 228 565, 246 524, 260 480 C 275 432, 294 380, 318 340 C 334 316, 342 290, 336 270"
                    fill="none"
                    stroke="#64748b"
                    strokeWidth="1.2"
                    strokeDasharray="4 3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: cartoPhase >= 3 ? 1 : 0,
                      opacity: cartoPhase >= 3 ? 0.85 : 0,
                    }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                  />

                  {/* Sri Lanka Reference Outline (southern reference) */}
                  <motion.path
                    d="M 235 580 C 242 585, 246 595, 242 602 C 238 608, 230 605, 228 596 C 226 588, 230 582, 235 580 Z"
                    fill="#f1f5f9"
                    stroke="#cbd5e1"
                    strokeWidth="1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: cartoPhase >= 3 ? 0.75 : 0 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Sequence 06: Domestic Corridors Animating Outward from Chennai HQ */}
                  {DOMESTIC_CORRIDORS.map((c, i) => (
                    <motion.line
                      key={`corridor-${sequenceKey}-${i}`}
                      x1={c.from[0]}
                      y1={c.from[1]}
                      x2={c.to[0]}
                      y2={c.to[1]}
                      stroke="#e1390f"
                      strokeWidth="1.4"
                      strokeDasharray="4 3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{
                        pathLength: cartoPhase >= 6 ? 1 : 0,
                        opacity: cartoPhase >= 6 ? 0.8 : 0,
                      }}
                      transition={{
                        pathLength: { duration: 0.6, delay: c.tier === 2 ? 0.1 : 0.35, ease: "easeOut" },
                        opacity: { duration: 0.2 },
                      }}
                    />
                  ))}

                  {/* Sequence 05: Chennai Egmore Visual Origin Radiating Reticle */}
                  {cartoPhase >= 5 && (
                    <g>
                      <motion.circle
                        cx="260"
                        cy="480"
                        r={22}
                        fill="none"
                        stroke="#e1390f"
                        strokeWidth="1.5"
                        initial={{ scale: 0.4, opacity: 1 }}
                        animate={{ scale: [0.6, 1.8, 0.6], opacity: [0.9, 0, 0.9] }}
                        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                      />
                      <circle
                        cx="260"
                        cy="480"
                        r={11}
                        fill="none"
                        stroke="#0a1424"
                        strokeWidth="1.2"
                        strokeDasharray="2 2"
                      />
                    </g>
                  )}

                  {/* Sequence 04: The 10 Verified Station Nodes */}
                  {FREYER_10_STATIONS.map((st) => {
                    const isSelected = st.id === selectedStationId;
                    const isChennaiHQ = st.id === "chennai_egmore";
                    const isAirport = st.id === "chennai_airport";

                    const isRevealed =
                      cartoPhase >= 4 &&
                      (st.revealTier === 1 ||
                        (st.revealTier === 2 && cartoPhase >= 5) ||
                        (st.revealTier === 3 && cartoPhase >= 6));

                    return (
                      <motion.g
                        key={`station-${sequenceKey}-${st.id}`}
                        onClick={() => setSelectedStationId(st.id)}
                        className="cursor-pointer group"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{
                          opacity: isRevealed ? 1 : 0,
                          scale: isRevealed ? 1 : 0.5,
                        }}
                        transition={{ duration: 0.35 }}
                      >
                        {/* Interactive Reticle on Selected */}
                        {isSelected && cartoPhase >= 7 && (
                          <>
                            <motion.circle
                              cx={st.cx}
                              cy={st.cy}
                              r={16}
                              fill="none"
                              stroke={isChennaiHQ ? "#0a1424" : "#e1390f"}
                              strokeWidth="1.5"
                              initial={{ scale: 0.6, opacity: 0.9 }}
                              animate={{ scale: 1.6, opacity: 0 }}
                              transition={{ repeat: Infinity, duration: 1.8 }}
                            />
                            <circle
                              cx={st.cx}
                              cy={st.cy}
                              r={isChennaiHQ ? 10 : 8}
                              fill="none"
                              stroke={isChennaiHQ ? "#0a1424" : "#e1390f"}
                              strokeWidth="1"
                              strokeDasharray="2 2"
                              opacity={0.65}
                            />
                          </>
                        )}

                        {/* Outer Hub Ring */}
                        <circle
                          cx={st.cx}
                          cy={st.cy}
                          r={isChennaiHQ ? 7 : isAirport ? 5 : 4.5}
                          fill={isChennaiHQ ? "#0a1424" : "#ffffff"}
                          stroke={isChennaiHQ ? "#e1390f" : isSelected ? "#e1390f" : "#0a1424"}
                          strokeWidth={isChennaiHQ ? 2.5 : 2}
                          className="transition-transform group-hover:scale-125"
                        />

                        {/* Center Dot */}
                        <circle
                          cx={st.cx}
                          cy={st.cy}
                          r={isChennaiHQ ? 2.5 : 1.8}
                          fill={isChennaiHQ ? "#ffffff" : isSelected ? "#e1390f" : "#0a1424"}
                        />

                        {/* Station Typography Label */}
                        <text
                          x={st.cx + st.labelDx}
                          y={st.cy + st.labelDy}
                          textAnchor={st.labelAnchor}
                          className={`text-[11px] font-sans transition-all duration-300 select-none ${
                            isSelected
                              ? "font-semibold fill-[#0a1424]"
                              : isChennaiHQ
                              ? "font-medium fill-[#0a1424]"
                              : "font-normal fill-slate-700 group-hover:fill-[#0a1424]"
                          }`}
                        >
                          {st.shortLabel}
                        </text>
                      </motion.g>
                    );
                  })}
                </motion.g>
              </svg>
            </div>
          </div>

          {/* Right Column: Architectural Station Detail Dossier */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedStation.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.25 }}
                className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-slate-200/80"
              >
                <div className="text-xs uppercase tracking-widest text-[#e1390f] font-mono mb-2">
                  {selectedStation.region} India &bull; Station
                </div>
                <h3 className="text-3xl sm:text-4xl font-light text-[#0a1424] tracking-tight mb-4">
                  {selectedStation.city}
                </h3>

                <div className="space-y-4 text-sm text-slate-700">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-1">
                      Address
                    </div>
                    <div className="font-normal text-[#0a1424] leading-relaxed">
                      {selectedStation.address}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-1">
                      Gateway
                    </div>
                    <div className="font-medium text-[#0a1424]">
                      {selectedStation.gateways}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500">Board: {selectedStation.phone}</span>
                    <span className="text-slate-500">{selectedStation.email}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Direct Station Selector Pills */}
            <div className="flex flex-wrap gap-2">
              {FREYER_10_STATIONS.map((st) => (
                <button
                  key={st.id}
                  onClick={() => setSelectedStationId(st.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    st.id === selectedStationId
                      ? "bg-[#0a1424] text-white shadow-sm"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-slate-400"
                  }`}
                >
                  {st.shortLabel}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
