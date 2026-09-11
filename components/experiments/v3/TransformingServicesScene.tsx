"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CheckCircle2, Shield } from "lucide-react";

interface ServiceCatalogueItem {
  id: string;
  numeral: string;
  name: string;
  lead: string;
  image: string;
  keyPillars: {
    heading: string;
    body: string;
  }[];
  capabilities: string[];
}

const SERVICES_CATALOGUE: ServiceCatalogueItem[] = [
  {
    id: "air",
    numeral: "01",
    name: "Air Services",
    lead: "Freyer’s team of dedicated experts will handle your airfreight cargo with consistent efficiency, offering you the best option to meet your needs for each shipment. Wherever you are shipping, with a deadline a week away or tomorrow, our wide portfolio of services will meet and exceed your expectations.",
    image: "/images/Air-Services.jpg",
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

export function TransformingServicesScene() {
  const [selectedId, setSelectedId] = useState<string>("air");
  const current = SERVICES_CATALOGUE.find((s) => s.id === selectedId) || SERVICES_CATALOGUE[0];

  return (
    <section
      id="services-scene"
      className="py-24 sm:py-36 bg-[#f1f3f6] text-[#0a1424] selection:bg-[#0a1424] selection:text-white transition-colors duration-700 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Editorial Section Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-slate-300 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#e1390f] font-semibold mb-3">
              Services &bull; Chapter 04
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-[#0a1424] leading-[0.98]">
              Verified Capabilities.
            </h2>
          </div>

          <div className="text-sm sm:text-base text-slate-600 font-normal max-w-md leading-relaxed">
            Multi-modal transport engineering, customs brokerage, and supply chain solutions tailored
            to complex freight requirements.
          </div>
        </div>

        {/* Capability Switcher Strip: Seamless Horizontal Tabs */}
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-4 mb-12 border-b border-slate-200">
          {SERVICES_CATALOGUE.map((item) => {
            const isSelected = item.id === selectedId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`py-3 px-4 sm:px-5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  isSelected
                    ? "bg-[#0a1424] text-white shadow-md"
                    : "bg-white text-slate-600 hover:text-[#0a1424] hover:bg-slate-200/60"
                }`}
              >
                <span className="font-mono text-xs opacity-60 mr-2">{item.numeral}</span>
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Master Stage: Left Content & Pillars, Right Panoramic Real Photo Plate */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
            >
              {/* Left Column: Headline, Lead Copy, Key Pillars */}
              <div className="lg:col-span-6 space-y-8">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-[#e1390f] mb-2">
                    Scope of Service &bull; {current.numeral}
                  </div>
                  <h3 className="text-3xl sm:text-5xl font-light text-[#0a1424] tracking-tight mb-6">
                    {current.name}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-700 font-light leading-relaxed">
                    {current.lead}
                  </p>
                </div>

                {/* Key Operational Pillars */}
                <div className="space-y-6 pt-4 border-t border-slate-200">
                  {current.keyPillars.map((pillar, pIdx) => (
                    <div key={pIdx} className="space-y-1.5">
                      <div className="text-sm font-semibold text-[#0a1424]">
                        {pillar.heading}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                        {pillar.body}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Scope Checklist */}
                <div className="pt-6 border-t border-slate-200">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3 font-mono">
                    Operational Scope &amp; Specializations
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {current.capabilities.map((cap, cIdx) => (
                      <div
                        key={cIdx}
                        className="flex items-center gap-2 text-xs sm:text-sm text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Full-Height Photographic Plate */}
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900">
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center brightness-95 transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Real Photo Attribution Tag */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-white">
                    <span className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                      Original Freyer Documentation Plate
                    </span>
                    <span className="font-mono text-xs text-slate-300">{current.name}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
