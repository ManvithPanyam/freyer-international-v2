"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { MapPin, Phone, Mail, Building2, Compass, ArrowRight, ExternalLink } from "lucide-react";

export interface StationData {
  id: number;
  name: string;
  displayName: string;
  address: string;
  phone: string | null;
  mobile: string | null;
  email: string;
  region: "South India" | "North India" | "West India";
  isHQ?: boolean;
  gateways: string;
  // SVG coordinates on 600x650 map canvas
  cx: number;
  cy: number;
}

export const VERIFIED_STATIONS: StationData[] = [
  {
    id: 2,
    name: "Chennai",
    displayName: "Chennai (Egmore HQ)",
    address: "TAGA Tower New No: 45 Old No 20, 1st Floor, 2nd Street, Sait Colony, Egmore, Chennai-600008.",
    phone: "+91 44 43191919",
    mobile: "+91 95000 67831",
    email: "Selvakumar@freyerinternational.com",
    region: "South India",
    isHQ: true,
    gateways: "Chennai Seaport (INMAA1) & Chennai Air Cargo Terminal",
    cx: 295,
    cy: 485
  },
  {
    id: 3,
    name: "Chennai Airport Office",
    displayName: "Chennai (Air Cargo Hub)",
    address: "No.2 Ambedkar Street, G.S.T. Road, Meenambakkam, Chennai-600017.",
    phone: null,
    mobile: "+91 96000 41033",
    email: "selvakumar@freyerinternational.com",
    region: "South India",
    gateways: "MAA Air Cargo Complex Gateway Dedicated Desk",
    cx: 292,
    cy: 497
  },
  {
    id: 1,
    name: "Bengaluru",
    displayName: "Bengaluru",
    address: "No.19, KMJ AVEN, 3rd Floor, Outer Ring Road, Marathahalli, Bengaluru-560037.",
    phone: "080 4120 0300",
    mobile: "+91 9740220069",
    email: "Vijay.Palagiri@freyerinternational.com",
    region: "South India",
    gateways: "Kempegowda Int'l Cargo (BLR) & Whitefield ICD",
    cx: 250,
    cy: 490
  },
  {
    id: 6,
    name: "Hyderabad",
    displayName: "Hyderabad",
    address: "#109, 1st Floor, Ashoka Bhoopal Chambers, S.P. Road, Secunderbad-500 003, Telangana.",
    phone: "040-48561797",
    mobile: "+91 97402 20069",
    email: "Vijay.Palagiri@freyerinternational.com",
    region: "South India",
    gateways: "RGIA Cargo (HYD) & Sanathnagar ICD",
    cx: 265,
    cy: 410
  },
  {
    id: 4,
    name: "Delhi",
    displayName: "Delhi / NCR",
    address: "Plot No. 524, First Floor, Udyog Vihar Phase 5, Gurugram - 122016, Haryana.",
    phone: "0124-4068388",
    mobile: "+91 98846 60410",
    email: "info@freyerinternational.com",
    region: "North India",
    gateways: "IGI Airport Cargo (DEL) & TKD ICD Tughlakabad",
    cx: 235,
    cy: 220
  },
  {
    id: 5,
    name: "Mumbai",
    displayName: "Mumbai",
    address: "A - 401, Polaris Building, Off Makwana Road, Marol, Andheri (East), Mumbai - 400 059.",
    phone: "022-46191301",
    mobile: null,
    email: "raju.jamdar@freyerinternational.com",
    region: "West India",
    gateways: "Nhava Sheva (JNPT) & Mumbai Air Cargo (BOM)",
    cx: 175,
    cy: 395
  },
  {
    id: 10,
    name: "Ahmedabad",
    displayName: "Ahmedabad",
    address: "Office No. 220, Flexi Business HUB, 2nd Floor, Madhur Complex, Navrangpur, Ahmedabad - 380009.",
    phone: null,
    mobile: "+91 98214 65939",
    email: "raju.jamdar@freyerinternational.com",
    region: "West India",
    gateways: "Mundra Port Connector, Kandla & Ahmedabad Air Cargo",
    cx: 165,
    cy: 325
  },
  {
    id: 7,
    name: "Visakhapatnam",
    displayName: "Visakhapatnam",
    address: "YCN Complex, D.No.58-1-256, NAD X Road, Visakhapatnam, Andhra Pradesh - 530009.",
    phone: "+91 97402 20069",
    mobile: null,
    email: "Vijay.Palagiri@freyerinternational.com",
    region: "South India",
    gateways: "Visakhapatnam Port (INVTZ1) & Gangavaram",
    cx: 350,
    cy: 420
  },
  {
    id: 8,
    name: "Coimbatore",
    displayName: "Coimbatore",
    address: "3A, 1264, Mayflower Valencia, 5th Floor, Avinashi Road, Nava India, Coimbatore - 641004.",
    phone: null,
    mobile: "+91 9962541554",
    email: "shivakumar.ps@freyerinternational.com",
    region: "South India",
    gateways: "Coimbatore ICD & Irugur Rail Freight Connector",
    cx: 240,
    cy: 535
  },
  {
    id: 9,
    name: "Tuticorin",
    displayName: "Tuticorin",
    address: "J GARDEN 4A/C, 278, Housing Board RTC Nagar, Tuticorin - 628001.",
    phone: null,
    mobile: "+91 87544 46077",
    email: "donald@freyerinternational.com",
    region: "South India",
    gateways: "V.O. Chidambaranar Port (Tuticorin Port - INTUT1)",
    cx: 245,
    cy: 575
  }
];

