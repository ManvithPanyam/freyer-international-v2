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
    phone: "080 4120 0300",
    mobile: "+91 97402 20069",
    email: "Vijay.Palagiri@freyerinternational.com",
  },
  {
    id: "chennai_egmore",
    name: "Chennai",
    displayName: "Chennai",
    role: "Primary Operational Hub",
    region: "South India",
    address: "TAGA Tower, New No: 45 Old No 20, 1st Floor, 2nd Street, Sait Colony, Egmore, Chennai - 600008, Tamil Nadu",
    phone: "+91 44 43191919",
    mobile: "+91 95000 67831",
    email: "Selvakumar@freyerinternational.com",
  },
  {
    id: "chennai_airport",
    name: "Chennai Airport",
    displayName: "Chennai Airport",
    role: "Air Cargo Terminal Office",
    region: "South India",
    address: "No.2 Ambedkar Street, G.S.T. Road, Meenambakkam, Chennai - 600017, Tamil Nadu",
    phone: null,
    mobile: "+91 96000 41033",
    email: ["selvakumar@freyerinternational.com", "prabhu@freyerinternational.com"],
  },
  {
    id: "delhi",
    name: "Delhi",
    displayName: "Delhi / NCR",
    role: "North India Gateway Hub",
    region: "North India",
    address: "Plot No. 524, First Floor, Udyog Vihar Phase 5, Gurugram - 122016, Haryana",
    phone: "0124-4068388",
    mobile: "+91 98846 60410",
    email: ["info@freyerinternational.com", "vk@freyerinternational.com"],
  },
  {
    id: "mumbai",
    name: "Mumbai",
    displayName: "Mumbai",
    role: "West Coast Maritime Hub",
    region: "West India",
    address: "A - 401, Polaris Building, Off Makwana Road, Marol, Andheri (East), Mumbai - 400059, Maharashtra",
    phone: "022-46191301",
    mobile: null,
    email: "raju.jamdar@freyerinternational.com",
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    displayName: "Hyderabad",
    role: "Deccan Logistics Hub",
    region: "South India",
    address: "#109, 1st Floor, Ashoka Bhoopal Chambers, S.P. Road, Secunderabad - 500003, Telangana",
    phone: "040-48561797",
    mobile: "+91 97402 20069",
    email: "Vijay.Palagiri@freyerinternational.com",
  },
  {
    id: "visakhapatnam",
    name: "Visakhapatnam",
    displayName: "Visakhapatnam",
    role: "East Coast Seaport Office",
    region: "South India",
    address: "YCN Complex, D.No.58-1-256, NAD X Road, Visakhapatnam - 530009, Andhra Pradesh",
    phone: "+91 97402 20069",
    mobile: null,
    email: "Vijay.Palagiri@freyerinternational.com",
  },
  {
    id: "coimbatore",
    name: "Coimbatore",
    displayName: "Coimbatore",
    role: "Industrial Manufacturing Hub",
    region: "South India",
    address: "3A, 1264, Mayflower Valencia, 5th Floor, Krisan Workspaces, Avinashi Road, Nava India, Coimbatore - 641004, Tamil Nadu",
    phone: null,
    mobile: "+91 99625 41554",
    email: "shivakumar.ps@freyerinternational.com",
  },
  {
    id: "tuticorin",
    name: "Tuticorin",
    displayName: "Tuticorin",
    role: "Southern Gateway Maritime Office",
    region: "South India",
    address: "J Garden 4A/C, 278, Housing Board RTC Nagar, Tuticorin - 628001, Tamil Nadu",
    phone: null,
    mobile: "+91 87544 46077",
    email: "donald@freyerinternational.com",
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    displayName: "Ahmedabad",
    role: "Gujarat Commercial Hub",
    region: "West India",
    address: "Office No. 220, Flexi Business HUB, 2nd Floor, Madhur Complex, Opp. Gwalia Sweets, Near Stadium Cross Road, Navrangpur, Ahmedabad - 380009, Gujarat",
    phone: null,
    mobile: "+91 98214 65939",
    email: "raju.jamdar@freyerinternational.com",
  },
];

const GLOBAL_ALLIANCES = [
  { name: "WCA World", logo: "/images/wca.png", desc: "Independent freight forwarder network across 190+ countries" },
  { name: "Security Cargo Network (SCN)", logo: "/images/SCN.png", desc: "Global alliance of vetted international logistics specialists" },
  { name: "WPA Network", logo: "/images/wpa.jpg", desc: "Worldwide Partners Alliance of certified freight agents" },
  { name: "FDX Network", logo: "/images/FDX.jpg", desc: "International express and freight forwarding partnership" },
  { name: "AMTOI", logo: "/images/amtoi.png", desc: "Association of Multimodal Transport Operators of India" },
  { name: "ACAAI", logo: "/images/Acaai.jpg", desc: "Air Cargo Agents Association of India" },
];

