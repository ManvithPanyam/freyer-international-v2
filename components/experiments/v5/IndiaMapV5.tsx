"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

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
  revealTier: 1 | 2 | 3; // 1: Chennai, 2: South/Central, 3: West/North
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
  const selectedStation =
    FREYER_10_STATIONS.find((s) => s.id === selectedStationId) || FREYER_10_STATIONS[0];

  // Subtle pan/zoom focus offset relative to center of map (225, 310)
  const targetX = 225 - (selectedStation.cx - 225) * 0.18;
  const targetY = 310 - (selectedStation.cy - 310) * 0.18;

  return (
    <section
      id="network-scene"
      className="relative py-20 sm:py-28 bg-[#f6f5f1] text-[#0a1424] selection:bg-[#0a1424] selection:text-white transition-colors duration-700"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-slate-300 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#e1390f] font-mono mb-2">
              Locations
            </div>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-[#0a1424] leading-[0.92]">
              10 Stations
            </h2>
          </div>

          <div className="text-sm sm:text-base text-slate-600 font-light max-w-sm">
            10 stations across 8 cities in India &bull; Ocean ports, air terminals, and inland corridors.
          </div>
        </div>

        {/* Master Cartographic Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Geographic SVG Map Column */}
          <div className="lg:col-span-7 relative">
            <div className="relative w-full aspect-[4/4.5] max-w-[560px] mx-auto bg-white/95 rounded-3xl p-4 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-200">
              <svg
                viewBox="0 0 450 620"
                className="w-full h-full overflow-visible select-none"
              >
                {/* Geographic Transform Group with Subtle Pan & Zoom */}
                <motion.g
                  animate={{
                    x: (targetX - 225) * 0.5,
                    y: (targetY - 310) * 0.5,
                    scale: 1.03,
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: "225px 310px" }}
                >
                  {/* Subtle India Geographic Vector Silhouette with Peninsular & Coastal Curves */}
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
                    fill="#edf0f5"
                    stroke="#cbd5e1"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Coastline Definition & Bay of Bengal / Arabian Sea Coastal Lines */}
                  <motion.path
                    d="M 54 292 C 72 308, 98 335, 114 370 C 138 412, 166 462, 182 520 C 196 558, 208 586, 214 586 C 228 565, 246 524, 260 480 C 275 432, 294 380, 318 340 C 334 316, 342 290, 336 270"
                    fill="none"
                    stroke="#94a3b8"
                    strokeWidth="1.2"
                    strokeDasharray="3 2"
                    initial={{ opacity: 0.6 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Sri Lanka Reference Outline */}
                  <motion.path
                    d="M 235 580 C 242 585, 246 595, 242 602 C 238 608, 230 605, 228 596 C 226 588, 230 582, 235 580 Z"
                    fill="#f1f5f9"
                    stroke="#cbd5e1"
                    strokeWidth="1"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 0.7 }}
                  />

                  {/* Domestic Connecting Corridors */}
                  {DOMESTIC_CORRIDORS.map((c, i) => (
                    <motion.line
                      key={i}
                      x1={c.from[0]}
                      y1={c.from[1]}
                      x2={c.to[0]}
                      y2={c.to[1]}
                      stroke="#e1390f"
                      strokeWidth="1.3"
                      strokeDasharray="4 3"
                      initial={{ opacity: 0.4 }}
                      animate={{ opacity: 0.75 }}
                      transition={{ duration: 0.5 }}
                    />
                  ))}

                  {/* Chennai Leader Lines */}
                  <g>
                    <line
                      x1="260"
                      y1="480"
                      x2="282"
                      y2="476"
                      stroke="#0a1424"
                      strokeWidth="1.2"
                    />
                    <line
                      x1="258"
                      y1="504"
                      x2="282"
                      y2="508"
                      stroke="#e1390f"
                      strokeWidth="1.2"
                    />
                  </g>

                  {/* The 10 Verified Station Nodes */}
                  {FREYER_10_STATIONS.map((st) => {
                    const isSelected = st.id === selectedStationId;
                    const isChennaiHQ = st.id === "chennai_egmore";
                    const isAirport = st.id === "chennai_airport";

                    const tierDelay =
                      st.revealTier === 1
                        ? 0.1
                        : st.revealTier === 2
                        ? 0.3
                        : 0.5;

                    return (
                      <motion.g
                        key={st.id}
                        onClick={() => setSelectedStationId(st.id)}
                        className="cursor-pointer group"
                        initial={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        {/* Interactive Radial Radar Pulse & Reticle on Selected */}
                        {isSelected && (
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

                        {/* Station Pin Core */}
                        <circle
                          cx={st.cx}
                          cy={st.cy}
                          r={isSelected ? (isChennaiHQ ? 8 : 6) : (isChennaiHQ ? 6.5 : 4.5)}
                          fill={
                            isSelected
                              ? isChennaiHQ
                                ? "#0a1424"
                                : "#e1390f"
                              : isChennaiHQ
                              ? "#0a1424"
                              : "#475569"
                          }
                          stroke="#ffffff"
                          strokeWidth="2"
                          className="transition-all duration-300 group-hover:scale-125"
                        />

                        {/* Typographic Label */}
                        <text
                          x={
                            isChennaiHQ || isAirport
                              ? 288
                              : st.cx + st.labelDx
                          }
                          y={
                            isChennaiHQ
                              ? 479
                              : isAirport
                              ? 511
                              : st.cy + st.labelDy
                          }
                          textAnchor={
                            isChennaiHQ || isAirport
                              ? "start"
                              : st.labelAnchor
                          }
                          className={`text-[11px] select-none font-sans ${
                            isSelected
                              ? "fill-[#0a1424] font-semibold"
                              : "fill-slate-600 font-normal group-hover:fill-[#0a1424]"
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

          {/* Station Details Context Card: Clean, Source-Only Verified Fields */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedStation.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-3xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.05)] border border-slate-200/80"
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
