"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Navigation,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
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
  scope: string;
  connectivity: string;
}

const BRANCHES: BranchDetails[] = [
  {
    id: "bengaluru",
    name: "Bengaluru",
    displayName: "Bengaluru (HQ)",
    role: "Corporate Headquarters & Commercial Operations",
    region: "South India",
    address: "No.19, KMJ AVEN, 3rd Floor, Outer Ring Road, Marathahalli, Bengaluru - 560037, Karnataka, India",
    phone: "080 4120 0300",
    mobile: "+91 97402 20069",
    email: "Vijay.Palagiri@freyerinternational.com",
    scope: "Corporate Governance, International Air & Ocean Forwarding, Contract 3PL Logistics",
    connectivity: "Direct transit to Kempegowda International Airport (BLR) & Whitefield ICD",
  },
  {
    id: "chennai_egmore",
    name: "Chennai",
    displayName: "Chennai",
    role: "Primary Corporate Branch & Port Operations",
    region: "South India",
    address: "TAGA Tower, New No: 45 Old No 20, 1st Floor, 2nd Street, Sait Colony, Egmore, Chennai - 600008, Tamil Nadu",
    phone: "+91 44 43191919",
    mobile: "+91 95000 67831",
    email: "Selvakumar@freyerinternational.com",
    scope: "Sea Port Operations, Breakbulk Handling, Licensed Customs Brokerage",
    connectivity: "Proximity to Chennai Port & Ennore Kamarajar Port Terminals",
  },
  {
    id: "chennai_airport",
    name: "Chennai Airport",
    displayName: "Chennai Airport",
    role: "Air Cargo Terminal Station",
    region: "South India",
    address: "No.2 Ambedkar Street, G.S.T. Road, Meenambakkam, Chennai - 600017, Tamil Nadu",
    phone: null,
    mobile: "+91 96000 41033",
    email: ["selvakumar@freyerinternational.com", "prabhu@freyerinternational.com"],
    scope: "Expedited Airfreight, AAI Cargo Terminal Clearance, Perishables & DG Handling",
    connectivity: "Airside access at Chennai International Airport (MAA) Cargo Complex",
  },
  {
    id: "delhi",
    name: "Delhi / NCR",
    displayName: "Delhi / NCR",
    role: "North India Gateway & Air Cargo Hub",
    region: "North India",
    address: "Plot No. 524, First Floor, Udyog Vihar Phase 5, Gurugram - 122016, Haryana",
    phone: "0124-4068388",
    mobile: "+91 98846 60410",
    email: ["info@freyerinternational.com", "vk@freyerinternational.com"],
    scope: "North India Commercial Forwarding, IGI Airport Air Cargo, Tughlakabad ICD",
    connectivity: "Direct artery to Delhi IGI Airport (DEL) & National Capital Industrial Corridor",
  },
  {
    id: "mumbai",
    name: "Mumbai",
    displayName: "Mumbai",
    role: "West Coast Maritime & Commercial Hub",
    region: "West India",
    address: "A - 401, Polaris Building, Off Makwana Road, Marol, Andheri (East), Mumbai - 400059, Maharashtra",
    phone: "022-46191301",
    mobile: null,
    email: "raju.jamdar@freyerinternational.com",
    scope: "Nhava Sheva (JNPT) Port Operations, Mumbai Air Cargo, Breakbulk Forwarding",
    connectivity: "Direct corridor to Jawaharlal Nehru Port Trust (JNPT) & Mumbai Air Cargo Complex",
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    displayName: "Hyderabad",
    role: "Deccan Operations & ICD Rail Hub",
    region: "South India",
    address: "#109, 1st Floor, Ashoka Bhoopal Chambers, S.P. Road, Secunderabad - 500003, Telangana",
    phone: "040-48561797",
    mobile: "+91 97402 20069",
    email: "Vijay.Palagiri@freyerinternational.com",
    scope: "Pharmaceutical Logistics, Hyderabad Airport (HYD) Air Cargo, Sanathnagar ICD",
    connectivity: "Seamless transit to Rajiv Gandhi International Airport & Hyderabad Rail ICDs",
  },
  {
    id: "visakhapatnam",
    name: "Visakhapatnam",
    displayName: "Visakhapatnam",
    role: "East Coast Deepwater Seaport Office",
    region: "South India",
    address: "YCN Complex, D.No.58-1-256, NAD X Road, Visakhapatnam - 530009, Andhra Pradesh",
    phone: "+91 97402 20069",
    mobile: null,
    email: "Vijay.Palagiri@freyerinternational.com",
    scope: "Heavy Industrial Cargo, Vizag Port Clearance, Steel & Energy Sector Movements",
    connectivity: "Direct operational dock presence at Visakhapatnam Port Trust (VPT)",
  },
  {
    id: "coimbatore",
    name: "Coimbatore",
    displayName: "Coimbatore",
    role: "Industrial Inland Forwarding Branch",
    region: "South India",
    address: "3A, 1264, Mayflower Valencia, 5th Floor, Krisan Workspaces, Avinashi Road, Nava India, Coimbatore - 641004, Tamil Nadu",
    phone: null,
    mobile: "+91 99625 41554",
    email: "shivakumar.ps@freyerinternational.com",
    scope: "Textile Machinery, Engineering Goods, Irugur ICD Intermodal Forwarding",
    connectivity: "Connecting Western Tamil Nadu manufacturing belt to Cochin & Tuticorin ports",
  },
  {
    id: "tuticorin",
    name: "Tuticorin",
    displayName: "Tuticorin",
    role: "Southern Gateway Maritime Port Office",
    region: "South India",
    address: "J Garden 4A/C, 278, Housing Board RTC Nagar, Tuticorin - 628001, Tamil Nadu",
    phone: null,
    mobile: "+91 87544 46077",
    email: "donald@freyerinternational.com",
    scope: "VO Chidambaranar Port Operations, Coastal Shipping, Container & Bulk Clearance",
    connectivity: "Direct gate-side access at VOC Port Trust container berths",
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    displayName: "Ahmedabad",
    role: "Gujarat Commercial & Industrial Cargo Hub",
    region: "West India",
    address: "Office No. 220, Flexi Business HUB, 2nd Floor, Madhur Complex, Opp. Gwalia Sweets, Near Stadium Cross Road, Navrangpur, Ahmedabad - 380009, Gujarat",
    phone: null,
    mobile: "+91 98214 65939",
    email: "raju.jamdar@freyerinternational.com",
    scope: "Chemical & Machinery Logistics, Mundra Port Linkages, Ahmedabad Air Cargo",
    connectivity: "Integrated corridor to Mundra Port, Pipavav Port, and Ahmedabad ICDs",
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
          SECTION 01: SATELLITE MAP HERO & ACTIVE HUB EXPLORER
      ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#060f1e] text-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/10 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="text-xs font-mono text-[#ff6b4a] uppercase tracking-widest font-semibold mb-1">
              01 / Geographic Network
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Our Indian Network
            </h2>
          </div>
          <div className="text-xs font-mono text-slate-400">
            10 Dedicated Operating Hubs Across Major Sea, Air &amp; Inland Corridors
          </div>
        </div>

        {/* Clean Horizontal Hub Switcher Pills */}
        <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {BRANCHES.map((b) => {
            const isSelected = b.id === selectedBranchId;
            return (
              <button
                key={b.id}
                onClick={() => setSelectedBranchId(b.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-[#c42f0b] text-white font-semibold shadow-md shadow-[#c42f0b]/30"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                <span>{b.displayName}</span>
              </button>
            );
          })}
        </div>

        {/* Asymmetric Grid: Satellite Map of India + Active Branch Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-center">
          {/* Left Column: Satellite Map Artwork */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full max-w-[460px] aspect-[600/620] rounded-2xl overflow-hidden border border-white/10 bg-[#0a192f] shadow-2xl">
              <Image
                src="/images/india-satellite.webp"
                alt="Satellite visualization of India showing Freyer branch hub network"
                fill
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover object-center select-none"
                priority
              />
              <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/20 pointer-events-none" />

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

                      {/* Touch target hit area */}
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
            <div className="text-[11px] font-mono text-slate-400 mt-3 text-center">
              Click any station on the map or select from the pill menu above.
            </div>
          </div>

          {/* Right Column: Active Branch Details Dossier */}
          <div className="lg:col-span-6 bg-white/5 rounded-2xl border border-white/10 p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-[#ff6b4a] uppercase font-semibold">
                  {selectedBranch.region} &middot; Operating Station
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                  {selectedBranch.name}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-0.5">{selectedBranch.role}</p>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-mono text-emerald-300 uppercase">
                  Active
                </span>
              </div>
            </div>

            {/* Address & Operational Scope */}
            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#ff6b4a] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block font-mono text-[10px] uppercase">
                    Physical Address
                  </span>
                  <p className="text-slate-200 text-sm mt-0.5 font-medium leading-relaxed">
                    {selectedBranch.address}
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-black/30 rounded-xl border border-white/5 space-y-1">
                <span className="text-[10px] font-mono text-[#ff6b4a] uppercase font-semibold block">
                  Operational Scope
                </span>
                <p className="text-slate-300 text-xs leading-relaxed">{selectedBranch.scope}</p>
              </div>

              <div className="p-3.5 bg-black/30 rounded-xl border border-white/5 space-y-1">
                <span className="text-[10px] font-mono text-[#ff6b4a] uppercase font-semibold block">
                  Port &amp; Rail Connectivity
                </span>
                <p className="text-slate-300 text-xs leading-relaxed">{selectedBranch.connectivity}</p>
              </div>
            </div>

            {/* Direct Branch Contact Buttons */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex flex-wrap items-center gap-3">
                {selectedBranch.phone && (
                  <div className="flex items-center gap-1.5 text-slate-300 font-mono">
                    <Phone className="w-3.5 h-3.5 text-[#ff6b4a]" />
                    <span>{selectedBranch.phone}</span>
                  </div>
                )}
                {selectedBranch.mobile && (
                  <div className="flex items-center gap-1.5 text-slate-300 font-mono">
                    <Phone className="w-3.5 h-3.5 text-[#ff6b4a]" />
                    <span>{selectedBranch.mobile}</span>
                  </div>
                )}
              </div>

              <a
                href={
                  Array.isArray(selectedBranch.email)
                    ? `mailto:${selectedBranch.email[0]}`
                    : `mailto:${selectedBranch.email}`
                }
                className="inline-flex items-center gap-1.5 bg-[#c42f0b] hover:bg-[#a82506] text-white text-xs font-semibold px-4 py-2 rounded transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Station</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 02: NATIONAL DIRECTORY (QUIET 2-COLUMN GRID)
      ───────────────────────────────────────────────────────────── */}
      <section className="pt-2">
        <div className="pb-6 border-b border-slate-200">
          <div className="text-xs font-mono text-[#c42f0b] uppercase tracking-widest font-semibold mb-1">
            02 / National Station Directory
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0b2144]">
            Complete Pan-India Directory
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
            Direct operational contact details and registered physical addresses for all 10 corporate branch stations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
          {BRANCHES.map((b) => (
            <div
              key={b.id}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4 hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-[#c42f0b]">
                    {b.region}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{b.name} Station</span>
                </div>

                <h3 className="text-xl font-bold text-[#0b2144] tracking-tight mt-3">
                  {b.displayName}
                </h3>
                <p className="text-xs font-mono text-slate-500 mt-0.5">{b.role}</p>

                <div className="mt-3 flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>{b.address}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-3 font-mono text-slate-600">
                  {b.phone && (
                    <div className="flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-[#c42f0b]" />
                      <span>{b.phone}</span>
                    </div>
                  )}
                  {b.mobile && (
                    <div className="flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-[#c42f0b]" />
                      <span>{b.mobile}</span>
                    </div>
                  )}
                </div>

                <a
                  href={Array.isArray(b.email) ? `mailto:${b.email[0]}` : `mailto:${b.email}`}
                  className="font-semibold text-[#0b2144] hover:text-[#c42f0b] inline-flex items-center gap-1 transition-colors"
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
          SECTION 03: GLOBAL ALLIANCES (190+ COUNTRIES)
      ───────────────────────────────────────────────────────────── */}
      <section className="pt-2">
        <div className="pb-6 border-b border-slate-200">
          <div className="text-xs font-mono text-[#c42f0b] uppercase tracking-widest font-semibold mb-1">
            03 / Global Forwarding Alliances
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0b2144]">
            190+ Countries Through Accredited Networks
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
            Certified partner representation across every major ocean container gateway and international airport worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {GLOBAL_ALLIANCES.map((alliance, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs flex items-center gap-4 group hover:border-[#c42f0b]/30 transition-colors"
            >
              <div className="relative w-14 h-12 shrink-0 bg-slate-50 rounded-lg p-1 border border-slate-100 flex items-center justify-center">
                <Image src={alliance.logo} alt={alliance.name} fill className="object-contain p-1" />
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
