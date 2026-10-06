"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "motion/react";

// ─── Data ─────────────────────────────────────────────────────────────────────

interface Capability {
  left: string[];
  right: string[];
}

interface ServiceItem {
  num: string;
  title: string;
  summary: string;
  image: string | null; // null = placeholder (TODO-CONFIRM)
  imageAlt: string;
  capabilities: Capability;
  ports: string[];
  href: string;
}

const SERVICES: ServiceItem[] = [
  {
    num: "01",
    title: "Project Cargo",
    summary: "Heavy lift, OOG, and engineered multimodal logistics",
    image: "/images/Project-Cargo.jpg",
    imageAlt:
      "Project cargo — heavy lift and out-of-gauge logistics operations",
    capabilities: {
      left: [
        "Heavy Lift Engineering",
        "Out-of-Gauge (OOG) Planning",
        "Breakbulk Chartering",
        "Rigging & Lashing Design",
      ],
      right: [
        "Multimodal Route Survey",
        "Port & Marine Surveys",
        "Vessel Scouting",
        "Project Insurance",
      ],
    },
    ports: ["Mumbai", "Chennai", "JNPT", "Mundra", "Vizag"],
    href: "/services",
  },
  {
    num: "02",
    title: "Ocean Freight",
    summary: "FCL and LCL worldwide on liner and charter",
    image: "/images/Ocean-Services.jpg",
    imageAlt: "Ocean freight — FCL and LCL container operations worldwide",
    capabilities: {
      left: [
        "Full Container Load (FCL)",
        "Less-than-Container (LCL)",
        "Charter & Breakbulk",
        "Reefer & Hazmat",
      ],
      right: [
        "Freight Benchmarking",
        "Booking & Documentation",
        "Port Filing (India)",
        "Transshipment Routing",
      ],
    },
    ports: ["JNPT", "Mundra", "Chennai", "Hazira", "Colombo"],
    href: "/services",
  },
  {
    num: "03",
    title: "Air Freight",
    summary: "Express and charter cargo including heavy OOG consignments",
    image: "/images/Air-Services.jpg",
    imageAlt:
      "Air freight — express and charter cargo including out-of-gauge consignments",
    capabilities: {
      left: [
        "General Cargo (GCR)",
        "Express & Priority",
        "Charter Solutions",
        "Pharma & Perishables",
      ],
      right: [
        "IATA Regulated Agent",
        "AVI & DGR Handling",
        "OOG Air Cargo",
        "Door-to-Airport",
      ],
    },
    ports: ["Chennai (MAA)", "Mumbai (BOM)", "Delhi (DEL)", "Hyderabad (HYD)"],
    href: "/services",
  },
  {
    num: "04",
    title: "Customs Clearance",
    summary:
      "CBIC AEO-LO licensed brokerage — Certificate No. INAAQCA4076M0F243",
    image: "/images/Customs-Services.jpg",
    imageAlt: "Customs clearance — CBIC AEO-LO certified brokerage operations",
    capabilities: {
      left: [
        "Import Clearance",
        "Export Clearance",
        "Duty Drawback",
        "HS Code Classification",
      ],
      right: [
        "AEO-LO Accredited",
        "Bond & Scrip Filing",
        "DGFT Licensing",
        "Compliance Audits",
      ],
    },
    ports: [
      "All Major Indian Customs",
      "JNPT",
      "Chennai",
      "Mundra",
      "Delhi ICD",
    ],
    href: "/services",
  },
  {
    num: "05",
    title: "Inland Transportation",
    summary: "FTL and LTL road freight across India",
    image: null, // TODO-CONFIRM: image path not yet confirmed
    imageAlt: "Inland transportation — FTL and LTL road freight across India",
    capabilities: {
      left: [
        "Full Truck Load (FTL)",
        "Part Truck Load (LTL)",
        "ODC / OOG Road Moves",
        "Escort & Permit Ops",
      ],
      right: [
        "Pan-India Coverage",
        "GPS Fleet Tracking",
        "First & Last Mile",
        "Factory-to-Port",
      ],
    },
    ports: ["All Indian Ports", "ICDs & CFSs", "Factory Premises"],
    href: "/services",
  },
  {
    num: "06",
    title: "Warehousing",
    summary: "Bonded and open storage and distribution",
    image: "/images/Warehouse.jpg",
    imageAlt:
      "Warehousing — bonded and open storage with distribution operations",
    capabilities: {
      left: [
        "Bonded Warehousing",
        "Open Storage Yards",
        "CFS Operations",
        "WMS Technology",
      ],
      right: [
        "3PL Distribution",
        "Pick, Pack & Dispatch",
        "Inventory Management",
        "Cold Chain Support",
      ],
    },
    ports: ["Chennai", "Mumbai", "JNPT", "Mundra", "Delhi"],
    href: "/services",
  },
];

