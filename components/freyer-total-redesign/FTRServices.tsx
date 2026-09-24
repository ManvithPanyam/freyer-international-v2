"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "motion/react";
import {
  Ship,
  Plane,
  FileCheck2,
  Warehouse,
  ShieldAlert,
  HardHat,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";

interface ServiceItem {
  id: string;
  step: string;
  name: string;
  tagline: string;
  icon: React.ElementType;
  description: string;
  image: string;
  imageAlt: string;
  capabilities: string[];
  metrics: { label: string; value: string }[];
  terminals: string;
  href: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "ocean-freight",
    step: "01",
    name: "Ocean Freight Forwarding",
    tagline: "Contracted Tier-1 carrier allocations across global blue-water trade lanes.",
    icon: Ship,
    description:
      "Direct vessel capacity contracts for Full Container Load (FCL) and Less-than-Container Load (LCL) consolidation. Operating through major Indian gateway ports including Chennai, Nhava Sheva (JNPT), Mundra, Tuticorin (VOC Port), and Visakhapatnam to hubs across the US, Europe, Middle East, and East Asia.",
    image: "/images/Ocean-Services.jpg",
    imageAlt: "Container vessel operations at seaport",
    capabilities: [
      "FCL Full Container Load",
      "LCL Cargo Consolidation",
      "Tier-1 Liner Service Contracts",
      "Reefer & Temperature Control",
      "Out-of-Gauge (OOG) Open Top",
      "Direct Port Bill of Lading",
    ],
    metrics: [
      { label: "Sailing Schedule", value: "Weekly Fixed Days" },
      { label: "Carrier Direct", value: "Tier-1 Alliances" },
      { label: "Tracking Support", value: "Real-Time Milestone" },
    ],
    terminals: "Chennai Port · Nhava Sheva (JNPT) · Mundra · Tuticorin · Vizag",
    href: "/services",
  },
  {
    id: "air-freight",
    step: "02",
    name: "Scheduled Air Freight",
    tagline: "IATA-approved priority cargo handling, bellyhold, and dedicated air charters.",
    icon: Plane,
    description:
      "Endorsed IATA cargo agent providing rapid transit for high-value, perishable, and time-critical shipments. Scheduled bellyhold allocation with leading global airlines, direct apron handling, and full or part aircraft charters connecting Indian metro air cargo terminals with worldwide destinations.",
    image: "/images/Air-Services.jpg",
    imageAlt: "Air cargo freighter loading operations",
    capabilities: [
      "IATA Approved Agency",
      "Scheduled Bellyhold Space",
      "Full & Part Aircraft Charter",
      "Pharma Cold Chain (GDP)",
      "Dangerous Goods (DGR)",
      "Express Customs Airport Clearance",
    ],
    metrics: [
      { label: "Accreditation", value: "IATA Cargo Agent" },
      { label: "Transit Option", value: "Priority & Consolidated" },
      { label: "Special Cargo", value: "DGR & Pharma Certified" },
    ],
    terminals: "Chennai (MAA) · Delhi (DEL) · Mumbai (BOM) · Bengaluru (BLR)",
    href: "/services",
  },
  {
    id: "customs-brokerage",
    step: "03",
    name: "Licensed Customs Brokerage",
    tagline: "In-house CBIC AEO-LO Tier 2 licensed customs brokerage across Indian ports.",
    icon: FileCheck2,
    description:
      "In-house licensed Customs Brokers executing regulatory classification, valuation, duty calculation, and PGA clearance through Indian Customs EDI. Direct station presence at air cargo complexes, seaports, and inland container depots (ICDs) to prevent demurrage and detention.",
    image: "/images/Customs-Services.jpg",
    imageAlt: "Customs brokerage inspection and clearance",
    capabilities: [
      "CBIC AEO-LO Tier 2 Certified",
      "Licensed Customs House Agent",
      "HS Code Tariff Classification",
      "PGA Liaison (FSSAI, CDSCO, Plant)",
      "Duty Drawback & SVB Filings",
      "Bonded Warehouse Transfer",
    ],
    metrics: [
      { label: "License Status", value: "CBIC AEO-LO Tier 2" },
      { label: "License Ref", value: "INAAQCA4076M0F243" },
      { label: "Clearance Rate", value: "Zero Demurrage Focus" },
    ],
    terminals: "Air Cargo Gates · Seaports · Major Dry Ports / ICDs",
    href: "/services",
  },
  {
    id: "warehousing",
    step: "04",
    name: "Contract Warehousing & 3PL",
    tagline: "Over 1,000,000 square feet of WMS-managed storage across strategic logistics hubs.",
    icon: Warehouse,
    description:
      "Enterprise contract warehousing infrastructure situated along strategic national highway corridors and near primary container terminals. Features modern Warehouse Management Systems (WMS), palletized racking, bonded storage, Container Freight Station (CFS) management, and pick-and-pack fulfillment.",
    image: "/images/Warehouse.jpg",
    imageAlt: "Modern high-bay distribution center with racking",
    capabilities: [
      "1,000,000+ Sq Ft Capacity",
      "WMS Cloud Inventory Control",
      "Customs Bonded Facilities",
      "CFS Station Management",
      "Pick, Pack & Kitting",
      "Cross-Docking & Distribution",
    ],
    metrics: [
      { label: "Total Space", value: "1,000,000+ SQ FT" },
      { label: "Technology", value: "WMS Cloud Live API" },
      { label: "Facility Type", value: "Bonded & General CFS" },
    ],
    terminals: "Chennai · Mumbai / Bhiwandi · Bengaluru · Delhi NCR",
    href: "/services",
  },
  {
    id: "risk-management",
    step: "05",
    name: "Marine Cargo Risk Management",
    tagline: "Comprehensive marine insurance and asset indemnity covering up to 100% value.",
    icon: ShieldAlert,
    description:
      "Tailored marine cargo insurance and comprehensive indemnity structures exceeding standard carrier liability limits. Tailored all-risk coverage, spot policies for high-value consignments, and proactive marine survey inspections to safeguard international supply chain capital.",
    image: "/images/Risk-Management.jpg",
    imageAlt: "Marine surveyor inspecting cargo containers",
    capabilities: [
      "All-Risk Marine Cargo Cover",
      "Up to 100% Insured Value",
      "Spot & Blanket Corporate Policies",
      "Pre-Shipment Cargo Surveys",
      "In-House Claims Advocacy",
      "Cold Chain Excursion Indemnity",
    ],
    metrics: [
      { label: "Coverage Scope", value: "Warehouse-to-Warehouse" },
      { label: "Compensation", value: "Full Insured Value" },
      { label: "Survey Capability", value: "On-Dock Marine Survey" },
    ],
    terminals: "Pan-India & International Sea/Air Corridors",
    href: "/services",
  },
  {
    id: "project-cargo",
    step: "06",
    name: "Project Cargo & Heavy-Lift",
    tagline: "Heavy industrial breakbulk engineering, hydraulic transport, and vessel stowing.",
    icon: HardHat,
    description:
      "The heavy-engineering discipline of Freyer. Mobilizing specialized route surveys, civil bridge clearances, multi-axle hydraulic trailers, and vessel hold engineering. Documented records include 482 metric tons of breakbulk from Shanghai to Jebel Ali and a 37.6 MT boom crane from Venice to Mundra.",
    image: "/images/Project-Cargo.jpg",
    imageAlt: "Heavy lift mobile crane hoisting industrial machinery",
    capabilities: [
      "Breakbulk (BBK) Hold Stowage",
      "Heavy Lift Vessel Chartering",
      "Multi-Axle Hydraulic Transport",
      "Route Engineering & Bridge Surveys",
      "Port Stevedoring & Lashing",
      "Police & Civil Road Transit Permits",
    ],
    metrics: [
      { label: "Documented Record", value: "482 Metric Tons" },
      { label: "Crane Record", value: "37.6 MT (Venice ➔ Mundra)" },
      { label: "Methodology", value: "Full Route Survey & CAD" },
    ],
    terminals: "Mundra · Nhava Sheva · Chennai Port · Visakhapatnam",
    href: "/projects",
  },
];

