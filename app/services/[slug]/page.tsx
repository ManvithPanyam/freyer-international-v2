import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Plane,
  Ship,
  Warehouse,
  ShieldAlert,
  HardHat,
  FileCheck,
} from "lucide-react";

interface ServiceData {
  slug: string;
  category: string;
  title: string;
  tagline: string;
  heroImage: string;
  imageAlt: string;
  overview: string[];
  capabilitiesTitle: string;
  capabilities: string[];
  evidenceBadge: string;
  evidenceHeadline: string;
  evidenceText: string;
  ctaText: string;
  relatedLink?: { label: string; href: string };
}

const SERVICES_DATA: Record<string, ServiceData> = {
  "project-cargo": {
    slug: "project-cargo",
    category: "Heavy Lift & Industrial Engineering",
    title: "Project Cargo Logistics",
    tagline: "From site disassembly to final foundation.",
    heroImage: "/images/11.3.jpg",
    imageAlt: "Heavy-lift crane spreader hoist lifting 37.6 MT ITALGRU boom assembly mid-air at container terminal",
    overview: [
      "Moving oversized and heavy-lift cargo requires deep technical knowledge, rigorous civil route planning, and dedicated engineering resources. Freyer International provides a complete turnkey logistics chain for industrial projects across the energy sector, offshore industry, wind farm development, machinery, steel, and metals.",
      "From the heaviest single pieces to the smallest accompanying hardware, we manage the entire movement: on-site disassembly, hydraulic multi-axle transport, intermediate yard storage, tandem crane loading, vessel breakbulk stowage, and onward transport to the final operating foundation.",
    ],
    capabilitiesTitle: "Turnkey Project Capabilities",
    capabilities: [
      "Heavy-lift mobile and gantry crane calculations",
      "Breakbulk stowage, flat rack & RORO arrangements",
      "Route civil surveys, bridge load assessments & transport permits",
      "Disassembly of oversized assemblies at construction sites",
      "Intermediate port yard staging and ship-side handling",
      "Multi-axle hydraulic transport to final site foundations",
      "Full documentation, port captaincy & customs clearance",
    ],
    evidenceBadge: "11 Documented Movements",
    evidenceHeadline: "Verified Heavy Cargo Execution",
    evidenceText:
      "Backed by documented real-world movements including 37.6 MT boom crane breakbulk (Venice → Mundra), 200 MT ship hold stowage (Masan → Chennai), and 482 MT heavy beam operations (Shanghai → Mumbai).",
    ctaText: "Request Project Cargo Assessment",
    relatedLink: { label: "Explore All 11 Documented Movements", href: "/projects" },
  },
  warehousing: {
    slug: "warehousing",
    category: "Contract Logistics & 3PL",
    title: "Warehousing & 3PL Distribution",
    tagline: "1,000,000+ sq ft footprint across major port & industrial corridors.",
    heroImage: "/images/slide4.jpg",
    imageAlt: "High-bay multi-client warehouse facility with industrial racking and WMS material handling",
    overview: [
      "Freyer International operates modern, multi-client warehousing and Container Freight Station (CFS) infrastructure strategically positioned adjacent to primary Indian container ports, railway ICDs, and national highway corridors.",
      "Our facilities are powered by integrated Warehouse Management Systems (WMS), providing real-time batch and serial-level inventory visibility, automated replenishment alerts, and full reverse logistics management.",
    ],
    capabilitiesTitle: "19 Value-Added Processing & Fulfillment Services",
    capabilities: [
      "Pick and Pack & Order Fulfillment",
      "Short & Long-term High-Bay Storage",
      "Inventory Control & Real-time WMS Reporting",
      "Cross Docking & Transshipment",
      "Kitting & Sub-Assembly Operations",
      "Vendor Consolidation Programs",
      "Quality Control & Conditioning",
      "Tagging, Packing, Labelling & Re-packaging",
      "Container Freight Station (CFS) Operations",
      "Reverse Logistics & Returns Processing",
    ],
    evidenceBadge: "1,000,000+ Sq Ft Footprint",
    evidenceHeadline: "Scalable Multi-Client Network",
    evidenceText:
      "Flexible commercial warehousing architectures supporting industrial manufacturers, retail supply chains, and international importers across India.",
    ctaText: "Request Warehousing Solution",
  },
  "ocean-freight": {
    slug: "ocean-freight",
    category: "Maritime Transport",
    title: "Ocean Freight (FCL & LCL)",
    tagline: "Direct carrier space contracts and weekly consolidated LCL sailings.",
    heroImage: "/images/slide1.jpg",
    imageAlt: "Container cargo vessel navigating maritime trading corridor",
    overview: [
      "We deliver cost-effective and dependable maritime transport solutions by leveraging established direct agreements with the world's leading ocean container carriers. With reliable scheduling, end-to-end milestone tracking, and competitive pricing, Freyer ensures your ocean shipments move smoothly across global trade lanes.",
      "Whether managing full container loads (FCL) requiring guaranteed equipment and vessel space, or smaller shipments benefiting from our dependable weekly Less than Container Load (LCL) consolidated sailings, our ocean freight team delivers complete consistency.",
    ],
    capabilitiesTitle: "Ocean Transport Disciplines",
    capabilities: [
      "Full Container Load (FCL) carrier space agreements",
      "Dependable weekly Less than Container Load (LCL) consolidated sailings",
      "Specialized equipment: Open Top, Flat Rack, Reefers & High Cube",
      "Port-to-port and door-to-door multimodal routing",
      "Vessel stowage planning, container drayage & port handling",
      "Electronic Bill of Lading (BL) processing & tracking",
    ],
    evidenceBadge: "Global Port Gateways",
    evidenceHeadline: "Direct Carrier Capacity",
    evidenceText:
      "Direct contracts with major shipping lines serving Nhava Sheva (JNPT), Chennai Port, Mundra, Visakhapatnam, Tuticorin, and international deepwater hubs.",
    ctaText: "Request Ocean Freight Quote",
  },
  "air-freight": {
    slug: "air-freight",
    category: "Aviation Logistics",
    title: "Air Freight & Charter",
    tagline: "IATA accredited cargo agency with tailored freighter chartering.",
    heroImage: "/images/slide2.jpg",
    imageAlt: "International freighter aircraft at airport cargo apron",
    overview: [
      "Freyer's dedicated aviation specialists manage airfreight cargo with speed, precision, and complete regulatory compliance. Wherever your destination and whatever your deadline, our wide portfolio of scheduled and priority air services meets the most demanding delivery schedules.",
      "When standard airline capacity shortfalls occur or cargo requires delivery to remote international destinations, our airfreight desk crafts tailored full and part-charter solutions to move emergency and time-critical industrial freight without delay.",
    ],
    capabilitiesTitle: "Air Cargo Disciplines",
    capabilities: [
      "Standard and expedited scheduled international air transportation",
      "Tailored full and part-freighter aircraft chartering",
      "Temperature-controlled pharmaceutical & cold-chain logistics",
      "Certified Dangerous Goods (DG) handling and documentation",
      "High-value, secure transit & perishable commodity management",
      "Airside cargo terminal clearance across major Indian airports",
    ],
    evidenceBadge: "IATA Accredited Cargo Agent",
    evidenceHeadline: "Regulated Aviation Authority",
    evidenceText:
      "Full IATA accreditation with direct scheduled airline booking authority and automated Electronic Airway Bill (e-AWB) issuance.",
    ctaText: "Request Air Cargo Quote",
  },
  "customs-brokerage": {
    slug: "customs-brokerage",
    category: "Regulatory Compliance",
    title: "Customs Brokerage",
    tagline: "AEO Tier-2 certified Indian Customs clearance specialists.",
    heroImage: "/images/slide3.jpg",
    imageAlt: "Customs inspection and container freight clearance terminal",
    overview: [
      "Customs compliance in India requires continuous adherence to evolving tariff classifications, valuation rules, and statutory notifications. Freyer's compliance operations are managed by a dedicated team of Licensed Customs Brokers stationed across corporate and branch offices in India.",
      "We facilitate swift, error-free import and export declarations to Customs of India and Participating Government Agencies (PGAs), utilizing direct EDI integration to minimize dwell times and avoid unnecessary demurrage or detention costs.",
    ],
    capabilitiesTitle: "Compliance & Brokerage Services",
    capabilities: [
      "AEO Tier-2 prioritized customs clearance and fast-track processing",
      "Electronic Export Information (EEI) filing and designated export clearance",
      "Import duty classification, valuation assessment & tariff advisory",
      "Advance authorization, EPCG scheme, and duty drawback management",
      "On-site licensed customs brokers across 10 Indian branch hubs",
      "Liaison with Participating Government Agencies (FSSAI, PQ, WPC, etc.)",
    ],
    evidenceBadge: "CBIC Certificate: INAAQCA4076M0F243",
    evidenceHeadline: "AEO Tier-2 Certified Brokerage",
    evidenceText:
      "Certified by the Central Board of Indirect Taxes & Customs (CBIC), Ministry of Finance, Govt of India, offering expedited customs release and reduced bank guarantees.",
    ctaText: "Consult Customs Specialists",
  },
  "risk-management": {
    slug: "risk-management",
    category: "Financial Exposure & Protection",
    title: "Cargo Risk Management",
    tagline: "Comprehensive marine cargo insurance and supply chain vulnerability evaluation.",
    heroImage: "/images/slide4.jpg",
    imageAlt: "Industrial supply chain risk evaluation and cargo insurance protection",
    overview: [
      "Traditional carrier liability under international transport conventions (such as the Hague-Visby, Montreal, or CMR rules) is strictly limited. A single unforeseen incident during transit can result in severe financial losses and supply chain disruption.",
      "Freyer's Risk Management and Insurance specialists work closely with enterprise clients to analyze sourcing routes, inventory cycles, and multimodal transport exposures, crafting customized cargo insurance solutions that protect the full commercial value of goods in transit.",
    ],
    capabilitiesTitle: "Risk & Insurance Solutions",
    capabilities: [
      "All-Risk marine cargo insurance coverage options",
      "Compensation up to the full insured value regardless of carrier limits",
      "Spot insurance policies for single heavy-lift project movements",
      "Continuous annual blanket policies for regular import/export flows",
      "Supply chain vulnerability and business continuity assessments",
      "Fast, professional claims documentation and resolution handling",
    ],
    evidenceBadge: "Full Insured Value Coverage",
    evidenceHeadline: "Beyond Carrier Liability Limits",
    evidenceText:
      "Tailored transit risk policies eliminating standard carrier liability exclusions and safeguarding enterprise balance sheets.",
    ctaText: "Request Risk Assessment",
  },
};

