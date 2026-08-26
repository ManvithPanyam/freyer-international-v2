"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  FileText,
  ExternalLink,
  Users,
  Building2,
  Globe2,
  HeartHandshake,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const AWARDS_LIST = [
  { id: 1, img: "/images/awards/1.jpg", title: "Logistics Excellence Award", year: "National Logistics Forum" },
  { id: 2, img: "/images/awards/2.jpg", title: "Cargo Handling Achievement", year: "Maritime Gateway Honors" },
  { id: 3, img: "/images/awards/3.jpg", title: "Excellence in Project Cargo", year: "Industrial Forwarding Forum" },
  { id: 4, img: "/images/awards/4.jpg", title: "Supply Chain Leadership Trophy", year: "EXIM Logistics Conclave" },
  { id: 5, img: "/images/awards/5.jpg", title: "Customs Compliance Merit", year: "Port Clearance Summit" },
  { id: 11, img: "/images/awards/11.jpeg", title: "Freight Forwarder of the Year", year: "Regional Transport Awards" },
  { id: 12, img: "/images/awards/12.jpeg", title: "Operational Rigor Citation", year: "Supply Chain Council" },
  { id: 13, img: "/images/awards/13.jpeg", title: "Best Multimodal Performer", year: "Air & Ocean Guild" },
  { id: 14, img: "/images/awards/14.jpeg", title: "Carrier Partnership Award", year: "Global Forwarding Alliance" },
];

const OFFICE_GALLERY = [
  { src: "/images/gallery/office/1.jpg", caption: "Corporate Operations Floor - Bengaluru" },
  { src: "/images/gallery/office/2.jpg", caption: "Customs & Documentation Coordination Desk" },
  { src: "/images/gallery/office/3.jpg", caption: "Freight Desk & Commercial Operations" },
  { src: "/images/gallery/office/4.jpg", caption: "Branch Operations & Client Services Team" },
  { src: "/images/gallery/office/5.jpg", caption: "Executive Conference & Strategic Logistics Planning" },
  { src: "/images/gallery/5th-year-celebration/1.jpg", caption: "Annual Corporate Milestone Celebration" },
];

const BRANCH_FOOTPRINT = [
  { city: "Bengaluru", role: "Corporate Headquarters", region: "South India" },
  { city: "Chennai", role: "Corporate Branch Office", region: "South India" },
  { city: "Chennai Airport", role: "Air Cargo Terminal Office", region: "South India" },
  { city: "Delhi (Gurugram)", role: "North India Regional Hub", region: "North India" },
  { city: "Mumbai", role: "West India Regional Office", region: "West India" },
  { city: "Hyderabad", role: "Regional Operations Hub", region: "South India" },
  { city: "Visakhapatnam", role: "Port Operations Office", region: "East Coast" },
  { city: "Coimbatore", role: "Industrial Inland Branch", region: "South India" },
  { city: "Tuticorin", role: "Maritime Port Operations", region: "South India" },
  { city: "Ahmedabad", role: "West India Commercial Hub", region: "West India" },
];

const GLOBAL_ALLIANCES = [
  { name: "WCA World", logo: "/images/wca.png", desc: "Leading independent freight forwarder network across 190+ countries" },
  { name: "Security Cargo Network (SCN)", logo: "/images/SCN.png", desc: "Global alliance of vetted international logistics specialists" },
  { name: "WPA Network", logo: "/images/wpa.jpg", desc: "Worldwide Partners Alliance of certified freight agents" },
  { name: "FDX Network", logo: "/images/FDX.jpg", desc: "International express and freight forwarding partnership" },
  { name: "AMTOI", logo: "/images/amtoi.png", desc: "Association of Multimodal Transport Operators of India" },
  { name: "ACAAI", logo: "/images/Acaai.jpg", desc: "Air Cargo Agents Association of India" },
];