export function FTRServices() {
  const [activeServiceId, setActiveServiceId] = useState<string>("ocean-freight");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  const activeService = SERVICES.find((s) => s.id === activeServiceId) ?? SERVICES[0];

  return (
    <section
      id="services-matrix"
      ref={sectionRef}
      aria-label="Freyer Logistics Core Services"
      className="relative bg-[#181A1F] text-[#F8F7F4] py-24 sm:py-32 border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

        {/* ── SECTION HEADER ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-12 border-b border-white/10 gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.24em] text-slate-300 font-medium">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e1390f] opacity-80" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e1390f]" />
              </span>
              <span>Core Infrastructure &amp; Disciplines</span>
            </div>
            <h2
              className="text-white font-black tracking-[-0.02em] leading-[0.92] uppercase"
              style={{
                fontFamily: "var(--font-barlow-condensed), system-ui, sans-serif",
                fontSize: "var(--token-text-4xl)",
              }}
            >
              SIX DISCIPLINES. <br />
              <span className="text-white">
                ONE OPERATIONAL STANDARD
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              Every shipment is executed with institutional rigor. From scheduled air and ocean
              container freight to CBIC licensed customs brokerage and heavy-lift breakbulk engineering.
            </p>
          </div>

          <div className="hidden lg:block text-right space-y-1">
            <div className="text-xs font-mono uppercase tracking-widest text-[#e1390f]">
              Operational Footprint
            </div>
            <div className="text-sm font-mono text-white/60">
              10 Indian Stations · Tier-1 Global Port Gateways
            </div>
          </div>
        </div>

        {/* ── INTERACTIVE SERVICE TABS ── */}
        <div className="py-6 border-b border-white/10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {SERVICES.map((s) => {
            const isActive = s.id === activeService.id;
            const Icon = s.icon;
            return (
              <button
                key={s.id}
                onClick={() => setActiveServiceId(s.id)}
                className={[
                  "p-3.5 rounded-xl border text-left transition-all duration-150 flex flex-col justify-between gap-3 group",
                  isActive
                    ? "bg-white/[0.08] border-[#e1390f] shadow-lg shadow-[#e1390f]/15"
                    : "bg-white/[0.02] border-white/8 hover:bg-white/[0.05] hover:border-white/20",
                ].join(" ")}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={[
                      "text-[10px] font-mono font-bold tracking-wider",
                      isActive ? "text-[#e1390f]" : "text-white/30 group-hover:text-white/60",
                    ].join(" ")}
                  >
                    {s.step}
                  </span>
                  <Icon
                    className={[
                      "w-4 h-4 transition-colors",
                      isActive ? "text-[#e1390f]" : "text-white/30 group-hover:text-white/70",
                    ].join(" ")}
                  />
                </div>
                <div
                  className={[
                    "text-xs font-mono font-bold tracking-tight line-clamp-1",
                    isActive ? "text-white" : "text-slate-300 group-hover:text-white",
                  ].join(" ")}
                >
                  {s.name.split(" ")[0]} {s.name.split(" ")[1] ?? ""}
                </div>
              </button>
            );
          })}
        </div>

        {/* ── ACTIVE SERVICE DOSSIER ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="pt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
          >
            {/* LEFT: Core Capability Details (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#e1390f] mb-2">
                  Discipline {activeService.step}
                </div>
                <h3
                  className="font-bold text-white tracking-tight"
                  style={{ fontSize: "var(--token-text-2xl)" }}
                >
                  {activeService.name}
                </h3>
                <p className="text-base text-slate-200 font-medium leading-relaxed mt-3">
                  {activeService.tagline}
                </p>
                <p className="text-sm text-slate-300 font-light leading-relaxed mt-3">
                  {activeService.description}
                </p>
              </div>

              {/* Verified Capabilities Checklist */}
              <div className="space-y-3 border-t border-white/10 pt-6">
                <div className="text-2xs font-mono uppercase tracking-wider text-slate-400">
                  Operational Capabilities
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.capabilities.map((cap) => (
                    <div
                      key={cap}
                      className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.03] border border-white/6 text-xs font-mono text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#e1390f] shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                {activeService.metrics.map((m) => (
                  <div key={m.label} className="space-y-1">
                    <div className="text-2xs font-mono uppercase tracking-wider text-slate-400">
                      {m.label}
                    </div>
                    <div className="text-sm font-bold font-mono text-white">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Cluster */}
              <div className="pt-2 flex items-center gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon
                >
                  Request {activeService.name.split(" ")[0]} Rate
                </Button>
                <TextLink
                  href={activeService.href}
                  icon={<ChevronRight className="w-3.5 h-3.5 text-[#e1390f]" />}
                >
                  Full Service Specifications
                </TextLink>
              </div>
            </div>

            {/* RIGHT: Visual Anchor (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                <Image
                  src={activeService.image}
                  alt={activeService.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Bottom Terminal Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono">
                  <div className="text-[10px] text-white/40 uppercase tracking-wider mb-0.5">
                    Operating Gateways
                  </div>
                  <div className="text-white font-medium truncate">
                    {activeService.terminals}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
