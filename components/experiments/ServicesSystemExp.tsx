"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Plane, Anchor, ShieldCheck, Warehouse, ShieldAlert, Boxes, CheckCircle2 } from "lucide-react";

interface ServiceSystemItem {
  id: string;
  index: string;
  name: string;
  tagline: string;
  leadParagraph: string;
  image: string;
  icon: React.ElementType;
  pillars: {
    title: string;
    description: string;
  }[];
  capabilities: string[];
}

const SERVICES_SYSTEM_DATA: ServiceSystemItem[] = [
  {
    id: "air-services",
    index: "01",
    name: "Air Services",
    tagline: "International Air Carriage & Dedicated Charter Solutions",
    leadParagraph:
      "Freyer’s team of dedicated experts will handle your airfreight cargo with consistent efficiency, offering you the best option to meet your needs for each shipment. Wherever you are shipping, with a deadline a week away or tomorrow, our wide portfolio of services will meet and exceed your expectations.",
    image: "/images/Air-Services.jpg",
    icon: Plane,
    pillars: [
      {
        title: "International Air Carriage",
        description:
          "Global air transportation services designed to offer a flexible and reliable solution. We offer standard and expedited services based on the requirements of your shipment, capacity options, space availability, and global end-to-end shipment visibility.",
      },
      {
        title: "Dedicated Air Charter",
        description:
          "When dedicated freighter capacity is needed, our team crafts tailored Charter solutions whether addressing capacity shortfalls, shipping to remote destinations, or executing emergency project cargo.",
      },
    ],
    capabilities: [
      "Temperature Controlled Shipments",
      "Dangerous Goods Compliance",
      "High Value Cargo Escort",
      "Perishable Goods Logistics",
      "White Glove Deliveries",
      "Direct AWB Issuance",
    ],
  },
  {
    id: "ocean-services",
    index: "02",
    name: "Ocean Services",
    tagline: "FCL Carrier Allocations & Dependable Weekly LCL Consolidation",
    leadParagraph:
      "We deliver cost-effective and efficient solutions by leveraging our long established carrier relationships with years of expertise in ocean freight. With reliable scheduling, global visibility, and a customer-first mentality, you can count on Freyer to deliver on each and every ocean shipment.",
    image: "/images/Ocean-Services.jpg",
    icon: Anchor,
    pillars: [
      {
        title: "Full Container Load (FCL)",
        description:
          "Secure capacity and routing across premier ocean carrier agreements. We negotiate competitive service contracts to pass space security, scheduled sailings, and pricing benefits directly to our customers.",
      },
      {
        title: "Less than Container Load (LCL)",
        description:
          "Move freight as soon as it is ready without waiting to fill a full box. Weekly scheduled consolidations into and out of major global ports, reducing inventory holding costs and maximizing flexibility.",
      },
    ],
    capabilities: [
      "Major Liner Contract Rates",
      "Weekly Scheduled LCL Sailings",
      "Port-to-Port & Door-to-Door",
      "Reefer & Special Equipment",
      "Terminal Handling Governance",
      "Bill of Lading Documentation",
    ],
  },
  {
    id: "customs-services",
    index: "03",
    name: "Customs Services",
    tagline: "AEO-LO Certified In-House Customs House Brokerage",
    leadParagraph:
      "Clients benefit from personal service and state-of-the-art EDI technology to facilitate import and export declarations to Customs of India and Participating Government Agencies. Our compliance specialists assist in complying with existing regulations and proactively prepare for tariff changes.",
    image: "/images/Customs-Services.jpg",
    icon: ShieldCheck,
    pillars: [
      {
        title: "Export Compliance Governance",
        description:
          "Export Compliance is more than filing Electronic Export Information accurately and timely. Designated Export Specialists ensure full adherence with Indian and overseas regulatory export frameworks.",
      },
      {
        title: "Import Compliance & Licensing",
        description:
          "Managed by a dedicated team of Licensed Customs Brokers at corporate and branch levels. Extreme focus on tariff classifications, duty optimization, and direct port delivery protocols.",
      },
    ],
    capabilities: [
      "CBIC AEO-LO Certified (INAAQCA4076M0F243)",
      "Direct ICEGATE EDI Filing",
      "In-House Licensed Customs Brokers",
      "HSN Duty Assessment & Advisory",
      "Bonded Warehouse Clearance",
      "Participating Government Agencies (PGA)",
    ],
  },
  {
    id: "warehouse",
    index: "04",
    name: "Warehouse & 3PL",
    tagline: "1,000,000+ Sq. Ft. Multi-Client Facilities & CFS Operations",
    leadParagraph:
      "Our efficiency-driven, multi-client facilities enable us to create turnkey warehousing solutions to help clients exceed their customers' expectations. Close proximity to major ports, rail ramps, and national highways.",
    image: "/images/Warehouse.jpg",
    icon: Warehouse,
    pillars: [
      {
        title: "1,000,000+ Sq. Ft. Footprint",
        description:
          "Footprint that equates to over 1,000,000 square feet. All facilities are Warehouse Management Systems (WMS) enabled with multi-client and multi-location capabilities.",
      },
      {
        title: "CFS to Full 3PL Partner",
        description:
          "Warehousing expertise ranges from operations as a Container Freight Station (CFS) to that of a fully outsourced third-party logistics (3PL) distribution partner.",
      },
    ],
    capabilities: [
      "WMS Real-Time Inventory Control",
      "Pick, Pack & Order Fulfillment",
      "Cross-Docking & Transloading",
      "Vendor Consolidation Programs",
      "Kitting, Tagging & (Re) Packaging",
      "Short & Long-Term Bonded Storage",
    ],
  },
  {
    id: "risk-management",
    index: "05",
    name: "Risk Management",
    tagline: "Consulting Analytics & Comprehensive Marine Cargo Insurance",
    leadParagraph:
      "Our team of Risk Management and Insurance experts work closely with clients to evaluate where exposure to vulnerabilities may exist. We help reduce your risk, insure against unforeseen circumstances, and protect your bottom line.",
    image: "/images/Risk-Management.jpg",
    icon: ShieldAlert,
    pillars: [
      {
        title: "Risk Management Consulting",
        description:
          "Defined risk analytics and case modeling to predict probability factors based on event types. We take a preemptive, three-dimensional approach to the preservation of your supply chain and contractual commitments.",
      },
      {
        title: "Comprehensive Cargo Insurance",
        description:
          "Traditional carrier liability is limited by law and conventions. We provide customized insurance solutions with compensation up to the full insured value of your goods, regardless of cause.",
      },
    ],
    capabilities: [
      "All Risk Marine Cargo Coverage",
      "Spot Insurance for Critical Shipments",
      "Annual Blanket Policies",
      "Supply Chain Vulnerability Modeling",
      "Dedicated Claims Advocacy",
      "Full Insured Value Recovery",
    ],
  },
  {
    id: "project-cargo",
    index: "06",
    name: "Project Cargo",
    tagline: "Heavy Industrial Engineering, Energy Corridors & Breakbulk",
    leadParagraph:
      "Moving oversized cargo is no easy task. Freyer International's Project Cargo team has the knowledge, experience, resources, and network to take care of your entire logistics chain from A to Z across energy, offshore, wind farms, machinery, and metals.",
    image: "/images/Project-Cargo.jpg",
    icon: Boxes,
    pillars: [
      {
        title: "Heavy Lift & Out-of-Gauge Engineering",
        description:
          "From disassembly at construction sites to transport, intermediate storage, crane loading aboard vessel, and final foundation delivery. Verified single moves up to 482 MT and 37.6 MT boom crane assemblies.",
      },
      {
        title: "Turnkey Route Logistics",
        description:
          "Throughout the chain, we continuously engineer the smartest routes, calculate civil clearances, obtain road permits, and execute multi-modal transits under strict safety governance.",
      },
    ],
    capabilities: [
      "Energy & Offshore Sector Specialization",
      "Civil Route & Bridge Survey Logistics",
      "Breakbulk on Container Vessels (BBK)",
      "Roll-on / Roll-off (RORO) Executions",
      "Heavy Lift Crane Operations",
      "Road Transportation Permit Clearance",
    ],
  },
];