// ─── Chevron icon ──────────────────────────────────────────────────────────────

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className={[
        "shrink-0 text-[#71717A] transition-transform duration-200",
        open ? "rotate-90" : "rotate-0",
      ].join(" ")}
    >
      <path
        d="M6.75 4.5L11.25 9L6.75 13.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── Expanded content panel ────────────────────────────────────────────────────

function ExpandedPanel({ service }: { service: ServiceItem }) {
  return (
    <div className="pb-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      {/* Left column — capabilities + ports + CTA */}
      <div>
        {/* Two-column capability list */}
        <div className="grid grid-cols-2 gap-x-6 border-r border-white/8 pr-6 md:pr-8">
          <div className="flex flex-col gap-2.5">
            {service.capabilities.left.map((cap) => (
              <span
                key={cap}
                className="text-[12px] text-[#A1A1AA]"
                style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
              >
                {cap}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-2.5">
            {service.capabilities.right.map((cap) => (
              <span
                key={cap}
                className="text-[12px] text-[#A1A1AA]"
                style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
              >
                {cap}
              </span>
            ))}
          </div>
        </div>

        {/* Gateway ports */}
        <div className="mt-6 pr-6 md:pr-8">
          <div
            className="text-[11px] uppercase tracking-[0.08em] text-[#71717A] mb-2"
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            Gateway Ports
          </div>
          <div
            className="text-[12px] text-[#A1A1AA] leading-relaxed"
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            {service.ports.join(" · ")}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <Link
            href={service.href}
            className={[
              "inline-flex items-center justify-center h-[52px] px-8",
              "text-[12px] uppercase tracking-[0.08em] rounded-none",
              "bg-[#E1390F] text-white hover:bg-[#C42F0B] transition-colors duration-150",
              "font-[family-name:var(--font-ibm-plex-mono)]",
            ].join(" ")}
          >
            View Service
          </Link>
        </div>
      </div>

      {/* Right column — image */}
      <div>
        {service.image ? (
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ) : (
          /* TODO-CONFIRM: image path for Inland Transportation (service 05) not yet confirmed */
          <div
            className="w-full bg-white/[0.03] border border-white/8 flex items-center justify-center"
            style={{ aspectRatio: "4/3" }}
            aria-label="Image pending confirmation"
          >
            <span
              className="text-[11px] uppercase tracking-[0.08em] text-[#71717A]"
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              TODO-CONFIRM
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Single accordion row ──────────────────────────────────────────────────────

interface AccordionRowProps {
  service: ServiceItem;
  isOpen: boolean;
  onToggle: () => void;
  revealDelay: number;
  sectionInView: boolean;
}

function AccordionRow({
  service,
  isOpen,
  onToggle,
  revealDelay,
  sectionInView,
}: AccordionRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={sectionInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: revealDelay, ease: "easeOut" }}
      className="border-b border-white/8"
    >
      {/* Row trigger */}
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`service-panel-${service.num}`}
        id={`service-trigger-${service.num}`}
        onClick={onToggle}
        className="w-full flex items-center gap-6 py-5 text-left cursor-pointer group"
      >
        {/* Number */}
        <span
          className="text-[12px] text-[#71717A] w-8 shrink-0"
          style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          aria-hidden="true"
        >
          {service.num}
        </span>

        {/* Title */}
        <h3
          className={[
            "text-[18px] sm:text-[22px] font-semibold text-[#F8F7F4]",
            "group-hover:text-[#E1390F] transition-colors duration-150",
          ].join(" ")}
          style={{ fontFamily: "var(--font-archivo)" }}
        >
          {service.title}
        </h3>

        {/* Summary — hidden when expanded, visible on sm+ only */}
        {!isOpen && (
          <span
            className="hidden sm:block ml-auto text-[12px] text-[#A1A1AA] text-right max-w-[280px] leading-snug"
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            aria-hidden="true"
          >
            {service.summary}
          </span>
        )}

        {/* Chevron */}
        <span className={!isOpen ? "ml-4 sm:ml-0" : "ml-auto"}>
          <Chevron open={isOpen} />
        </span>
      </button>

      {/* Expanded panel */}
      <div
        id={`service-panel-${service.num}`}
        role="region"
        aria-labelledby={`service-trigger-${service.num}`}
      >
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <ExpandedPanel service={service} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

export function ManifestServices() {
  // Ocean Freight (02) open by default — index 1
  const [openIndex, setOpenIndex] = useState<number>(1);

  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-8%" });

  const handleToggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section
      ref={sectionRef}
      id="manifest-services"
      aria-label="Services — what we move"
      className="bg-[#121316] py-32 sm:py-20"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="border-b border-white/8 pb-6 mb-0"
        >
          <span
            className="text-[12px] uppercase tracking-[0.12em] text-[#71717A]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            What We Move
          </span>
        </motion.div>

        {/* Accordion rows */}
        <div role="list" aria-label="Service categories">
          {SERVICES.map((service, idx) => (
            <AccordionRow
              key={service.num}
              service={service}
              isOpen={openIndex === idx}
              onToggle={() => handleToggle(idx)}
              revealDelay={idx * 0.06}
              sectionInView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
