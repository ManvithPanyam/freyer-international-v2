"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Building2,
  ShieldCheck,
  Anchor,
  Plane,
} from "lucide-react";
import { HUB_COORDS } from "@/components/home/indiaMapData";

interface StationDetail {
  id: string;
  city: string;
  role: string;
  category: "Headquarters" | "Gateway Hub" | "Port Office" | "Industrial Hub";
  address: string;
  phone: string;
  email: string;
  gateway: string;
  capabilities: string[];
}

const STATIONS: StationDetail[] = [
  {
    id: "bengaluru",
    city: "Bengaluru",
    role: "Corporate Registered Office & Global Control Tower",
    category: "Headquarters",
    address: "No.19, KMJ AVEN, 3rd Floor, Outer Ring Road, Marathahalli, Bengaluru - 560037, Karnataka",
    phone: "+91 80 4120 0300",
    email: "blr.corporate@freyerinternational.com",
    gateway: "Kempegowda Int'l Airport (BLR) Cargo & Whitefield ICD",
    capabilities: ["Central Control Tower", "Air Charter Operations", "AEO Governance", "ERP Integrations"],
  },
  {
    id: "chennai_egmore",
    city: "Chennai (Central)",
    role: "Primary Maritime & Project Cargo Operations Hub",
    category: "Port Office",
    address: "TAGA Tower, New No: 45 Old No 20, 1st Floor, 2nd Street, Sait Colony, Egmore, Chennai - 600008, Tamil Nadu",
    phone: "+91 44 4319 1919",
    email: "chennai.ops@freyerinternational.com",
    gateway: "Chennai Port (CITPL / CCTPL) & Kamarajar Port (Ennore)",
    capabilities: ["Ocean FCL / LCL Consolidation", "Heavy Lift Quayside Stevedoring", "Customs Brokerage House", "Turnkey Breakbulk"],
  },
  {
    id: "chennai_airport",
    city: "Chennai Airport",
    role: "Dedicated Airfreight & Cold-Chain Terminal",
    category: "Gateway Hub",
    address: "No.2 Ambedkar Street, G.S.T. Road, Meenambakkam, Chennai - 600017, Tamil Nadu",
    phone: "+91 44 4319 1920",
    email: "chennai.air@freyerinternational.com",
    gateway: "Chennai International Airport Cargo Complex (MAA)",
    capabilities: ["IATA Cargo Agency Operations", "Pharma Cold-Chain (2°C - 8°C)", "24/7 AOG Emergency Desk", "Airside Customs Inspection"],
  },
  {
    id: "mumbai",
    city: "Mumbai",
    role: "West Coast Maritime & High-Volume Gateway",
    category: "Port Office",
    address: "A - 401, Polaris Building, Off Makwana Road, Marol, Andheri (East), Mumbai - 400059, Maharashtra",
    phone: "+91 22 4619 1301",
    email: "mumbai.ops@freyerinternational.com",
    gateway: "Jawaharlal Nehru Port Trust (JNPT / Nhava Sheva) & BOM Air Cargo",
    capabilities: ["Direct Port Delivery (DPD) Priority", "Transpacific / European Ocean Booking", "DGS Certified HAZMAT", "Bonded Warehouse Logistics"],
  },
  {
    id: "delhi",
    city: "Delhi / NCR",
    role: "North India Industrial Gateway Hub",
    category: "Gateway Hub",
    address: "Plot No. 524, First Floor, Udyog Vihar Phase 5, Gurugram - 122016, Haryana",
    phone: "+91 124 406 8388",
    email: "delhi.ops@freyerinternational.com",
    gateway: "Indira Gandhi Int'l Airport (DEL) Cargo & Tughlakabad (TKD) ICD",
    capabilities: ["Automotive Supply Chain Hub", "North India Air Cargo Consolidations", "Cross-Border Multimodal Rail", "Export Documentation Support"],
  },
  {
    id: "hyderabad",
    city: "Hyderabad",
    role: "Deccan Pharma & Aerospace Logistics Desk",
    category: "Gateway Hub",
    address: "#109, 1st Floor, Ashoka Bhoopal Chambers, S.P. Road, Secunderabad - 500003, Telangana",
    phone: "+91 40 4856 1797",
    email: "hyd.ops@freyerinternational.com",
    gateway: "Rajiv Gandhi Int'l Airport (HYD) Cargo Complex & Sanathnagar ICD",
    capabilities: ["GDP Temperature-Controlled Pharma", "Time-Definite Air Exports", "Clinical Trial Packaging", "Specialized Life Sciences SOPs"],
  },
  {
    id: "visakhapatnam",
    city: "Visakhapatnam",
    role: "East Coast Deep-Water Seaport Desk",
    category: "Port Office",
    address: "YCN Complex, D.No.58-1-256, NAD X Road, Visakhapatnam - 530009, Andhra Pradesh",
    phone: "+91 891 278 4910",
    email: "vizag.ops@freyerinternational.com",
    gateway: "Visakhapatnam Port Trust (VPT) & Gangavaram Port",
    capabilities: ["Steel & Mineral Dry Bulk", "Breakbulk Heavy Cargo Lifts", "Bay of Bengal Coastal Shipping", "Vessel Agency Coordination"],
  },
  {
    id: "coimbatore",
    city: "Coimbatore",
    role: "Industrial Manufacturing & Textile Corridor",
    category: "Industrial Hub",
    address: "S.F.No. 407/1, Avinashi Road, Peelamedu, Coimbatore - 641004, Tamil Nadu",
    phone: "+91 422 439 1919",
    email: "cbe.ops@freyerinternational.com",
    gateway: "Irugur ICD & Coimbatore International Airport (CJB)",
    capabilities: ["Textile Machinery Logistics", "Pump & Foundry Engineering Freight", "Feeder Road Movement to Cochin/Tuticorin", "Factory Stuffing Coordination"],
  },
  {
    id: "tuticorin",
    city: "Tuticorin",
    role: "Southern Deep-Sea Maritime Gateway",
    category: "Port Office",
    address: "No. 4/128-B, Madurai Road, Meelavittan, Tuticorin - 628008, Tamil Nadu",
    phone: "+91 461 234 1919",
    email: "tuticorin.ops@freyerinternational.com",
    gateway: "V.O. Chidambaranar Port (VOCPT / Tuticorin)",
    capabilities: ["Direct Colombo Transshipment Feeders", "Agricultural & Perishable Reefer Containers", "Breakbulk Raw Materials", "Round-the-Clock Vessel Berthing"],
  },
  {
    id: "ahmedabad",
    city: "Ahmedabad",
    role: "Gujarat Commercial & Chemical Corridor",
    category: "Industrial Hub",
    address: "304, Saffron Building, Near Panchwati Cross Road, Ambawadi, Ahmedabad - 380006, Gujarat",
    phone: "+91 79 4891 1919",
    email: "gujarat.ops@freyerinternational.com",
    gateway: "Mundra Port (INMUN), Kandla Port & Khodiyar ICD",
    capabilities: ["Chemical & HAZMAT Logistics", "Heavy Engineering ODC Clearance", "Solar Power Equipment Handling", "Direct Mundra Intermodal Access"],
  },
];

