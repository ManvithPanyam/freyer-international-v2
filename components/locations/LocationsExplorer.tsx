"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import { HUB_COORDS } from "@/components/home/indiaMapData";

interface BranchDetails {
  id: string;
  name: string;
  displayName: string;
  role: string;
  region: "South India" | "North India" | "West India";
  address: string;
  phone: string | null;
  mobile: string | null;
  email: string | string[];
}

const BRANCHES: BranchDetails[] = [
  {
    id: "bengaluru",
    name: "Bengaluru",
    displayName: "Bengaluru (HQ)",
    role: "Corporate Registered Office",
    region: "South India",
    address: "No.19, KMJ AVEN, 3rd Floor, Outer Ring Road, Marathahalli, Bengaluru - 560037, Karnataka, India",
    phone: "+91 80 4120 0300",
    mobile: null,
    email: "blr.corporate@freyerinternational.com",
  },
  {
    id: "chennai_egmore",
    name: "Chennai",
    displayName: "Chennai (Central)",
    role: "Primary Operational Hub",
    region: "South India",
    address: "TAGA Tower, New No: 45 Old No 20, 1st Floor, 2nd Street, Sait Colony, Egmore, Chennai - 600008, Tamil Nadu",
    phone: "+91 44 4319 1919",
    mobile: null,
    email: "chennai.ops@freyerinternational.com",
  },
  {
    id: "chennai_airport",
    name: "Chennai Airport",
    displayName: "Chennai Airport",
    role: "Air Cargo Terminal Office",
    region: "South India",
    address: "No.2 Ambedkar Street, G.S.T. Road, Meenambakkam, Chennai - 600017, Tamil Nadu",
    phone: "+91 44 4319 1920",
    mobile: null,
    email: "chennai.air@freyerinternational.com",
  },
  {
    id: "delhi",
    name: "Delhi",
    displayName: "Delhi / NCR",
    role: "North India Gateway Hub",
    region: "North India",
    address: "Plot No. 524, First Floor, Udyog Vihar Phase 5, Gurugram - 122016, Haryana",
    phone: "+91 124 406 8388",
    mobile: null,
    email: "delhi.ops@freyerinternational.com",
  },
  {
    id: "mumbai",
    name: "Mumbai",
    displayName: "Mumbai",
    role: "West Coast Maritime Hub",
    region: "West India",
    address: "A - 401, Polaris Building, Off Makwana Road, Marol, Andheri (East), Mumbai - 400059, Maharashtra",
    phone: "+91 22 4619 1301",
    mobile: null,
    email: "mumbai.ops@freyerinternational.com",
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    displayName: "Hyderabad",
    role: "Deccan Logistics Hub",
    region: "South India",
    address: "#109, 1st Floor, Ashoka Bhoopal Chambers, S.P. Road, Secunderabad - 500003, Telangana",
    phone: "+91 40 4856 1797",
    mobile: null,
    email: "hyd.ops@freyerinternational.com",
  },
  {
    id: "visakhapatnam",
    name: "Visakhapatnam",
    displayName: "Visakhapatnam",
    role: "East Coast Seaport Office",
    region: "South India",
    address: "YCN Complex, D.No.58-1-256, NAD X Road, Visakhapatnam - 530009, Andhra Pradesh",
    phone: "+91 891 278 4910",
    mobile: null,
    email: "vizag.ops@freyerinternational.com",
  },
  {
    id: "coimbatore",
    name: "Coimbatore",
    displayName: "Coimbatore",
    role: "Industrial Manufacturing Hub",
    region: "South India",
    address: "3A, 1264, Mayflower Valencia, 5th Floor, Krisan Workspaces, Avinashi Road, Nava India, Coimbatore - 641004, Tamil Nadu",
    phone: "+91 422 439 1919",
    mobile: null,
    email: "cbe.ops@freyerinternational.com",
  },
  {
    id: "tuticorin",
    name: "Tuticorin",
    displayName: "Tuticorin",
    role: "Southern Gateway Maritime Office",
    region: "South India",
    address: "J Garden 4A/C, 278, Housing Board RTC Nagar, Tuticorin - 628001, Tamil Nadu",
    phone: "+91 461 234 1919",
    mobile: null,
    email: "tuticorin.ops@freyerinternational.com",
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    displayName: "Ahmedabad",
    role: "Gujarat Commercial Hub",
    region: "West India",
    address: "Office No. 220, Flexi Business HUB, 2nd Floor, Madhur Complex, Opp. Gwalia Sweets, Near Stadium Cross Road, Navrangpur, Ahmedabad - 380009, Gujarat",
    phone: "+91 79 4891 1919",
    mobile: null,
    email: "gujarat.ops@freyerinternational.com",
  },
];

