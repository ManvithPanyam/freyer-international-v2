"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "motion/react";

// ─── Data ─────────────────────────────────────────────────────────────────────

type RecordId = "9" | "11";

interface SpecRow {
  label: string;
  value: string;
}

interface ProjectRecord {
  id: RecordId;
  label: string; // selector button label
  weight: string;
  weightUnit: string;
  commodity: string;
  volume: string;
  packages: string;
  route: string;
  routeShort: string; // condensed for route line
  mode: string;
  photo: string;
  photoAlt: string;
  specs: SpecRow[];
  sourceNote: string;
}

const RECORDS: Record<RecordId, ProjectRecord> = {
  "9": {
    id: "9",
    label: "Record #9 · 482 MT",
    weight: "482",
    weightUnit: "METRIC TONS",
    commodity: "Heavy Industrial Breakbulk",
    volume: "796 CBM",
    packages: "29 Packages",
    route: "Shanghai (China) → Jebel Ali (UAE)",
    routeShort: "Shanghai → Jebel Ali",
    mode: "Ocean Breakbulk Charter",
    photo: "/images/9.2.jpg",
    photoAlt:
      "Record #9 — 482 MT heavy industrial breakbulk cargo stowed under-deck, Shanghai to Jebel Ali",
    specs: [
      { label: "Gross Weight", value: "482 Metric Tons" },
      { label: "Cargo Volume", value: "796 CBM" },
      { label: "Package Units", value: "29 Heavy Units" },
      { label: "Stowage Mode", value: "Break Bulk (BBK)" },
      { label: "Origin Gateway", value: "Shanghai, China" },
      { label: "Discharge Port", value: "Jebel Ali, UAE" },
    ],
    sourceNote:
      "Official Freyer Project Archive Record #9. Verifiable commercial bill of lading and port stowage manifest.",
  },
  "11": {
    id: "11",
    label: "Record #11 · 37.6 MT",
    weight: "37.6",
    weightUnit: "METRIC TONS",
    commodity: "Industrial Boom Crane",
    volume: "2,700 × 400 × 455 CM",
    packages: "Single Out-of-Gauge Unit",
    route: "Venice (Italy) → Mundra (India)",
    routeShort: "Venice → Mundra",
    mode: "BBK on Container Vessel",
    photo: "/images/11.1.jpg",
    photoAlt:
      "Record #11 — Industrial boom crane, 37.6 MT OOG unit loaded as BBK on container vessel, Venice to Mundra",
    specs: [
      { label: "Unit Weight", value: "37,600 KG (37.6 MT)" },
      { label: "Dimensions", value: "2,700 × 400 × 455 CM" },
      { label: "Commercial Terms", value: "Ex-Works (EXW)" },
      { label: "Permits Secured", value: "Special Road Transit Permit" },
      { label: "Loading Port", value: "Venice, Italy" },
      { label: "Discharge Port", value: "Mundra, India" },
    ],
    sourceNote:
      "Verbatim archive entry: Boom Crane – 2700 x 400 x 455 cm - WT 37600 KG Ex-Works terms including road permit loaded as BBK on container vessel.",
  },
};

const RECORD_IDS: RecordId[] = ["9", "11"];

// ─── Count-up hook ─────────────────────────────────────────────────────────────

function useCountUp(
  target: string,
  triggered: boolean,
  duration = 700
): string {
  const [display, setDisplay] = useState("0");

  const animate = useCallback(() => {
    const isDecimal = target.includes(".");
    const numericTarget = parseFloat(target.replace(/,/g, ""));
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * numericTarget;

      if (isDecimal) {
        setDisplay(current.toFixed(1));
      } else {
        setDisplay(Math.round(current).toString());
      }

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setDisplay(target);
      }
    }

    requestAnimationFrame(tick);
  }, [target, duration]);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (triggered) {
      if (prefersReduced) {
        setDisplay(target);
      } else {
        animate();
      }
    }
  }, [triggered, target, animate]);

  return display;
}

// ─── Sub-components ────────────────────────────────────────────────────────────

