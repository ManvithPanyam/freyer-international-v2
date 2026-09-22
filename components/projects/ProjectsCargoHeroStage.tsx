"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Ship,
  Truck,
  RotateCcw,
  Play,
  Pause,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Maximize2,
  Compass,
  Layers,
  ShieldAlert,
} from "lucide-react";

export interface CinematicProjectItem {
  id: number;
  recordNumber: string;
  title: string;
  route_origin: string;
  origin_country: string;
  route_destination: string;
  dest_country: string;
  transport_mode: string;
  primary_metric: string;
  primary_label: string;
  secondary_metrics: { label: string; value: string }[];
  details: string;
  photo: string;
  photo_caption: string;
  transit_type: "ocean" | "multimodal" | "heavy_haul";
}

export const FEATURED_MOVEMENTS: CinematicProjectItem[] = [
  {
    id: 9,
    recordNumber: "RECORD #09",
    title: "SHANGHAI TO JEBEL ALI",
    route_origin: "Shanghai",
    origin_country: "China",
    route_destination: "Jebel Ali",
    dest_country: "UAE",
    transport_mode: "Break Bulk Shipment",
    primary_metric: "482 MT",
    primary_label: "GROSS MASS DISPLACEMENT",
    secondary_metrics: [
      { label: "CUBIC VOLUME", value: "796 CBM" },
      { label: "PACKAGE UNITS", value: "29 PKG" },
      { label: "STOWAGE", value: "Under-Deck Hold" },
    ],
    details: "Fabricated heavy structural steel consignment staged under nighttime quayside spotlights in Shanghai and hoisted directly into vessel open hold for international transit.",
    photo: "/images/9.1.jpg",
    photo_caption: "Shanghai Terminal: 482 MT structural breakbulk staged on quayside dunnage.",
    transit_type: "ocean",
  },
  {
    id: 11,
    recordNumber: "RECORD #11",
    title: "VENICE TO MUNDRA",
    route_origin: "Venice",
    origin_country: "Italy",
    route_destination: "Mundra",
    dest_country: "India",
    transport_mode: "BBK on Container Vessel",
    primary_metric: "37.6 MT",
    primary_label: "BOOM CRANE WT (37,600 KG)",
    secondary_metrics: [
      { label: "DIMENSIONS", value: "2700 × 400 × 455 CM" },
      { label: "TERMS", value: "Ex-Works (EXW)" },
      { label: "PERMIT", value: "Road Special Transit" },
    ],
    details: "27-meter out-of-gauge lattice boom crane assembly transported under special civil road permits through Italy and loaded as breakbulk onto a container vessel bound for Mundra.",
    photo: "/images/11.1.jpg",
    photo_caption: "Venice Quayside: 27-meter boom crane rigged with spreader beam on container vessel deck.",
    transit_type: "multimodal",
  },
  {
    id: 2,
    recordNumber: "RECORD #02",
    title: "MASAN TO CHENNAI",
    route_origin: "Masan",
    origin_country: "South Korea",
    route_destination: "Chennai",
    dest_country: "India",
    transport_mode: "Break Bulk Heavy Transit",
    primary_metric: "200 MT",
    primary_label: "TOTAL CHARTER TONNAGE",
    secondary_metrics: [
      { label: "CUBIC VOLUME", value: "837 CBM" },
      { label: "UNITS", value: "22 Packages" },
      { label: "CLEARANCE", value: "Direct Discharge" },
    ],
    details: "Full breakbulk consignment of heavy machinery modules loaded at Masan Port, South Korea, navigating the Bay of Bengal for direct under-hook discharge at Port of Chennai.",
    photo: "/images/2.1.jpg",
    photo_caption: "Vessel hold stowage: 200 MT machinery secured with heavy chains and timber wedges.",
    transit_type: "ocean",
  },
  {
    id: 1,
    recordNumber: "RECORD #01",
    title: "KOBE TO CHENNAI",
    route_origin: "Kobe",
    origin_country: "Japan",
    route_destination: "Chennai",
    dest_country: "India",
    transport_mode: "Pure Car & Truck Carrier / RORO",
    primary_metric: "37.1 MT",
    primary_label: "ROLL-ON / ROLL-OFF MASS",
    secondary_metrics: [
      { label: "DIMENSIONS", value: "904 × 310 × 316 CM" },
      { label: "METHOD", value: "Towed RoRo Ramp" },
      { label: "TRANSIT DATE", value: "April 2023" },
    ],
    details: "Monolithic industrial equipment driven and lashed through stern ramps into specialized RoRo vessel decks across the Pacific and Indian Ocean sea lanes.",
    photo: "/images/1.jpg",
    photo_caption: "Port of Kobe: Heavy tracked unit staged at RoRo stern ramp berths.",
    transit_type: "heavy_haul",
  },
];

