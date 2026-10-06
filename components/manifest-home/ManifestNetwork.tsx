"use client";

import React, { useState, useCallback, useRef } from "react";
import {
  STATIONS_DATA,
  MAINLAND_PATH,
  ISLAND_PATHS,
} from "@/components/experiments/india_map_final/AuthoritativeIndiaMap";

/**
 * ManifestNetwork
 *
 * India station network section for the Manifest homepage.
 * Re-uses the verified SVG path data (MAINLAND_PATH, ISLAND_PATHS, STATIONS_DATA)
 * exported from AuthoritativeIndiaMap.tsx — no map rebuilt from scratch.
 *
 * Layout:
 *   Desktop: [5-col station list + dossier] | [7-col flat SVG map]
 *   Mobile:  chip selector → dossier → 240px map strip
 */

// Verified station data for the 10 stations as specified in the brief.
// Phones sourced from the brief (some differ from AuthoritativeIndiaMap legacy phones);
// we use the brief's verified numbers here and keep addresses from the source file.
const MANIFEST_STATIONS = [
  {
    id: "chennai_hq",
    number: 1,
    name: "Chennai HQ",
    phone: "+91 44 43191919",
    address:
      "No. 1, 6th Cross Street, CIT Colony, Mylapore, Chennai \u2013 600004",
    isHQ: true,
    email: "info@freyerinternational.com",
    cx: 420.13,
    cy: 962.61,
  },
  {
    id: "chennai_airport",
    number: 2,
    name: "Chennai Airport",
    phone: "+91 96000 41033",
    address: null,
    isHQ: false,
    email: null,
    cx: 416.95,
    cy: 965.83,
  },
  {
    id: "delhi",
    number: 3,
    name: "Delhi / NCR",
    phone: "0124-4068388",
    address: null,
    isHQ: false,
    email: null,
    cx: 328.3,
    cy: 407.61,
  },
  {
    id: "mumbai",
    number: 4,
    name: "Mumbai",
    phone: "022-46191301",
    address: null,
    isHQ: false,
    email: null,
    cx: 177.32,
    cy: 737.63,
  },
  {
    id: "bengaluru",
    number: 5,
    name: "Bengaluru",
    phone: "080 4120 0300",
    address: null,
    isHQ: false,
    email: null,
    cx: 331.77,
    cy: 964.91,
  },
  {
    id: "hyderabad",
    number: 6,
    name: "Hyderabad",
    phone: "040-48561797",
    address: null,
    isHQ: false,
    email: null,
    cx: 363.13,
    cy: 805.25,
  },
  {
    id: "visakhapatnam",
    number: 7,
    name: "Visakhapatnam",
    phone: "+91 97402 20069",
    address: null,
    isHQ: false,
    email: null,
    cx: 521.9,
    cy: 797.93,
  },
  {
    id: "coimbatore",
    number: 8,
    name: "Coimbatore",
    phone: "+91 99625 41554",
    address: null,
    isHQ: false,
    email: null,
    cx: 303.73,
    cy: 1033.1,
  },
  {
    id: "tuticorin",
    number: 9,
    name: "Tuticorin",
    phone: "+91 87544 46077",
    address: null,
    isHQ: false,
    email: null,
    cx: 342.93,
    cy: 1113.97,
  },
  {
    id: "ahmedabad",
    number: 10,
    name: "Ahmedabad",
    phone: "+91 98214 65939",
    address: null,
    isHQ: false,
    email: null,
    cx: 175.64,
    cy: 596.92,
  },
] as const;

type StationId = (typeof MANIFEST_STATIONS)[number]["id"];

