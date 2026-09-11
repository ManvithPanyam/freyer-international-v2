"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

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
}

const STATIONS: StationItem[] = [
  {
    id: "chennai_egmore",
    city: "Chennai (Egmore)",
    shortLabel: "Chennai (Egmore HQ)",
    stationType: "Operational Head Office",
    address: "TAGA Tower, New No: 45 Old No 20, 1st Floor, Sait Colony, Egmore, Chennai - 600008",
    phone: "+91 44 4319 1919",
    email: "chennai.ops@freyerinternational.com",
    gateways: "Chennai Port Trust & Ennore Kamarajar Port",
    cx: 256.84,
    cy: 476.0,
    labelAnchor: "start",
    labelDx: 14,
    labelDy: -2,
  },
  {
    id: "chennai_airport",
    city: "Chennai (Airport)",
    shortLabel: "Chennai (Airport Station)",
    stationType: "Air Cargo Terminal Station",
    address: "No.2 Ambedkar Street, G.S.T. Road, Meenambakkam, Chennai - 600017",
    phone: "+91 44 4319 1920",
    email: "chennai.air@freyerinternational.com",
    gateways: "Chennai International Airport (MAA) Cargo Terminal",
    cx: 256.0,
    cy: 498.0,
    labelAnchor: "start",
    labelDx: 14,
    labelDy: 16,
  },
  {
    id: "bengaluru",
    city: "Bengaluru",
    shortLabel: "Bengaluru",
    stationType: "Corporate Registered Office",
    address: "No.19, KMJ AVEN, 3rd Floor, Outer Ring Road, Marathahalli, Bengaluru - 560037",
    phone: "+91 80 4120 0300",
    email: "blr.corporate@freyerinternational.com",
    gateways: "Kempegowda International Airport (BLR) & Whitefield ICD",
    cx: 204.97,
    cy: 484.96,
    labelAnchor: "end",
    labelDx: -14,
    labelDy: 4,
  },
  {
    id: "delhi",
    city: "Delhi / NCR",
    shortLabel: "Delhi / NCR",
    stationType: "North India Gateway Station",
    address: "Plot No. 524, 1st Floor, Udyog Vihar Phase 5, Gurugram - 122016",
    phone: "+91 124 406 8388",
    email: "delhi.ops@freyerinternational.com",
    gateways: "Indira Gandhi International Airport (DEL) & Tuglakabad ICD",
    cx: 194.13,
    cy: 184.64,
    labelAnchor: "middle",
    labelDx: 0,
    labelDy: -14,
  },
  {
    id: "mumbai",
    city: "Mumbai",
    shortLabel: "Mumbai",
    stationType: "West Coast Maritime Station",
    address: "A-401, Polaris Building, Off Makwana Road, Marol, Andheri (East), Mumbai - 400059",
    phone: "+91 22 4619 1301",
    email: "mumbai.ops@freyerinternational.com",
    gateways: "Jawaharlal Nehru Port Trust (JNPT / Nhava Sheva) & BOM Air Cargo",
    cx: 113.61,
    cy: 365.8,
    labelAnchor: "end",
    labelDx: -14,
    labelDy: 4,
  },
  {
    id: "hyderabad",
    city: "Hyderabad",
    shortLabel: "Hyderabad",
    stationType: "Deccan Regional Station",
    address: "#109, 1st Floor, Ashoka Bhoopal Chambers, S.P. Road, Secunderabad - 500003",
    phone: "+91 40 4856 1797",
    email: "hyd.ops@freyerinternational.com",
    gateways: "Rajiv Gandhi International Airport (HYD) & Sanathnagar ICD",
    cx: 222.39,
    cy: 398.35,
    labelAnchor: "start",
    labelDx: 14,
    labelDy: 4,
  },
  {
    id: "visakhapatnam",
    city: "Visakhapatnam",
    shortLabel: "Visakhapatnam",
    stationType: "East Coast Seaport Station",
    address: "YCN Complex, D.No.58-1-256, NAD X Road, Visakhapatnam - 530009",
    phone: "+91 891 278 4910",
    email: "vizag.ops@freyerinternational.com",
    gateways: "Visakhapatnam Port Authority (VPA) & Gangavaram Port",
    cx: 315.68,
    cy: 392.73,
    labelAnchor: "start",
    labelDx: 14,
    labelDy: 4,
  },
  {
    id: "coimbatore",
    city: "Coimbatore",
    shortLabel: "Coimbatore",
    stationType: "Manufacturing Corridor Station",
    address: "3A, 1264, Mayflower Valencia, 5th Floor, Avinashi Road, Coimbatore - 641004",
    phone: "+91 422 439 1919",
    email: "cbe.ops@freyerinternational.com",
    gateways: "Coimbatore International Airport (CJB) & Irugur ICD",
    cx: 192.77,
    cy: 522.74,
    labelAnchor: "end",
    labelDx: -14,
    labelDy: 4,
  },
  {
    id: "tuticorin",
    city: "Tuticorin",
    shortLabel: "Tuticorin",
    stationType: "Major Maritime Seaport Station",
    address: "J Garden 4A/C, 278, Housing Board RTC Nagar, Tuticorin - 628001",
    phone: "+91 461 234 1919",
    email: "tuticorin.ops@freyerinternational.com",
    gateways: "V.O. Chidambaranar Port Trust (VOC / Tuticorin Port)",
    cx: 215.61,
    cy: 565.94,
    labelAnchor: "middle",
    labelDx: 0,
    labelDy: 20,
  },
  {
    id: "ahmedabad",
    city: "Ahmedabad",
    shortLabel: "Ahmedabad",
    stationType: "Gujarat Commercial Station",
    address: "Office No. 220, Flexi Business Hub, Madhur Complex, Navrangpur, Ahmedabad - 380009",
    phone: "+91 79 4891 1919",
    email: "gujarat.ops@freyerinternational.com",
    gateways: "Mundra Port, Kandla Port & Ahmedabad Air Cargo",
    cx: 108.19,
    cy: 290.04,
    labelAnchor: "end",
    labelDx: -14,
    labelDy: 4,
  },
];