const GLOBAL_ALLIANCES = [
  { name: "WCA World", logo: "/images/wca.png", desc: "Independent freight forwarder network worldwide" },
  { name: "Security Cargo Network (SCN)", logo: "/images/SCN.png", desc: "Global alliance of vetted international logistics specialists" },
  { name: "WPA (The Logistics Network)", logo: "/images/wpa.jpg", desc: "Global logistics network partner" },
  { name: "FDX Logistics Network", logo: "/images/FDX.jpg", desc: "Global freight logistics network partner" },
  { name: "AMTOI", logo: "/images/amtoi.png", desc: "Association of Multimodal Transport Operators of India" },
  { name: "ACAAI", logo: "/images/Acaai.jpg", desc: "Air Cargo Agents Association of India" },
];

export function LocationsExplorer() {
  const [selectedBranchId, setSelectedBranchId] = useState<string>("bengaluru");
  const selectedBranch = BRANCHES.find((b) => b.id === selectedBranchId) || BRANCHES[0];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 01: MINIMALIST VECTOR GEOGRAPHIC NETWORK VISUAL
      ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#060f1e] text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-white/10 shadow-xl">
        <div className="pb-6 border-b border-white/10 flex items-baseline justify-between">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#ff6b4a] font-bold block mb-1">
              National Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Pan-India Operating Network
            </h2>
          </div>
          <span className="text-xs sm:text-sm font-mono text-slate-400">
            9 Branches Across 8 Cities
          </span>
        </div>

        {/* Clean 60/40 Asymmetric Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mt-10 items-center">
          {/* Vector Map Canvas (Delicate India Silhouette + Node Network) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative w-full max-w-[560px] aspect-[600/620] rounded-2xl overflow-hidden bg-[#040a14] border border-white/10 shadow-inner flex items-center justify-center p-4">
              {/* Subtle Grid Lat/Long Lines */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

              {/* Vector Geographic India Visual */}
              <svg
                viewBox="0 0 600 620"
                className="w-full h-full select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Subtle Geometric India Simplified Outline */}
                <path
                  d="M 270 40 L 310 70 L 325 110 L 360 130 L 400 160 L 450 170 L 520 180 L 550 210 L 530 240 L 460 250 L 420 280 L 380 340 L 360 410 L 330 480 L 300 560 L 270 540 L 250 470 L 220 400 L 190 350 L 170 300 L 140 260 L 160 210 L 210 170 L 240 120 Z"
                  fill="#0a192f"
                  stroke="#1e3a5f"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  className="opacity-50"
                />

                {/* Connecting Freight Corridor Arcs from Bengaluru HQ */}
                {HUB_COORDS.map((hub) => {
                  const isSelected = hub.id === selectedBranchId;
                  const hq = HUB_COORDS.find((h) => h.id === "bengaluru") || HUB_COORDS[0];
                  return (
                    <line
                      key={`line-${hub.id}`}
                      x1={hq.cx}
                      y1={hq.cy}
                      x2={hub.cx}
                      y2={hub.cy}
                      stroke={isSelected ? "#ff6b4a" : "#1e3a5f"}
                      strokeWidth={isSelected ? "1.5" : "0.75"}
                      strokeDasharray={isSelected ? "none" : "3 3"}
                      className="transition-colors duration-200"
                    />
                  );
                })}

                {/* Hub Interactive Nodes */}
                {HUB_COORDS.map((hub) => {
                  const isSelected = hub.id === selectedBranchId;
                  return (
                    <g
                      key={hub.id}
                      onClick={() => setSelectedBranchId(hub.id)}
                      className="cursor-pointer group"
                      tabIndex={0}
                      role="button"
                      aria-label={`Select ${hub.city}`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setSelectedBranchId(hub.id);
                        }
                      }}
                    >
                      {/* Active Ripple Animation */}
                      {isSelected && (
                        <circle
                          cx={hub.cx}
                          cy={hub.cy}
                          r="14"
                          fill="none"
                          stroke="#ff6b4a"
                          strokeWidth="1.5"
                          className="animate-ping opacity-60 origin-center"
                        />
                      )}

                      {/* Touch Target */}
                      <circle cx={hub.cx} cy={hub.cy} r="18" fill="transparent" />

                      {/* Outer Ring */}
                      <circle
                        cx={hub.cx}
                        cy={hub.cy}
                        r={isSelected ? "7" : "4.5"}
                        fill={isSelected ? "#c42f0b" : "#0a192f"}
                        stroke={isSelected ? "#ffffff" : "#64748b"}
                        strokeWidth={isSelected ? "2" : "1.25"}
                        className="transition-all duration-150 group-hover:scale-125 origin-center"
                      />

                      {/* Inner Dot */}
                      <circle
                        cx={hub.cx}
                        cy={hub.cy}
                        r={isSelected ? "3.5" : "2"}
                        fill={isSelected ? "#ffffff" : "#c42f0b"}
                        className="transition-all duration-150"
                      />

                      {/* Pin Label */}
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
                          stroke: "#040a14",
                          strokeWidth: "3px",
                          strokeLinejoin: "round",
                        }}
                        className={`text-[11px] font-mono select-none font-bold transition-all duration-150 ${
                          isSelected ? "fill-[#ff6b4a]" : "fill-slate-300 group-hover:fill-white"
                        }`}
                      >
                        {hub.city}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Right Column: Quiet Editorial Hub Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Clean Typographic Switcher */}
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2 font-medium">
                Select Station
              </span>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-mono">
                {BRANCHES.map((b) => {
                  const isSelected = b.id === selectedBranchId;
                  return (
                    <button
                      key={b.id}
                      onClick={() => setSelectedBranchId(b.id)}
                      className={`py-1 transition-colors border-b-2 text-left ${
                        isSelected
                          ? "border-[#c42f0b] text-white font-semibold"
                          : "border-transparent text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      {b.displayName}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Station Details */}
            <div className="pt-6 border-t border-white/10 space-y-5">
              <div>
                <span className="text-xs font-mono text-[#ff6b4a] uppercase tracking-wider">
                  {selectedBranch.region}
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
                  {selectedBranch.name}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base mt-1">{selectedBranch.role}</p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                    Address
                  </span>
                  <p className="text-slate-200 text-sm sm:text-base mt-1 leading-relaxed">
                    {selectedBranch.address}
                  </p>
                </div>

                <div className="pt-1 flex flex-wrap items-center gap-5 font-mono text-slate-200 text-sm">
                  {selectedBranch.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#ff6b4a]" />
                      <span>{selectedBranch.phone}</span>
                    </div>
                  )}
                  {selectedBranch.mobile && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#ff6b4a]" />
                      <span>{selectedBranch.mobile}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <a
                  href={
                    Array.isArray(selectedBranch.email)
                      ? `mailto:${selectedBranch.email[0]}`
                      : `mailto:${selectedBranch.email}`
                  }
                  className="inline-flex items-center gap-2 bg-[#c42f0b] hover:bg-[#a82506] text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Station</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 02: NATIONAL DIRECTORY (QUIET REFERENCE LAYER)
      ───────────────────────────────────────────────────────────── */}
      <section className="pt-2">
        <div className="pb-4 border-b border-slate-200 flex items-baseline justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0b2144]">
            Complete Pan-India Directory
          </h2>
          <span className="text-xs font-mono text-slate-400">
            9 Branches Across 8 Cities
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
          {BRANCHES.map((b) => (
            <div
              key={b.id}
              className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col justify-between space-y-4 hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold text-[#c42f0b]">
                    {b.region}
                  </span>
                  <span className="font-mono text-slate-400 text-xs">{b.role}</span>
                </div>

                <h3 className="text-xl font-bold text-[#0b2144] tracking-tight mt-2.5">
                  {b.displayName}
                </h3>

                <div className="mt-2 flex items-start gap-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>{b.address}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-sm font-mono">
                <div className="text-slate-700 font-medium">
                  {b.phone || b.mobile}
                </div>

                <a
                  href={Array.isArray(b.email) ? `mailto:${b.email[0]}` : `mailto:${b.email}`}
                  className="font-semibold text-[#0b2144] hover:text-[#c42f0b] inline-flex items-center gap-1.5 transition-colors text-sm"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>Email Branch</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 03: GLOBAL FORWARDING ALLIANCES
      ───────────────────────────────────────────────────────────── */}
      <section className="pt-2">
        <div className="pb-4 border-b border-slate-200 flex items-baseline justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0b2144]">
            Global Forwarding Alliances
          </h2>
          <span className="text-xs font-mono text-slate-400">
            Worldwide Coverage
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {GLOBAL_ALLIANCES.map((alliance, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center gap-4 group hover:border-[#c42f0b]/30 transition-colors"
            >
              <div className="relative w-16 h-12 shrink-0 bg-slate-50 rounded-lg p-1.5 border border-slate-100 flex items-center justify-center">
                <Image src={alliance.logo} alt={alliance.name} fill className="object-contain p-1" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#0b2144]">{alliance.name}</h4>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-snug">{alliance.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