export function ManifestNetwork() {
  const [activeId, setActiveId] = useState<StationId>("chennai_hq");
  const [copied, setCopied] = useState(false);
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const active = MANIFEST_STATIONS.find((s) => s.id === activeId)!;

  const handleCopy = useCallback(() => {
    if (!active.address) return;
    navigator.clipboard.writeText(active.address).then(() => {
      setCopied(true);
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
      copyTimeoutRef.current = setTimeout(() => setCopied(false), 2000);
    });
  }, [active.address]);

  return (
    <section
      id="network"
      aria-label="India station network"
      className="bg-[#121316] border-t border-white/[0.08] py-32 sm:py-20 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section label */}
        <p
          className="mb-10 text-[12px] uppercase tracking-[0.12em] text-[#71717A]"
          style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
        >
          10 Stations Across India
        </p>

        {/* ── Mobile chip selector ────────────────────────────────── */}
        <div className="lg:hidden mb-6 flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory no-scrollbar">
          {MANIFEST_STATIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveId(s.id)}
              className={[
                "shrink-0 snap-start px-3 py-1.5 text-[11px] uppercase tracking-[0.08em] transition-colors duration-150 border",
                activeId === s.id
                  ? "border-[#E1390F] text-[#E1390F] bg-[#E1390F]/10"
                  : "border-white/[0.12] text-[#A1A1AA] bg-transparent",
              ].join(" ")}
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* ── Main two-column grid ─────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT: Station list + dossier (5/12 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-0">
            {/* Station list — desktop only */}
            <div className="hidden lg:block">
              {MANIFEST_STATIONS.map((s) => {
                const isActive = s.id === activeId;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveId(s.id)}
                    className={[
                      "w-full flex items-center gap-4 border-b border-white/[0.08] py-3 cursor-pointer text-left transition-colors duration-150",
                      isActive
                        ? "border-l-2 border-[#E1390F] pl-2"
                        : "border-l-2 border-transparent pl-2",
                    ].join(" ")}
                  >
                    {/* Number */}
                    <span
                      className="w-6 shrink-0 text-[11px] text-[#71717A]"
                      style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                    >
                      {String(s.number).padStart(2, "0")}
                    </span>

                    {/* Name */}
                    <span
                      className={[
                        "text-[15px] transition-colors duration-150",
                        isActive ? "text-[#E1390F]" : "text-[#F8F7F4]",
                      ].join(" ")}
                      style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
                    >
                      {s.name}
                    </span>

                    {/* Phone */}
                    <span
                      className="ml-auto text-[12px] text-[#A1A1AA] shrink-0"
                      style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                    >
                      {s.phone}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Dossier panel */}
            <div
              key={activeId}
              className="mt-8 border border-white/[0.08] p-6 bg-white/[0.03] transition-opacity duration-150"
              style={{ animation: "fadeIn 150ms ease" }}
            >
              {/* Station name */}
              <h3
                className="text-[24px] font-semibold text-[#F8F7F4] mb-2 leading-tight"
                style={{ fontFamily: "var(--font-archivo)" }}
              >
                {active.name}
              </h3>

              {/* Phone */}
              <a
                href={`tel:${active.phone.replace(/\s/g, "")}`}
                className="block text-[14px] text-[#E1390F] mb-4 transition-opacity hover:opacity-80 duration-150"
                style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
              >
                {active.phone}
              </a>

              {/* Address */}
              {active.address ? (
                <address
                  className="not-italic text-[13px] text-[#A1A1AA] leading-relaxed mb-4"
                  style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                >
                  {active.address}
                </address>
              ) : (
                <p
                  className="text-[12px] text-[#71717A] mb-4"
                  style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                >
                  Address on request — contact HQ
                </p>
              )}

              {/* Email (HQ only) */}
              {active.email && (
                <a
                  href={`mailto:${active.email}`}
                  className="block text-[12px] text-[#A1A1AA] mb-4 transition-colors hover:text-[#F8F7F4] duration-150"
                  style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                >
                  {active.email}
                </a>
              )}

              {/* Copy button (HQ only) */}
              {active.isHQ ? (
                <button
                  onClick={handleCopy}
                  className="h-[36px] px-4 text-[11px] uppercase tracking-[0.08em] border border-white/[0.12] text-[#A1A1AA] hover:border-[#E1390F] hover:text-[#E1390F] transition-colors duration-150"
                  style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                >
                  {copied ? "Copied!" : "Copy Full Address"}
                </button>
              ) : null}
            </div>
          </div>

          {/* RIGHT: Flat SVG India map (7/12 cols) */}
          <div className="lg:col-span-7 relative">
            {/* On mobile, fixed 240px height strip */}
            <div className="h-[240px] lg:h-auto flex items-center justify-center">
              <svg
                viewBox="0 0 1000 1208"
                className="w-full h-full lg:h-auto max-h-[600px] select-none"
                aria-label="India map showing Freyer station locations"
              >
                {/* India mainland */}
                <path
                  d={MAINLAND_PATH}
                  fill="rgba(255,255,255,0.04)"
                  stroke="rgba(255,255,255,0.10)"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />

                {/* Islands (Andaman & Nicobar, Lakshadweep) */}
                {ISLAND_PATHS.map((d, i) => (
                  <path
                    key={i}
                    d={d}
                    fill="rgba(255,255,255,0.04)"
                    stroke="rgba(255,255,255,0.10)"
                    strokeWidth="0.8"
                    strokeLinejoin="round"
                  />
                ))}

                {/* Station dots */}
                {MANIFEST_STATIONS.map((s) => {
                  const isActive = s.id === activeId;
                  return (
                    <g
                      key={s.id}
                      onClick={() => setActiveId(s.id)}
                      className="cursor-pointer"
                      role="button"
                      aria-label={`Select ${s.name}`}
                    >
                      {/* Outer pulse ring for active */}
                      {isActive && (
                        <circle
                          cx={s.cx}
                          cy={s.cy}
                          r={14}
                          fill="none"
                          stroke="#E1390F"
                          strokeWidth="1"
                          strokeDasharray="3 3"
                          opacity={0.7}
                        />
                      )}
                      {/* Touch-target ghost */}
                      <circle
                        cx={s.cx}
                        cy={s.cy}
                        r={10}
                        fill="transparent"
                      />
                      {/* Station dot */}
                      <circle
                        cx={s.cx}
                        cy={s.cy}
                        r={isActive ? 5 : s.isHQ ? 4 : 3}
                        fill={isActive ? "#E1390F" : s.isHQ ? "#E1390F" : "#A1A1AA"}
                        opacity={isActive ? 1 : 0.65}
                        className="transition-all duration-150"
                      />
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Fade-in keyframe for dossier transition */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
