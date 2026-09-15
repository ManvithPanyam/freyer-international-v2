"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Plane, Ship, FileText, Warehouse, ShieldAlert, ArrowDown, ChevronRight } from "lucide-react";

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

export const SERVICES_V52: ServiceCatalogueItem[] = [
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
        heading: "International Air Carriage",
        body: "Standard and expedited air transport based on shipment requirements, space security, and end-to-end global visibility.",
      },
      {
        heading: "Dedicated Charter Solutions",
        body: "Freighter capacity engineered for outsized loads, remote destinations, or emergency schedule recovery.",
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
      "Special Equipment (Open Tops & Flat Racks)",
      "Carrier Security Allocations",
      "Intermodal Rail & Barge Feeder Links",
      "Port Terminal Operations & Transshipment",
    ],
  },
  {
    id: "customs",
    numeral: "03",
    name: "Customs Services",
    lead: "With thousands of tariff classifications and complex global trade regulations changing regularly, you need a partner who understands the details. Our licensed customs brokers ensure your imports and exports comply with local laws while minimizing duties and avoiding costly delays.",
    image: "/images/Customs-Services.jpg",
    transitionType: "apertureShutter",
    environmentTone: "from-[#0d1520] to-[#060a10]",
    icon: FileText,
    keyPillars: [
      {
        heading: "Regulatory Clearance & Classification",
        body: "Precision harmonized tariff schedule classification, valuation assessment, and regulatory compliance across all Indian ports and ICDs.",
      },
      {
        heading: "Documentation & Bonded Movement",
        body: "Direct EDI filing, duty drawback processing, bonded warehouse entry, and fast-track clearance for time-critical industrial goods.",
      },
    ],
    capabilities: [
      "Tariff Classification Consulting",
      "Direct Port Delivery (DPD) Clearance",
      "AEO Certified Standards Execution",
      "Bonded Cargo Transit Licensing",
    ],
  },
  {
    id: "warehouse",
    numeral: "04",
    name: "Warehouse",
    lead: "Strategic warehousing and distribution solutions designed to optimize your supply chain. From short-term storage to complex inventory management, our secure facilities keep your cargo protected, organized, and ready for immediate deployment.",
    image: "/images/Air-Services.jpg",
    transitionType: "spatialDepth",
    environmentTone: "from-[#0a121d] to-[#03060a]",
    icon: Warehouse,
    keyPillars: [
      {
        heading: "Secure Inventory Control",
        body: "Modern secure storage infrastructure equipped with real-time tracking, inventory visibility, and high-density material handling systems.",
      },
      {
        heading: "Value-Added Distribution",
        body: "Kitting, labeling, palletization, quality inspection, and last-mile dispatch tailored to industrial supply networks.",
      },
    ],
    capabilities: [
      "Bonded & General Storage Facilities",
      "High-Security Monitored Yards",
      "Heavy Lift Staging Areas",
      "Cross-Docking & Transloading",
    ],
  },
  {
    id: "risk",
    numeral: "05",
    name: "Risk Management",
    lead: "Protecting your high-value cargo against unforeseen disruptions, transit damages, and global logistics risks through comprehensive cargo insurance coverage and proactive risk mitigation protocols.",
    image: "/images/Ocean-Services.jpg",
    transitionType: "analyticalSlide",
    environmentTone: "from-[#111622] to-[#080b12]",
    icon: ShieldAlert,
    keyPillars: [
      {
        heading: "Comprehensive Marine Cargo Cover",
        body: "Door-to-door insurance protection covering physical loss or damage from all external causes during maritime, air, and overland transit.",
      },
      {
        heading: "Route Risk & Route Survey Audits",
        body: "Pre-shipment structural route surveys, civil bridge load assessments, and weather tracking to eliminate transit vulnerabilities before departure.",
      },
    ],
    capabilities: [
      "All-Risk Marine Insurance Underwriting",
      "Heavy Lift Route & Bridge Feasibility",
      "Discharge & Stevedoring Supervision",
      "Claims Advocacy & Survey Reports",
    ],
  },
];

