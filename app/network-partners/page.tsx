import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Mail, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Global Alliances & Network Partners | Freyer International Logistics",
  description: "Explore Freyer International's accredited global freight forwarder alliances including WCA World, SCN, WPA, FDX, AMTOI, and ACAAI across 190+ countries.",
};

const OPERATIONAL_OUTCOMES = [
  {
    step: "01",
    title: "Origin Handling",
    desc: "Local cargo pickup, export packaging verification, and factory-to-port drayage coordinated through audited partner stations worldwide.",
  },
  {
    step: "02",
    title: "Documentation & Compliance",
    desc: "Export customs filing, electronic Bill of Lading & e-AWB generation, and consular authentication before cargo dispatch.",
  },
  {
    step: "03",
    title: "Main Carriage Air / Ocean",
    desc: "Direct carrier contract allocations with global shipping lines and scheduled airlines for guaranteed vessel and freighter space.",
  },
  {
    step: "04",
    title: "Destination Representation",
    desc: "Seamless overseas customs clearance, DDP/DAP tax handling, and port yard devanning with reciprocal network partners.",
  },
  {
    step: "05",
    title: "Final-Mile Coordination",
    desc: "On-site industrial delivery, tail-lift or mobile crane unloading, and instant proof of delivery (POD) confirmation back to India.",
  },
];

const ALLIANCES_DETAILED = [
  {
    name: "WCA World",
    category: "Global Independent Forwarder Alliance",
    logo: "/images/wca.png",
    coverage: "190+ Countries &middot; 10,000+ Member Offices",
    description:
      "The world's largest network of independent freight forwarders. Provides Freyer with immediate door-to-door partner representation, reciprocal financial protection, and shared operational standards across major commercial ports and airports worldwide.",
  },
  {
    name: "Security Cargo Network (SCN)",
    category: "Audited Freight Consortium",
    logo: "/images/SCN.png",
    coverage: "Vetted International Forwarding Specialists",
    description:
      "A global alliance of independent logistics companies bound by stringent operational vetting, financial stability criteria, and high-touch customer accountability across critical trade lanes.",
  },
  {
    name: "Worldwide Partners Alliance (WPA)",
    category: "Certified Forwarding Network",
    logo: "/images/wpa.jpg",
    coverage: "Premier Multimodal Forwarders",
    description:
      "A dedicated international network of professional logistics operators focused on bilateral air and ocean freight forwarding excellence and seamless customs collaboration.",
  },
  {
    name: "FDX Global Logistics Network",
    category: "Express & Multimodal Forwarding Group",
    logo: "/images/FDX.jpg",
    coverage: "Global Airfreight & Express Alliance",
    description:
      "Specialized worldwide logistics cooperative facilitating expedited airfreight space, charter operations, and rapid transit solutions for time-critical industrial shipments.",
  },
  {
    name: "AMTOI",
    category: "Apex Indian Multimodal Body",
    logo: "/images/amtoi.png",
    coverage: "Association of Multimodal Transport Operators of India",
    description:
      "The premier national association representing India's multimodal transport operators, fostering industry compliance, multimodal policy advocacy, and seamless coastal and rail intermodal integration.",
  },
  {
    name: "ACAAI",
    category: "Regulated Indian Air Cargo Association",
    logo: "/images/Acaai.jpg",
    coverage: "Air Cargo Agents Association of India",
    description:
      "The sole national organization representing the air cargo industry in India, working in close coordination with the Ministry of Civil Aviation, Airports Authority of India (AAI), and international airlines.",
  },
];

