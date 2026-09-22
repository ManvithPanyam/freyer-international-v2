"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Shield,
  MapPin,
  Ship,
  Phone,
  Mail,
  Scale,
  CheckCircle2,
  Copy,
  ChevronRight,
  Anchor,
  Globe2,
  Layers,
  Plane,
  Warehouse,
  ShieldAlert,
  HardHat,
  FileCheck2,
} from "lucide-react";
import {
  MAINLAND_PATH,
  ISLAND_PATHS,
  STATIONS_DATA,
  type StationData,
} from "@/components/experiments/india_map_final/AuthoritativeIndiaMap";

type ThemeVariant = "A" | "B" | "C";

interface ThemeConfig {
  id: ThemeVariant;
  name: string;
  badge: string;
  description: string;
  heroBg: string;
  heroText: string;
  heroSub: string;
  trustBg: string;
  trustBorder: string;
  cargoBg: string;
  cargoText: string;
  cargoSub: string;
  cargoCardBg: string;
  cargoCardBorder: string;
  servicesBg: string;
  servicesText: string;
  servicesSub: string;
  networkBg: string;
  networkText: string;
  networkSub: string;
  networkMapStroke: string;
  networkMapFill: string;
  contactBg: string;
  contactText: string;
  contactSub: string;
  footerBg: string;
  accent: string;
  isCargoLight: boolean;
  isNetworkLight: boolean;
}

const THEMES: Record<ThemeVariant, ThemeConfig> = {
  A: {
    id: "A",
    name: "Variant A — Deep Midnight Navy",
    badge: "Current Production Baseline",
    description: "Uniform continuous deep navy palette across all sections.",
    heroBg: "bg-[#030712]",
    heroText: "text-white",
    heroSub: "text-slate-300",
    trustBg: "bg-[#060a15]",
    trustBorder: "border-white/10",
    cargoBg: "bg-[#050913]",
    cargoText: "text-white",
    cargoSub: "text-slate-300",
    cargoCardBg: "bg-white/[0.04]",
    cargoCardBorder: "border-white/10",
    servicesBg: "bg-[#040812]",
    servicesText: "text-white",
    servicesSub: "text-slate-300",
    networkBg: "bg-[#040812]",
    networkText: "text-white",
    networkSub: "text-slate-300",
    networkMapStroke: "stroke-white/30",
    networkMapFill: "fill-white/[0.03]",
    contactBg: "bg-[#05090f]",
    contactText: "text-white",
    contactSub: "text-slate-400",
    footerBg: "bg-[#030710]",
    accent: "#e1390f",
    isCargoLight: false,
    isNetworkLight: false,
  },
  B: {
    id: "B",
    name: "Variant B — Editorial Industrial Graphite",
    badge: "Recommended Architectural Reset",
    description:
      "Deliberate tonal cadence: Deep Graphite → Warm Light Documentary → Dark Graphite → Soft Light Cartography → Deep Graphite.",
    heroBg: "bg-[#121316]",
    heroText: "text-[#F8F7F4]",
    heroSub: "text-[#646871]",
    trustBg: "bg-[#181A1F]",
    trustBorder: "border-white/10",
    cargoBg: "bg-[#F2F0EB]",
    cargoText: "text-[#111318]",
    cargoSub: "text-[#646871]",
    cargoCardBg: "bg-[#FFFFFF]",
    cargoCardBorder: "border-[#111318]/12 shadow-sm",
    servicesBg: "bg-[#121316]",
    servicesText: "text-[#F8F7F4]",
    servicesSub: "text-[#9CA3AF]",
    networkBg: "bg-[#E8E5DE]",
    networkText: "text-[#111318]",
    networkSub: "text-[#646871]",
    networkMapStroke: "stroke-[#111318]/40",
    networkMapFill: "fill-[#111318]/[0.05]",
    contactBg: "bg-[#181A1F]",
    contactText: "text-[#F8F7F4]",
    contactSub: "text-[#646871]",
    footerBg: "bg-[#121316]",
    accent: "#E1390F",
    isCargoLight: true,
    isNetworkLight: true,
  },
  C: {
    id: "C",
    name: "Variant C — Monochrome Titanium & Cold Steel",
    badge: "Swiss Minimalist Alternative",
    description:
      "All-dark disciplined titanium graphite with sharp off-white hairline dividers, zero blue ambient tints.",
    heroBg: "bg-[#0E0F12]",
    heroText: "text-white",
    heroSub: "text-zinc-400",
    trustBg: "bg-[#14161B]",
    trustBorder: "border-zinc-800",
    cargoBg: "bg-[#14161B]",
    cargoText: "text-white",
    cargoSub: "text-zinc-400",
    cargoCardBg: "bg-[#1C1E24]",
    cargoCardBorder: "border-zinc-700/60",
    servicesBg: "bg-[#0E0F12]",
    servicesText: "text-white",
    servicesSub: "text-zinc-400",
    networkBg: "bg-[#14161B]",
    networkText: "text-white",
    networkSub: "text-zinc-400",
    networkMapStroke: "stroke-zinc-600",
    networkMapFill: "fill-zinc-800/40",
    contactBg: "bg-[#0E0F12]",
    contactText: "text-white",
    contactSub: "text-zinc-400",
    footerBg: "bg-[#0A0B0E]",
    accent: "#E1390F",
    isCargoLight: false,
    isNetworkLight: false,
  },
};