export function AboutExplorer() {
  const [selectedAward, setSelectedAward] = useState<(typeof AWARDS_LIST)[0] | null>(null);

  return (
    <div className="space-y-20 sm:space-y-28">
      {/* ─────────────────────────────────────────────────────────────
          SECTION 01: CREDENTIALS & ACCREDITATIONS (TIER 1 PROOF)
      ───────────────────────────────────────────────────────────── */}
      <section id="credentials" className="pt-2">
        <div className="flex items-center gap-2 text-xs font-mono text-[#c42f0b] uppercase tracking-widest font-semibold mb-2">
          <span>01 / Regulatory Credentials &amp; Standards</span>
        </div>

        <div className="pb-6 border-b border-slate-200">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0b2144] leading-tight">
            Certified Compliance &amp; Institutional Governance
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
            Freyer operates under the highest regulatory accreditations issued by Indian Customs and international aviation authorities, ensuring priority customs clearance, audit-proof compliance, and verified enterprise stability.
          </p>
        </div>

        {/* 3 Core Accreditation Dossier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* AEO Tier-2 Card */}
          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-[#c42f0b]/10 text-[#c42f0b] text-[10px] font-mono font-semibold rounded uppercase">
                  Indian Customs
                </span>
                <span className="text-xs font-mono text-slate-400">CBIC Certified</span>
              </div>

              <h3 className="text-xl font-bold text-[#0b2144] tracking-tight mt-4">
                AEO Tier-2 Authorized Economic Operator
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                Certified by the Central Board of Indirect Taxes &amp; Customs (CBIC), Ministry of Finance, Government of India. Grants expedited clearance, reduced bank guarantees, and dedicated facilitation.
              </p>

              <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200/70 text-xs font-mono text-slate-700">
                <div className="text-[11px] text-slate-500">Certificate No:</div>
                <div className="font-bold text-[#0b2144] mt-0.5">INAAQCA4076M0F243</div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <a
                href="/documents/AEO_Certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c42f0b] hover:text-[#0b2144] transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Official AEO Certificate (PDF)</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          </div>

          {/* IATA Accreditation Card */}
          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-[#0b2144]/10 text-[#0b2144] text-[10px] font-mono font-semibold rounded uppercase">
                  Global Aviation
                </span>
                <span className="text-xs font-mono text-slate-400">IATA Cargo</span>
              </div>

              <h3 className="text-xl font-bold text-[#0b2144] tracking-tight mt-4">
                IATA Accredited Cargo Agency
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                Full accreditation by the International Air Transport Association. Direct airline booking authority, automated airway bill issuance, and certified dangerous goods handling worldwide.
              </p>

              <ul className="mt-4 space-y-2 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c42f0b] shrink-0" />
                  <span>Direct scheduled airline cargo agreements</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#c42f0b] shrink-0" />
                  <span>Regulated airfreight security standards</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Aviation Standard</span>
              <span className="font-semibold text-slate-700">Regulated Agent</span>
            </div>
          </div>

          {/* Great Place to Work Card */}
          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-700 text-[10px] font-mono font-semibold rounded uppercase">
                  Culture &amp; Trust
                </span>
                <span className="text-xs font-mono text-slate-400">National Index</span>
              </div>

              <h3 className="text-xl font-bold text-[#0b2144] tracking-tight mt-4">
                Great Place to Work&reg; Certified
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                Nationally recognized for building a high-trust, high-performance workplace culture. Low staff turnover and seasoned operational teams ensure unbroken continuity across long-term client freight accounts.
              </p>

              <ul className="mt-4 space-y-2 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>High employee retention across 10 branches</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Dedicated logistics training academy</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>Workplace Standard</span>
              <span className="font-semibold text-slate-700">Trust Certified</span>
            </div>
          </div>
        </div>

        {/* Verified Industry Honors & Trophies Gallery */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between pb-4">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#0b2144] font-bold">
                Industry Recognition &amp; Accolades
              </h3>
              <p className="text-slate-500 text-xs mt-0.5">
                Authentic trophies and citations awarded for excellence in multimodal forwarding and project cargo.
              </p>
            </div>
            <span className="text-xs font-mono text-slate-400 mt-2 sm:mt-0">
              9 Documented Honors
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
            {AWARDS_LIST.map((award) => (
              <div
                key={award.id}
                className="bg-white rounded-xl border border-slate-200/80 overflow-hidden group hover:border-[#c42f0b]/40 transition-all p-3 flex flex-col justify-between"
              >
                <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-slate-50 mb-3">
                  <Image
                    src={award.img}
                    alt={award.title}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    sizes="(min-width: 1024px) 200px, 50vw"
                  />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#0b2144] leading-tight line-clamp-2">
                    {award.title}
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 mt-1">
                    {award.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 02: OPERATING PHILOSOPHY & PILLARS
      ───────────────────────────────────────────────────────────── */}
      <section id="pillars" className="pt-2">
        <div className="pb-6 border-b border-slate-200">
          <span className="text-xs font-mono text-[#c42f0b] uppercase tracking-widest font-semibold block mb-1.5">
            02 / Operating Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0b2144]">
            Three Core Operating Pillars
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
            Our corporate governance model aligns client interests, vendor compliance standards, and professional workforce development into a unified operating framework.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          {/* Pillar 1: Our Customer */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pb-2 border-b border-slate-200">
              <span className="text-[#0b2144] font-bold uppercase">01 &middot; Our Customer</span>
            </div>
            <h3 className="text-xl font-bold text-[#0b2144]">
              Custom Solutions Tailored to Business Needs
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our customers need best-in-class service and we strive to deliver. We design custom solutions tailored to specific business requirements, supported by integrated logistics technology and seasoned freight forwarding professionals who exceed expectations.
            </p>
          </div>

          {/* Pillar 2: Our Partners */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pb-2 border-b border-slate-200">
              <span className="text-[#0b2144] font-bold uppercase">02 &middot; Our Partners</span>
            </div>
            <h3 className="text-xl font-bold text-[#0b2144]">
              Compliance-First Carrier Partnerships
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We aim to create enduring partnerships with our service providers that foster mutual growth while delivering value. Safety and legal compliance guide all vendor relations, ensuring customer cargo always moves safely, legally, and on schedule.
            </p>
          </div>

          {/* Pillar 3: Our Employees */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pb-2 border-b border-slate-200">
              <span className="text-[#0b2144] font-bold uppercase">03 &middot; Our Employees</span>
            </div>
            <h3 className="text-xl font-bold text-[#0b2144]">
              Talented Logistics Professionals Across India
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Freyer invests continuously in talented logistics practitioners who embody our operational values. With presence across 10 strategic Indian commercial centers, our team is equipped with deep local knowledge and global execution discipline.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 03: PEOPLE & CORPORATE CULTURE (HUMAN SIDE)
      ───────────────────────────────────────────────────────────── */}
      <section id="people" className="bg-[#060f1e] text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-white/10">
        <div className="flex items-center gap-2 text-xs font-mono text-[#ff6b4a] uppercase tracking-widest font-semibold mb-2">
          <span>03 / People &amp; Operational Culture</span>
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

        {/* Real Office Operations Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {OFFICE_GALLERY.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden bg-black/40 border border-white/10 aspect-[16/11]"
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                className="object-cover object-center group-hover:scale-103 transition-transform duration-500"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-xs font-mono text-slate-200">
                <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 inline-block text-[11px]">
                  {item.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 04: 10-BRANCH INDIAN FOOTPRINT
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
              <span>View Interactive Network Map</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0b2144]">
            10 Dedicated Corporate Branches Across India
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
            Direct physical infrastructure positioned at major international air cargo gateways, deepwater container ports, and key inland manufacturing zones.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-8">
          {BRANCH_FOOTPRINT.map((branch, idx) => (
            <div
              key={idx}
              className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs hover:border-slate-300 transition-colors"
            >
              <div className="flex items-center gap-2 text-slate-400 mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#c42f0b]" />
                <span className="text-[10px] font-mono uppercase font-semibold">{branch.region}</span>
              </div>
              <div className="text-base font-bold text-[#0b2144]">{branch.city}</div>
              <div className="text-xs text-slate-500 mt-1">{branch.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 05: GLOBAL PARTNER ALLIANCES
      ───────────────────────────────────────────────────────────── */}
      <section id="alliances" className="pt-2">
        <div className="pb-6 border-b border-slate-200">
          <span className="text-xs font-mono text-[#c42f0b] uppercase tracking-widest font-semibold block mb-1.5">
            05 / Global Alliances &amp; Multimodal Networks
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0b2144]">
            International Forwarding Network Alliances
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
            Active certified membership in the world&apos;s most rigorous independent freight alliances, granting Freyer immediate agent representation across 190+ countries and thousands of global port terminals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {GLOBAL_ALLIANCES.map((alliance, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-xs flex items-start gap-4"
            >
              <div className="relative w-16 h-12 shrink-0 bg-slate-50 rounded-lg p-1.5 border border-slate-100 flex items-center justify-center">
                <Image
                  src={alliance.logo}
                  alt={alliance.name}
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0b2144]">{alliance.name}</h4>
                <p className="text-xs text-slate-600 mt-1 leading-snug">{alliance.desc}</p>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          {/* Education */}
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200/70 space-y-2.5">
            <div className="text-xs font-mono text-[#c42f0b] font-bold">01 &middot; EDUCATION</div>
            <h4 className="text-lg font-bold text-[#0b2144]">Skills Upgrading &amp; Talent Incubation</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Freyer embraces the philosophy &ldquo;Teach a man to fish rather than give a man a fish.&rdquo; We invest in logistics education, vocational trade training, and supply chain skills development.
            </p>
          </div>

          {/* Engagement */}
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200/70 space-y-2.5">
            <div className="text-xs font-mono text-[#c42f0b] font-bold">02 &middot; ENGAGEMENT</div>
            <h4 className="text-lg font-bold text-[#0b2144]">Community &amp; Civic Contribution</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Active engagement with local communities surrounding our branch hubs and port stations, fostering inclusive economic opportunities and community support programs.
            </p>
          </div>

          {/* Environment */}
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200/70 space-y-2.5">
            <div className="text-xs font-mono text-[#c42f0b] font-bold">03 &middot; ENVIRONMENT</div>
            <h4 className="text-lg font-bold text-[#0b2144]">Eco-Efficient Multimodal Routing</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Optimizing coastal shipping routes, consolidated LCL networks, and rail ramp intermodal transfers to minimize freight carbon intensity across domestic transport corridors.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