export default function NetworkPartnersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fbfcfd] text-[#0b2144] pt-32 pb-24">
        {/* ── Page Header: Asymmetric Two-Column Composition on 1560px Canvas ── */}
        <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-12 mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-3">
            <Link href="/" className="hover:text-[#c42f0b] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Network Partners</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            {/* Left: Broad, Commanding Headline & Lead (8 cols) */}
            <div className="lg:col-span-8">
              <span className="text-[#c42f0b] text-xs sm:text-sm font-mono tracking-[0.22em] uppercase font-bold block mb-3">
                International Forwarding Alliances
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0b2144] leading-[1.05]">
                India on the ground.
                <br />
                <span className="text-slate-500 font-light italic">
                  Global through trusted networks.
                </span>
              </h1>
              <p className="text-slate-600 text-base sm:text-lg lg:text-xl mt-4 sm:mt-5 leading-relaxed max-w-3xl">
                Freyer combines deep, on-the-ground physical infrastructure across 10 Indian hubs with certified memberships in the world&apos;s most rigorous independent freight networks—granting our clients unbroken door-to-door accountability across 190+ nations.
              </p>
            </div>

            {/* Right: Authoritative Factual Metric Stack (4 cols) */}
            <div className="lg:col-span-4 bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/90 shadow-2xs space-y-5">
              <div className="flex items-baseline justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-medium">
                  Global Reach &amp; Alliances
                </span>
                <span className="text-xs font-mono text-[#c42f0b] font-bold">VERIFIED</span>
              </div>

              <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 text-left">
                <div>
                  <span className="text-3xl sm:text-4xl font-bold text-[#0b2144] font-mono block">10</span>
                  <span className="text-xs sm:text-sm font-mono text-slate-500 uppercase tracking-wider mt-0.5 block">
                    Operating Hubs in India
                  </span>
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-bold text-[#0b2144] font-mono block">190+</span>
                  <span className="text-xs sm:text-sm font-mono text-slate-500 uppercase tracking-wider mt-0.5 block">
                    Network Countries Reached
                  </span>
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-bold text-[#0b2144] font-mono block">6</span>
                  <span className="text-xs sm:text-sm font-mono text-slate-500 uppercase tracking-wider mt-0.5 block">
                    Accredited Forwarder Alliances
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-12 space-y-16 sm:space-y-24">
          {/* ── What This Network Enables: Full 1560px 3x2 Matrix ── */}
          <div className="bg-white p-8 sm:p-12 lg:p-14 rounded-3xl border border-slate-200/90 shadow-sm space-y-10">
            <div className="pb-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0b2144]">
                What Our Global Network Enables
              </h2>
              <span className="text-sm sm:text-base font-mono font-medium text-slate-500">
                End-to-End Execution Flow
              </span>
            </div>

            {/* Spacious 3x2 Matrix spanning 1560px canvas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {OPERATIONAL_OUTCOMES.map((item) => (
                <div
                  key={item.step}
                  className="p-8 sm:p-10 rounded-2xl bg-slate-50/90 border border-slate-200 shadow-2xs space-y-4 flex flex-col justify-between hover:border-slate-300 transition-colors"
                >
                  <div>
                    <span className="text-base font-mono font-bold text-[#c42f0b] block">
                      STEP {item.step}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#0b2144] mt-2 tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-base sm:text-lg text-slate-700 leading-[1.6]">
                    {item.desc}
                  </p>
                </div>
              ))}

              {/* End-to-End Guarantee Card filling 6th slot */}
              <div className="p-8 sm:p-10 rounded-2xl bg-[#060f1e] text-white border border-white/10 shadow-md space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs sm:text-sm font-mono text-[#ff6b4a] font-bold">
                    <span>SECURITY &amp; COMPLIANCE</span>
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2 tracking-tight">
                    Reciprocal Protection
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-slate-300 leading-[1.6]">
                  Every shipment is governed by vetted international forwarder bilateral agreements, reciprocal financial indemnity, and AEO Tier-2 customs standards.
                </p>
              </div>
            </div>
          </div>

          {/* ── Certified Alliances Grid (Full 1560px 3-Column Spread) ── */}
          <div>
            <div className="pb-5 border-b border-slate-200 flex items-baseline justify-between">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0b2144]">
                Accredited Global Consortiums &amp; Associations
              </h2>
              <span className="text-sm sm:text-base font-mono text-slate-400">
                6 Verified Memberships
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pt-10">
              {ALLIANCES_DETAILED.map((alliance) => (
                <div
                  key={alliance.name}
                  className="bg-white p-9 sm:p-12 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6 hover:border-slate-300 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                      <div className="relative w-22 h-16 bg-slate-50 rounded-xl p-2 border border-slate-100 flex items-center justify-center">
                        <Image
                          src={alliance.logo}
                          alt={alliance.name}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-slate-400 font-medium text-right max-w-[180px] truncate">
                        {alliance.category}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#0b2144] tracking-tight mt-5">
                      {alliance.name}
                    </h3>
                    <div
                      className="text-sm sm:text-base font-mono text-[#c42f0b] font-semibold mt-1.5"
                      dangerouslySetInnerHTML={{ __html: alliance.coverage }}
                    />

                    <p className="text-base sm:text-lg text-slate-700 mt-4 leading-[1.6]">
                      {alliance.description}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-slate-100 flex items-center justify-between text-sm font-mono text-slate-400">
                    <span>Accreditation Status</span>
                    <span className="text-[#0b2144] font-bold text-sm sm:text-base">Active Member</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── International Agency Collaboration Desk ── */}
          <div className="bg-[#0b2144] text-white rounded-3xl p-9 sm:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[#ff6b4a] text-xs sm:text-sm font-mono tracking-widest uppercase font-semibold">
                Bilateral Forwarder Partnership
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mt-2">
                Seeking a reliable handling partner in India?
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
                Connect with our Global Alliances desk for reciprocal agency representation, DDP/DAP clearance handling, and breakbulk project coordination across India.
              </p>
            </div>

            <div className="shrink-0 flex flex-wrap items-center gap-4">
              <a
                href="mailto:info@freyerinternational.com?subject=International%20Agency%20Inquiry%20-%20Freyer%20Logistics"
                className="inline-flex items-center gap-2 bg-[#c42f0b] hover:bg-[#a82506] text-white text-base font-semibold px-8 py-4 rounded-xl transition-colors shadow-md shadow-[#c42f0b]/20"
              >
                <Mail className="w-5 h-5" />
                <span>Contact Alliances Desk</span>
              </a>
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white text-base font-semibold px-8 py-4 rounded-xl border border-white/15 transition-colors"
              >
                <span>View Indian Hubs</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