const SERVICES_DATA = [
  {
    step: "01",
    name: "Ocean Freight Forwarding",
    tagline: "Tier-1 liner allocations on global container trade lanes.",
    desc: "Direct vessel capacity contracts for FCL and LCL consolidation across Chennai, Nhava Sheva, Mundra, and Tuticorin.",
    terminals: "Chennai Port · Nhava Sheva · Mundra · Tuticorin · Vizag",
    icon: Ship,
    img: "/images/Ocean-Services.jpg",
  },
  {
    step: "02",
    name: "Scheduled International Air Freight",
    tagline: "IATA-approved cargo space agreements with scheduled airlines.",
    desc: "Direct air airway bill issuance, temperature-controlled pharma runs, and expedited charter solutions.",
    terminals: "Chennai (MAA) · Delhi (DEL) · Mumbai (BOM) · Bengaluru (BLR)",
    icon: Plane,
    img: "/images/Air-Freight.jpg",
  },
  {
    step: "03",
    name: "CBIC Licensed Customs Clearance",
    tagline: "AEO-LO Tier 2 accredited customs house brokerage.",
    desc: "Direct EDI document filing, paperless fast-track customs clearance, and duty assessment advisory.",
    terminals: "Air Cargo Complexes · Seaports · Pan-India ICDs",
    icon: FileCheck2,
    img: "/images/Customs-Clearance.jpg",
  },
  {
    step: "04",
    name: "Contract Warehousing & CFS",
    tagline: "1,000,000+ sq ft modern WMS-enabled multi-client logistics facilities.",
    desc: "Bonded and general warehousing, inventory tracking, palletized storage, and cross-dock operations.",
    terminals: "Chennai · Mumbai / Bhiwandi · Bengaluru · Delhi NCR",
    icon: Warehouse,
    img: "/images/Warehouse.jpg",
  },
  {
    step: "05",
    name: "Marine Cargo Risk Underwriting",
    tagline: "Tailored transit coverage and asset protection.",
    desc: "All-risk marine cargo insurance policies and dedicated pre-shipment marine survey verification.",
    terminals: "Warehouse-to-Warehouse · International Corridors",
    icon: ShieldAlert,
    img: "/images/Risk-Management.jpg",
  },
  {
    step: "06",
    name: "Project Cargo & Heavy-Lift",
    tagline: "Engineering execution up to 482 metric tons per package.",
    desc: "Breakbulk chartering, route surveys, civil permits, and hydraulic multi-axle trailer transport.",
    terminals: "Shanghai → Jebel Ali · Venice → Mundra · Global",
    icon: HardHat,
    img: "/images/Project-Cargo.jpg",
  },
];

