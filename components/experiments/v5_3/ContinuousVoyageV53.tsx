"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { CheckCircle2, Plane, Ship, FileText, Warehouse, ShieldAlert, Layers } from "lucide-react";

export interface ServiceCatalogueItem {
  id: string;
  numeral: string;
  name: string;
  lead: string;
  image: string;
  transitionType: "verticalLift" | "horizontalDrift" | "apertureShutter" | "spatialDepth" | "analyticalSlide";
  environmentTone: string;
  icon: any;
  keyPillars: {
    heading: string;
    body: string;
  }[];
  capabilities: string[];
}

// 100% Verified Authentic Copy from freyer-forensics-v2/content/services.json
export const VERIFIED_SERVICES_DATA: ServiceCatalogueItem[] = [
  {
    id: "air",
    numeral: "01",
    name: "Air Services",
    lead: "Freyer’s team of dedicated experts will handle your airfreight cargo with consistent efficiency, offering you the best option to meet your needs for each shipment. Wherever you are shipping, with a deadline a week away or tomorrow, our wide portfolio of services will meet and exceed your expectations.",
    image: "/images/Air-Services.jpg",
    transitionType: "verticalLift",
    environmentTone: "from-[#08101e] to-[#040810]",
    icon: Plane,
    keyPillars: [
      {
        heading: "International Air Transportation",
        body: "Standard and expedited air transport based on the requirements of your shipment, capacity options, space availability, and global end-to-end shipment visibility.",
      },
      {
        heading: "Dedicated Charter Solutions",
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
    lead: "We deliver cost effective and efficient solutions by leveraging our long established carrier relationships with years of expertise in ocean freight. With reliable scheduling, global visibility, and a customer first mentality, you can count on Freyer to deliver for you on each and every one of your ocean shipments.",
    image: "/images/Ocean-Services.jpg",
    transitionType: "horizontalDrift",
    environmentTone: "from-[#051424] to-[#020a14]",
    icon: Ship,
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
      "FCL & LCL Consolidation",
      "Carrier Security Allocations",
      "Port Terminal Operations",
      "Global Shipment Tracking",
    ],
  },
  {
    id: "customs",
    numeral: "03",
    name: "Customs Services",
    lead: "Freyer’s clients benefit from our personal service and state-of-the-art technology to facilitate import and export declarations to Customs of India and other Participating Government Agencies. Our team of professional compliance specialists will assist your company in complying with existing government regulations and proactively prepare you for continuous rules and regulations changes.",
    image: "/images/Customs-Services.jpg",
    transitionType: "apertureShutter",
    environmentTone: "from-[#0d1520] to-[#060a10]",
    icon: FileText,
    keyPillars: [
      {
        heading: "Export Compliance",
        body: "Our dedicated Export Compliance team consisting of designated Export Specialists ensures both Freyer and our clients comply fully with government export regulations.",
      },
      {
        heading: "Import Compliance",
        body: "Managed by a dedicated team of Licensed Customs Brokers at corporate and branch levels, placing an extreme focus on compliance of import shipments.",
      },
    ],
    capabilities: [
      "Licensed Customs Brokers",
      "Import & Export Declarations",
      "Regulatory Compliance Management",
      "Electronic Export Information Filing",
    ],
  },
  {
    id: "warehouse",
    numeral: "04",
    name: "Warehouse",
    lead: "Our efficiency driven, multiple client facilities enable us to create turnkey warehousing solutions to help our clients exceed their customer’s expectations. Close proximity to major ports, rail ramps and highways. Foot print that equates to over 1,000,000 square feet. All facilities are Warehouse Management Systems enabled with Multi-Client and multi-location capabilities.",
    image: "/images/Air-Services.jpg",
    transitionType: "spatialDepth",
    environmentTone: "from-[#0a121d] to-[#03060a]",
    icon: Warehouse,
    keyPillars: [
      {
        heading: "Turnkey Facilities",
        body: "Over 1,000,000 square feet of WMS-enabled infrastructure in close proximity to major ports, rail ramps, and national highways.",
      },
      {
        heading: "CFS to 3PL Operations",
        body: "Warehousing expertise ranging from Container Freight Station (CFS) operations to full outsourced third-party logistics (3PL) partnerships.",
      },
    ],
    capabilities: [
      "Over 1,000,000 Sq. Ft. Footprint",
      "Multi-Client WMS Capabilities",
      "CFS Staging Operations",
      "Port & Rail Ramp Proximity",
    ],
  },
  {
    id: "risk",
    numeral: "05",
    name: "Risk Management",
    lead: "Compensation up to the full insured value of your goods, regardless of cause. Freyer provides expert risk analysis, competitive premiums, and professional handling of claims with fast and easy claims resolution.",
    image: "/images/Ocean-Services.jpg",
    transitionType: "analyticalSlide",
    environmentTone: "from-[#111622] to-[#080b12]",
    icon: ShieldAlert,
    keyPillars: [
      {
        heading: "All Risk Coverage",
        body: "Compensation up to the full insured value of your goods, regardless of cause, providing vital information to make precise decisions regarding risk retention and transfer.",
      },
      {
        heading: "Flexible Policy Structures",
        body: "Expert risk analysis offering spot insurance for single critical consignments as well as blanket policies for ongoing commercial movements.",
      },
    ],
    capabilities: [
      "Full Insured Value Compensation",
      "All Risk Coverage",
      "Competitive Premiums",
      "Professional Claims Handling",
      "Spot Insurance & Blanket Policies",
    ],
  },
  {
    id: "project-cargo-service",
    numeral: "06",
    name: "Project Cargo",
    lead: "Moving oversized cargo is no easy task. Since each shipment has its own unique requirements, as a Supplier or Buyer you need an expert logistics partner that you can rely on from A to Z. Freyer International offers a one-stop solution for all projects relating to the energy sector, offshore industry, wind farm development, machinery, steel and metal.",
    image: "/images/11.1.jpg",
    transitionType: "spatialDepth",
    environmentTone: "from-[#14080a] to-[#060a10]",
    icon: Layers,
    keyPillars: [
      {
        heading: "Heavy Lift Chain Execution",
        body: "From the heaviest pieces to the smallest accompanying bolt: site disassembly, port transport, intermediate storage, crane loading and unloading, and onward destination delivery.",
      },
      {
        heading: "Route Planning & Permits",
        body: "Throughout the logistics chain, continuously engineering the smartest routes, most economical cargo configurations, transport permits, and customs formalities.",
      },
    ],
    capabilities: [
      "Energy & Offshore Sectors",
      "Mobile Heavy Cargo Cranes",
      "Transport Road Permits",
      "Customs Formalities & Disassembly",
    ],
  },
];

export function ContinuousVoyageV53() {
  const transitionRef = useRef<HTMLDivElement>(null);
  const [activeServiceId, setActiveServiceId] = useState<string>("air");

  // Native scroll tracking for the seamless continuum
  const { scrollYProgress } = useScroll({
    target: transitionRef,
    offset: ["start start", "end end"],
  });

  // Kinetic Continuum transforms:
  // Phase 1 (0.0 -> 0.45): Cargo Exit (Turbine rotor translates up & away)
  // Phase 2 (0.45 -> 1.0): Services Arrival (Air Services aircraft locks onto central axis)
  const cargoExitY = useTransform(scrollYProgress, [0.05, 0.45], [0, -100]);
  const cargoOpacity = useTransform(scrollYProgress, [0.15, 0.45], [1, 0]);

  const serviceEntryY = useTransform(scrollYProgress, [0.45, 0.85], [100, 0]);
  const serviceOpacity = useTransform(scrollYProgress, [0.45, 0.75], [0, 1]);

  const vectorLineHeight = useTransform(scrollYProgress, [0, 0.6], ["0%", "100%"]);

  const activeService =
    VERIFIED_SERVICES_DATA.find((s) => s.id === activeServiceId) ||
    VERIFIED_SERVICES_DATA[0];

  return (
    <div className="w-full bg-[#05080e] text-white">
      {/* 1. THE CONTINUOUS SCROLL VOYAGE TRANSITION SEAM */}
      <section
        ref={transitionRef}
        id="continuous-voyage-transition"
        className="relative w-full h-[220vh] bg-[#05080e]"
      >
        <div className="sticky top-0 w-full h-screen flex flex-col justify-center items-center px-4 sm:px-8 overflow-hidden select-none">
          {/* Continuous Centerline Vector Path */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 pointer-events-none z-10 flex flex-col items-center">
            <div className="w-0.5 h-full bg-white/10 relative">
              <motion.div
                className="w-full bg-[#e1390f]"
                style={{ height: vectorLineHeight }}
              />
            </div>
          </div>

          {/* Central Structural Stage */}
          <div className="relative z-20 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-6">
            {/* Left Column: Typographic Transformation */}
            <div className="md:col-span-6 space-y-4">
              {/* Cargo Outgoing Label (Fades out) */}
              <motion.div
                style={{ opacity: cargoOpacity }}
                className="space-y-1 font-mono"
              >
                <span className="text-[11px] text-[#e1390f] uppercase tracking-widest block font-bold">
                  KOBE ──► CHENNAI [37.1 MT]
                </span>
                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  RORO MOVEMENT
                </h3>
              </motion.div>

              {/* Services Incoming Title (Resolves into place) */}
              <motion.div
                style={{ opacity: serviceOpacity }}
                className="space-y-1 font-mono pt-4 border-t border-white/10"
              >
                <span className="text-[11px] text-[#e1390f] uppercase tracking-widest block font-bold">
                  TRANSIT CONTINUITY // AIR SERVICES
                </span>
                <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                  INTERNATIONAL AIR SERVICES
                </h3>
                <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed max-w-md pt-2">
                  Standard and expedited air transport based on the requirements of your shipment, capacity options, and global end-to-end visibility.
                </p>
              </motion.div>
            </div>

            {/* Right Column: Physical Motion Photographic Continuum */}
            <div className="md:col-span-6 relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-white/15 bg-black/60 shadow-2xl">
              {/* Cargo Photography (Record 1 / 37.1 MT) physically exits along axis */}
              <motion.div
                style={{
                  y: cargoExitY,
                  opacity: cargoOpacity,
                }}
                className="absolute inset-0"
              >
                <Image
                  src="/images/1.jpg"
                  alt="RORO Movement 37.1 MT"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 font-mono text-[10px] bg-black/80 text-white px-2.5 py-1 border border-white/20">
                  CARGO: 37.1 MT RORO MOVEMENT
                </div>
              </motion.div>

              {/* Air Services Photography enters along axis */}
              <motion.div
                style={{
                  y: serviceEntryY,
                  opacity: serviceOpacity,
                }}
                className="absolute inset-0"
              >
                <Image
                  src="/images/Air-Services.jpg"
                  alt="Air Services Freighter"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 font-mono text-[10px] bg-[#e1390f] text-white px-2.5 py-1 font-bold">
                  SERVICES: AIR SERVICES
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPREHENSIVE VERIFIED SERVICES CHAPTER */}
      <section
        id="services-catalogue-chapter"
        className="relative w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-16 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-10 pb-6 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#e1390f] font-bold block mb-1">
                Freyer Capabilities Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
                SERVICES
              </h2>
            </div>
            <p className="font-mono text-xs text-white/50 max-w-md">
              Original service nomenclature and verified operational capabilities.
            </p>
          </div>

          {/* Service Selector Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-white/10">
            {VERIFIED_SERVICES_DATA.map((s) => {
              const Icon = s.icon;
              const isSelected = s.id === activeServiceId;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveServiceId(s.id)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded font-mono text-xs transition-colors ${
                    isSelected
                      ? "bg-[#e1390f] text-white font-bold"
                      : "bg-white/5 text-white/70 hover:text-white border border-white/10"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{s.numeral} // {s.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Service Showcase */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={
                activeService.transitionType === "verticalLift"
                  ? { y: 30, opacity: 0 }
                  : activeService.transitionType === "horizontalDrift"
                  ? { x: -40, opacity: 0 }
                  : activeService.transitionType === "apertureShutter"
                  ? { clipPath: "inset(15% 15% 15% 15%)", opacity: 0 }
                  : activeService.transitionType === "spatialDepth"
                  ? { scale: 0.96, opacity: 0 }
                  : { x: 30, opacity: 0 }
              }
              animate={
                activeService.transitionType === "apertureShutter"
                  ? { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }
                  : { x: 0, y: 0, scale: 1, opacity: 1 }
              }
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-2xl p-6 sm:p-10 border border-white/12 bg-gradient-to-br ${activeService.environmentTone}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="font-mono text-xs text-[#e1390f] block mb-1">
                      {activeService.numeral} // SERVICE SPECIFICATION
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                      {activeService.name}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
                    {activeService.lead}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {activeService.keyPillars.map((p, i) => (
                      <div
                        key={i}
                        className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-2"
                      >
                        <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-white flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#e1390f]" />
                          {p.heading}
                        </h4>
                        <p className="text-xs text-white/70 font-sans leading-relaxed">
                          {p.body}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <span className="font-mono text-xs text-white/50 uppercase tracking-wider block mb-3">
                      Documented Capabilities:
                    </span>
                    <div className="flex flex-wrap gap-2 font-mono text-xs">
                      {activeService.capabilities.map((c, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 border border-white/10 text-white/90"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#e1390f]" />
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-white/15 bg-black/40 shadow-2xl">
                    <Image
                      src={activeService.image}
                      alt={activeService.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
