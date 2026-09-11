"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Building2, Plane, Ship, MapPin } from "lucide-react";

interface StationItem {
  id: string;
  city: string;
  shortLabel: string;
  stationType: string;
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
  revealOrder: number;
}

const STATIONS: StationItem[] = [
  {
    id: "chennai_egmore",
    city: "Chennai (Egmore)",
    shortLabel: "Chennai (Egmore HQ)",
    stationType: "Operational Head Office",
    address: "TAGA Tower, New No: 45 Old No 20, 1st Floor, Sait Colony, Egmore, Chennai - 600008",
    phone: "+91 44 4296 1111",
    email: "info@freyerinternational.com",
    gateways: "Chennai Port Trust & Ennore Kamarajar Port",
    cx: 256.84,
    cy: 476.0,
    labelAnchor: "start",
    labelDx: 14,
    labelDy: -2,
    region: "South",
    revealOrder: 1,
  },
  {
    id: "chennai_airport",
    city: "Chennai (Airport)",
    shortLabel: "Chennai (Airport Station)",
    stationType: "Air Cargo Terminal Station",
    address: "No.2 Ambedkar Street, G.S.T. Road, Meenambakkam, Chennai - 600017",
    phone: "+91 44 4296 1111",
    email: "info@freyerinternational.com",
    gateways: "Chennai International Airport (MAA) Cargo Terminal",
    cx: 256.0,
    cy: 498.0,
    labelAnchor: "start",
    labelDx: 14,
    labelDy: 16,
    region: "South",
    revealOrder: 2,
  },
  {
    id: "bengaluru",
    city: "Bengaluru",
    shortLabel: "Bengaluru",
    stationType: "Corporate Registered Office",
    address: "No.19, KMJ AVEN, 3rd Floor, Outer Ring Road, Marathahalli, Bengaluru - 560037",
    phone: "+91 80 4120 0300",
    email: "info@freyerinternational.com",
    gateways: "Kempegowda International Airport (BLR) & Whitefield ICD",
    cx: 204.97,
    cy: 484.96,
    labelAnchor: "end",
    labelDx: -14,
    labelDy: 4,
    region: "South",
    revealOrder: 3,
  },
  {
    id: "coimbatore",
    city: "Coimbatore",
    shortLabel: "Coimbatore",
    stationType: "Industrial Corridor Station",
    address: "3A, 1264, Mayflower Valencia, 5th Floor, Krisan Workspaces, Avinashi Road, Nava India, Coimbatore - 641004",
    phone: "+91 422 439 1919",
    email: "info@freyerinternational.com",
    gateways: "Coimbatore International Airport (CJB) & Irugur ICD",
    cx: 195.0,
    cy: 520.0,
    labelAnchor: "end",
    labelDx: -14,
    labelDy: 8,
    region: "South",
    revealOrder: 4,
  },
  {
    id: "tuticorin",
    city: "Tuticorin",
    shortLabel: "Tuticorin",
    stationType: "Deepwater Maritime Station",
    address: "J Garden 4A/C, 278, Housing Board RTC Nagar, Tuticorin - 628001",
    phone: "+91 461 400 1919",
    email: "info@freyerinternational.com",
    gateways: "V.O. Chidambaranar Port Trust (VOC)",
    cx: 205.0,
    cy: 558.0,
    labelAnchor: "end",
    labelDx: -14,
    labelDy: 10,
    region: "South",
    revealOrder: 5,
  },
  {
    id: "mumbai",
    city: "Mumbai",
    shortLabel: "Mumbai",
    stationType: "West Coast Maritime Station",
    address: "A-401, Polaris Building, Off Makwana Road, Marol, Andheri (East), Mumbai - 400059",
    phone: "+91 22 4619 1301",
    email: "info@freyerinternational.com",
    gateways: "Jawaharlal Nehru Port Trust (JNPT / Nhava Sheva) & BOM Air Cargo",
    cx: 113.61,
    cy: 365.8,
    labelAnchor: "end",
    labelDx: -14,
    labelDy: 4,
    region: "West",
    revealOrder: 6,
  },
  {
    id: "ahmedabad",
    city: "Ahmedabad",
    shortLabel: "Ahmedabad",
    stationType: "Gujarat Commercial Station",
    address: "Office No. 220, Flexi Business HUB, 2nd Floor, Madhur Complex, Near Stadium Cross Road, Navrangpur, Ahmedabad - 380009",
    phone: "+91 79 4891 1919",
    email: "info@freyerinternational.com",
    gateways: "Mundra Port (INMUN), Kandla Port & Khodiyar ICD",
    cx: 108.19,
    cy: 290.04,
    labelAnchor: "end",
    labelDx: -14,
    labelDy: -6,
    region: "West",
    revealOrder: 7,
  },
  {
    id: "delhi",
    city: "Delhi / NCR",
    shortLabel: "Delhi / NCR",
    stationType: "North India Gateway Station",
    address: "Plot No. 524, 1st Floor, Udyog Vihar Phase 5, Gurugram - 122016",
    phone: "+91 124 406 8388",
    email: "info@freyerinternational.com",
    gateways: "Indira Gandhi International Airport (DEL) & Tuglakabad ICD",
    cx: 194.13,
    cy: 184.64,
    labelAnchor: "middle",
    labelDx: 0,
    labelDy: -14,
    region: "North",
    revealOrder: 8,
  },
  {
    id: "visakhapatnam",
    city: "Visakhapatnam",
    shortLabel: "Visakhapatnam",
    stationType: "East Coast Seaport Station",
    address: "YCN Complex, D.No.58-1-256, NAD X Road, Visakhapatnam - 530009",
    phone: "+91 891 278 4910",
    email: "info@freyerinternational.com",
    gateways: "Visakhapatnam Port Authority (VPA) & Gangavaram Port",
    cx: 315.68,
    cy: 392.73,
    labelAnchor: "start",
    labelDx: 14,
    labelDy: 4,
    region: "East",
    revealOrder: 9,
  },
  {
    id: "hyderabad",
    city: "Hyderabad",
    shortLabel: "Hyderabad",
    stationType: "Air Cargo & Pharma Hub",
    address: "#109, 1st Floor, Ashoka Bhoopal Chambers, S.P. Road, Secunderabad - 500003",
    phone: "+91 40 4010 1919",
    email: "info@freyerinternational.com",
    gateways: "Rajiv Gandhi International Airport (HYD) & Sanathnagar ICD",
    cx: 215.0,
    cy: 395.0,
    labelAnchor: "start",
    labelDx: 14,
    labelDy: 4,
    region: "South",
    revealOrder: 10,
  },
];