function RecordSelector({
  active,
  onChange,
}: {
  active: RecordId;
  onChange: (id: RecordId) => void;
}) {
  return (
    <div
      className="flex gap-0 border-b border-white/8"
      role="tablist"
      aria-label="Project record selector"
    >
      {RECORD_IDS.map((id) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(id)}
            className={[
              "relative pb-3 pr-6 text-[11px] uppercase tracking-[0.08em] transition-colors duration-150 cursor-pointer",
              "font-[family-name:var(--font-ibm-plex-mono)]",
              isActive
                ? "text-[#E1390F]"
                : "text-[#71717A] hover:text-[#A1A1AA]",
            ].join(" ")}
          >
            {RECORDS[id].label}
            {isActive && (
              <span
                className="absolute bottom-0 left-0 right-6 h-[2px] bg-[#E1390F]"
                aria-hidden="true"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}

function NumeralDisplay({
  record,
  countTriggered,
}: {
  record: ProjectRecord;
  countTriggered: boolean;
}) {
  const counted = useCountUp(record.weight, countTriggered);

  return (
    <div>
      <div
        className="leading-none text-[#E1390F]"
        style={{
          fontFamily: "var(--font-archivo)",
          fontWeight: 900,
          fontSize: "clamp(96px, 12vw, 160px)",
        }}
        aria-label={`${record.weight} ${record.weightUnit}`}
      >
        {counted}
      </div>
      <div
        className="mt-2 text-[14px] uppercase tracking-[0.16em] text-[#A1A1AA]"
        style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
        aria-hidden="true"
      >
        {record.weightUnit}
      </div>
    </div>
  );
}

function SpecTable({ record }: { record: ProjectRecord }) {
  return (
    <div>
      {/* Route line */}
      <div
        className="text-[13px] text-[#F8F7F4] mb-1"
        style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
      >
        {record.routeShort}
      </div>
      {/* Mode line */}
      <div
        className="text-[11px] uppercase tracking-[0.08em] text-[#71717A] mb-4"
        style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
      >
        {record.mode}
      </div>

      {/* Ruled rows */}
      <div role="table" aria-label="Cargo specifications">
        {record.specs.map((row) => (
          <div
            key={row.label}
            role="row"
            className="flex justify-between items-baseline border-b border-white/8 py-3 gap-4"
          >
            <span
              role="rowheader"
              className="text-[11px] uppercase tracking-[0.08em] text-[#71717A] shrink-0"
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              {row.label}
            </span>
            <span
              role="cell"
              className="text-[13px] text-[#F8F7F4] font-medium text-right"
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              {row.value}
            </span>
          </div>
        ))}
      </div>

      {/* Source note */}
      <p
        className="border-t border-white/8 pt-4 mt-2 text-[10px] text-[#71717A] italic leading-relaxed"
        style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
      >
        {record.sourceNote}
      </p>

      {/* Archive link */}
      <Link
        href="/projects"
        className="inline-block mt-4 text-[12px] text-[#A1A1AA] hover:text-[#E1390F] transition-colors duration-150"
        style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
      >
        Explore Full Project Cargo Archive →
      </Link>
    </div>
  );
}

function PhotoPanel({ record }: { record: ProjectRecord }) {
  return (
    <div className="relative w-full" style={{ aspectRatio: "3/4" }}>
      <Image
        src={record.photo}
        alt={record.photoAlt}
        fill
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, 58vw"
        priority={record.id === "9"}
      />
      {/* Caption overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 px-4 py-5"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.80) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      >
        <div
          className="text-[10px] uppercase tracking-[0.08em] text-[#E1390F] mb-1"
          style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
        >
          Record #{record.id}
        </div>
        <div
          className="text-[11px] text-[#A1A1AA]"
          style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
        >
          {record.commodity} · {record.packages}
        </div>
      </div>
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

export function ManifestProof() {
  const [activeId, setActiveId] = useState<RecordId>("9");
  const [countTriggered, setCountTriggered] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-8%" });

  // Trigger count-up once section is in view
  useEffect(() => {
    if (inView) setCountTriggered(true);
  }, [inView]);

  // Re-trigger count-up when switching records
  const handleRecordChange = useCallback((id: RecordId) => {
    setActiveId(id);
    setCountTriggered(false);
    // Small delay so the new numeral mounts before animating
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setCountTriggered(true));
    });
  }, []);

  const record = RECORDS[activeId];

  return (
    <section
      ref={sectionRef}
      id="manifest-proof"
      aria-label="Project cargo proof — archive records"
      className="bg-[#121316] border-t border-white/8 py-32 sm:py-20"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Scroll-reveal wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* ── 12-col grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 xl:gap-16">
            {/* ─ Mobile: photo first ─ */}
            <div className="block lg:hidden mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`photo-mobile-${activeId}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <PhotoPanel record={record} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ─ Left: 5 cols ─ */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Record selector */}
              <RecordSelector active={activeId} onChange={handleRecordChange} />

              {/* Numeral — AnimatePresence for fade between records */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`numeral-${activeId}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <NumeralDisplay
                    record={record}
                    countTriggered={countTriggered}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Spec table — AnimatePresence for fade between records */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`spec-${activeId}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <SpecTable record={record} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ─ Right: 7 cols — desktop only ─ */}
            <div className="hidden lg:block lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`photo-desktop-${activeId}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <PhotoPanel record={record} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
