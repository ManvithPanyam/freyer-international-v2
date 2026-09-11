"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

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

export function EditorialServices() {
  const [selectedId, setSelectedId] = useState<string>("air");
  const current = SERVICES_CATALOGUE.find((s) => s.id === selectedId) || SERVICES_CATALOGUE[0];

  return (
    <section id="services-section" className="py-24 sm:py-36 bg-[#050b14] text-white overflow-hidden selection:bg-[#e1390f] selection:text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Editorial Section Introduction */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs uppercase tracking-[0.3em] text-slate-400 font-light mb-4">
            Service Capabilities
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.02]">
            Transport & logistics. <br />
            <span className="font-normal text-white">Six core disciplines.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-xl">
            A broad range of transport and logistics services designed to help you realise your
            business goals through seasoned carrier relationships and direct operational presence.
          </p>
        </div>

        {/* Persistent Editorial Service Selector (Typographic Bar, No Software Buttons) */}
        <div className="border-b border-white/10 pb-4 mb-16 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-8 sm:gap-12 min-w-max">
            {SERVICES_CATALOGUE.map((item) => {
              const isActive = item.id === selectedId;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`text-left transition-colors flex items-baseline gap-2 pb-2 group ${
                    isActive ? "text-white" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <span
                    className={`text-xs font-light transition-colors ${
                      isActive ? "text-amber-400" : "text-slate-400"
                    }`}
                  >
                    {item.numeral}
                  </span>
                  <span
                    className={`text-base sm:text-lg tracking-wide transition-colors ${
                      isActive
                        ? "font-normal border-b-2 border-amber-400 pb-1"
                        : "font-light group-hover:border-b group-hover:border-white/20 pb-1"
                    }`}
                  >
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Editorial Stage: Large Image on Left, Rich Typography on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Photography Column */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/3] w-full overflow-hidden bg-black/40"
              >
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/80 via-transparent to-transparent opacity-50" />
              </motion.div>
            </AnimatePresence>

            {/* Scope Checklist (Open Editorial List) */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="text-xs uppercase tracking-widest text-slate-400 mb-4">
                Service Scope
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2.5 text-sm text-slate-300 font-light">
                {current.capabilities.map((cap, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
                    <span>{cap}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Typography Column */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="text-xs uppercase tracking-[0.25em] text-amber-400 font-light mb-3">
                  Capability {current.numeral}
                </div>

                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight">
                  {current.name}
                </h3>

                <p className="mt-6 text-base sm:text-lg text-slate-300 font-light leading-relaxed">
                  {current.lead}
                </p>

                {/* Key Pillars (Clean Editorial Hierarchy, No Cards) */}
                <div className="mt-10 space-y-8 border-t border-white/10 pt-8">
                  {current.keyPillars.map((pillar, pIdx) => (
                    <div key={pIdx}>
                      <h4 className="text-lg font-normal text-white tracking-wide mb-2">
                        {pillar.heading}
                      </h4>
                      <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                        {pillar.body}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
