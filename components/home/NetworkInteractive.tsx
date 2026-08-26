"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, Building2, ExternalLink } from "lucide-react";
import { HUB_COORDS } from "./indiaMapData";

interface Branch {
  id: string;
  city: string;
  state: string;
  hubRole: string;
  address: string;
  phone?: string;
  email: string;
}

const HUBS: Branch[] = [
  {
    id: "chennai_egmore",
    city: "Chennai (Egmore)",
    state: "Tamil Nadu",
    hubRole: "Primary Operational Hub",
    address: "TAGA Tower, New No: 45 Old No 20, 1st Floor, Sait Colony, Egmore, Chennai - 600008",
    phone: "+91 44 43191919",
    email: "Selvakumar@freyerinternational.com",
  },
  {
    id: "bengaluru",
    city: "Bengaluru",
    state: "Karnataka",
    hubRole: "Corporate Registered Office",
    address: "No.19, KMJ AVEN, 3rd Floor, Outer Ring Road, Marathahalli, Bengaluru - 560037",
    phone: "080 4120 0300",
    email: "Vijay.Palagiri@freyerinternational.com",
  },
  {
    id: "delhi",
    city: "Delhi / NCR",
    state: "Haryana",
    hubRole: "North India Gateway Hub",
    address: "Plot No. 524, 1st Floor, Udyog Vihar Phase 5, Gurugram - 122016",
    phone: "0124-4068388",
    email: "vk@freyerinternational.com",
  },
  {
    id: "mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    hubRole: "West Coast Maritime Hub",
    address: "A-401, Polaris Building, Off Makwana Road, Marol, Andheri (East), Mumbai - 400059",
    phone: "022-46191301",
    email: "raju.jamdar@freyerinternational.com",
  },
  {
    id: "hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    hubRole: "Deccan Logistics Hub",
    address: "#109, 1st Floor, Ashoka Bhoopal Chambers, S.P. Road, Secunderabad - 500003",
    phone: "040-48561797",
    email: "Vijay.Palagiri@freyerinternational.com",
  },
  {
    id: "visakhapatnam",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    hubRole: "East Coast Seaport Office",
    address: "YCN Complex, D.No.58-1-256, NAD X Road, Visakhapatnam - 530009",
    phone: "+91 97402 20069",
    email: "Vijay.Palagiri@freyerinternational.com",
  },
  {
    id: "coimbatore",
    city: "Coimbatore",
    state: "Tamil Nadu",
    hubRole: "Industrial Manufacturing Corridor",
    address: "3A, 1264, Mayflower Valencia, 5th Floor, Avinashi Road, Coimbatore - 641004",
    phone: "+91 9962541554",
    email: "shivakumar.ps@freyerinternational.com",
  },
  {
    id: "tuticorin",
    city: "Tuticorin",
    state: "Tamil Nadu",
    hubRole: "Major Maritime Seaport Office",
    address: "J Garden 4A/C, 278, Housing Board RTC Nagar, Tuticorin - 628001",
    phone: "+91 87544 46077",
    email: "donald@freyerinternational.com",
  },
  {
    id: "ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    hubRole: "Gujarat Commercial Hub",
    address: "Office No. 220, Flexi Business Hub, Madhur Complex, Navrangpur, Ahmedabad - 380009",
    phone: "+91 98214 65939",
    email: "raju.jamdar@freyerinternational.com",
  },
  {
    id: "chennai_airport",
    city: "Chennai (Airport)",
    state: "Tamil Nadu",
    hubRole: "Air Cargo Terminal Station",
    address: "No.2 Ambedkar Street, G.S.T. Road, Meenambakkam, Chennai - 600017",
    phone: "+91 96000 41033",
    email: "selvakumar@freyerinternational.com",
  },
];