export async function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Freyer International Logistics`,
    description: service.tagline,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES_DATA[slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fbfcfd] text-[#0b2144] pt-28 pb-20">
        {/* ── Breadcrumb & Service Header ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-3">
            <Link href="/" className="hover:text-[#c42f0b] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#c42f0b] transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">{service.title}</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-[#c42f0b] text-[11px] font-mono tracking-[0.22em] uppercase font-semibold block mb-2">
              {service.category}
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0b2144] leading-[1.08]">
              {service.title}
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              {service.tagline}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
          {/* ── Hero Image & Executive Overview ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm">
              <Image
                src={service.heroImage}
                alt={service.imageAlt}
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 60vw, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 text-xs font-mono text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-white/10">
                Freyer {service.title}
              </span>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono text-[#c42f0b] font-semibold uppercase tracking-wider">
                Operational Overview
              </div>
              {service.overview.map((para, idx) => (
                <p key={idx} className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  {para}
                </p>
              ))}

              <div className="pt-2">
                <Link
                  href="/#quote"
                  className="inline-flex items-center gap-2 bg-[#c42f0b] hover:bg-[#a82506] text-white text-xs font-semibold px-5 py-3 rounded transition-colors shadow-md shadow-[#c42f0b]/20"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* ── Detailed Capabilities Ledger ── */}
          <div className="bg-white p-7 sm:p-10 rounded-2xl border border-slate-200/90 shadow-xs space-y-6">
            <div className="pb-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0b2144] tracking-tight">
                {service.capabilitiesTitle}
              </h2>
              <span className="text-xs font-mono text-slate-400">
                Disciplined Logistics Scope
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {service.capabilities.map((cap, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs text-slate-700 py-2 border-b border-slate-50">
                  <CheckCircle2 className="w-4 h-4 text-[#c42f0b] shrink-0 mt-0.5" />
                  <span className="font-medium leading-relaxed">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Institutional Proof Block ── */}
          <div className="bg-[#060f1e] text-white p-8 sm:p-12 rounded-2xl border border-white/10 shadow-lg flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#ff6b4a] uppercase tracking-wider font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>{service.evidenceBadge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {service.evidenceHeadline}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {service.evidenceText}
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {service.relatedLink && (
                <Link
                  href={service.relatedLink.href}
                  className="inline-flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-5 py-3 rounded border border-white/15 transition-colors"
                >
                  <span>{service.relatedLink.label}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-1.5 bg-[#c42f0b] hover:bg-[#a82506] text-white text-xs font-semibold px-5 py-3 rounded transition-colors shadow-md shadow-[#c42f0b]/20"
              >
                <span>Contact Specialists</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