export function SeamlessJourneyV52() {
  const [activeServiceId, setActiveServiceId] = useState<string>("air");
  const [transitionMorphState, setTransitionMorphState] = useState<number>(1); // 0: Cargo Kobe Rotor, 1: Morphing Runway, 2: Locked Air Services

  const activeService =
    SERVICES_V52.find((s) => s.id === activeServiceId) || SERVICES_V52[0];

  return (
    <section
      id="seamless-journey-services"
      className="relative w-full bg-[#05080e] text-white py-16 lg:py-24 px-4 sm:px-6 lg:px-16 border-t border-white/10 overflow-hidden"
    >
      {/* THE CONTINUOUS ROUTE VECTOR AXIS (Carried over from Cargo's Kobe-Chennai line) */}
      <div className="max-w-7xl mx-auto mb-16 relative">
        {/* Continuous Vector Header Seam */}
        <div className="flex flex-col items-center justify-center text-center relative z-10 pb-8">
          {/* Incoming Continuous Vector Line */}
          <div className="w-full max-w-xl flex flex-col items-center">
            <div className="flex items-center gap-3 font-mono text-[11px] text-[#e1390f] uppercase tracking-widest bg-black/60 px-4 py-1.5 rounded-full border border-[#e1390f]/40 mb-3 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#e1390f] animate-ping" />
              <span>THE CONTINUOUS JOURNEY // ROUTE AXIS NEVER STOPS</span>
            </div>

            {/* Drawing Vertical Corridor Hairline */}
            <div className="relative w-0.5 h-20 bg-gradient-to-b from-[#e1390f] via-[#e1390f] to-white/40 overflow-hidden">
              <motion.div
                className="w-full h-8 bg-white"
                animate={{ y: [0, 80] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              />
            </div>

            {/* Trajectory Waypoint Pip */}
            <div className="mt-2 flex items-center gap-2 font-mono text-xs text-white/70 bg-white/5 border border-white/10 px-3 py-1 rounded">
              <span className="text-[#e1390f] font-bold">KOBE (37.1 MT)</span>
              <span>──►</span>
              <span className="text-white font-bold">CHENNAI GATEWAY</span>
              <span>──►</span>
              <span className="text-[#e1390f] font-bold">AIR SERVICES</span>
            </div>
          </div>
        </div>

        {/* THE MORPHING MOMENT: Visual Axis Stretch & Photograph Dissolve */}
        <div className="relative w-full max-w-4xl mx-auto my-8 bg-black/50 border border-white/15 rounded-xl p-6 lg:p-8 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: Interactive Morph Trigger & Typography */}
            <div className="md:col-span-6 space-y-4">
              <div className="font-mono text-xs text-[#e1390f] tracking-widest uppercase font-semibold flex items-center gap-2">
                <span>SECTOR CONTINUITY AXIS</span>
                <span className="w-1.5 h-1.5 bg-[#e1390f] rounded-full" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                From Heavy Lift Sea Route to Global Air Runway
              </h3>

              <p className="font-mono text-xs text-white/70 leading-relaxed">
                Notice how the route line does not terminate at Project Cargo. The trajectory continues across the seam, morphing the heavy turbine rotor into the high-altitude runway axis of Air Services.
              </p>

              {/* Morph Scrub Controls */}
              <div className="pt-2 flex items-center gap-2 font-mono text-xs">
                <button
                  onClick={() => setTransitionMorphState(0)}
                  className={`px-3 py-1.5 rounded border transition-colors ${
                    transitionMorphState === 0
                      ? "bg-[#e1390f] text-white border-[#e1390f]"
                      : "bg-white/5 text-white/70 border-white/10 hover:text-white"
                  }`}
                >
                  37.1 MT Cargo
                </button>
                <span className="text-white/40">►</span>
                <button
                  onClick={() => setTransitionMorphState(1)}
                  className={`px-3 py-1.5 rounded border transition-colors ${
                    transitionMorphState === 1
                      ? "bg-[#e1390f] text-white border-[#e1390f]"
                      : "bg-white/5 text-white/70 border-white/10 hover:text-white"
                  }`}
                >
                  Morphing Seam
                </button>
                <span className="text-white/40">►</span>
                <button
                  onClick={() => setTransitionMorphState(2)}
                  className={`px-3 py-1.5 rounded border transition-colors ${
                    transitionMorphState === 2
                      ? "bg-[#e1390f] text-white border-[#e1390f]"
                      : "bg-white/5 text-white/70 border-white/10 hover:text-white"
                  }`}
                >
                  Air Services
                </button>
              </div>
            </div>

            {/* Right: Morphing Photograph Screen */}
            <div className="md:col-span-6 relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-white/20 bg-black">
              {/* Photo A: Turbine Rotor (Cargo Record 5) */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  opacity: transitionMorphState === 0 ? 1 : transitionMorphState === 1 ? 0.35 : 0,
                  scale: transitionMorphState === 0 ? 1 : 1.08,
                }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src="/images/1.jpg"
                  alt="Turbine Rotor 37.1 MT"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 left-2 font-mono text-[10px] bg-black/80 text-white px-2 py-1 border border-white/20">
                  CARGO: 37.1 MT TURBINE ROTOR
                </div>
              </motion.div>

              {/* Photo B: Runway Air Cargo Freighter */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  opacity: transitionMorphState === 2 ? 1 : transitionMorphState === 1 ? 0.65 : 0,
                  scale: transitionMorphState === 2 ? 1 : 0.95,
                }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src="/images/Air-Services.jpg"
                  alt="Air Services Aircraft"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 left-2 font-mono text-[10px] bg-[#e1390f] text-white px-2 py-1 font-bold">
                  SERVICES: AIR FREIGHT EXPEDITION
                </div>
              </motion.div>

              {/* Continuous Centerline Drawing Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  className="w-0.5 h-full bg-[#e1390f]"
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    scaleY: [0.8, 1, 0.8],
                  }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />
              </div>

              <div className="absolute bottom-2 inset-x-2 bg-black/85 backdrop-blur-sm p-2 text-[11px] font-mono flex justify-between text-white border-t border-white/10">
                <span className="text-[#e1390f] font-bold">AXIS LOCK:</span>
                <span>MAA AIR CARGO TERMINAL • 07 / 25</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COMPREHENSIVE SERVICE MEDIUMS CATALOGUE */}
      <div className="max-w-7xl mx-auto pt-10 border-t border-white/10">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-white/10">
          {SERVICES_V52.map((s) => {
            const Icon = s.icon;
            const isSelected = s.id === activeServiceId;
            return (
              <button
                key={s.id}
                onClick={() => setActiveServiceId(s.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded font-mono text-xs transition-all ${
                  isSelected
                    ? "bg-[#e1390f] text-white font-bold shadow-lg shadow-[#e1390f]/20"
                    : "bg-white/5 text-white/70 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{s.numeral} // {s.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Medium Stage with Environmental Choreography */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={
              activeService.transitionType === "verticalLift"
                ? { y: 40, opacity: 0 }
                : activeService.transitionType === "horizontalDrift"
                ? { x: -50, opacity: 0 }
                : activeService.transitionType === "apertureShutter"
                ? { clipPath: "inset(20% 20% 20% 20%)", opacity: 0 }
                : activeService.transitionType === "spatialDepth"
                ? { scale: 0.94, opacity: 0 }
                : { x: 30, opacity: 0 }
            }
            animate={
              activeService.transitionType === "apertureShutter"
                ? { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }
                : { x: 0, y: 0, scale: 1, opacity: 1 }
            }
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className={`rounded-2xl p-6 sm:p-10 border border-white/12 bg-gradient-to-br ${activeService.environmentTone}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Authentic Service Content */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2 font-mono text-xs text-[#e1390f]">
                    <span>{activeService.numeral} // PORTFOLIO</span>
                    <span>•</span>
                    <span className="uppercase tracking-widest text-white/60">
                      MOTION MEDIUM: {activeService.transitionType}
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                    {activeService.name}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
                  {activeService.lead}
                </p>

                {/* Key Pillars */}
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

                {/* Capabilities List */}
                <div className="pt-2">
                  <span className="font-mono text-xs text-white/50 uppercase tracking-wider block mb-3">
                    Specialized Capabilities:
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

              {/* Right Column: Authentic Environmental Medium Photography */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-white/15 bg-black/40 shadow-2xl">
                  <Image
                    src={activeService.image}
                    alt={activeService.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 font-mono text-xs text-white flex justify-between items-center">
                    <span className="text-[#e1390f] font-bold uppercase tracking-wider">
                      OPERATIONAL STANDARD
                    </span>
                    <span className="text-white/60">VERIFIED EXECUTION</span>
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