interface ProjectsCargoHeroStageProps {
  onSelectProject?: (projectId: number) => void;
}

export function ProjectsCargoHeroStage({ onSelectProject }: ProjectsCargoHeroStageProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [transitProgress, setTransitProgress] = useState<number>(0.2); // 0 to 1 position along transit corridor

  const currentItem = FEATURED_MOVEMENTS[activeIndex];

  // Auto-advance loop
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % FEATURED_MOVEMENTS.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Smooth transit animation when item changes
  useEffect(() => {
    setTransitProgress(0);
    const start = performance.now();
    const duration = 1400; // ms

    let animId: number;
    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(1, elapsed / duration);
      // easeOutCubic
      const ease = 1 - Math.pow(1 - p, 3);
      setTransitProgress(ease);
      if (p < 1) {
        animId = requestAnimationFrame(tick);
      }
    };
    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [activeIndex]);

  const handleSelect = (idx: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(idx);
    if (onSelectProject) {
      onSelectProject(FEATURED_MOVEMENTS[idx].id);
    }
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev === 0 ? FEATURED_MOVEMENTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % FEATURED_MOVEMENTS.length);
  };

  return (
    <section className="relative w-full rounded-2xl bg-[#0f1217] border border-white/10 overflow-hidden shadow-2xl">
      {/* ── BACKGROUND AMBIENT INDUSTRIAL MIST ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-[#12141a]/95 to-black/90 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-[#e1390f]/[0.03] blur-[140px] pointer-events-none" />

      {/* ── TOP CONTROL BAR & CHOREOGRAPHY TICKER ── */}
      <div className="relative z-20 px-6 sm:px-8 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4 bg-black/40 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e1390f] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#e1390f]" />
          </span>
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#e1390f] font-bold">
            CARGO IN MOTION &bull; KINETIC SHIPMENT RADAR
          </span>
          <span className="hidden md:inline text-white/30">&bull;</span>
          <span className="hidden md:inline text-xs font-mono text-white/50">
            {currentItem.recordNumber} &bull; {currentItem.title}
          </span>
        </div>

        {/* Playback Controls & Direct Shipment Selectors */}
        <div className="flex items-center gap-2">
          {/* Direct Movement Tabs */}
          <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/10">
            {FEATURED_MOVEMENTS.map((mov, idx) => (
              <button
                key={mov.id}
                onClick={() => handleSelect(idx)}
                className={`px-3 py-1 rounded text-xs font-mono tracking-wider transition-all ${
                  activeIndex === idx
                    ? "bg-[#e1390f] text-white font-bold shadow-md shadow-[#e1390f]/20"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {mov.route_origin}
              </button>
            ))}
          </div>

          <div className="h-4 w-px bg-white/10 mx-1 hidden sm:block" />

          {/* Prev/Next arrows */}
          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition"
              title="Previous shipment"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition"
              title={isAutoPlaying ? "Pause cycle" : "Resume cycle"}
            >
              {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={handleNext}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition"
              title="Next shipment"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ── MAIN CINEMATIC SHIPMENT STAGE ── */}
      <div className="relative z-10 p-6 sm:p-10 lg:p-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
          >
            {/* LEFT COLUMN: Monumental Telemetry & Route Vector (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
              {/* Transit Header */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-[#e1390f] font-bold">
                    {currentItem.transport_mode}
                  </span>
                  <span className="text-white/40 text-xs font-mono">
                    VERIFIED MARITIME CORRIDOR
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-3xl sm:text-5xl lg:text-6xl font-black text-white font-[family-name:var(--font-barlow-condensed)] tracking-tight uppercase leading-none">
                  <span>{currentItem.route_origin}</span>
                  <div className="inline-flex items-center gap-2 text-[#e1390f]">
                    <span className="w-6 sm:w-10 h-1 bg-[#e1390f]" />
                    <ArrowRight className="w-6 sm:w-8 h-6 sm:h-8" />
                  </div>
                  <span className="text-white/40 italic">{currentItem.route_destination}</span>
                </div>

                <p className="text-xs sm:text-sm font-sans text-white/60 leading-relaxed max-w-xl font-light">
                  {currentItem.details}
                </p>
              </div>

              {/* ── KINETIC TRANSIT TRACKER LINE ── */}
              <div className="p-5 rounded-xl bg-black/60 border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-white">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="font-bold">{currentItem.route_origin}</span>
                    <span className="text-white/40">({currentItem.origin_country})</span>
                  </div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest">
                    TRANSIT VELOCITY: IN VOYAGE
                  </div>
                  <div className="flex items-center gap-1.5 text-white">
                    <span className="font-bold">{currentItem.route_destination}</span>
                    <span className="text-white/40">({currentItem.dest_country})</span>
                    <span className="w-2 h-2 rounded-full bg-[#e1390f]" />
                  </div>
                </div>

                {/* Animated Waypoint Corridor */}
                <div className="relative h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-emerald-400 via-[#e1390f] to-[#e1390f] rounded-full"
                    style={{ width: `${Math.max(15, transitProgress * 100)}%` }}
                  />
                  {/* Glowing Transit Carrier Indicator */}
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#e1390f] shadow-[0_0_12px_#e1390f] flex items-center justify-center"
                    style={{ left: `${Math.max(8, transitProgress * 92)}%` }}
                  >
                    <Ship className="w-2.5 h-2.5 text-[#121316]" />
                  </motion.div>
                </div>
              </div>

              {/* ── MONUMENTAL METRICS DOCK ── */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.04] to-black/40 border border-white/10">
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="text-6xl sm:text-8xl font-black text-white font-[family-name:var(--font-barlow-condensed)] leading-none tracking-tight drop-shadow-xl">
                    {currentItem.primary_metric}
                  </span>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#e1390f] font-bold block">
                      {currentItem.primary_label}
                    </span>
                    <span className="text-[11px] font-mono text-white/40 mt-1 block">
                      CERTIFIED COMMERCIAL CARGO WEIGHT
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-3 gap-4 text-xs font-mono">
                  {currentItem.secondary_metrics.map((m, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <span className="text-white/40 text-[9px] uppercase tracking-wider block">
                        {m.label}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-white block">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Cinematic Archival Photography with Dynamic Framing (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-black group">
                <Image
                  src={currentItem.photo}
                  alt={currentItem.photo_caption}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 pointer-events-none" />

                {/* Overlaid Terminal Stencil */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-mono uppercase tracking-widest text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e1390f]" />
                  <span>AUTHENTIC FIELD PHOTOGRAPHY</span>
                </div>

                {/* Overlaid Caption */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 text-xs font-mono text-white/80 space-y-1">
                  <div className="text-[10px] text-[#e1390f] font-bold uppercase tracking-wider">
                    OPERATIONAL RECORD &bull; {currentItem.title}
                  </div>
                  <p className="line-clamp-2 text-white/70">{currentItem.photo_caption}</p>
                </div>
              </div>

              {/* Jump to Project Card in Explorer below */}
              <button
                onClick={() => {
                  const target = document.getElementById(`project-record-${currentItem.id}`);
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "center" });
                  } else if (onSelectProject) {
                    onSelectProject(currentItem.id);
                  }
                }}
                className="w-full py-3.5 px-5 rounded-xl bg-white/5 hover:bg-[#e1390f] border border-white/10 hover:border-[#e1390f] text-xs font-mono font-bold tracking-widest uppercase text-white transition-all flex items-center justify-center gap-2 group shadow-lg"
              >
                <span>Inspect Full Technical Dossier for #{currentItem.id}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
