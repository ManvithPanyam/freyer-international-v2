"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  MapPin,
  ArrowRight,
  X,
  ChevronRight,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Phone,
  Mail,
} from "lucide-react";
import {
  SectionHeader,
  FreyerCard,
  FreyerButton,
  THEME_TOKENS,
} from "@/components/ui/design-system";

const FEATURED_AWARDS = [
  { id: 1, img: "/images/awards/1.jpg", title: "Logistics Excellence Recognition", forum: "Industry Award Trophy" },
  { id: 3, img: "/images/awards/3.jpg", title: "Project Cargo Achievement", forum: "Industry Award Trophy" },
  { id: 11, img: "/images/awards/11.jpeg", title: "Freight Forwarder Recognition", forum: "Industry Award Trophy" },
];

const ALL_AWARDS = [
  { id: 1, img: "/images/awards/1.jpg", title: "Logistics Excellence Recognition", forum: "Industry Award Trophy" },
  { id: 2, img: "/images/awards/2.jpg", title: "Cargo Handling Achievement", forum: "Industry Award Trophy" },
  { id: 3, img: "/images/awards/3.jpg", title: "Project Cargo Achievement", forum: "Industry Award Trophy" },
  { id: 4, img: "/images/awards/4.jpg", title: "Supply Chain Performance Trophy", forum: "Industry Award Trophy" },
  { id: 5, img: "/images/awards/5.jpg", title: "Customs Operations Recognition", forum: "Industry Award Trophy" },
  { id: 11, img: "/images/awards/11.jpeg", title: "Freight Forwarder Recognition", forum: "Industry Award Trophy" },
  { id: 12, img: "/images/awards/12.jpeg", title: "Operational Rigor Citation", forum: "Industry Award Trophy" },
  { id: 13, img: "/images/awards/13.jpeg", title: "Multimodal Performance Trophy", forum: "Industry Award Trophy" },
  { id: 14, img: "/images/awards/14.jpeg", title: "Carrier Partnership Award", forum: "Industry Award Trophy" },
];

const GLOBAL_ALLIANCES = [
  { name: "WCA World", logo: "/images/wca.png", desc: "Leading independent freight forwarder network worldwide" },
  { name: "Security Cargo Network (SCN)", logo: "/images/SCN.png", desc: "Global alliance of vetted international logistics specialists" },
  { name: "WPA (The Logistics Network)", logo: "/images/wpa.jpg", desc: "Global logistics network partner" },
  { name: "FDX Logistics Network", logo: "/images/FDX.jpg", desc: "Global freight logistics network partner" },
  { name: "AMTOI", logo: "/images/amtoi.png", desc: "Association of Multimodal Transport Operators of India" },
  { name: "ACAAI", logo: "/images/Acaai.jpg", desc: "Air Cargo Agents Association of India" },
];

const REGIONAL_BRANCHES = [
  {
    region: "South India (HQ & Maritime Port Gateways)",
    branches: [
      { name: "Bengaluru", role: "Corporate Registered Office & Commercial Hub" },
      { name: "Chennai (Egmore HQ)", role: "Primary Ocean Port Operations & Central Customs Brokerage" },
      { name: "Chennai Airport", role: "Air Cargo Terminal Office & Apron Logistics" },
      { name: "Hyderabad", role: "Regional Operations Hub & ICD Rail Links" },
      { name: "Visakhapatnam", role: "East Coast Deepwater Port Gateway & Stevedoring" },
      { name: "Coimbatore", role: "Industrial Inland Forwarding & Heavy Road Freight" },
      { name: "Tuticorin", role: "Southern Deepwater Berth Operations & CFS Logistics" },
    ],
  },
  {
    region: "North & West India Commercial Corridors",
    branches: [
      { name: "Delhi / NCR (Gurugram)", role: "Northern Gateway & Air Cargo Terminal Desk" },
      { name: "Mumbai (Marol / Andheri)", role: "Western Seaboard Gateway & Nhava Sheva Support" },
      { name: "Ahmedabad (Navrangpur)", role: "Gujarat Industrial Corridor & Mundra Port Feeder" },
    ],
  },
];