export function EditorialNetwork() {
  const [activeId, setActiveId] = useState<string>("chennai_egmore");
  const activeStation = STATIONS.find((s) => s.id === activeId) || STATIONS[0];

  return (
    <section id="network-section" className="py-24 sm:py-36 bg-[#040913] text-white overflow-hidden selection:bg-[#e1390f] selection:text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Editorial Section Introduction */}
        <div className="max-w-4xl mb-16 sm:mb-24">
          <div className="text-xs uppercase tracking-[0.3em] text-slate-400 font-light mb-4">
            Physical Operating Presence
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.02]">
            10 Stations across <br />
            <span className="font-normal text-white">8 commercial cities.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-xl">
            Operating stations positioned directly at major industrial corridors, seaport gateways,
            and air terminals throughout India.
          </p>
        </div>

        {/* Large Editorial Composition: Dominant Map on Left, Fluid Typography on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Dominant Map Artboard (Unboxed, Pure Satellite & Vector) */}
          <div className="lg:col-span-7 relative">
            <div className="relative w-full max-w-[620px] mx-auto aspect-[600/620] overflow-hidden">
              {/* Satellite Terrain Base */}
              <Image
                src="/images/india-satellite.webp"
                alt="Satellite view of India operational footprint"
                fill
                sizes="(max-width: 1024px) 100vw, 620px"
                className="object-cover object-center select-none opacity-50 brightness-95"
                priority
              />

              {/* Edge Vignette */}
              <div className="absolute inset-0 bg-radial from-transparent via-[#040913]/30 to-[#040913]" />

              {/* Clean Vector Overlay */}
              <svg
                viewBox="0 0 600 620"
                className="absolute inset-0 w-full h-full select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Minimal Route Connecting Threads */}
                <g stroke="rgba(245, 158, 11, 0.3)" strokeWidth="0.75" strokeDasharray="2 3">
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

                {/* Chennai Hub Special Offset Callout Lines */}
                <path
                  d="M 256.84 476 L 270 476"
                  stroke="rgba(245, 158, 11, 0.5)"
                  strokeWidth="0.75"
                  fill="none"
                />
                <path
                  d="M 256.0 498 L 270 498"
                  stroke="rgba(245, 158, 11, 0.5)"
                  strokeWidth="0.75"
                  fill="none"
                />

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
                      {/* Subdued Radar Wave on Selected */}
                      {isSelected && (
                        <circle
                          cx={station.cx}
                          cy={station.cy}
                          r="16"
                          fill="none"
                          stroke="#f59e0b"
                          strokeWidth="1"
                          className="animate-ping opacity-60 origin-center"
                        />
                      )}

                      {/* Generous Click Target */}
                      <circle cx={station.cx} cy={station.cy} r="18" fill="transparent" />

                      {/* Station Dot */}
                      <circle
                        cx={station.cx}
                        cy={station.cy}
                        r={isSelected ? "5" : "3.5"}
                        fill={isSelected ? "#e1390f" : "#ffffff"}
                        stroke={isSelected ? "#ffffff" : "#040913"}
                        strokeWidth="1.5"
                        className="transition-transform duration-300 group-hover:scale-125"
                      />

                      {/* Station Text Label */}
                      <text
                        x={station.cx + station.labelDx}
                        y={station.cy + station.labelDy}
                        textAnchor={station.labelAnchor}
                        className={`text-[11px] tracking-wider transition-all select-none ${
                          isSelected
                            ? "fill-amber-400 font-medium"
                            : "fill-slate-300 font-light opacity-75 group-hover:opacity-100"
                        }`}
                      >
                        {station.shortLabel}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Spatial Station Dossier (No Cards, Fluid Editorial Typography) */}
          <div className="lg:col-span-5 flex flex-col justify-between self-stretch">
            {/* Dynamic Station Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStation.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="pt-4"
              >
                <div className="text-xs uppercase tracking-[0.25em] text-amber-400 font-light mb-3">
                  {activeStation.stationType}
                </div>

                <h3 className="text-4xl sm:text-5xl font-light text-white tracking-tight leading-none mb-8">
                  {activeStation.city}
                </h3>

                {/* Operating Address */}
                <div className="border-t border-white/10 pt-6 mb-6">
                  <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">
                    Operating Facility
                  </div>
                  <div className="text-base text-slate-200 leading-relaxed font-light">
                    {activeStation.address}
                  </div>
                </div>

                {/* Key Corridors and Gateways */}
                <div className="border-t border-white/10 pt-6 mb-8">
                  <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">
                    Direct Gateways
                  </div>
                  <div className="text-base text-slate-200 font-light">
                    {activeStation.gateways}
                  </div>
                </div>

                {/* Verified Communications */}
                <div className="border-t border-white/10 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-slate-400 mb-1">
                      Telephone
                    </div>
                    <div className="text-sm font-light text-white">
                      {activeStation.phone}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-slate-400 mb-1">
                      Operations Desk
                    </div>
                    <div className="text-xs font-light text-white">
                      {activeStation.email}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Editorial Station Index (Clickable List of All 10 Stations) */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="text-xs uppercase tracking-[0.25em] text-slate-400 font-light mb-4">
                Station Directory (10 Locations)
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2.5">
                {STATIONS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveId(s.id)}
                    className={`text-xs tracking-wider transition-colors text-left ${
                      s.id === activeId
                        ? "text-amber-400 underline underline-offset-4"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {s.city}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
