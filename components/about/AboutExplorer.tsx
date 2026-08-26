"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  FileText,
  ExternalLink,
  MapPin,
  ArrowRight,
  X,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Award,
} from "lucide-react";

const FEATURED_AWARDS = [
  { id: 1, img: "/images/awards/1.jpg", title: "Logistics Excellence Award", forum: "National Logistics Forum" },
  { id: 3, img: "/images/awards/3.jpg", title: "Excellence in Project Cargo", forum: "Industrial Forwarding Forum" },
  { id: 11, img: "/images/awards/11.jpeg", title: "Freight Forwarder of the Year", forum: "Regional Transport Awards" },
];

const ALL_AWARDS = [
  { id: 1, img: "/images/awards/1.jpg", title: "Logistics Excellence Award", forum: "National Logistics Forum" },
  { id: 2, img: "/images/awards/2.jpg", title: "Cargo Handling Achievement", forum: "Maritime Gateway Honors" },
  { id: 3, img: "/images/awards/3.jpg", title: "Excellence in Project Cargo", forum: "Industrial Forwarding Forum" },
  { id: 4, img: "/images/awards/4.jpg", title: "Supply Chain Leadership Trophy", forum: "EXIM Logistics Conclave" },
  { id: 5, img: "/images/awards/5.jpg", title: "Customs Compliance Merit", forum: "Port Clearance Summit" },
  { id: 11, img: "/images/awards/11.jpeg", title: "Freight Forwarder of the Year", forum: "Regional Transport Awards" },
  { id: 12, img: "/images/awards/12.jpeg", title: "Operational Rigor Citation", forum: "Supply Chain Council" },
  { id: 13, img: "/images/awards/13.jpeg", title: "Best Multimodal Performer", forum: "Air & Ocean Guild" },
  { id: 14, img: "/images/awards/14.jpeg", title: "Carrier Partnership Award", forum: "Global Forwarding Alliance" },
];

const GLOBAL_ALLIANCES = [
  { name: "WCA World", logo: "/images/wca.png", desc: "Leading independent freight forwarder network across 190+ countries" },
  { name: "Security Cargo Network (SCN)", logo: "/images/SCN.png", desc: "Global alliance of vetted international logistics specialists" },
  { name: "WPA Network", logo: "/images/wpa.jpg", desc: "Worldwide Partners Alliance of certified freight agents" },
  { name: "FDX Network", logo: "/images/FDX.jpg", desc: "International express and freight forwarding partnership" },
  { name: "AMTOI", logo: "/images/amtoi.png", desc: "Association of Multimodal Transport Operators of India" },
  { name: "ACAAI", logo: "/images/Acaai.jpg", desc: "Air Cargo Agents Association of India" },
];

const REGIONAL_BRANCHES = [
  {
    region: "South India (HQ & Port Gateways)",
    branches: [
      { name: "Bengaluru", role: "Corporate Headquarters & Commercial Operations" },
      { name: "Chennai", role: "Corporate Branch & Sea Port Operations" },
      { name: "Chennai Airport", role: "Air Cargo Complex Terminal Office" },
      { name: "Hyderabad", role: "Regional Operations Hub & ICD Rail Links" },
      { name: "Visakhapatnam", role: "East Coast Deepwater Port Office" },
      { name: "Coimbatore", role: "Industrial Inland Forwarding Branch" },
      { name: "Tuticorin", role: "Southern Gateway Maritime Operations" },
    ],
  },
  {
    region: "North & West India Hubs",
    branches: [
      { name: "Delhi (Gurugram)", role: "North India Gateway & IGI Airfreight Desk" },
      { name: "Mumbai", role: "Nhava Sheva Sea Port & West Coast Hub" },
      { name: "Ahmedabad", role: "Gujarat Commercial & Industrial Cargo Hub" },
    ],
  },
];