export function NetworkInteractive() {
  const [selectedId, setSelectedId] = useState<string>("chennai_egmore");
  const selectedHub = HUBS.find((h) => h.id === selectedId) || HUBS[0];

  return (
    <section id="network" className="py-20 sm:py-28 bg-[#fbfcfd] border-t border-slate-200/80 text-[#0b2144] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-[#c42f0b] text-xs font-mono tracking-[0.22em] uppercase font-semibold block mb-3">
            National Operational Footprint
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0b2144] leading-[1.1]">
            <span className="text-[#c42f0b] font-mono mr-3">10</span>
            Operational Hubs Across India
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-2xl leading-relaxed">
            Direct physical presence with dedicated branch teams, customs clearance infrastructure, and multimodal handling facilities.
          </p>
        </div>

        {/* Main Grid: Floating Satellite Artwork on Left, Detail Panel on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Floating Satellite Artwork (No surrounding card) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            {/* Satellite Artwork Container with custom SVG overlay */}
            <div className="relative w-full max-w-[520px] aspect-[600/620] rounded-2xl overflow-hidden shadow-lg border border-slate-200/50 bg-[#0a192f]">
              {/* NASA Blue Marble Satellite Base Imagery */}
              <Image
                src="/images/india-satellite.webp"
                alt="Satellite visualization of the Indian subcontinent showing Freyer operational network"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover object-center select-none"
                priority
              />

              {/* Subtle oceanic vignette overlay to soften outer borders */}
              <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/25 pointer-events-none" />

              {/* Interactive SVG Overlay */}
              <svg
                viewBox="0 0 600 620"
                className="absolute inset-0 w-full h-full select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Glowing shadow filter for selected hub */}
                  <filter id="satHubGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="1" stdDeviation="4" floodColor="#c42f0b" floodOpacity="0.8" />
                  </filter>
                </defs>

                {/* Hub Markers */}
                {HUB_COORDS.map((hub) => {
                  const isSelected = hub.id === selectedId;

                  return (
                    <g
                      key={hub.id}
                      onClick={() => setSelectedId(hub.id)}
                      className="cursor-pointer group"
                      tabIndex={0}
                      role="button"
                      aria-label={`Select ${hub.city}`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setSelectedId(hub.id);
                        }
                      }}
                    >
                      {/* Active Outer Pulse Ping */}
                      {isSelected && (
                        <circle
                          cx={hub.cx}
                          cy={hub.cy}
                          r="16"
                          fill="none"
                          stroke="#ff6b4a"
                          strokeWidth="2"
                          className="animate-ping opacity-75 origin-center"
                        />
                      )}

                      {/* Hover Target Circle (Enlarged hit area) */}
                      <circle
                        cx={hub.cx}
                        cy={hub.cy}
                        r="20"
                        fill="transparent"
                      />

                      {/* Outer Ring */}
                      <circle
                        cx={hub.cx}
                        cy={hub.cy}
                        r={isSelected ? "9" : "6"}
                        fill={isSelected ? "#c42f0b" : "#ffffff"}
                        stroke={isSelected ? "#ffffff" : "#0b2144"}
                        strokeWidth={isSelected ? "2.5" : "1.5"}
                        filter={isSelected ? "url(#satHubGlow)" : undefined}
                        className="transition-all duration-200 group-hover:scale-125 origin-center"
                      />

                      {/* Inner Core Dot */}
                      <circle
                        cx={hub.cx}
                        cy={hub.cy}
                        r={isSelected ? "4" : "3"}
                        fill={isSelected ? "#ffffff" : "#c42f0b"}
                        className="transition-all duration-200"
                      />

                      {/* Text Label with crisp white halo */}
                      <text
                        x={
                          hub.labelPosition === "left"
                            ? hub.cx - 12
                            : hub.labelPosition === "right"
                            ? hub.cx + 12
                            : hub.cx
                        }
                        y={
                          hub.labelPosition === "top"
                            ? hub.cy - 10
                            : hub.labelPosition === "bottom"
                            ? hub.cy + 16
                            : hub.cy + 4
                        }
                        textAnchor={
                          hub.labelPosition === "left"
                            ? "end"
                            : hub.labelPosition === "right"
                            ? "start"
                            : "middle"
                        }
                        style={{
                          paintOrder: "stroke fill",
                          stroke: "#060f1e",
                          strokeWidth: "3.5px",
                          strokeLinejoin: "round",
                        }}
                        className={`text-[12px] font-sans transition-all duration-200 pointer-events-none select-none ${
                          isSelected
                            ? "font-bold fill-[#ffffff]"
                            : "font-medium fill-slate-100 group-hover:fill-[#ffffff]"
                        }`}
                      >
                        {hub.shortLabel}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Quick Pill Selector underneath satellite map */}
            <div className="w-full max-w-[520px] mt-5">
              <div className="flex flex-wrap gap-1.5 justify-center">
                {HUBS.map((h) => {
                  const isSelected = h.id === selectedId;
                  return (
                    <button
                      key={h.id}
                      onClick={() => setSelectedId(h.id)}
                      className={`text-xs px-2.5 py-1 rounded-md font-medium transition-all duration-150 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c42f0b] ${
                        isSelected
                          ? "bg-[#0b2144] text-white shadow-xs"
                          : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/70"
                      }`}
                    >
                      {h.city}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Selected Hub Details Panel */}
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedHub.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white p-7 sm:p-9 rounded-2xl border border-slate-200/80 shadow-sm space-y-7"
                >
                  {/* Hub Role & Title */}
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#c42f0b]/10 text-[#c42f0b] text-[11px] font-mono uppercase tracking-wider font-semibold mb-3">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{selectedHub.hubRole}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#0b2144] tracking-tight">
                      {selectedHub.city}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mt-1">
                      {selectedHub.state} · India
                    </p>
                  </div>

                  {/* Address Section */}
                  <div className="border-t border-slate-100 pt-5 space-y-2">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {selectedHub.address}
                      </p>
                    </div>
                  </div>

                  {/* Direct Contact Actions */}
                  <div className="border-t border-slate-100 pt-6 space-y-3">
                    {selectedHub.phone && (
                      <div className="flex items-center justify-between bg-[#f8f9fa] px-4 py-3 rounded-lg border border-slate-200/60">
                        <div className="flex items-center gap-2.5 text-xs text-slate-600">
                          <Phone className="w-3.5 h-3.5 text-[#c42f0b]" />
                          <span className="font-mono">{selectedHub.phone}</span>
                        </div>
                        <a
                          href={`tel:${selectedHub.phone.replace(/[^0-9+]/g, "")}`}
                          className="text-xs font-semibold text-[#0b2144] hover:text-[#c42f0b] flex items-center gap-1 transition-colors"
                        >
                          <span>Call</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}

                    <a
                      href={`mailto:${selectedHub.email}`}
                      className="w-full flex items-center justify-center gap-2 bg-[#0b2144] hover:bg-[#07152b] text-white text-xs font-semibold px-5 py-3.5 rounded-lg transition-colors shadow-xs"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Email Branch Desk</span>
                    </a>
                  </div>

                  {/* Verification Note */}
                  <div className="pt-1 text-center">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      Verified Freyer Corporate Branch
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