export function LocationsExplorer() {
  const [selectedBranchId, setSelectedBranchId] = useState<string>("bengaluru");
  const selectedBranch = BRANCHES.find((b) => b.id === selectedBranchId) || BRANCHES[0];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 01: SATELLITE MAP HERO & EDITORIAL BRANCH EXPERIENCE
      ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#060f1e] text-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/10 shadow-xl">
        <div className="pb-6 border-b border-white/10 flex items-baseline justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Our Indian Network
          </h2>
          <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">
            10 Dedicated Hubs
          </span>
        </div>

        {/* Desktop Layout: Asymmetric Split (Dominant Satellite Map on Left + Typographic Detail on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mt-8 items-center">
          {/* Map Hero (Dominant 7-Column Span on Desktop) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative w-full max-w-[540px] aspect-[600/620] rounded-2xl overflow-hidden border border-white/10 bg-[#0a192f] shadow-2xl">
              <Image
                src="/images/india-satellite.webp"
                alt="Satellite map of India showing Freyer branch network"
                fill
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-cover object-center select-none"
                priority
              />
              <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/25 pointer-events-none" />

              {/* Interactive SVG Overlay */}
              <svg
                viewBox="0 0 600 620"
                className="absolute inset-0 w-full h-full select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
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
                      {/* Active Ripple */}
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

                      {/* Touch Target Area */}
                      <circle cx={hub.cx} cy={hub.cy} r="18" fill="transparent" />

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
                          stroke: "#060f1e",
                          strokeWidth: "3px",
                          strokeLinejoin: "round",
                        }}
                        className={`text-[11px] font-mono select-none font-bold transition-all duration-150 ${
                          isSelected ? "fill-[#ff6b4a]" : "fill-white/80 group-hover:fill-white"
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

          {/* Right Column: Flattened Editorial Hub Details (No Nested Boxes) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Hub Selector Pills */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2 font-medium">
                Select a Hub
              </span>
              <div className="flex flex-wrap gap-1.5">
                {BRANCHES.map((b) => {
                  const isSelected = b.id === selectedBranchId;
                  return (
                    <button
                      key={b.id}
                      onClick={() => setSelectedBranchId(b.id)}
                      className={`px-3 py-1 rounded-full text-xs font-mono transition-all ${
                        isSelected
                          ? "bg-[#c42f0b] text-white font-semibold shadow-xs"
                          : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
                      }`}
                    >
                      {b.displayName}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Flattened Hub Typography Spread */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <div>
                <span className="text-xs font-mono text-[#ff6b4a] uppercase tracking-wider">
                  {selectedBranch.region}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-0.5">
                  {selectedBranch.name}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-1">{selectedBranch.role}</p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3 text-xs">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    Address
                  </span>
                  <p className="text-slate-200 text-xs sm:text-sm mt-0.5 leading-relaxed">
                    {selectedBranch.address}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4 font-mono text-slate-300">
                  {selectedBranch.phone && (
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#ff6b4a]" />
                      <span>{selectedBranch.phone}</span>
                    </div>
                  )}
                  {selectedBranch.mobile && (
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#ff6b4a]" />
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
                  className="inline-flex items-center gap-1.5 bg-[#c42f0b] hover:bg-[#a82506] text-white text-xs font-semibold px-4 py-2.5 rounded transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Station</span>
                  <ArrowRight className="w-3.5 h-3.5" />
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
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0b2144]">
            Complete Pan-India Directory
          </h2>
          <span className="text-xs font-mono text-slate-400">
            10 Branch Locations
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
          {BRANCHES.map((b) => (
            <div
              key={b.id}
              className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs flex flex-col justify-between space-y-3 hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-100 text-xs">
                  <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-[#c42f0b]">
                    {b.region}
                  </span>
                  <span className="font-mono text-slate-400 text-[11px]">{b.role}</span>
                </div>

                <h3 className="text-base font-bold text-[#0b2144] tracking-tight mt-2">
                  {b.displayName}
                </h3>

                <div className="mt-1.5 flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span>{b.address}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <div className="text-slate-600 text-[11px]">
                  {b.phone || b.mobile}
                </div>

                <a
                  href={Array.isArray(b.email) ? `mailto:${b.email[0]}` : `mailto:${b.email}`}
                  className="font-semibold text-[#0b2144] hover:text-[#c42f0b] inline-flex items-center gap-1 transition-colors text-[11px]"
                >
                  <Mail className="w-3 h-3 text-slate-400" />
                  <span>Email Branch</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 03: GLOBAL FORWARDING ALLIANCES (190+ COUNTRIES)
      ───────────────────────────────────────────────────────────── */}
      <section className="pt-2">
        <div className="pb-4 border-b border-slate-200 flex items-baseline justify-between">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0b2144]">
            Global Forwarding Alliances
          </h2>
          <span className="text-xs font-mono text-slate-400">
            190+ Countries
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
          {GLOBAL_ALLIANCES.map((alliance, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs flex items-center gap-3.5 group hover:border-[#c42f0b]/30 transition-colors"
            >
              <div className="relative w-12 h-10 shrink-0 bg-slate-50 rounded p-1 border border-slate-100 flex items-center justify-center">
                <Image src={alliance.logo} alt={alliance.name} fill className="object-contain p-0.5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#0b2144]">{alliance.name}</h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{alliance.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