// Verified domestic connectivity corridors
const CORRIDORS = [
  { from: [256.84, 476.0], to: [204.97, 484.96] }, // Chennai to Bengaluru
  { from: [256.84, 476.0], to: [195.0, 520.0] },   // Chennai to Coimbatore
  { from: [256.84, 476.0], to: [205.0, 558.0] },   // Chennai to Tuticorin
  { from: [256.84, 476.0], to: [215.0, 395.0] },   // Chennai to Hyderabad
  { from: [215.0, 395.0], to: [113.61, 365.8] },   // Hyderabad to Mumbai
  { from: [113.61, 365.8], to: [108.19, 290.04] }, // Mumbai to Ahmedabad
  { from: [215.0, 395.0], to: [194.13, 184.64] },  // Hyderabad to Delhi
  { from: [215.0, 395.0], to: [315.68, 392.73] },  // Hyderabad to Visakhapatnam
];

export function ContinuousNetwork() {
  const [selectedStationId, setSelectedStationId] = useState<string>("chennai_egmore");
  const selectedStation =
    STATIONS.find((s) => s.id === selectedStationId) || STATIONS[0];

  return (
    <section
      id="network-scene"
      className="relative pt-12 pb-24 sm:pb-36 bg-[#f6f5f1] text-[#0a1424] selection:bg-[#0a1424] selection:text-white transition-colors duration-700"
    >
      {/* Top Entrance Arterial Route Line (connecting seamlessly from Hero) */}
      <div className="w-full flex justify-center mb-10">
        <div className="w-[1.5px] h-14 bg-gradient-to-b from-[#e1390f] to-slate-400" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Simple Source Title: Massive & Architectural */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-slate-300">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#e1390f] font-mono mb-2">
              Locations
            </div>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-[#0a1424] leading-[0.92]">
              10 Stations
            </h2>
          </div>

          <div className="text-sm sm:text-base text-slate-600 font-light max-w-sm">
            Operational network across ocean ports, air terminals, and inland distribution corridors.
          </div>
        </div>

        {/* Master Spatial Stage: Vector Map on Left, Station Details on Right */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Map Column */}
          <div className="lg:col-span-7 relative">
            <div className="relative w-full aspect-[4/5] max-w-[560px] mx-auto bg-white/80 rounded-3xl p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.05)] border border-slate-200/80">
              <svg
                viewBox="0 0 450 620"
                className="w-full h-full overflow-visible select-none"
              >
                {/* Continental Vector Path */}
                <path
                  d="M 185 85 L 210 110 L 225 100 L 250 120 L 245 140 L 270 150 L 310 160 L 350 170 L 390 180 L 380 200 L 350 215 L 340 235 L 320 245 L 345 270 L 340 310 L 315 330 L 290 380 L 280 430 L 265 470 L 250 515 L 230 550 L 215 575 L 205 585 L 195 565 L 185 520 L 175 480 L 160 440 L 140 400 L 115 370 L 80 340 L 50 300 L 55 270 L 75 255 L 105 240 L 130 220 L 155 190 L 170 140 Z"
                  fill="#f2f4f8"
                  stroke="#cbd5e1"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />

                {/* Animated Connectivity Corridors */}
                {CORRIDORS.map((c, i) => (
                  <motion.line
                    key={i}
                    x1={c.from[0]}
                    y1={c.from[1]}
                    x2={c.to[0]}
                    y2={c.to[1]}
                    stroke="#e1390f"
                    strokeWidth="1.3"
                    strokeDasharray="4 3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.75 }}
                    transition={{ duration: 1.2, delay: i * 0.12, ease: "easeOut" }}
                  />
                ))}

                {/* Chennai Leader Lines (HQ vs Airport) */}
                <g>
                  <line
                    x1="256.84"
                    y1="476.0"
                    x2="280.0"
                    y2="472.0"
                    stroke="#0a1424"
                    strokeWidth="1.2"
                  />
                  <line
                    x1="256.0"
                    y1="498.0"
                    x2="280.0"
                    y2="502.0"
                    stroke="#e1390f"
                    strokeWidth="1.2"
                  />
                </g>

                {/* Station Nodes */}
                {STATIONS.map((st) => {
                  const isSelected = st.id === selectedStationId;
                  const isChennaiHQ = st.id === "chennai_egmore";
                  const isAirport = st.id === "chennai_airport";

                  return (
                    <g
                      key={st.id}
                      onClick={() => setSelectedStationId(st.id)}
                      className="cursor-pointer group"
                    >
                      {/* Interactive Pulse on Selected */}
                      {isSelected && (
                        <motion.circle
                          cx={st.cx}
                          cy={st.cy}
                          r={13}
                          fill="none"
                          stroke={isChennaiHQ ? "#0a1424" : "#e1390f"}
                          strokeWidth="1.6"
                          initial={{ scale: 0.6, opacity: 0.8 }}
                          animate={{ scale: 1.6, opacity: 0 }}
                          transition={{ repeat: Infinity, duration: 1.8 }}
                        />
                      )}

                      {/* Station Core Node */}
                      <circle
                        cx={st.cx}
                        cy={st.cy}
                        r={isChennaiHQ ? 6.5 : 4.5}
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
                        className="transition-transform group-hover:scale-125"
                      />

                      {/* Station Typographic Label */}
                      <text
                        x={
                          isChennaiHQ || isAirport
                            ? 286
                            : st.cx + st.labelDx
                        }
                        y={
                          isChennaiHQ
                            ? 475
                            : isAirport
                            ? 505
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
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Station Details Context Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedStation.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.05)] border border-slate-200/80"
              >
                <div className="text-xs uppercase tracking-widest text-[#e1390f] font-mono mb-2">
                  {selectedStation.region} India &bull; {selectedStation.stationType}
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
              {STATIONS.map((st) => (
                <button
                  key={st.id}
                  onClick={() => setSelectedStationId(st.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    st.id === selectedStationId
                      ? "bg-[#0a1424] text-white"
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

      {/* Outgoing Transition Route Line (network → route → cargo) */}
      <div className="w-full flex justify-center mt-16 sm:mt-24 pointer-events-none">
        <div className="w-[1.5px] h-20 bg-gradient-to-b from-slate-400 via-[#e1390f] to-[#040912]" />
      </div>
    </section>
  );
}