export function MinimalLocations() {
  const [selected, setSelected] = useState<string>("bengaluru");
  const station = STATIONS.find((s) => s.id === selected) ?? STATIONS[0];
  const hq = HUB_COORDS.find((hub) => hub.id === "bengaluru") ?? HUB_COORDS[0];

  return (
    <div className="overflow-hidden rounded-2xl sm:rounded-3xl bg-[#06101f] text-white border border-slate-800 shadow-2xl">
      <div className="grid lg:grid-cols-12">
        {/* SVG Interactive India Map Column */}
        <div className="lg:col-span-7 relative min-h-[520px] sm:min-h-[600px] lg:min-h-[720px] overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(30,58,95,.35),transparent_60%)]" />

          {/* Interactive SVG */}
          <svg
            viewBox="0 0 600 620"
            className="absolute inset-0 h-full w-full p-6 sm:p-12"
            aria-label="Freyer India operating hubs network map"
          >
            {/* Outline of India */}
            <path
              d="M270 40L310 70L325 110L360 130L400 160L450 170L520 180L550 210L530 240L460 250L420 280L380 340L360 410L330 480L300 560L270 540L250 470L220 400L190 350L170 300L140 260L160 210L210 170L240 120Z"
              fill="#091a31"
              stroke="#27456d"
              strokeWidth="2"
              opacity=".9"
            />

            {/* Network Nodes */}
            {HUB_COORDS.map((hub) => {
              const active = hub.id === selected;
              return (
                <g
                  key={hub.id}
                  onClick={() => setSelected(hub.id)}
                  className="cursor-pointer group"
                >
                  {/* Corridors from HQ */}
                  <line
                    x1={hq.cx}
                    y1={hq.cy}
                    x2={hub.cx}
                    y2={hub.cy}
                    stroke={active ? "#ff6846" : "#1b3555"}
                    strokeWidth={active ? "1.8" : ".6"}
                    strokeDasharray={active ? undefined : "3 5"}
                    opacity={hub.id === "bengaluru" ? 0 : 1}
                  />

                  {/* Pulsing Outer Ring on Active Hub */}
                  {active && (
                    <circle
                      cx={hub.cx}
                      cy={hub.cy}
                      r="16"
                      fill="none"
                      stroke="#ff6846"
                      strokeWidth="1.5"
                      opacity=".6"
                      className="animate-ping"
                      style={{ animationDuration: "2.5s" }}
                    />
                  )}

                  {/* Pin Circle */}
                  <circle
                    cx={hub.cx}
                    cy={hub.cy}
                    r={active ? 8 : 4.5}
                    fill={active ? "#c42f0b" : "#06101f"}
                    stroke={active ? "#fff" : "#6f839c"}
                    strokeWidth={active ? 2.5 : 1.2}
                    className="transition-all duration-200"
                  />

                  {/* City Label */}
                  <text
                    x={hub.cx + 12}
                    y={hub.cy - 8}
                    className={`font-mono transition-colors ${
                      active
                        ? "fill-white text-[12px] font-bold"
                        : "fill-slate-400 text-[10px] group-hover:fill-slate-200"
                    }`}
                  >
                    {hub.city}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Top Network Stats Badge */}
          <div className="absolute left-6 top-6 sm:left-10 sm:top-10">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#ff6846] font-bold">
              National Operating Footprint
            </span>
            <div className="mt-1 text-xl sm:text-2xl font-bold tracking-tight text-white">
              9 Branches Across 8 Cities
            </div>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              Dedicated company offices at vital maritime ports and air complexes
            </p>
          </div>

          {/* Bottom Controls */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-10 sm:right-10 flex items-end justify-between text-xs font-mono text-slate-500">
            <span>Select pin to inspect branch facility</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              100% In-House Physical Operations
            </span>
          </div>
        </div>

        {/* Right Station Details Card */}
        <div className="lg:col-span-5 flex flex-col p-6 sm:p-10 lg:p-12 justify-between bg-white/[0.02]">
          <div>
            <div className="flex items-center justify-between gap-2 pb-4 border-b border-white/10">
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-slate-400">
                Operating Branch Specification
              </span>
              <span className="text-[11px] font-mono font-bold text-[#ff6846] bg-[#ff6846]/10 px-2.5 py-0.5 rounded-full border border-[#ff6846]/30">
                {station.category}
              </span>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={station.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="mt-6 space-y-6"
              >
                <div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                    {station.city}
                  </h2>
                  <div className="font-mono text-xs text-[#ff6846] mt-1 font-semibold">
                    {station.role}
                  </div>
                </div>

                {/* Address */}
                <div className="space-y-1.5 bg-white/5 border border-white/5 p-4 rounded-xl">
                  <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-[#ff6846]" />
                    <span>Registered Facility Address</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                    {station.address}
                  </p>
                </div>

                {/* Gateway Proximity */}
                <div className="space-y-1 bg-white/5 border border-white/5 p-3.5 rounded-xl font-mono text-xs">
                  <span className="text-slate-400 text-[10px] uppercase block">
                    Port / Airport Gateway Link
                  </span>
                  <div className="text-slate-100 font-semibold flex items-center gap-1.5">
                    <Anchor className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{station.gateway}</span>
                  </div>
                </div>

                {/* Capabilities */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    Core Operational Disciplines:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {station.capabilities.map((cap, i) => (
                      <div
                        key={i}
                        className="text-[11px] font-mono text-slate-300 bg-white/5 p-2 rounded-lg border border-white/5 flex items-center gap-1.5"
                      >
                        <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sanitized Corporate Contact Desk */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                  <a
                    href={`tel:${station.phone.replace(/[^0-9+]/g, "")}`}
                    className="flex items-center gap-2 p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-slate-200 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#ff6846] shrink-0" />
                    <div>
                      <span className="text-[9px] uppercase text-slate-400 block">Landline Desk</span>
                      <span className="font-bold">{station.phone}</span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${station.email}`}
                    className="flex items-center gap-2 p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-slate-200 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#ff6846] shrink-0" />
                    <div className="truncate">
                      <span className="text-[9px] uppercase text-slate-400 block">Official Desk</span>
                      <span className="font-bold truncate">{station.email}</span>
                    </div>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Hub Switcher Quick-Bar */}
          <div className="pt-8 mt-8 border-t border-white/10">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
              Quick Select Hub:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {STATIONS.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSelected(s.id)}
                  className={`text-xs font-mono px-2.5 py-1 rounded-md transition-colors ${
                    selected === s.id
                      ? "bg-[#ff6846] text-white font-bold"
                      : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {s.city}
                </button>
              ))}
            </div>

            <div className="mt-6 pt-4 flex items-center justify-between text-xs font-mono">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-white hover:text-[#ff6846] font-semibold transition-colors"
              >
                <span>Dispatch Tender / Booking to this Station</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
