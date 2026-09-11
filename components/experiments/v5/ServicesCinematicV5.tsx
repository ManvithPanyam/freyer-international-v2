"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export interface ServiceCatalogueItem {
  id: string;
  numeral: string;
  name: string;
  lead: string;
  image: string;
  aspectClass: string;
  transitionType: "verticalLift" | "horizontalDrift" | "apertureShutter" | "spatialDepth" | "analyticalSlide" | "deepZoom";
  environmentTone: string;
  keyPillars: {
    heading: string;
    body: string;
  }[];
  capabilities: string[];
}

export const SERVICES_CATALOGUE_V5: ServiceCatalogueItem[] = [
  {
    id: "air",
    numeral: "01",
    name: "Air Services",
    lead: "Freyer’s team of dedicated experts will handle your airfreight cargo with consistent efficiency, offering you the best option to meet your needs for each shipment. Wherever you are shipping, with a deadline a week away or tomorrow, our wide portfolio of services will meet and exceed your expectations.",
    image: "/images/Air-Services.jpg",
    aspectClass: "aspect-[16/9]",
    transitionType: "verticalLift",
    environmentTone: "bg-[#0a1526]",
    keyPillars: [
      {
        heading: "International Air Carriage",
        body: "Standard and expedited air transport based on the requirements of your shipment, capacity options, space availability, and global end-to-end shipment visibility.",
      },
      {
        heading: "Dedicated Charter",
        body: "When dedicated freighter capacity is needed, our team crafts tailored Charter solutions to address capacity shortfalls, remote destinations, or emergency shipments.",
      },
    ],
    capabilities: [
      "Temperature Controlled Shipments",
      "Dangerous Goods",
      "High Value Shipments",
      "Perishable Goods",
      "White Glove Shipments",
    ],
  },
  {
    id: "ocean",
    numeral: "02",
    name: "Ocean Services",
    lead: "We deliver cost effective and efficient solutions by leveraging our long established carrier relationships with years of expertise in ocean freight. With reliable scheduling, global visibility, and a customer first mentality, you can count on Freyer to deliver on each and every ocean shipment.",
    image: "/images/Ocean-Services.jpg",
    aspectClass: "aspect-[16/10]",
    transitionType: "horizontalDrift",
    environmentTone: "bg-[#061222]",
    keyPillars: [
      {
        heading: "Full Container Load (FCL)",
        body: "Securing capacity and routing across premier ocean carrier agreements, passing space security and competitive pricing directly to our customers.",
      },
      {
        heading: "Less than Container Load (LCL)",
        body: "Moving freight when it is ready without waiting to fill a full container, with dependable weekly sailings into and out of all major global locations.",
      },
    ],
    capabilities: [
      "Weekly Scheduled Sailings",
      "Carrier Contract Agreements",
      "Port-to-Port & Door-to-Door",
      "Special Equipment & Reefers",
      "Bill of Lading Documentation",
    ],
  },
  {
    id: "customs",
    numeral: "03",
    name: "Customs Services",
    lead: "Clients benefit from our personal service and state-of-the-art technology to facilitate import and export declarations to Customs of India and other Participating Government Agencies. Our team assists with regulatory compliance and rules changes.",
    image: "/images/Customs-Services.jpg",
    aspectClass: "aspect-[4/3]",
    transitionType: "apertureShutter",
    environmentTone: "bg-[#0d131f]",
    keyPillars: [
      {
        heading: "Export Compliance",
        body: "Dedicated Export Specialists ensuring accurate filing of Electronic Export Information and full adherence to government export regulations.",
      },
      {
        heading: "Import Compliance",
        body: "Managed by Licensed Customs Brokers at corporate and branch levels, ensuring freight moves with all regulatory requirements fully satisfied.",
      },
    ],
    capabilities: [
      "CBIC AEO-LO Certified (INAAQCA4076M0F243)",
      "Licensed Customs Brokers",
      "ICEGATE Electronic Filing",
      "HSN Classification & Duty Advisory",
      "Bonded Warehouse Clearance",
    ],
  },
  {
    id: "warehouse",
    numeral: "04",
    name: "Warehouse",
    lead: "Our efficiency-driven, multiple client facilities enable us to create turnkey warehousing solutions to help clients exceed their customers' expectations. Close proximity to major ports, rail ramps, and highways.",
    image: "/images/Warehouse.jpg",
    aspectClass: "aspect-[16/10]",
    transitionType: "spatialDepth",
    environmentTone: "bg-[#09101a]",
    keyPillars: [
      {
        heading: "1,000,000+ Square Feet",
        body: "Footprint that equates to over 1,000,000 square feet. All facilities are Warehouse Management Systems enabled with multi-client and multi-location capabilities.",
      },
      {
        heading: "CFS to 3PL Operations",
        body: "Warehousing expertise ranges from Container Freight Station (CFS) operations to full third-party logistics outsourced distribution partnership.",
      },
    ],
    capabilities: [
      "Pick and Pack & Fulfillment",
      "Short & Long-Term Storage",
      "Inventory Control & Management",
      "Cross Docking & Kitting",
      "Vendor Consolidation Programs",
    ],
  },
  {
    id: "risk",
    numeral: "05",
    name: "Risk Management",
    lead: "Our team of Risk Management and Insurance experts work closely with clients to develop a deep understanding of their business model, evaluating where exposure to vulnerabilities may exist to protect your bottom line.",
    image: "/images/Risk-Management.jpg",
    aspectClass: "aspect-[4/3]",
    transitionType: "analyticalSlide",
    environmentTone: "bg-[#0c1524]",
    keyPillars: [
      {
        heading: "Risk Management Consulting",
        body: "Defined risk analytics and case modeling to predict probability factors based on event types, taking a preemptive approach to supply chain preservation.",
      },
      {
        heading: "Comprehensive Insurance",
        body: "Traditional carrier liability is limited by law. We provide customized insurance solutions with compensation up to the full insured value of your goods, regardless of cause.",
      },
    ],
    capabilities: [
      "All Risk Coverage",
      "Spot Insurance & Blanket Policies",
      "Professional Handling of Claims",
      "Fast and Easy Claims Resolution",
      "Financial Exposure Quantification",
    ],
  },
  {
    id: "project",
    numeral: "06",
    name: "Project Cargo",
    lead: "Moving oversized cargo is no easy task. Freyer International's Project Cargo team has the knowledge, experience, resources, and network to take care of your entire logistics chain for your project cargo from A to Z.",
    image: "/images/Project-Cargo.jpg",
    aspectClass: "aspect-[16/9]",
    transitionType: "deepZoom",
    environmentTone: "bg-[#070c17]",
    keyPillars: [
      {
        heading: "Sector Expertise",
        body: "Turnkey solutions for the energy sector, offshore industry, wind farm development, machinery, steel, and heavy metals.",
      },
      {
        heading: "Complete Route Engineering",
        body: "From site disassembly and port transport to vessel loading, mobile crane unloading, and final destination delivery under verified road permits.",
      },
    ],
    capabilities: [
      "Break Bulk on Container Vessel (BBK)",
      "Roll-on / Roll-off (RORO)",
      "Heavy Lift Mobile Cranes",
      "Road Transportation Permits",
      "Smart Route & Clearance Planning",
    ],
  },
];

