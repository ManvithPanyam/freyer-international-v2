"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Ship, Plane, ShieldCheck, Warehouse, ShieldAlert, Boxes, ArrowRight, ExternalLink } from "lucide-react";

export interface ServicePillar {
  id: string;
  number: string;
  name: string;
  tagline: string;
  summary: string;
  capabilities: string[];
  certifications: string;
  image: string;
  icon: any;
}

export const FREYER_SERVICES: ServicePillar[] = [
  {
    id: "project-cargo",
    number: "01",
    name: "Project Cargo",
    tagline: "Heavy Lift & Industrial Engineering",
    summary: "From the heaviest pieces to the smallest accompanying bolt: road surveys, multi-axle hydraulic transport, port crane stevedoring, and marine chartering.",
    capabilities: [
      "Heavy Lift & Breakbulk Engineering",
      "Over-Dimensional Consignment (ODC) Permits",
      "Factory-to-Foundation Relocation",
      "Tandem Mobile Crane Rigging"
    ],
    certifications: "MTO Certified & Heavy Lift Marine Surveyor Network",
    image: "/images/Project-Cargo.jpg",
    icon: Boxes
  },
  {
    id: "ocean-services",
    number: "02",
    name: "Ocean Services",
    tagline: "FCL & LCL Maritime Forwarding",
    summary: "Securing container capacity and competitive rates through long-standing carrier agreements across all major global shipping alliances.",
    capabilities: [
      "Full Container Load (FCL) Capacity",
      "Less than Container Load (LCL) Consolidation",
      "Special Equipment (Open Top, Flat Rack)",
      "Weekly Scheduled Global Sailings"
    ],
    certifications: "FIATA & WCA World Member Logistics Network",
    image: "/images/Ocean-Services.jpg",
    icon: Ship
  },
  {
    id: "air-services",
    number: "03",
    name: "Air Services",
    tagline: "Time-Critical Global Air Freight",
    summary: "Scheduled and chartered air freight solutions through major international airlines, coordinated through dedicated desks at major Indian air hubs.",
    capabilities: [
      "Scheduled Commercial Air Freight",
      "Urgent Part & Full Aircraft Charters",
      "Temperature-Controlled Cargo",
      "Direct Tarmac Ramp Supervision"
    ],
    certifications: "IATA Approved Cargo Agent (Regulated Forwarder)",
    image: "/images/Air-Services.jpg",
    icon: Plane
  },
  {
    id: "customs-services",
    number: "04",
    name: "Customs Services",
    tagline: "Licensed Customs Brokerage",
    summary: "Decades of customs clearance mastery handling complex classifications, duty assessments, transport permits, and rapid port discharge.",
    capabilities: [
      "CBIC Authorized Economic Operator (AEO-LO)",
      "Customs Clearance at Sea & Air Ports",
      "Special Valuation Branch (SVB) Cases",
      "Bonded Warehouse Filing & Drawback"
    ],
    certifications: "CBIC AEO-LO License: INAAQCA4076M0F243",
    image: "/images/Customs-Services.jpg",
    icon: ShieldCheck
  },
  {
    id: "warehouse",
    number: "05",
    name: "Warehouse",
    tagline: "Storage, Consolidation & Packaging",
    summary: "Strategic storage facilities positioned near major freight corridors for intermediate cargo consolidation, palletizing, and export prep.",
    capabilities: [
      "Bonded & Non-Bonded Storage",
      "Heavy Equipment Intermediate Staging",
      "Export Packaging & Timber Crating",
      "Inventory Tracking & Cross-Docking"
    ],
    certifications: "ISO Standardized Logistics Procedures",
    image: "/images/Warehouse.jpg",
    icon: Warehouse
  },
  {
    id: "risk-management",
    number: "06",
    name: "Risk Management",
    tagline: "Transit Protection & Cargo Insurance",
    summary: "Comprehensive risk assessment, marine cargo coverage, and loss prevention surveys safeguarding high-value industrial freight from door to door.",
    capabilities: [
      "Comprehensive Marine Cargo Insurance",
      "Pre-Shipment Condition Surveys",
      "Lashing & Securing Engineering Audits",
      "End-to-End Claims Advisory"
    ],
    certifications: "Underwritten by Tier-1 International Underwriters",
    image: "/images/Risk-Management.jpg",
    icon: ShieldAlert
  }
];

export function ServicesHorizonExperiment() {
  const [activeServiceId, setActiveServiceId] = useState("project-cargo");
  const shouldReduceMotion = useReducedMotion();

  const activeService = FREYER_SERVICES.find(s => s.id === activeServiceId) || FREYER_SERVICES[0];

  return (
    <section id="services-experiment" className="relative bg-[#050b14] text-white py-16 sm:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#e1390f]">
              Experiment 04 &bull; Services Storytelling
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-2">
              THE MULTI-MODAL CAPABILITY
            </h2>
          </div>
          <div className="text-sm text-slate-400 font-light max-w-md">
            Six verified operational pillars covering the complete international freight lifecycle—from 500-ton breakbulk to routine air exports.
          </div>
        </div>

        {/* The 6 Pillar Horizontal Controller Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-8 pb-10">
          {FREYER_SERVICES.map(srv => {
            const Icon = srv.icon;
            const isActive = srv.id === activeServiceId;
            return (
              <button
                key={srv.id}
                onClick={() => setActiveServiceId(srv.id)}
                className={`text-left p-3.5 rounded-lg border transition ${
                  isActive
                    ? "bg-[#0b1728] border-[#e1390f] text-white shadow-lg shadow-[#e1390f]/15"
                    : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-slate-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono ${isActive ? "text-[#e1390f] font-bold" : "text-slate-400"}`}>
                    {srv.number}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? "text-[#e1390f]" : "text-slate-400"}`} />
                </div>
                <div className="text-xs font-semibold text-white mt-2 truncate">
                  {srv.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* The Service Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-[#0b1728] rounded-xl border border-white/10 overflow-hidden">
          {/* Left Column: Widescreen Image Stage */}
          <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] bg-black/40 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full"
              >
                <Image
                  src={activeService.image}
                  alt={activeService.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1728] via-transparent to-black/30" />
              </motion.div>
            </AnimatePresence>

            {/* Tagline Callout */}
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <div className="bg-[#07152b]/90 backdrop-blur-md border border-white/15 px-4 py-3 rounded max-w-md">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#e1390f]">Core Specialization</div>
                <div className="text-lg font-bold text-white mt-0.5">{activeService.tagline}</div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Detail & Capabilities */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#e1390f] uppercase tracking-widest">
                <span>Pillar {activeService.number} of 06</span>
                <span className="text-white/20">&bull;</span>
                <span>Freyer Verified</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {activeService.name}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                {activeService.summary}
              </p>

              {/* Key Capabilities Checklist */}
              <div className="space-y-2 pt-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  Execution Capabilities
                </div>
                <div className="space-y-1.5">
                  {activeService.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                      <span className="text-[#e1390f] font-mono mt-0.5">&bull;</span>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Accreditation & Direct Inquiry Button */}
            <div className="pt-4 border-t border-white/10 space-y-4">
              <div className="text-xs font-mono text-amber-300/90 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate">{activeService.certifications}</span>
              </div>

              <a
                href={`mailto:info@freyerinternational.com?subject=Inquiry regarding ${activeService.name}`}
                className="w-full inline-flex items-center justify-center gap-2 rounded bg-[#e1390f] hover:bg-[#c42f0b] text-white py-3 text-xs font-semibold tracking-wider uppercase font-mono transition shadow-lg shadow-[#e1390f]/20"
              >
                <span>Request {activeService.name} Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
