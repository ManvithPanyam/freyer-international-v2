"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Phone, Mail, Building, Navigation, ArrowUpRight, Compass } from "lucide-react";
import { HUB_COORDS } from "../home/indiaMapData";

interface StationDetail {
  id: string;
  city: string;
  shortLabel: string;
  stationName: string;
  category: "Operational Hub" | "Corporate Office" | "Air Terminal" | "Seaport Station";
  address: string;
  phone: string;
  email: string;
  keyGateways: string;
  cx: number;
  cy: number;
}

const STATIONS: StationDetail[] = [
  {
    id: "chennai_egmore",
    city: "Chennai",
    shortLabel: "Chennai (Egmore)",
    stationName: "Chennai Central Operational Station",
    category: "Operational Hub",
    address: "TAGA Tower, New No: 45 Old No 20, 1st Floor, Sait Colony, Egmore, Chennai - 600008",
    phone: "+91 44 4319 1919",
    email: "chennai.ops@freyerinternational.com",
    keyGateways: "Chennai Port Trust & Ennore Kamarajar Port",
    cx: 256.84,
    cy: 476.0,
  },
  {
    id: "chennai_airport",
    city: "Chennai",
    shortLabel: "Chennai (Airport)",
    stationName: "Chennai International Air Cargo Station",
    category: "Air Terminal",
    address: "No.2 Ambedkar Street, G.S.T. Road, Meenambakkam, Chennai - 600017",
    phone: "+91 44 4319 1920",
    email: "chennai.air@freyerinternational.com",
    keyGateways: "Chennai International Airport (MAA) Cargo Terminal",
    cx: 256.0,
    cy: 498.0,
  },
  {
    id: "bengaluru",
    city: "Bengaluru",
    shortLabel: "Bengaluru",
    stationName: "Corporate Registered Office",
    category: "Corporate Office",
    address: "No.19, KMJ AVEN, 3rd Floor, Outer Ring Road, Marathahalli, Bengaluru - 560037",
    phone: "+91 80 4120 0300",
    email: "blr.corporate@freyerinternational.com",
    keyGateways: "Kempegowda Int'l Airport (BLR) & Whitefield ICD",
    cx: 204.97,
    cy: 484.96,
  },
  {
    id: "delhi",
    city: "Delhi / NCR",
    shortLabel: "Delhi / NCR",
    stationName: "North India Gateway Station",
    category: "Operational Hub",
    address: "Plot No. 524, 1st Floor, Udyog Vihar Phase 5, Gurugram - 122016",
    phone: "+91 124 406 8388",
    email: "delhi.ops@freyerinternational.com",
    keyGateways: "Indira Gandhi Int'l Airport (DEL) & Tuglakabad ICD",
    cx: 194.13,
    cy: 184.64,
  },
  {
    id: "mumbai",
    city: "Mumbai",
    shortLabel: "Mumbai",
    stationName: "West Coast Maritime Station",
    category: "Operational Hub",
    address: "A-401, Polaris Building, Off Makwana Road, Marol, Andheri (East), Mumbai - 400059",
    phone: "+91 22 4619 1301",
    email: "mumbai.ops@freyerinternational.com",
    keyGateways: "Jawaharlal Nehru Port Trust (JNPT / Nhava Sheva) & BOM Air Cargo",
    cx: 113.61,
    cy: 365.8,
  },
  {
    id: "hyderabad",
    city: "Hyderabad",
    shortLabel: "Hyderabad",
    stationName: "Deccan Regional Station",
    category: "Operational Hub",
    address: "#109, 1st Floor, Ashoka Bhoopal Chambers, S.P. Road, Secunderabad - 500003",
    phone: "+91 40 4856 1797",
    email: "hyd.ops@freyerinternational.com",
    keyGateways: "Rajiv Gandhi Int'l Airport (HYD) & Sanathnagar ICD",
    cx: 222.39,
    cy: 398.35,
  },
  {
    id: "visakhapatnam",
    city: "Visakhapatnam",
    shortLabel: "Visakhapatnam",
    stationName: "East Coast Seaport Station",
    category: "Seaport Station",
    address: "YCN Complex, D.No.58-1-256, NAD X Road, Visakhapatnam - 530009",
    phone: "+91 891 278 4910",
    email: "vizag.ops@freyerinternational.com",
    keyGateways: "Visakhapatnam Port Authority (VPA) & Gangavaram Port",
    cx: 315.68,
    cy: 392.73,
  },
  {
    id: "coimbatore",
    city: "Coimbatore",
    shortLabel: "Coimbatore",
    stationName: "Manufacturing Corridor Station",
    category: "Operational Hub",
    address: "3A, 1264, Mayflower Valencia, 5th Floor, Avinashi Road, Coimbatore - 641004",
    phone: "+91 422 439 1919",
    email: "cbe.ops@freyerinternational.com",
    keyGateways: "Coimbatore Int'l Airport (CJB) & Irugur ICD",
    cx: 192.77,
    cy: 522.74,
  },
  {
    id: "tuticorin",
    city: "Tuticorin",
    shortLabel: "Tuticorin",
    stationName: "Major Maritime Seaport Station",
    category: "Seaport Station",
    address: "J Garden 4A/C, 278, Housing Board RTC Nagar, Tuticorin - 628001",
    phone: "+91 461 234 1919",
    email: "tuticorin.ops@freyerinternational.com",
    keyGateways: "V.O. Chidambaranar Port Trust (VOC / Tuticorin Port)",
    cx: 215.61,
    cy: 565.94,
  },
  {
    id: "ahmedabad",
    city: "Ahmedabad",
    shortLabel: "Ahmedabad",
    stationName: "Gujarat Commercial Station",
    category: "Operational Hub",
    address: "Office No. 220, Flexi Business Hub, Madhur Complex, Navrangpur, Ahmedabad - 380009",
    phone: "+91 79 4891 1919",
    email: "gujarat.ops@freyerinternational.com",
    keyGateways: "Mundra Port, Kandla Port & Ahmedabad Air Cargo",
    cx: 108.19,
    cy: 290.04,
  },
];

