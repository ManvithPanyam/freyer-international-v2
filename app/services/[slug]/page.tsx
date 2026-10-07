import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import {
  PageHeader,
  FreyerCard,
  FreyerButton,
  THEME_TOKENS,
} from "@/components/ui/design-system";

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
    imageAlt: "Heavy-lift crane spreader hoist lifting 37.6 MT boom assembly mid-air at container terminal",
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
  "ocean-freight": {
    slug: "ocean-freight",
    category: "Maritime Logistics",
    title: "Ocean Freight Services",
    tagline: "Direct carrier contracts and weekly consolidated sailings.",
    heroImage: "/images/slide2.jpg",
    imageAlt: "Container ship navigating deepwater channel at maritime terminal",
    overview: [
      "Freyer International delivers full-spectrum ocean freight forwarding for global commercial enterprises. We maintain established carrier agreements to secure guaranteed container slot allocations, predictable scheduling, and competitive freight tariffs.",
      "Whether moving high-volume Full Container Loads (FCL) or specialized Less than Container Loads (LCL), our ocean desks provide complete door-to-port and door-to-door visibility backed by seasoned marine forwarding operators across all major seaports.",
    ],
    capabilitiesTitle: "Ocean Freight Solutions",
    capabilities: [
      "Full Container Load (FCL) carrier space allocations",
      "Regular weekly Less than Container Load (LCL) consolidations",
      "Buyer's consolidation programs across origin ports",
      "Specialized equipment: Open Top, Flat Rack, and Reefer containers",
      "Port captaincy, stevedoring supervision & quayside surveys",
      "Intermodal rail linkage from major maritime ports to inland ICDs",
      "Dangerous Goods (DG) maritime declaration and hazardous stowage",
    ],
    evidenceBadge: "Global Port Gateways",
    evidenceHeadline: "End-to-End Maritime Infrastructure",
    evidenceText:
      "Direct seaport offices in Chennai, Mumbai, Visakhapatnam, and Tuticorin connected with major shipping lines including Maersk, MSC, CMA CGM, and Hapag-Lloyd.",
    ctaText: "Request Ocean Freight Tariff",
  },
  "air-freight": {
    slug: "air-freight",
    category: "Expedited Aviation Logistics",
    title: "Air Freight Forwarding",
    tagline: "Scheduled airline capacity and tailored freighter chartering.",
    heroImage: "/images/slide3.jpg",
    imageAlt: "Wide-body cargo freighter loading containerized airfreight on tarmac",
    overview: [
      "When time-to-market is critical or unexpected supply disruptions arise, Freyer International's air logistics division provides fast, flexible air transportation with end-to-end milestone visibility across major aviation hubs.",
      "As an accredited IATA cargo agent (Code: 14-3-4852), we maintain direct airline agreements, priority terminal access, and dedicated on-tarmac coordination at major Indian international airports.",
    ],
    capabilitiesTitle: "Air Cargo Capabilities",
    capabilities: [
      "Scheduled consolidation and direct IATA airway bill issuance",
      "Full and part aircraft chartering for outsized or urgent consignments",
      "Temperature-controlled cold chain logistics for pharmaceuticals",
      "Dangerous Goods (DG) certified handling and ICAO compliance",
      "High-value, time-critical, and Aircraft on Ground (AOG) emergency dispatch",
      "Air-to-sea and sea-to-air multimodal transit combinations",
      "Direct apron handover and expedited customs import/export processing",
    ],
    evidenceBadge: "IATA Accredited Agent",
    evidenceHeadline: "Direct Air Apron Access",
    evidenceText:
      "Licensed IATA Approved Cargo Agent (14-3-4852) with dedicated air terminal offices at Chennai Airport (MAA) and liaison desks across Bengaluru (BLR), Delhi (DEL), and Mumbai (BOM).",
    ctaText: "Request Airfreight Rate",
  },
  "customs-brokerage": {
    slug: "customs-brokerage",
    category: "Customs Compliance & Regulatory Services",
    title: "Customs Brokerage",
    tagline: "CBIC AEO-LO certified statutory authority.",
    heroImage: "/images/slide1.jpg",
    imageAlt: "Customs officer examining containerized freight documentation at maritime container terminal",
    overview: [
      "Indian Customs regulations are rigorous, detailed, and continually updated. Freyer International operates as a licensed Customs House Agent (CHA) and is accredited as an Authorized Economic Operator (CBIC AEO-LO).",
      "Our in-house team of licensed customs brokers manages the entire clearance process—from classification and valuation to examination and duty payment—ensuring strict regulatory compliance and eliminating unnecessary demurrage or detention costs.",
    ],
    capabilitiesTitle: "Licensed Brokerage Scope",
    capabilities: [
      "CBIC AEO-LO certified accelerated customs processing",
      "Import and export declaration filings via ICEGATE EDI",
      "Accurate HS Code classification and tariff advisory",
      "Duty drawback, EPCG, and advance authorization scheme administration",
      "Special Valuation Branch (SVB) cases and related-party transaction filing",
      "Coordination with Participating Government Agencies (PGA: FSSAI, CDSCO, Plant Quarantine)",
      "Bonded warehouse licensing and in-bond / ex-bond clearance documentation",
    ],
    evidenceBadge: "AEO-LO Certified",
    evidenceHeadline: "Trusted Operator Status",
    evidenceText:
      "Recognized by Indian Customs as an Authorized Economic Operator (CBIC AEO-LO: INAAQCA4076M0F243) with prioritized clearance privileges across 10 branch stations in India.",
    ctaText: "Consult a Customs Broker",
  },
  "warehousing": {
    slug: "warehousing",
    category: "Contract Logistics & 3PL",
    title: "Warehousing & 3PL",
    tagline: "Over 1,000,000 sq ft of multi-client contract storage.",
    heroImage: "/images/slide4.jpg",
    imageAlt: "Modern logistics warehouse with high-bay industrial pallet racking and automated inventory systems",
    overview: [
      "Freyer International provides over 1,000,000 square feet of multi-client, contract warehousing space positioned near key Indian port gateways, inland container depots, and industrial corridors.",
      "Our facilities combine modern high-bay racking, dedicated Container Freight Station (CFS) capability, and advanced Warehouse Management Systems (WMS) to deliver complete third-party logistics (3PL) fulfillment.",
    ],
    capabilitiesTitle: "Warehouse & 3PL Capabilities",
    capabilities: [
      "Over 1,000,000 sq ft multi-location storage footprint",
      "Pick, pack, kitting, and retail/industrial fulfillment",
      "Cross-docking and container destuffing operations",
      "Bonded and non-bonded storage facilities",
      "Real-time WMS inventory management with barcode/RFID tracking",
      "Reverse logistics and return shipment processing",
      "Value-added services: labeling, tagging, repacking & quality inspection",
    ],
    evidenceBadge: "1,000,000+ Sq Ft",
    evidenceHeadline: "Scalable Storage Infrastructure",
    evidenceText:
      "Strategic footprint positioned across Chennai, Bengaluru, Mumbai, and Delhi industrial belts, integrating seamlessly with domestic line-haul transport.",
    ctaText: "Request Warehousing Proposal",
  },
  "risk-management": {
    slug: "risk-management",
    category: "Cargo Insurance & Supply Chain Protection",
    title: "Cargo Risk Management",
    tagline: "Complete peace of mind across complex global supply chains.",
    heroImage: "/images/gallery/cargo/1.jpg",
    imageAlt: "Industrial freight secured with heavy-duty chains and certified lashing straps",
    overview: [
      "Standard carrier liability under international conventions (Hague-Visby, Montreal, CMR) is strictly limited—often covering only a fraction of the cargo's commercial value, and subject to broad carrier liability defenses.",
      "Freyer International provides comprehensive marine cargo insurance and supply chain risk advisory, safeguarding our clients' financial investments against transit loss, physical damage, general average, and catastrophic perils.",
    ],
    capabilitiesTitle: "Risk Management Solutions",
    capabilities: [
      "All-Risk Institute Cargo Clauses (ICC-A) comprehensive coverage",
      "Specialized project cargo and heavy-lift transit insurance",
      "General Average protection for ocean container movements",
      "Annual open cover policies and single-shipment spot insurance",
      "Pre-shipment packing, lashing, and securing survey assessments",
      "Fast-track claims processing with dedicated surveyor coordination",
      "Supply chain security advisory and anti-theft mitigation programs",
    ],
    evidenceBadge: "Full Value Protection",
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

  const canonicalUrl = `https://freyer-international-v2.vercel.app/services/${slug}`;

  return {
    title: `${service.title} | Capabilities Dossier`,
    description: `${service.title}: ${service.tagline} ${service.overview[0]}`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${service.title} | Freyer International Logistics`,
      description: service.tagline,
      url: canonicalUrl,
      images: [
        {
          url: service.heroImage,
          alt: service.imageAlt,
        },
      ],
    },
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
    <div className="min-h-screen bg-[#F7F6F2] text-[#17181B] selection:bg-[#E33B12] selection:text-white">
      <Header />
      <main>
        <PageHeader
          breadcrumbs={[
            { label: "Services", href: "/services" },
            { label: service.title },
          ]}
          eyebrow={service.category}
          title={service.title.toUpperCase()}
          subtitle={service.tagline.toUpperCase()}
          description={service.overview[0]}
        />

        <div className={`py-16 sm:py-24 max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter} space-y-16 sm:space-y-20`}>
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Detailed Overview & Visual */}
            <div className="lg:col-span-7 space-y-8">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#DCDCD7] bg-white shadow-sm">
                <Image
                  src={service.heroImage}
                  alt={service.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 text-xs font-mono text-white">
                  <span className="bg-[#17181B]/85 backdrop-blur-md px-3 py-1.5 rounded border border-white/20">
                    {service.evidenceBadge}
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-[#62656B] font-normal text-base sm:text-lg leading-relaxed">
                {service.overview.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Right: Technical Capabilities Checklist */}
            <div className="lg:col-span-5">
              <FreyerCard className="p-8 space-y-6">
                <div className="border-b border-[#DCDCD7] pb-4">
                  <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#E33B12] font-semibold block mb-1">
                    Technical Specifications
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#17181B] font-mono uppercase">
                    {service.capabilitiesTitle}
                  </h3>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-[#62656B]">
                  {service.capabilities.map((capability, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#E33B12] shrink-0 mt-0.5" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-[#DCDCD7] space-y-3">
                  <FreyerButton href="/contact" size="md" variant="primary" className="w-full">
                    {service.ctaText}
                  </FreyerButton>
                  {service.relatedLink && (
                    <FreyerButton href={service.relatedLink.href} size="md" variant="secondary" className="w-full">
                      {service.relatedLink.label}
                    </FreyerButton>
                  )}
                </div>
              </FreyerCard>
            </div>
          </div>

          {/* Institutional Proof Banner */}
          <FreyerCard className="p-8 sm:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#E33B12] uppercase tracking-wider font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>{service.evidenceBadge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#17181B] tracking-tight">
                {service.evidenceHeadline}
              </h3>
              <p className="text-[#62656B] text-sm leading-relaxed">
                {service.evidenceText}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-4">
              <FreyerButton href="/contact" size="md" variant="primary">
                Contact Specialist Desk
              </FreyerButton>
            </div>
          </FreyerCard>
        </div>
      </main>
      <Footer />
    </div>
  );
}