export function ServicesCinematicV5() {
  const [selectedId, setSelectedId] = useState<string>("air");
  const current = SERVICES_CATALOGUE_V5.find((s) => s.id === selectedId) || SERVICES_CATALOGUE_V5[0];

  // Motion variants tailored specifically to each physical logistics medium
  const getMotionAnimation = (type: ServiceCatalogueItem["transitionType"]) => {
    switch (type) {
      case "verticalLift":
        return {
          initial: { opacity: 0, y: 110, scale: 0.96 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: -110, scale: 0.96 },
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
          label: "Vertical Runway Lift",
        };
      case "horizontalDrift":
        return {
          initial: { opacity: 0, x: 150, scale: 0.97 },
          animate: { opacity: 1, x: 0, scale: 1 },
          exit: { opacity: 0, x: -150, scale: 0.97 },
          duration: 0.55,
          ease: [0.16, 1, 0.3, 1],
          label: "Horizontal Horizon Drift",
        };
      case "apertureShutter":
        return {
          initial: { opacity: 0, scale: 0.88, filter: "brightness(1.4)" },
          animate: { opacity: 1, scale: 1, filter: "brightness(1.0)" },
          exit: { opacity: 0, scale: 1.12, filter: "brightness(0.7)" },
          duration: 0.45,
          ease: [0.16, 1, 0.3, 1],
          label: "Aperture Document Reveal",
        };
      case "spatialDepth":
        return {
          initial: { opacity: 0, scale: 0.82 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 1.25 },
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1],
          label: "Volumetric Spatial Depth",
        };
      case "analyticalSlide":
        return {
          initial: { opacity: 0, x: -120 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 120 },
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
          label: "Analytical Linear Slide",
        };
      case "deepZoom":
        return {
          initial: { opacity: 0, scale: 1.28, y: -25 },
          animate: { opacity: 1, scale: 1, y: 0 },
          exit: { opacity: 0, scale: 0.85, y: 25 },
          duration: 0.55,
          ease: [0.2, 0.9, 0.3, 1],
          label: "Heavy-Scale Hydraulic Compression",
        };
      default:
        return {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -30 },
          duration: 0.4,
          ease: "easeOut",
          label: "Standard Shift",
        };
    }
  };

  const anim = getMotionAnimation(current.transitionType);

  return (
    <section
      id="services-scene"
      className={`relative py-20 sm:py-28 text-[#0a1424] selection:bg-[#0a1424] selection:text-white transition-colors duration-700 overflow-hidden ${current.environmentTone}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Title Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-white/10 mb-10">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#e1390f] font-mono mb-2">
              Services
            </div>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-white leading-[0.92]">
              Services
            </h2>
          </div>

          <div className="text-sm sm:text-base text-slate-300 font-light max-w-sm">
            Air Services &bull; Ocean Services &bull; Customs Services &bull; Warehouse &bull; Risk Management &bull; Project Cargo
          </div>
        </div>

        {/* Environmental Capability Selector Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 border-b border-white/10">
          {SERVICES_CATALOGUE_V5.map((item) => {
            const isSelected = item.id === selectedId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`py-2 px-4 sm:px-5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  isSelected
                    ? "bg-white text-[#0a1424] shadow-md font-semibold"
                    : "bg-white/10 text-slate-300 hover:text-white hover:bg-white/20"
                }`}
              >
                <span className="font-mono text-xs opacity-60 mr-2">{item.numeral}</span>
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Cinematic Environmental Stage */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={anim.initial}
              animate={anim.animate}
              exit={anim.exit}
              transition={{ duration: anim.duration || 0.5, ease: (anim.ease as any) || [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
            >
              {/* Left Column: Scope of Service */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                      {current.numeral} &bull; {current.name}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-slate-300 border border-white/10">
                      {anim.label}
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-light text-white tracking-tight mb-4">
                    {current.name}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-200 font-light leading-relaxed">
                    {current.lead}
                  </p>
                </div>

                {/* Key Pillars */}
                <div className="space-y-4 pt-4 border-t border-white/10">
                  {current.keyPillars.map((pillar, pIdx) => (
                    <div key={pIdx} className="space-y-1">
                      <div className="text-sm font-semibold text-white">
                        {pillar.heading}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                        {pillar.body}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Capabilities Checklist */}
                <div className="pt-4 border-t border-white/10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-200">
                    {current.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Directional Photographic Plate */}
              <div className="lg:col-span-6 relative">
                <motion.div
                  initial={{ scale: 1.04 }}
                  animate={{ scale: 1.0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`relative ${current.aspectClass} w-full rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-slate-900`}
                >
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="font-mono text-slate-200">{current.name}</span>
                    <span className="font-mono text-amber-400 font-semibold">{current.numeral} / 06</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