export function IndiaNetworkMapExp() {
  const [activeId, setActiveId] = useState<string>("chennai_egmore");
  const activeStation = STATIONS.find((s) => s.id === activeId) || STATIONS[0];

  return (
    <section id="india-network" className="py-24 sm:py-32 bg-[#060f1e] text-white overflow-hidden selection:bg-[#e1390f] selection:text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono tracking-[0.25em] uppercase text-amber-400 mb-4">
            <Compass className="w-3.5 h-3.5" />
            National Logistics Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight">
            10 Stations <br />
            <span className="font-semibold text-white">Across 8 Commercial Cities.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Physical operating stations positioned directly at major industrial corridors, seaport gates,
            and international air cargo terminals throughout India.
          </p>
        </div>

        {/* Interactive Layout: Map + Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Map Artboard Column */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full max-w-[480px] aspect-[600/620] rounded-2xl overflow-hidden border border-white/10 bg-[#040914] p-4 shadow-2xl">
              {/* Satellite / Dark Terrain Base */}
              <Image
                src="/images/india-satellite.webp"
                alt="High-resolution Indian subcontinent cartography"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-center select-none opacity-45 brightness-95"
                priority
              />

              {/* Atmospheric Gradient */}
              <div className="absolute inset-0 bg-radial from-transparent via-[#040914]/40 to-[#040914]/80 pointer-events-none" />

              {/* Vector Navigation Overlay */}
              <svg
                viewBox="0 0 600 620"
                className="absolute inset-0 w-full h-full select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Connecting Inter-Station Vectors (HQ to Branches) */}
                <g stroke="rgba(245, 158, 11, 0.2)" strokeWidth="1" strokeDasharray="3 3">
                  {STATIONS.filter((s) => s.id !== "chennai_egmore").map((s) => (
                    <line
                      key={s.id}
                      x1={256.84}
                      y1={476.0}
                      x2={s.cx}
                      y2={s.cy}
                    />
                  ))}
                </g>

                {/* Station Markers */}
                {STATIONS.map((station) => {
                  const isSelected = station.id === activeId;
                  return (
                    <g
                      key={station.id}
                      onClick={() => setActiveId(station.id)}
                      className="cursor-pointer group"
                      tabIndex={0}
                      role="button"
                      aria-label={`Select ${station.shortLabel}`}
                    >
                      {/* Pulse Wave on Selected */}
                      {isSelected && (
                        <circle
                          cx={station.cx}
                          cy={station.cy}
                          r="14"
                          fill="none"
                          stroke="#f59e0b"
                          strokeWidth="1.5"
                          className="animate-ping opacity-75 origin-center"
                        />
                      )}

                      {/* Tap Hit Target */}
                      <circle cx={station.cx} cy={station.cy} r="18" fill="transparent" />

                      {/* Outer Ring */}
                      <circle
                        cx={station.cx}
                        cy={station.cy}
                        r={isSelected ? "6.5" : "4"}
                        fill={isSelected ? "#e1390f" : "#ffffff"}
                        stroke={isSelected ? "#ffffff" : "#071326"}
                        strokeWidth={isSelected ? "2" : "1"}
                        className="transition-all duration-200 group-hover:scale-125"
                      />

                      {/* Inner Core */}
                      <circle
                        cx={station.cx}
                        cy={station.cy}
                        r={isSelected ? "3" : "1.75"}
                        fill={isSelected ? "#ffffff" : "#e1390f"}
                      />

                      {/* City Label Tag */}
                      <text
                        x={station.cx}
                        y={station.cy - 10}
                        textAnchor="middle"
                        className={`text-[11px] font-mono tracking-wider transition-all pointer-events-none select-none ${
                          isSelected
                            ? "fill-amber-400 font-bold"
                            : "fill-slate-300 font-normal opacity-70 group-hover:opacity-100"
                        }`}
                      >
                        {station.shortLabel}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Hint underneath map */}
            <div className="flex items-center gap-2 mt-4 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Select any station on the map or the directory below</span>
            </div>
          </div>

          {/* Station Dossier Column */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStation.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md"
              >
                {/* Station Tag & City */}
                <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400 block mb-1">
                      {activeStation.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-light text-white">
                      {activeStation.city}
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
                    Station #{STATIONS.findIndex((s) => s.id === activeStation.id) + 1} of 10
                  </span>
                </div>

                {/* Station Name & Physical Address */}
                <div className="mb-6">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-1.5">
                    Operating Facility Address
                  </span>
                  <div className="flex items-start gap-3 bg-white/[0.02] p-4 rounded border border-white/5">
                    <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
                      <strong className="block text-white font-medium mb-1">
                        {activeStation.stationName}
                      </strong>
                      {activeStation.address}
                    </div>
                  </div>
                </div>

                {/* Key Corridors and Gateways */}
                <div className="mb-6">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-1.5">
                    Direct Port & Cargo Gateways
                  </span>
                  <div className="flex items-center gap-3 bg-white/[0.02] p-3.5 rounded border border-white/5">
                    <Navigation className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-sm text-slate-200 font-sans">
                      {activeStation.keyGateways}
                    </span>
                  </div>
                </div>

                {/* Corporate Verified Communications (NO Personal Mobile Numbers) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-slate-300" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">
                        Station Telephone
                      </span>
                      <span className="text-sm font-mono text-white">
                        {activeStation.phone}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-slate-300" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-slate-400 uppercase block">
                        Station Operations Desk
                      </span>
                      <span className="text-xs font-mono text-white truncate block">
                        {activeStation.email}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quick Switcher Horizontal Bar */}
            <div className="mt-6 flex flex-wrap gap-2">
              {STATIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveId(s.id)}
                  className={`text-xs font-mono px-3 py-1.5 rounded transition-all ${
                    s.id === activeId
                      ? "bg-amber-400/20 text-amber-300 border border-amber-400/40"
                      : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white border border-white/5"
                  }`}
                >
                  {s.shortLabel}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