export function ServicesSystemExp() {
  const [activeTabId, setActiveTabId] = useState<string>("air-services");
  const activeService =
    SERVICES_SYSTEM_DATA.find((s) => s.id === activeTabId) || SERVICES_SYSTEM_DATA[0];

  return (
    <section id="services-system" className="py-24 sm:py-32 bg-[#050c18] text-white overflow-hidden selection:bg-[#e1390f] selection:text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400 block mb-3">
            Core Service Architecture
          </span>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight">
            Six Capabilities. <br />
            <span className="font-semibold text-white">One Unified Logistics System.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Every discipline is integrated under continuous operational governance, providing complete
            control from port approach and customs clearance to 3PL fulfillment.
          </p>
        </div>

        {/* Continuous Horizontal Selector Strip */}
        <div className="border-b border-white/10 mb-12 overflow-x-auto scrollbar-none pb-2">
          <div className="flex items-center gap-2 sm:gap-4 min-w-max">
            {SERVICES_SYSTEM_DATA.map((service) => {
              const isActive = service.id === activeTabId;
              const Icon = service.icon;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTabId(service.id)}
                  className={`flex items-center gap-3 px-5 py-3.5 rounded-lg text-left transition-all border ${
                    isActive
                      ? "bg-white/10 border-amber-400/50 text-white shadow-lg shadow-black/20"
                      : "bg-white/[0.02] border-white/5 text-slate-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  <span
                    className={`text-xs font-mono font-medium ${
                      isActive ? "text-amber-400" : "text-slate-500"
                    }`}
                  >
                    {service.index}
                  </span>
                  <Icon
                    className={`w-4 h-4 ${isActive ? "text-amber-400" : "text-slate-400"}`}
                  />
                  <span className="text-sm font-medium tracking-wide whitespace-nowrap">
                    {service.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Stage Canvas */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
          >
            {/* Left Stage Column: Visual & Capabilities Checklist */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Photo Frame */}
              <div className="relative aspect-[16/11] w-full rounded-xl overflow-hidden border border-white/10 bg-[#081324] shadow-2xl">
                <Image
                  src={activeService.image}
                  alt={activeService.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover object-center brightness-90"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081324] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/80">
                  <span>Capability Tier {activeService.index}</span>
                  <span className="text-amber-400">{activeService.name}</span>
                </div>
              </div>

              {/* Verified Capabilities Checklist */}
              <div className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-4">
                  Operational Competencies
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Stage Column: Text Hierarchy & Verified Pillars */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400 block mb-2">
                  {activeService.tagline}
                </span>
                <h3 className="text-2xl sm:text-4xl font-light text-white tracking-tight leading-tight">
                  {activeService.name}
                </h3>
                <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                  {activeService.leadParagraph}
                </p>
              </div>

              {/* Core Pillars Grid */}
              <div className="grid grid-cols-1 gap-4 mt-2">
                {activeService.pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all"
                  >
                    <h4 className="text-base font-semibold text-white tracking-wide mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed font-sans">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