export function AboutExplorer() {
  const [showAllAwardsModal, setShowAllAwardsModal] = useState<boolean>(false);

  return (
    <div className="space-y-20 sm:space-y-28">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 01: COMPANY STORY (WHAT IS FREYER?)
      ───────────────────────────────────────────────────────────── */}
      <section id="story">
        <div className="flex items-center gap-2 text-xs font-mono text-[#c42f0b] uppercase tracking-widest font-semibold mb-2">
          <span>01 / Enterprise Identity</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0b2144] leading-tight">
              Built around the cargo.
              <br />
              <span className="text-slate-500 font-light italic">
                Built around the relationship.
              </span>
            </h2>
          </div>

          <div className="text-left lg:text-right shrink-0">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">
              Multimodal Freight &middot; Customs &middot; Warehousing
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-8">
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              Freyer International was established with a singular operational purpose: to provide highly responsive, personalized, and technically disciplined freight forwarding and supply chain solutions.
            </p>
            <p className="text-slate-600 text-sm">
              We do not simply move cargo from point A to point B. We analyze your commercial supply chain, inbound vendor cycles, and import/export regulatory requirements to architect workable transport solutions that reduce total landed costs and safeguard goods from origin manufacturing to final foundation placement.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/80">
              <div className="text-xs font-mono text-[#c42f0b] font-semibold mb-1">01 &middot; CUSTOMERS FIRST</div>
              <h4 className="text-sm font-bold text-[#0b2144]">Tailored Solutions &amp; Seasoned Logistics Experts</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Dedicated account managers supported by tracking technology and experienced freight professionals.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200/80">
              <div className="text-xs font-mono text-[#c42f0b] font-semibold mb-1">02 &middot; COMPLIANCE &amp; SAFETY</div>
              <h4 className="text-sm font-bold text-[#0b2144]">Vetted Carrier Alliances &amp; Legal Standards</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Customer freight always moves safely, legally, and on schedule through strict vendor governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 02: INSTITUTIONAL EVIDENCE & ACCREDITATIONS
      ───────────────────────────────────────────────────────────── */}
      <section id="credentials" className="pt-2">
        <div className="flex items-center gap-2 text-xs font-mono text-[#c42f0b] uppercase tracking-widest font-semibold mb-2">
          <span>02 / Institutional Evidence</span>
        </div>

        <div className="pb-6 border-b border-slate-200">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0b2144]">
            Verified Compliance &amp; Sovereign Accreditations
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
            Direct institutional proof of operational standards, sovereign customs certification, and workplace excellence.
          </p>
        </div>

        {/* 3 Evidence Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* AEO Tier-2 Block */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-2 border-b border-slate-100">
                <span className="text-[#c42f0b] font-bold">AEO TIER-2 ACCREDITATION</span>
                <span>Indian Customs</span>
              </div>
              <h3 className="text-lg font-bold text-[#0b2144] mt-3">
                Authorized Economic Operator (AEO Tier-2)
              </h3>
              <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                Issued by the Central Board of Indirect Taxes &amp; Customs (CBIC), Ministry of Finance, Govt of India.
              </p>
              <div className="mt-3 p-2.5 bg-slate-50 rounded border border-slate-200/70 text-xs font-mono">
                <span className="text-slate-500 block text-[10px]">Certificate No:</span>
                <span className="font-bold text-[#0b2144]">INAAQCA4076M0F243</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <a
                href="/documents/AEO_Certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c42f0b] hover:text-[#0b2144] transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Official Certificate (PDF)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* IATA Accreditation Block */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-2 border-b border-slate-100">
                <span className="text-[#0b2144] font-bold">IATA CARGO AGENT</span>
                <span>Global Aviation</span>
              </div>
              <h3 className="text-lg font-bold text-[#0b2144] mt-3">
                Regulated International Air Cargo Agency
              </h3>
              <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                Direct scheduled airline booking authority, automated electronic airway bill issuance, and certified dangerous goods handling worldwide.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Standard:</span>
              <span className="font-semibold text-slate-800">IATA Cargo Accredited</span>
            </div>
          </div>

          {/* Great Place to Work Block */}
          <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 pb-2 border-b border-slate-100">
                <span className="text-emerald-700 font-bold">WORKPLACE EXCELLENCE</span>
                <span>National Index</span>
              </div>
              <h3 className="text-lg font-bold text-[#0b2144] mt-3">
                Great Place to Work&reg; Certified
              </h3>
              <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                Nationally certified for building a high-trust, high-retention operating culture across 10 corporate branch hubs in India.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Trust Standard:</span>
              <span className="font-semibold text-emerald-700">Certified Organization</span>
            </div>
          </div>
        </div>

        {/* Curated Industry Recognitions */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#0b2144] font-bold block">
              Documented Industry Awards &amp; Trophies
            </span>
            <span className="text-xs text-slate-500">
              Honored for operational performance, breakbulk engineering, and customs excellence.
            </span>
          </div>
          <button
            onClick={() => setShowAllAwardsModal(true)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c42f0b] hover:text-[#0b2144] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c42f0b] self-start sm:self-auto"
          >
            <span>View All 9 Accolades</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          {FEATURED_AWARDS.map((award) => (
            <div
              key={award.id}
              className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs flex items-center gap-4"
            >
              <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-slate-50 shrink-0 border border-slate-100">
                <Image src={award.img} alt={award.title} fill className="object-contain p-1.5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#0b2144]">{award.title}</h4>
                <p className="text-[11px] font-mono text-slate-500 mt-0.5">{award.forum}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 03: PEOPLE BEHIND THE MOVEMENT (DELIBERATE 3-IMAGE COMPOSITION)
      ───────────────────────────────────────────────────────────── */}
      <section id="people" className="bg-[#060f1e] text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-white/10">
        <div className="flex items-center gap-2 text-xs font-mono text-[#ff6b4a] uppercase tracking-widest font-semibold mb-2">
          <span>03 / Operational Culture &amp; Human Capital</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-8 border-b border-white/10">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              The specialists behind the movement.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              Behind every heavy crane lift, customs clearance declaration, and ocean voyage is a dedicated team of licensed customs brokers, freight coordinators, and supply chain architects operating from our branch offices.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-6 py-3.5 rounded border border-white/15 transition-colors"
            >
              <span>Explore Careers at Freyer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Intentional 3-Image Composition: 1 Hero + 2 Stacked Supporting Photos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
          {/* Main Hero Office Photo */}
          <div className="lg:col-span-7 relative aspect-[16/11] rounded-2xl overflow-hidden bg-black/40 border border-white/10">
            <Image
              src="/images/gallery/office/1.jpg"
              alt="Freyer Corporate Operations Floor Bengaluru - Freight Forwarding & Logistics Coordination"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-slate-200">
              <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-white/10 inline-block">
                Corporate Operations Floor &middot; Bengaluru Headquarters
              </span>
            </div>
          </div>

          {/* Stacked 2 Supporting Operational Photos */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <div className="relative aspect-[16/9] lg:aspect-[16/7.5] rounded-2xl overflow-hidden bg-black/40 border border-white/10">
              <Image
                src="/images/gallery/office/2.jpg"
                alt="Customs Documentation Coordination Desk - Freyer Logistics"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-xs font-mono text-slate-200">
                <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 inline-block text-[11px]">
                  Customs Clearance Coordination Desk
                </span>
              </div>
            </div>

            <div className="relative aspect-[16/9] lg:aspect-[16/7.5] rounded-2xl overflow-hidden bg-black/40 border border-white/10">
              <Image
                src="/images/gallery/office/3.jpg"
                alt="Freight Desk & Commercial Operations Floor - Freyer Logistics"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-xs font-mono text-slate-200">
                <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 inline-block text-[11px]">
                  Freight Operations &amp; Commercial Desk
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 04: 10-BRANCH GEOGRAPHIC FOOTPRINT
      ───────────────────────────────────────────────────────────── */}
      <section id="footprint" className="pt-2">
        <div className="pb-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-[#c42f0b] uppercase tracking-widest font-semibold block mb-1.5">
              04 / Physical Footprint
            </span>
            <Link
              href="/locations"
              className="text-xs font-semibold text-[#c42f0b] hover:text-[#0b2144] inline-flex items-center gap-1 transition-colors"
            >
              <span>Explore Satellite Map</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0b2144]">
            Direct Physical Network Across 10 Hubs
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
            Positioned at India&apos;s critical manufacturing centers, deepwater sea ports, and international air cargo complexes, connected seamlessly to 190+ countries through certified global forwarder alliances.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
          {REGIONAL_BRANCHES.map((reg, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#0b2144] font-bold pb-2 border-b border-slate-100">
                {reg.region}
              </h3>
              <div className="space-y-3">
                {reg.branches.map((b) => (
                  <div key={b.name} className="flex items-start justify-between gap-4 text-xs">
                    <div className="flex items-center gap-2 font-bold text-[#0b2144]">
                      <MapPin className="w-3.5 h-3.5 text-[#c42f0b] shrink-0" />
                      <span>{b.name}</span>
                    </div>
                    <span className="text-slate-500 font-mono text-[11px] text-right">{b.role}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 05: GLOBAL ALLIANCES (TYPOGRAPHIC LEDGER)
      ───────────────────────────────────────────────────────────── */}
      <section id="alliances" className="pt-2">
        <div className="pb-6 border-b border-slate-200">
          <span className="text-xs font-mono text-[#c42f0b] uppercase tracking-widest font-semibold block mb-1.5">
            05 / Forwarding Alliances
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0b2144]">
            International Network Alliances
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
            Active certified membership in the world&apos;s leading independent freight networks, ensuring reliable agency representation across 190+ countries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {GLOBAL_ALLIANCES.map((alliance, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-2xs flex items-center gap-4 group hover:border-[#c42f0b]/30 transition-colors"
            >
              <div className="relative w-14 h-12 shrink-0 bg-slate-50 rounded-lg p-1 border border-slate-100 flex items-center justify-center">
                <Image src={alliance.logo} alt={alliance.name} fill className="object-contain p-1" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#0b2144]">{alliance.name}</h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">{alliance.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 06: CSR & 3E CHARTER
      ───────────────────────────────────────────────────────────── */}
      <section id="csr" className="pt-2">
        <div className="pb-6 border-b border-slate-200">
          <span className="text-xs font-mono text-[#c42f0b] uppercase tracking-widest font-semibold block mb-1.5">
            06 / Corporate Social Responsibility
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0b2144]">
            The 3E Sustainability &amp; Talent Charter
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
            Our passion for supply chain excellence is fueled by our belief that the logistics sector plays a key role in driving economic growth and creating sustainable social impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
          {/* Education */}
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200/70 space-y-2">
            <div className="text-xs font-mono text-[#c42f0b] font-bold">01 &middot; EDUCATION</div>
            <h4 className="text-base font-bold text-[#0b2144]">Skills Upgrading &amp; Talent Incubation</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Freyer embraces the philosophy &ldquo;Teach a man to fish rather than give a man a fish.&rdquo; We invest in logistics vocational training and supply chain education.
            </p>
          </div>

          {/* Engagement */}
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200/70 space-y-2">
            <div className="text-xs font-mono text-[#c42f0b] font-bold">02 &middot; ENGAGEMENT</div>
            <h4 className="text-base font-bold text-[#0b2144]">Community &amp; Civic Contribution</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Active engagement with local communities surrounding our branch hubs and port stations, supporting inclusive growth.
            </p>
          </div>

          {/* Environment */}
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200/70 space-y-2">
            <div className="text-xs font-mono text-[#c42f0b] font-bold">03 &middot; ENVIRONMENT</div>
            <h4 className="text-base font-bold text-[#0b2144]">Eco-Efficient Multimodal Routing</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Optimizing coastal shipping routes, consolidated LCL networks, and rail ramp intermodal transfers to minimize freight carbon intensity.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          MODAL: ALL 9 HONORS & TROPHIES
      ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {showAllAwardsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowAllAwardsModal(false)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div>
                  <h3 className="text-xl font-bold text-[#0b2144]">All 9 Industry Accolades &amp; Honors</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Verified awards from maritime, forwarding, and logistics forums.</p>
                </div>
                <button
                  onClick={() => setShowAllAwardsModal(false)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                {ALL_AWARDS.map((award) => (
                  <div key={award.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex flex-col items-center text-center">
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-white mb-2 p-1 border border-slate-100">
                      <Image src={award.img} alt={award.title} fill className="object-contain" />
                    </div>
                    <div className="text-xs font-bold text-[#0b2144] line-clamp-2">{award.title}</div>
                    <div className="text-[10px] font-mono text-slate-500 mt-0.5">{award.forum}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