export function CartographicTerminalExperiment() {
  const [selectedStationId, setSelectedStationId] = useState<number>(2); // Default to Chennai HQ
  const shouldReduceMotion = useReducedMotion();

  const selectedStation = VERIFIED_STATIONS.find(s => s.id === selectedStationId) || VERIFIED_STATIONS[0];
  const hqStation = VERIFIED_STATIONS.find(s => s.isHQ) || VERIFIED_STATIONS[0];

  return (
    <section id="cartographic-experiment" className="relative bg-[#07152b] text-white py-16 sm:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#e1390f]">
              Experiment 03 &bull; Cartographic Authority
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-2">
              THE INDIA OPERATIONAL TERMINAL
            </h2>
          </div>
          <div className="text-sm text-slate-400 font-light max-w-md">
            10 verified operating stations spanning strategic coastal ports, inland ICDs, and air freight complexes. Governed from Chennai Egmore.
          </div>
        </div>

        {/* Quick Region / City Filters for Rapid Wayfinding */}
        <div className="flex flex-wrap items-center gap-2 pt-6 pb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-400 mr-2">Select Station:</span>
          {VERIFIED_STATIONS.map(st => (
            <button
              key={st.id}
              onClick={() => setSelectedStationId(st.id)}
              className={`px-3 py-1.5 rounded text-xs font-mono transition flex items-center gap-1.5 ${
                selectedStationId === st.id
                  ? "bg-[#e1390f] text-white font-bold shadow-md shadow-[#e1390f]/30"
                  : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
              }`}
            >
              {st.isHQ && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
              <span>{st.name}</span>
            </button>
          ))}
        </div>

        {/* The Cartographic Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#050b14] rounded-xl border border-white/10 p-6 sm:p-8">
          {/* Map Vector Stage */}
          <div className="lg:col-span-7 relative flex justify-center items-center overflow-hidden py-4">
            <svg
              viewBox="0 0 520 620"
              className="w-full max-w-[440px] sm:max-w-[480px] h-auto drop-shadow-2xl select-none"
            >
              {/* Subtle Maritime Latitude/Longitude Grid Lines */}
              <defs>
                <linearGradient id="corridorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#e1390f" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {/* Geographic Indian Subcontinent Silhouette Path (Accurate, Unclipped) */}
              <path
                d="M 180,45 L 210,35 L 250,55 L 280,75 L 300,105 L 285,140 L 260,170 L 290,195 L 330,190 L 370,225 L 360,260 L 390,285 L 430,280 L 460,310 L 440,335 L 380,335 L 350,370 L 370,410 L 335,465 L 305,520 L 265,585 L 245,600 L 225,580 L 205,530 L 175,470 L 155,410 L 140,350 L 115,310 L 110,270 L 140,240 L 165,190 L 150,140 L 180,85 Z"
                fill="#0b1728"
                stroke="#1e3a63"
                strokeWidth="1.5"
                className="transition-colors duration-300"
              />

              {/* Verified Internal Regional Divisions */}
              <path
                d="M 140,350 Q 230,350 360,340 M 175,470 Q 260,460 335,465"
                fill="none"
                stroke="#172e4f"
                strokeWidth="1"
                strokeDasharray="3 3"
              />

              {/* Connection Corridor Arcs from Chennai HQ to Active Stations */}
              {VERIFIED_STATIONS.filter(s => s.id !== hqStation.id).map(st => {
                const isCurrent = st.id === selectedStationId;
                return (
                  <path
                    key={`corridor-${st.id}`}
                    d={`M ${hqStation.cx} ${hqStation.cy} Q ${(hqStation.cx + st.cx)/2 + 20} ${(hqStation.cy + st.cy)/2 - 15} ${st.cx} ${st.cy}`}
                    fill="none"
                    stroke={isCurrent ? "#e1390f" : "#22416b"}
                    strokeWidth={isCurrent ? "2.5" : "1"}
                    strokeDasharray={isCurrent ? "none" : "3 3"}
                    opacity={isCurrent ? 1 : 0.45}
                    className="transition-all duration-300"
                  />
                );
              })}

              {/* Operational Station Pins */}
              {VERIFIED_STATIONS.map(st => {
                const isSelected = st.id === selectedStationId;
                return (
                  <g
                    key={st.id}
                    onClick={() => setSelectedStationId(st.id)}
                    className="cursor-pointer group"
                  >
                    {/* HQ Special Radiant Marker */}
                    {st.isHQ && (
                      <circle
                        cx={st.cx}
                        cy={st.cy}
                        r="14"
                        fill="#e1390f"
                        fillOpacity="0.2"
                        className="animate-pulse"
                      />
                    )}

                    {/* Selection Beacon Ring */}
                    {isSelected && (
                      <circle
                        cx={st.cx}
                        cy={st.cy}
                        r="9"
                        fill="none"
                        stroke="#e1390f"
                        strokeWidth="2"
                      />
                    )}

                    {/* Core Pin */}
                    <circle
                      cx={st.cx}
                      cy={st.cy}
                      r={st.isHQ ? "5" : isSelected ? "4.5" : "3"}
                      fill={st.isHQ ? "#e1390f" : isSelected ? "#ffffff" : "#94a3b8"}
                      stroke="#07152b"
                      strokeWidth="1.5"
                    />

                    {/* Station Text Label */}
                    <text
                      x={st.cx + 8}
                      y={st.cy + 3}
                      fontSize="10"
                      fontFamily="monospace"
                      fontWeight={isSelected || st.isHQ ? "bold" : "normal"}
                      fill={isSelected ? "#ffffff" : st.isHQ ? "#e1390f" : "#94a3b8"}
                      className="pointer-events-none select-none transition-colors"
                    >
                      {st.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Station Telemetry & Physical Contact Plate */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedStation.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
                transition={{ duration: 0.2 }}
                className="bg-[#0b1728] p-6 sm:p-7 rounded-xl border border-white/15 space-y-5 shadow-xl"
              >
                <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-4">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#e1390f]">
                      {selectedStation.region} &bull; Operating Station #{selectedStation.id}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      {selectedStation.displayName}
                    </h3>
                  </div>
                  {selectedStation.isHQ && (
                    <span className="rounded bg-[#e1390f]/20 border border-[#e1390f] text-[#e1390f] px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider">
                      National HQ
                    </span>
                  )}
                </div>

                {/* Verified Physical Address */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>Registered Office Address</span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed font-light pl-5">
                    {selectedStation.address}
                  </p>
                </div>

                {/* Gateway Connectivity */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#e1390f]" />
                    <span>Strategic Gateway Connectivity</span>
                  </div>
                  <p className="text-xs text-amber-300/90 font-mono pl-5">
                    {selectedStation.gateways}
                  </p>
                </div>

                {/* Immediate Direct Contact Pathways */}
                <div className="pt-2 border-t border-white/10 space-y-2.5 text-xs">
                  {selectedStation.phone && (
                    <div className="flex items-center gap-2 text-slate-300">
                      <Phone className="w-3.5 h-3.5 text-[#e1390f]" />
                      <span className="font-mono text-white font-medium">{selectedStation.phone}</span>
                    </div>
                  )}
                  {selectedStation.mobile && (
                    <div className="flex items-center gap-2 text-slate-300">
                      <Phone className="w-3.5 h-3.5 text-slate-400" />
                      <span className="font-mono text-white">{selectedStation.mobile}</span>
                      <span className="text-[10px] text-slate-400 font-mono">(Direct Mobile)</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-slate-300">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span className="font-mono text-slate-300 truncate">{selectedStation.email}</span>
                  </div>
                </div>

                {/* Direct Action Button */}
                <div className="pt-2">
                  <a
                    href={`mailto:${selectedStation.email}?subject=Rate Inquiry - ${selectedStation.displayName}`}
                    className="w-full inline-flex items-center justify-center gap-2 rounded bg-white/10 hover:bg-white/15 border border-white/20 text-white py-2.5 text-xs font-semibold tracking-wider uppercase font-mono transition"
                  >
                    <span>Dispatch Inbound Inquiry</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
