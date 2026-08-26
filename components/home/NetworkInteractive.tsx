"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
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
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSelect = (id: string) => {
    setSelectedId(id);
  };

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
          <p className="text-slate-600 text-sm sm:text-base mt-4 max-w-xl leading-relaxed">
            A physical network spanning 10 verified Freyer locations across India.
          </p>
        </div>

        {/* Main Grid: Satellite Map on Left, Detail Panel on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Satellite Map Artwork */}
          <div className="lg:col-span-7 flex flex-col items-center">
            {/* Satellite Artwork Container */}
            <div className="relative w-full max-w-[500px] aspect-[600/620] rounded-xl overflow-hidden border border-slate-200/60 bg-[#0a192f]">
              {/* NASA Blue Marble Satellite Base Imagery */}
              <Image
                src="/images/india-satellite.webp"
                alt="Satellite visualization of the Indian subcontinent showing Freyer operational network"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center select-none"
                priority
              />

              {/* Subtle oceanic vignette */}
              <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/20 pointer-events-none" />

              {/* Interactive SVG Overlay */}
              <svg
                viewBox="0 0 600 620"
                className="absolute inset-0 w-full h-full select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Hub Markers */}
                {HUB_COORDS.map((hub) => {
                  const isSelected = hub.id === selectedId;

                  return (
                    <g
                      key={hub.id}
                      onClick={() => handleSelect(hub.id)}
                      className="cursor-pointer group"
                      tabIndex={0}
                      role="button"
                      aria-label={`Select ${hub.city}`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          handleSelect(hub.id);
                        }
                      }}
                    >
                      {/* Active Marker: Expanding outer ring */}
                      {isSelected && (
                        <circle
                          cx={hub.cx}
                          cy={hub.cy}
                          r="12"
                          fill="none"
                          stroke="#ff6b4a"
                          strokeWidth="1.5"
                          className="animate-ping opacity-60 origin-center"
                        />
                      )}

                      {/* Enlarged hit area for click/tap */}
                      <circle
                        cx={hub.cx}
                        cy={hub.cy}
                        r="18"
                        fill="transparent"
                      />

                      {/* Outer Ring */}
                      <circle
                        cx={hub.cx}
                        cy={hub.cy}
                        r={isSelected ? "6.5" : "4"}
                        fill={isSelected ? "#c42f0b" : "#ffffff"}
                        stroke={isSelected ? "#ffffff" : "#0b2144"}
                        strokeWidth={isSelected ? "1.75" : "1"}
                        className="transition-all duration-150 group-hover:scale-125 origin-center"
                      />

                      {/* Inner Dot */}
                      <circle
                        cx={hub.cx}
                        cy={hub.cy}
                        r={isSelected ? "3" : "2"}
                        fill={isSelected ? "#ffffff" : "#c42f0b"}
                        className="transition-all duration-150"
                      />

                      {/* Text Label */}
                      <text
                        x={
                          hub.labelPosition === "left"
                            ? hub.cx - 10
                            : hub.labelPosition === "right"
                            ? hub.cx + 10
                            : hub.cx
                        }
                        y={
                          hub.labelPosition === "top"
                            ? hub.cy - 8
                            : hub.labelPosition === "bottom"
                            ? hub.cy + 14
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
                          strokeWidth: "3px",
                          strokeLinejoin: "round",
                        }}
                        className={`text-[11px] font-sans transition-all duration-150 pointer-events-none select-none ${
                          isSelected
                            ? "font-bold fill-[#ffffff]"
                            : "font-normal fill-slate-200 group-hover:fill-[#ffffff]"
                        }`}
                      >
                        {hub.shortLabel}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Horizontal Scrolling Location Rail (Single-line, no wrapping clutter) */}
            <div className="w-full max-w-[500px] mt-4">
              <div
                ref={scrollRef}
                className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none select-none"
              >
                {HUBS.map((h) => {
                  const isSelected = h.id === selectedId;
                  return (
                    <button
                      key={h.id}
                      onClick={() => handleSelect(h.id)}
                      className={`text-xs px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition-all duration-150 shrink-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c42f0b] ${
                        isSelected
                          ? "bg-[#0b2144] text-white shadow-xs"
                          : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80"
                      }`}
                    >
                      {h.city}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Refined Editorial Detail Panel */}
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedHub.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                  className="bg-white p-7 sm:p-9 rounded-xl border border-slate-200/80 space-y-6"
                >
                  {/* City Title & Role */}
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#c42f0b] font-semibold block mb-2">
                      {selectedHub.hubRole}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#0b2144] tracking-tight">
                      {selectedHub.city}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mt-1">
                      {selectedHub.state} · India
                    </p>
                  </div>

                  {/* Address Section */}
                  <div className="border-t border-slate-100 pt-5">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {selectedHub.address}
                      </p>
                    </div>
                  </div>

                  {/* Contact Actions */}
                  <div className="border-t border-slate-100 pt-5 space-y-4">
                    {selectedHub.phone && (
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono text-slate-500">{selectedHub.phone}</span>
                        <a
                          href={`tel:${selectedHub.phone.replace(/[^0-9+]/g, "")}`}
                          className="font-semibold text-[#c42f0b] hover:text-[#a82506] transition-colors flex items-center gap-1"
                        >
                          <Phone className="w-3 h-3" />
                          <span>Call</span>
                        </a>
                      </div>
                    )}

                    <div>
                      <a
                        href={`mailto:${selectedHub.email}`}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-[#0b2144] hover:text-[#c42f0b] transition-colors group"
                      >
                        <Mail className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#c42f0b] transition-colors" />
                        <span>Email branch desk</span>
                        <ArrowRight className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
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