export function AboutExplorer() {
  const [showAllAwardsModal, setShowAllAwardsModal] = useState<boolean>(false);

  useEffect(() => {
    if (!showAllAwardsModal) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowAllAwardsModal(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showAllAwardsModal]);

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 01: COMPANY STORY (WHAT IS FREYER?)
      ───────────────────────────────────────────────────────────── */}
      <section id="story">
        <SectionHeader
          num="01"
          tag="Enterprise Identity"
          title="BUILT AROUND THE CARGO."
          highlight="BUILT AROUND THE RELATIONSHIP."
          description="Freyer International was established with a singular operational commitment: to provide responsive, personalized, and technically disciplined freight forwarding, customs compliance, and supply chain management across India and global trading corridors."
        />

        {/* Narrative Grid with Documentary Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-slate-300 font-light leading-relaxed">
            <div className="border-l-2 border-[#e1390f] pl-4 py-1">
              <p className="text-white font-medium text-lg sm:text-xl italic leading-snug">
                &ldquo;We don&apos;t just want to move your goods from point A to point B, we want to understand your business and design a solution to fit your requirements.&rdquo;
              </p>
            </div>
            <p className="text-sm sm:text-base">
              From our registered headquarters in Bengaluru and primary seaport hub in Chennai, Freyer International operates across 10 branch stations in India. Our customers trust us with their cargo because we listen to their needs, react quickly, protect freight completely, and deliver reliably.
            </p>
            <p className="text-xs sm:text-sm text-white/50">
              Licensed CBIC AEO-LO Tier 2 logistics operator (INAAQCA4076M0F243) and IATA approved cargo agent (14-3-4852) with nationwide direct operations.
            </p>
          </div>

          <div className="lg:col-span-6 relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#181A1F]">
            <Image
              src="/images/About.jpg"
              alt="Freyer International Logistics Corporate Operations and Freight Coordination"
              fill
              className="object-cover object-center brightness-90 contrast-105"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 text-xs font-mono text-white/80">
              <span className="bg-[#121316]/80 backdrop-blur-md px-3 py-1 rounded border border-white/10 text-[11px]">
                Freyer International Corporate Operations
              </span>
            </div>
          </div>
        </div>

        {/* Mission, Vision & Charter Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <FreyerCard className="p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#e1390f] font-semibold block mb-2">
                Corporate Mission
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                To be the leading supply chain solutions provider of choice by leveraging our People, Process &amp; Network.
              </h3>
            </div>
            <div className="pt-4 mt-6 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-white/40">
              <span className="text-white">People</span>
              <span>&middot;</span>
              <span className="text-white">Process</span>
              <span>&middot;</span>
              <span className="text-white">Network</span>
            </div>
          </FreyerCard>

          <FreyerCard className="p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-white/40 font-semibold block mb-2">
                Corporate Vision
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                We want to be recognized as the most flexible and reliable partner of logistics services.
              </h3>
            </div>
            <div className="pt-4 mt-6 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-white/40">
              <span className="text-[#e1390f]">Operational Flexibility</span>
              <span>&middot;</span>
              <span className="text-white">Global Reliability</span>
            </div>
          </FreyerCard>
        </div>

        {/* Core Values: Reliability, Integrity, Sincerity */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <FreyerCard className="p-6 space-y-3">
            <div className="text-xs font-mono uppercase text-[#e1390f] font-bold">01 / Reliability</div>
            <h4 className="text-base font-bold text-white">Execution Precision</h4>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Freyer International&apos;s proven <strong className="text-white font-medium">RELIABILITY</strong> to perform its best is the company&apos;s assurance of professionalism in every freight movement.
            </p>
          </FreyerCard>

          <FreyerCard className="p-6 space-y-3">
            <div className="text-xs font-mono uppercase text-[#e1390f] font-bold">02 / Integrity</div>
            <h4 className="text-base font-bold text-white">Regulatory Compliance</h4>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              We foster an uncompromising commitment to <strong className="text-white font-medium">INTEGRITY</strong> in all our business activities, statutory customs filings, and fiscal reporting.
            </p>
          </FreyerCard>

          <FreyerCard className="p-6 space-y-3">
            <div className="text-xs font-mono uppercase text-[#e1390f] font-bold">03 / Sincerity</div>
            <h4 className="text-base font-bold text-white">Dedicated Welfare</h4>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              <strong className="text-white font-medium">SINCERITY</strong> is demonstrated by the genuine care and interest in the welfare of our Customers and Employees alike.
            </p>
          </FreyerCard>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 02: CREDENTIALS & LICENSES
      ───────────────────────────────────────────────────────────── */}
      <section id="credentials">
        <SectionHeader
          num="02"
          tag="Statutory Authority"
          title="ACCREDITED GOVERNANCE."
          highlight="VERIFIED COMPLIANCE."
          description="Audited statutory authority issued by central government ministries, international aviation bodies, and global forwarder federations."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FreyerCard className="p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-white/40 pb-2 border-b border-white/10">
                <span className="text-[#e1390f] font-bold">AEO-LO TIER 2</span>
                <span>CBIC Customs</span>
              </div>
              <h3 className="text-xl font-bold text-white mt-4">
                Authorized Economic Operator
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed font-light">
                Highest tier of trusted customs logistics operator accreditation granted by the Central Board of Indirect Taxes and Customs (CBIC), Ministry of Finance, Government of India.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs font-mono text-white/50">
              License: <span className="text-white">INAAQCA4076M0F243</span>
            </div>
          </FreyerCard>

          <FreyerCard className="p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-white/40 pb-2 border-b border-white/10">
                <span className="text-[#e1390f] font-bold">IATA ACCREDITED</span>
                <span>Aviation Authority</span>
              </div>
              <h3 className="text-xl font-bold text-white mt-4">
                Approved Cargo Agent
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed font-light">
                Direct apron and terminal privileges across major international air carriers, enabling rapid airway bill (AWB) issuance and prioritized space booking.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs font-mono text-white/50">
              Agent Code: <span className="text-white">14-3-4852</span>
            </div>
          </FreyerCard>

          <FreyerCard className="p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-white/40 pb-2 border-b border-white/10">
                <span className="text-[#e1390f] font-bold">GLOBAL ALLIANCES</span>
                <span>Forwarding Networks</span>
              </div>
              <h3 className="text-xl font-bold text-white mt-4">
                WCA &amp; SCN Member
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed font-light">
                Audited membership in Security Cargo Network and WCA World, providing verified reciprocal agency coverage across major international sea and air gateways.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs font-mono text-white/50">
              Status: <span className="text-white">Vetted Member</span>
            </div>
          </FreyerCard>
        </div>

        {/* Featured Industry Awards */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#e1390f] font-semibold block">
              Documented Industry Awards &amp; Recognitions
            </span>
            <span className="text-xs text-white/40">
              Accolades awarded for freight forwarding, breakbulk operations, and customs compliance.
            </span>
          </div>
          <button
            type="button"
            onClick={() => setShowAllAwardsModal(true)}
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#e1390f] hover:text-white transition-colors"
          >
            <span>View All {ALL_AWARDS.length} Accolades</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          {FEATURED_AWARDS.map((award) => (
            <FreyerCard key={award.id} className="p-5 flex items-center gap-4">
              <div className="relative w-16 h-16 rounded overflow-hidden bg-black/40 shrink-0 border border-white/10">
                <Image src={award.img} alt={award.title} fill className="object-contain p-2" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">{award.title}</h4>
                <p className="text-[10px] font-mono text-white/40 mt-1">{award.forum}</p>
              </div>
            </FreyerCard>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 03: LEADERSHIP & SPECIALISTS
      ───────────────────────────────────────────────────────────── */}
      <section id="leadership">
        <SectionHeader
          num="03"
          tag="Operational Culture"
          title="THE SPECIALISTS."
          highlight="BEHIND THE MOVEMENT."
          description="Behind every tandem crane lift, customs declaration, and ocean voyage is a dedicated team of licensed brokers, freight coordinators, and engineers."
          action={
            <FreyerButton href="/careers" size="sm" variant="secondary">
              Explore Careers
            </FreyerButton>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#181A1F]">
            <Image
              src="/images/gallery/office/1.jpg"
              alt="Freyer Corporate Operations Floor - Freight Forwarding & Logistics Coordination"
              fill
              className="object-cover object-center brightness-90 contrast-105"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 text-xs font-mono text-white/80">
              Corporate Control Operations Floor
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <FreyerCard className="p-6">
              <div className="text-xs font-mono uppercase text-[#e1390f] font-semibold mb-1">
                Customs Authority Desk
              </div>
              <h4 className="text-base font-bold text-white">Licensed Brokerage Leadership</h4>
              <p className="text-xs text-slate-300 font-light mt-1 leading-relaxed">
                Direct in-house Customs Brokers managing EDI filings, valuation assessments, and specialized duty exemption schemes under Indian Customs Law.
              </p>
            </FreyerCard>

            <FreyerCard className="p-6">
              <div className="text-xs font-mono uppercase text-[#e1390f] font-semibold mb-1">
                International Line Management
              </div>
              <h4 className="text-base font-bold text-white">Route Directors &amp; Pricing Desks</h4>
              <p className="text-xs text-slate-300 font-light mt-1 leading-relaxed">
                Dedicated trade lane managers controlling contracted allocations with Tier-1 ocean shipping lines and scheduled international air freighters.
              </p>
            </FreyerCard>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 04: PHYSICAL FOOTPRINT (10 VERIFIED STATIONS)
      ───────────────────────────────────────────────────────────── */}
      <section id="footprint">
        <SectionHeader
          num="04"
          tag="Infrastructure Directory"
          title="10 BRANCH STATIONS."
          highlight="ACROSS INDIA."
          description="Direct physical presence at critical manufacturing clusters, deepwater seaports, and air cargo complexes."
          action={
            <FreyerButton href="/locations" size="sm" variant="secondary">
              Inspect Network Map
            </FreyerButton>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {REGIONAL_BRANCHES.map((reg, idx) => (
            <FreyerCard key={idx} className="p-8 space-y-6">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#e1390f] font-bold pb-3 border-b border-white/10">
                {reg.region}
              </h3>
              <div className="space-y-4">
                {reg.branches.map((b) => (
                  <div key={b.name} className="flex items-start justify-between gap-4 text-xs">
                    <div className="flex items-center gap-2 font-bold text-white font-mono">
                      <MapPin className="w-3.5 h-3.5 text-[#e1390f] shrink-0" />
                      <span>{b.name}</span>
                    </div>
                    <span className="text-slate-400 font-mono text-[11px] text-right font-light">
                      {b.role}
                    </span>
                  </div>
                ))}
              </div>
            </FreyerCard>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 05: GLOBAL FORWARDING ALLIANCES
      ───────────────────────────────────────────────────────────── */}
      <section id="alliances">
        <SectionHeader
          num="05"
          tag="Global Coverage"
          title="TRUSTED ALLIANCES."
          highlight="WORLDWIDE CORRIDORS."
          description="Active certified membership in the world&apos;s leading freight networks, ensuring reliable reciprocal agency representation worldwide."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GLOBAL_ALLIANCES.map((alliance, idx) => (
            <FreyerCard key={idx} className="p-6 flex items-center gap-4">
              <div className="relative w-16 h-12 shrink-0 bg-white/[0.05] rounded border border-white/10 flex items-center justify-center p-1.5">
                <Image src={alliance.logo} alt={alliance.name} fill className="object-contain p-1 brightness-0 invert opacity-75" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">{alliance.name}</h4>
                <p className="text-[11px] text-white/50 mt-0.5 leading-snug">{alliance.desc}</p>
              </div>
            </FreyerCard>
          ))}
        </div>
      </section>

      {/* Accolades Modal */}
      {showAllAwardsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#181A1F] border border-white/15 rounded-xl max-w-4xl w-full max-h-[85vh] flex flex-col overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white font-mono uppercase">
                  Documented Accolades Archive ({ALL_AWARDS.length})
                </h3>
                <p className="text-xs text-white/40">Verified trophies and industry citations</p>
              </div>
              <button
                type="button"
                onClick={() => setShowAllAwardsModal(false)}
                className="p-2 rounded bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ALL_AWARDS.map((a) => (
                <div key={a.id} className="p-4 rounded border border-white/10 bg-black/40 flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded overflow-hidden bg-white/5 shrink-0 border border-white/10">
                    <Image src={a.img} alt={a.title} fill className="object-contain p-2" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">{a.title}</h5>
                    <p className="text-[10px] font-mono text-white/40 mt-1">{a.forum}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