export default function EditorialIndustrialThemePage() {
  const [selectedVariant, setSelectedVariant] = useState<ThemeVariant>("B");
  const [selectedStationId, setSelectedStationId] = useState<string>("chennai_egmore");
  const [activeServiceIndex, setActiveServiceIndex] = useState<number>(0);
  const [copied, setCopied] = useState(false);

  const t = THEMES[selectedVariant];
  const station = STATIONS_DATA.find((s) => s.id === selectedStationId) || STATIONS_DATA[0];

  const handleCopy = (text: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={`min-h-screen ${t.heroBg} transition-colors duration-300 font-sans selection:bg-[#E1390F] selection:text-white`}>
      {/* ── VARIANT SWITCHER DOCK (STICKY CONTROLLER) ── */}
      <aside
        aria-label="Theme selector dock"
        className="fixed top-4 right-4 z-50 p-2.5 rounded-xl bg-black/85 backdrop-blur-md border border-white/20 shadow-2xl text-white max-w-sm hidden sm:block"
      >
        <div className="flex items-center justify-between gap-3 pb-2 border-b border-white/10 text-[10px] font-mono uppercase tracking-wider text-slate-400">
          <span>Palette Controller</span>
          <span className="text-[#E1390F] font-bold">Live Studio Test</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 pt-2">
          {(["A", "B", "C"] as ThemeVariant[]).map((v) => (
            <button
              key={v}
              onClick={() => setSelectedVariant(v)}
              className={`py-2 px-2.5 rounded text-xs font-mono font-bold tracking-wider transition-all duration-150 text-center ${
                selectedVariant === v
                  ? "bg-[#E1390F] text-white shadow-lg"
                  : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
              }`}
            >
              Variant {v}
            </button>
          ))}
        </div>
        <div className="mt-2 text-[10px] font-mono text-slate-300">
          <div className="font-semibold text-white truncate">{t.name}</div>
          <div className="text-slate-400 text-[9px] mt-0.5 leading-tight line-clamp-2">
            {t.description}
          </div>
        </div>
      </aside>

      {/* ── NAVIGATION (DIRECT LOGO & INSTANT TEXT) ── */}
      <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10 py-3.5 transition-colors duration-200">
        <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between gap-6">
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="relative h-8 sm:h-9 w-[54px] sm:w-[62px]">
              <Image
                src="/images/logo.png"
                alt="Freyer International"
                width={62}
                height={36}
                unoptimized
                className="w-full h-full object-contain object-left brightness-0 invert"
                priority
              />
            </div>
            <span className="text-[10px] font-mono tracking-[0.16em] uppercase text-white/30" aria-hidden>
              |
            </span>
            <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-mono tracking-[0.14em] uppercase text-white/80 font-semibold leading-tight">
              Logistics Beyond Boundaries
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex sm:hidden items-center gap-1 bg-white/10 p-1 rounded">
              {(["A", "B", "C"] as ThemeVariant[]).map((v) => (
                <button
                  key={v}
                  onClick={() => setSelectedVariant(v)}
                  className={`px-2 py-1 text-[10px] font-mono rounded font-bold ${
                    selectedVariant === v ? "bg-[#E1390F] text-white" : "text-white/60"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
            <a
              href="tel:+914443191919"
              className="hidden md:inline text-xs font-mono text-white/60 hover:text-white transition-colors"
            >
              +91 44 43191919
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-[#E1390F] text-white px-4 py-2 text-xs font-mono uppercase tracking-wider font-semibold rounded hover:bg-[#C42F0B] transition-colors"
            >
              Request Rate
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* ── ACT I: HERO (EDITORIAL INDUSTRIAL AUTHORITY) ── */}
      <section className={`relative min-h-[90vh] flex flex-col justify-between overflow-hidden ${t.heroBg} ${t.heroText}`}>
        {/* Full-screen video backdrop with deep directional lighting */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="/images/slide2.jpg"
            alt="Port terminal operations"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "62% 42%" }}
          />
          <video
            src="/video/freyer-hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              objectPosition: "62% 42%",
              filter: "brightness(0.60) contrast(1.12)",
            }}
          />
          {/* Architectural gradient: Dark on text origin, clear towards port horizon */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(115deg, rgba(18,19,22,0.96) 0%, rgba(18,19,22,0.85) 40%, rgba(18,19,22,0.40) 70%, rgba(18,19,22,0.15) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to top, rgba(18,19,22,1) 0%, rgba(18,19,22,0.9) 15%, transparent 55%)",
            }}
          />
        </div>

        {/* Hero Content Stage */}
        <div className="relative z-10 w-full max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 pt-24 sm:pt-32 pb-12 my-auto">
          <div className="max-w-4xl">
            {/* Direct Kicker */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E1390F]" />
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.28em] text-slate-300 font-medium">
                Multimodal Logistics &amp; Project Cargo Engineering
              </span>
            </div>

            {/* Unblocked Immediate H1 — No Opacity 0 Delay */}
            <div>
              <h1
                className="font-black tracking-[-0.03em] leading-[0.88] uppercase text-white"
                style={{
                  fontFamily: "var(--font-barlow-condensed), system-ui, sans-serif",
                  fontSize: "clamp(3.8rem, 9.5vw, 8.8rem)",
                }}
              >
                FREYER <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-white/65">
                  INTERNATIONAL
                </span>
                <span className="text-[#E1390F]">.</span>
              </h1>
            </div>

            {/* Sub-Headline */}
            <p className="mt-6 text-slate-300 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-2xl">
              Licensed CBIC AEO-LO Tier 2 multimodal freight forwarding, international air and ocean cargo,
              and heavy-lift project cargo engineered up to{" "}
              <span className="text-white font-semibold border-b border-[#E1390F]">482 metric tons</span>{" "}
              across 10 direct Indian branch stations.
            </p>

            {/* Actions */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#cargo"
                className="inline-flex items-center gap-2.5 bg-[#E1390F] hover:bg-[#C42F0B] text-white px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] font-mono rounded shadow-xl"
              >
                Inspect 482 MT Record
                <Anchor className="w-3.5 h-3.5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-white/[0.08] hover:bg-white/[0.14] text-white px-6 py-3.5 text-xs font-mono uppercase tracking-[0.2em] border border-white/20 rounded backdrop-blur-sm"
              >
                Core Disciplines
              </a>
              <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-white/15 text-[11px] font-mono text-white/45">
                <Shield className="w-3.5 h-3.5 text-[#E1390F]" />
                <span>AEO-LO Tier 2 Licensed Broker</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Telemetry Metrics */}
        <div className="relative z-10 w-full border-t border-white/10 backdrop-blur-xl bg-black/40">
          <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
              {[
                { v: "482 MT", l: "MAX HEAVY LIFT", s: "Record #9 · Breakbulk Stowage" },
                { v: "10 STATIONS", l: "INDIAN GATEWAYS", s: "Direct Pan-India Presence" },
                { v: "CBIC AEO-LO", l: "TIER 2 VERIFIED", s: "INAAQCA4076M0F243 License" },
                { v: "1M+ SQ FT", l: "CONTRACT STORAGE", s: "WMS · Bonded CFS Facilities" },
              ].map((item) => (
                <div key={item.l} className="py-4 sm:py-5 px-4 sm:px-6">
                  <div
                    className="font-bold text-white tracking-tight leading-none text-xl sm:text-2xl lg:text-3xl"
                    style={{ fontFamily: "var(--font-barlow-condensed), system-ui, sans-serif" }}
                  >
                    {item.v}
                  </div>
                  <div className="mt-1 text-[10px] font-mono uppercase tracking-[0.16em] text-[#E1390F] font-semibold">
                    {item.l}
                  </div>
                  <div className="mt-0.5 text-[10px] font-mono text-white/40 truncate">{item.s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ACT II: ACCREDITATIONS TRUST BAR ── */}
      <section className={`border-y border-white/10 py-5 transition-colors duration-300 ${t.trustBg}`}>
        <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] font-semibold text-white/70">
                Statutory Accreditations
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 text-xs font-mono">
              {[
                { name: "CBIC AEO-LO", sub: "Tier 2 Accredited", img: "/images/aeo-logo.jpg", w: 56 },
                { name: "IATA CARGO", sub: "Regulated Agent", img: "/images/IATA.png", w: 52 },
                { name: "WCA WORLD", sub: "ID: 61840 Verified", img: "/images/wca.png", w: 52 },
                { name: "SCN NETWORK", sub: "Security Network", img: "/images/SCN.png", w: 52 },
                { name: "AMTOI", sub: "MTO Member", img: "/images/amtoi.png", w: 42 },
              ].map((acc) => (
                <div
                  key={acc.name}
                  className="flex items-center gap-3 p-2.5 rounded border border-white/10 bg-white/[0.03]"
                >
                  <div className="relative h-6 w-10 shrink-0">
                    <Image
                      src={acc.img}
                      alt={acc.name}
                      width={acc.w}
                      height={24}
                      unoptimized
                      className="w-full h-full object-contain filter grayscale contrast-125"
                    />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-white leading-tight">{acc.name}</div>
                    <div className="text-[9px] text-white/40">{acc.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ACT III: PROJECT CARGO (482 MT DOCUMENTARY ARCHIVE) ── */}
      <section
        id="cargo"
        className={`py-24 sm:py-32 border-t border-black/10 transition-colors duration-300 ${t.cargoBg} ${t.cargoText}`}
      >
        <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-black/10">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2.5 text-[11px] font-mono uppercase tracking-[0.24em] font-medium opacity-80">
                <span className="w-2 h-2 rounded-full bg-[#E1390F]" />
                <span>Documented Industrial Proof</span>
              </div>
              <h2
                className="font-black tracking-[-0.02em] leading-[0.92] uppercase"
                style={{
                  fontFamily: "var(--font-barlow-condensed), system-ui, sans-serif",
                  fontSize: "clamp(2.6rem, 5.5vw, 5rem)",
                }}
              >
                THE WEIGHT OF <br />
                <span>REAL DISPLACEMENT</span>
                <span className="text-[#E1390F]">.</span>
              </h2>
              <p className={`text-base sm:text-lg font-light leading-relaxed ${t.cargoSub}`}>
                Official Freyer Project Archive Record #09. Single-lift heavy breakbulk machinery chartered and stowed
                from Shanghai to Jebel Ali under verified port manifests.
              </p>
            </div>
            <div className="text-right hidden sm:block">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E1390F] font-semibold block">
                Primary Case Dossier
              </span>
              <span className="text-xs font-mono opacity-60">Verified Commercial Bill of Lading</span>
            </div>
          </div>

          {/* Dossier Presentation Grid */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Huge Physical Numerals */}
            <div className="lg:col-span-6 space-y-6">
              <div className={`p-8 sm:p-12 rounded-2xl border transition-colors ${t.cargoCardBg} ${t.cargoCardBorder}`}>
                <div className="flex items-center justify-between pb-6 border-b border-black/10 text-xs font-mono">
                  <span className="text-[#E1390F] font-bold uppercase tracking-wider">PROJECT RECORD #09</span>
                  <span className="opacity-60">Ocean Breakbulk Charter</span>
                </div>

                <div className="py-8">
                  <div
                    className="text-8xl sm:text-9xl font-black uppercase leading-none tracking-tight"
                    style={{ fontFamily: "var(--font-barlow-condensed), system-ui, sans-serif" }}
                  >
                    482
                  </div>
                  <div
                    className="text-2xl sm:text-3xl font-black uppercase text-[#E1390F] tracking-wide mt-1"
                    style={{ fontFamily: "var(--font-barlow-condensed), system-ui, sans-serif" }}
                  >
                    METRIC TONS
                  </div>
                  <p className={`mt-2 text-xs font-mono uppercase tracking-widest ${t.cargoSub}`}>
                    Heavy Industrial Breakbulk Machinery
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-black/10 text-xs font-mono">
                  <div>
                    <span className="opacity-50 block text-[10px] uppercase">Displacement</span>
                    <span className="font-bold text-sm">796 CBM</span>
                  </div>
                  <div>
                    <span className="opacity-50 block text-[10px] uppercase">Package Count</span>
                    <span className="font-bold text-sm">29 Packages</span>
                  </div>
                  <div>
                    <span className="opacity-50 block text-[10px] uppercase">Stowage Mode</span>
                    <span className="font-bold text-sm">Under-Deck BBK</span>
                  </div>
                </div>

                <div className="mt-6 p-3.5 rounded bg-black/5 flex items-center justify-between text-xs font-mono">
                  <div>
                    <span className="opacity-50 text-[10px] block">ORIGIN</span>
                    <span className="font-semibold">Shanghai, China</span>
                  </div>
                  <div className="text-center px-4">
                    <Ship className="w-4 h-4 text-[#E1390F] mx-auto" />
                    <span className="text-[9px] opacity-40">Charter Transit</span>
                  </div>
                  <div className="text-right">
                    <span className="opacity-50 text-[10px] block">DISCHARGE</span>
                    <span className="font-semibold">Jebel Ali, UAE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Documentary Image Plate */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-black/10 shadow-lg">
                <Image
                  src="/images/2.1.jpg"
                  alt="482 MT breakbulk cargo loaded into ship hold"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded text-[10px] font-mono uppercase tracking-wider">
                  Official Field Archive: Under-deck stowage
                </div>
              </div>
              <p className={`text-xs font-mono leading-relaxed ${t.cargoSub}`}>
                Unretouched documentary record from the vessel hold during crane positioning in Shanghai. Secondary
                record: 37.6 MT Boom Crane (2700×400×455 CM) transported from Venice to Mundra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACT IV: CORE SERVICES (EDITORIAL ALTERNATING RHYTHM) ── */}
      <section
        id="services"
        className={`py-24 sm:py-32 border-t border-white/10 transition-colors duration-300 ${t.servicesBg} ${t.servicesText}`}
      >
        <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-12 border-b border-white/10 gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2.5 text-[11px] font-mono uppercase tracking-[0.24em] font-medium text-slate-400">
                <span className="w-2 h-2 rounded-full bg-[#E1390F]" />
                <span>Core Logistics Capabilities</span>
              </div>
              <h2
                className="font-black tracking-[-0.02em] leading-[0.92] uppercase"
                style={{
                  fontFamily: "var(--font-barlow-condensed), system-ui, sans-serif",
                  fontSize: "clamp(2.6rem, 5.5vw, 5rem)",
                }}
              >
                SIX DISCIPLINES. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-white/60">
                  ONE OPERATIONAL STANDARD
                </span>
                <span className="text-[#E1390F]">.</span>
              </h2>
              <p className={`text-base sm:text-lg font-light leading-relaxed ${t.servicesSub}`}>
                Institutional logistics governance across scheduled liner services, customs brokerage, and project cargo.
              </p>
            </div>

            <div className="text-right hidden sm:block">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E1390F] font-semibold block">
                Pan-India Footprint
              </span>
              <span className="text-xs font-mono text-white/50">10 Direct Stations · Tier-1 Sea &amp; Air Corridors</span>
            </div>
          </div>

          {/* Interactive Editorial Service Stage */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Service Directory Selector */}
            <div className="lg:col-span-5 space-y-2">
              {SERVICES_DATA.map((srv, idx) => {
                const Icon = srv.icon;
                const isSelected = activeServiceIndex === idx;
                return (
                  <button
                    key={srv.name}
                    onClick={() => setActiveServiceIndex(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-150 flex items-center justify-between gap-4 ${
                      isSelected
                        ? "bg-white/[0.08] border-[#E1390F] shadow-lg text-white"
                        : "bg-white/[0.02] border-white/5 text-white/60 hover:bg-white/[0.05] hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#E1390F] font-bold">{srv.step}</span>
                      <Icon className="w-4 h-4 text-white/70" />
                      <span className="text-sm font-semibold tracking-tight">{srv.name}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? "text-[#E1390F] translate-x-1" : "opacity-30"}`} />
                  </button>
                );
              })}
            </div>

            {/* Service Visual Dossier */}
            <div className="lg:col-span-7 bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              {(() => {
                const cur = SERVICES_DATA[activeServiceIndex];
                return (
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-white/10">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#E1390F] font-bold">
                        Discipline #{cur.step}
                      </span>
                      <span className="text-xs font-mono text-white/40">{cur.terminals}</span>
                    </div>

                    <h3
                      className="text-2xl sm:text-3xl font-bold uppercase mt-4 text-white"
                      style={{ fontFamily: "var(--font-barlow-condensed), system-ui, sans-serif" }}
                    >
                      {cur.name}
                    </h3>
                    <p className="text-sm text-[#E1390F] font-mono mt-1">{cur.tagline}</p>
                    <p className={`text-sm sm:text-base font-light leading-relaxed mt-4 ${t.servicesSub}`}>
                      {cur.desc}
                    </p>

                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden mt-6 border border-white/10">
                      <Image
                        src={cur.img}
                        alt={cur.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* ── ACT V: INDIA NETWORK (AUTHORITATIVE CARTOGRAPHIC ARTIFACT) ── */}
      <section
        id="network"
        className={`py-24 sm:py-32 border-t border-black/10 transition-colors duration-300 ${t.networkBg} ${t.networkText}`}
      >
        <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-10 border-b border-black/10 gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2.5 text-[11px] font-mono uppercase tracking-[0.24em] font-medium opacity-80">
                <span className="w-2 h-2 rounded-full bg-[#E1390F]" />
                <span>Geographical Infrastructure</span>
              </div>
              <h2
                className="font-black tracking-[-0.02em] leading-[0.92] uppercase"
                style={{
                  fontFamily: "var(--font-barlow-condensed), system-ui, sans-serif",
                  fontSize: "clamp(2.6rem, 5.5vw, 5rem)",
                }}
              >
                10 STATIONS <br />
                <span>ACROSS INDIA</span>
                <span className="text-[#E1390F]">.</span>
              </h2>
              <p className={`text-base sm:text-lg font-light leading-relaxed ${t.networkSub}`}>
                Direct company-owned branch offices across primary port gateways and inland industrial corridors.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 text-xs font-mono shrink-0">
              <div className="border-l-2 border-[#E1390F] pl-4">
                <span className="block text-2xl font-bold font-mono">10</span>
                <span className="text-[10px] uppercase opacity-60">Stations</span>
              </div>
              <div className="border-l-2 border-black/20 pl-4">
                <span className="block text-2xl font-bold font-mono">8</span>
                <span className="text-[10px] uppercase opacity-60">Key Cities</span>
              </div>
              <div className="border-l-2 border-black/20 pl-4">
                <span className="block text-2xl font-bold text-[#E1390F] font-mono">100%</span>
                <span className="text-[10px] uppercase opacity-60">Direct</span>
              </div>
            </div>
          </div>

          {/* Map + Station Dossier */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* SVG Cartographic Artifact */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative w-full max-w-[550px] aspect-[1000/1200]">
                <svg
                  viewBox="0 0 1000 1200"
                  className="w-full h-full drop-shadow-md"
                  aria-label="Map of India highlighting Freyer stations"
                >
                  <path
                    d={MAINLAND_PATH}
                    className={`${t.networkMapFill} ${t.networkMapStroke}`}
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                  {ISLAND_PATHS.map((p, i) => (
                    <path
                      key={i}
                      d={p}
                      className={`${t.networkMapFill} ${t.networkMapStroke}`}
                      strokeWidth="1.4"
                    />
                  ))}

                  {/* Stations */}
                  {STATIONS_DATA.map((st) => {
                    const isSelected = st.id === selectedStationId;
                    return (
                      <g
                        key={st.id}
                        onClick={() => setSelectedStationId(st.id)}
                        className="cursor-pointer group"
                      >
                        <circle
                          cx={st.cx}
                          cy={st.cy}
                          r={isSelected ? 10 : 5.5}
                          className={isSelected ? "fill-[#E1390F]" : "fill-black/70 group-hover:fill-[#E1390F]"}
                        />
                        {isSelected && (
                          <circle
                            cx={st.cx}
                            cy={st.cy}
                            r={18}
                            className="stroke-[#E1390F] fill-none stroke-2 opacity-60 animate-ping"
                          />
                        )}
                        <text
                          x={st.cx + 14}
                          y={st.cy + 4}
                          className={`text-[13px] font-mono font-bold ${
                            isSelected ? "fill-[#E1390F]" : "fill-black/60 group-hover:fill-black"
                          }`}
                        >
                          {st.short}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Station Inspector Plate */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl border border-black/10 bg-white/70 backdrop-blur-sm shadow-md space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-black/10 text-xs font-mono">
                  <span className="text-[#E1390F] font-bold uppercase">{station.isHQ ? "National Headquarters" : "Branch Station"}</span>
                  <span className="opacity-50">{station.city}</span>
                </div>

                <h3
                  className="text-2xl font-bold uppercase leading-tight text-[#111318]"
                  style={{ fontFamily: "var(--font-barlow-condensed), system-ui, sans-serif" }}
                >
                  {station.name}
                </h3>

                <div className="space-y-3 text-xs font-mono text-[#111318]/80">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#E1390F] shrink-0 mt-0.5" />
                    <span>{station.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#E1390F] shrink-0" />
                    <a href={`tel:${station.phone}`} className="hover:underline font-bold">
                      {station.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#E1390F] shrink-0" />
                    <a href={`mailto:${station.email}`} className="hover:underline truncate">
                      {station.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(`${station.name}\n${station.address}\nPhone: ${station.phone}`)}
                  className="w-full py-2.5 px-4 rounded bg-[#111318] text-white text-xs font-mono font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-black transition-colors"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? "Dossier Copied" : "Copy Station Details"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACT VI: ENGAGE DIRECTLY (HIGH CONVERSION CONTACT) ── */}
      <section
        id="contact"
        className={`py-24 sm:py-32 border-t border-white/10 transition-colors duration-300 ${t.contactBg} ${t.contactText}`}
      >
        <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-12 border-b border-white/10 gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2.5 text-[11px] font-mono uppercase tracking-[0.24em] font-medium text-slate-400">
                <span className="w-2 h-2 rounded-full bg-[#E1390F]" />
                <span>Commercial Dispatch &amp; Rate Quotations</span>
              </div>
              <h2
                className="font-black tracking-[-0.02em] leading-[0.92] uppercase text-white"
                style={{
                  fontFamily: "var(--font-barlow-condensed), system-ui, sans-serif",
                  fontSize: "clamp(2.6rem, 5.5vw, 5rem)",
                }}
              >
                ENGAGE DIRECTLY<span className="text-[#E1390F]">.</span>
              </h2>
              <p className={`text-base sm:text-lg font-light leading-relaxed ${t.contactSub}`}>
                Submit consignment parameters directly to the relevant ocean, air, or project cargo commercial desk.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Direct Form */}
            <div className="lg:col-span-7 bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5 text-xs font-mono">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/70 mb-1.5 uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full bg-black/40 border border-white/15 rounded p-3 text-white placeholder-white/20 focus:border-[#E1390F] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 mb-1.5 uppercase tracking-wider">Corporate Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. logistics@company.com"
                      className="w-full bg-black/40 border border-white/15 rounded p-3 text-white placeholder-white/20 focus:border-[#E1390F] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/70 mb-1.5 uppercase tracking-wider">Discipline</label>
                    <select className="w-full bg-black/40 border border-white/15 rounded p-3 text-white focus:border-[#E1390F] focus:outline-none">
                      <option>Project Cargo / Heavy-Lift (Breakbulk)</option>
                      <option>Ocean Freight (FCL / LCL)</option>
                      <option>Air Freight Cargo</option>
                      <option>AEO Customs Clearance</option>
                      <option>Warehousing &amp; Distribution</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/70 mb-1.5 uppercase tracking-wider">Cargo Weight / Volume</label>
                    <input
                      type="text"
                      placeholder="e.g. 45 MT / 120 CBM"
                      className="w-full bg-black/40 border border-white/15 rounded p-3 text-white placeholder-white/20 focus:border-[#E1390F] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/70 mb-1.5 uppercase tracking-wider">Routing / Specifications</label>
                  <textarea
                    rows={3}
                    placeholder="Origin gateway, discharge port, target shipment date..."
                    className="w-full bg-black/40 border border-white/15 rounded p-3 text-white placeholder-white/20 focus:border-[#E1390F] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#E1390F] hover:bg-[#C42F0B] text-white font-bold uppercase tracking-widest rounded transition-colors shadow-lg"
                >
                  Transmit Freight Inquiry
                </button>
              </form>
            </div>

            {/* Chennai HQ Direct Plate */}
            <div className="lg:col-span-5 bg-white/[0.04] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5 text-xs font-mono">
              <div className="pb-3 border-b border-white/10">
                <span className="text-[#E1390F] font-bold uppercase tracking-wider">Corporate Headquarters</span>
                <h4 className="text-xl font-bold text-white mt-1">Chennai Central Desk</h4>
              </div>

              <div className="space-y-3 text-slate-300">
                <p>TAGA Tower, New No: 45 Old No 20, 1st Floor, Sait Colony, Egmore, Chennai - 600008, India</p>
                <p>
                  <span className="text-white/40 block text-[10px]">DIRECT COMMERCIAL TELEPHONE</span>
                  <a href="tel:+914443191919" className="text-white font-bold text-sm hover:underline">
                    +91 44 43191919
                  </a>
                </p>
                <p>
                  <span className="text-white/40 block text-[10px]">COMMERCIAL INQUIRIES</span>
                  <a href="mailto:info@freyerinternational.com" className="text-white hover:underline">
                    info@freyerinternational.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={`border-t border-white/10 py-12 ${t.footerBg} text-white/50 text-xs font-mono`}>
        <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>&copy; {new Date().getFullYear()} Freyer International Logistics Pvt Ltd. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Carriage</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
