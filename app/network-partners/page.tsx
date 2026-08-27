import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Globe, ShieldCheck, CheckCircle2, ArrowRight, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Global Alliances & Network Partners | Freyer International Logistics",
  description: "Explore Freyer International's accredited global freight forwarder alliances including WCA World, SCN, WPA, FDX, AMTOI, and ACAAI across 190+ countries.",
};

const OPERATIONAL_OUTCOMES = [
  {
    step: "01",
    title: "Origin Handling",
    desc: "Local pickup, export packing verification, and inland factory drayage coordinated through audited network partner stations.",
  },
  {
    step: "02",
    title: "Documentation & Compliance",
    desc: "Export customs filing, electronic Bill of Lading / e-AWB generation, and consular authentication before cargo dispatch.",
  },
  {
    step: "03",
    title: "Main Carriage Air / Ocean",
    desc: "Direct carrier contract allocations with global shipping lines and airlines for guaranteed vessel/freighter space.",
  },
  {
    step: "04",
    title: "Destination Representation",
    desc: "Seamless overseas customs clearance, DDP/DAP tax handling, and port yard devanning with reciprocal partners.",
  },
  {
    step: "05",
    title: "Final-Mile Coordination",
    desc: "On-site industrial delivery, tail-lift / mobile crane unloading, and proof of delivery (POD) confirmation back to India.",
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
      <main className="min-h-screen bg-[#fbfcfd] text-[#0b2144] pt-24 pb-16">
        {/* ── Page Header ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-2">
            <Link href="/" className="hover:text-[#c42f0b] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Network Partners</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-[#c42f0b] text-[11px] font-mono tracking-[0.22em] uppercase font-semibold block mb-1.5">
              International Forwarding Alliances
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0b2144] leading-[1.08]">
              India on the ground.
              <br />
              <span className="text-slate-500 font-light italic">
                Global through trusted networks.
              </span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-2 sm:mt-3 leading-relaxed">
              Freyer combines deep, on-the-ground physical infrastructure across 10 Indian hubs with certified memberships in the world&apos;s most rigorous independent freight networks—granting our clients unbroken door-to-door accountability across 190+ nations.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          {/* ── What This Network Enables: 5-Step Operational Outcome Bridge ── */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-2xs space-y-6">
            <div className="pb-3 border-b border-slate-100 flex items-baseline justify-between">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0b2144]">
                What Our Global Network Enables
              </h2>
              <span className="text-xs font-mono text-slate-400">
                End-to-End Execution Flow
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-2">
              {OPERATIONAL_OUTCOMES.map((item) => (
                <div key={item.step} className="p-4 rounded-xl bg-slate-50/80 border border-slate-100 space-y-2">
                  <span className="text-xs font-mono font-bold text-[#c42f0b]">
                    {item.step}
                  </span>
                  <h3 className="text-sm font-bold text-[#0b2144]">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Certified Alliances Grid ── */}
          <div>
            <div className="pb-4 border-b border-slate-200 flex items-baseline justify-between">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0b2144]">
                Accredited Global Consortiums &amp; Associations
              </h2>
              <span className="text-xs font-mono text-slate-400">
                6 Verified Memberships
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
              {ALLIANCES_DETAILED.map((alliance) => (
                <div
                  key={alliance.name}
                  className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-4"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div className="relative w-14 h-11 bg-slate-50 rounded-lg p-1 border border-slate-100 flex items-center justify-center">
                        <Image
                          src={alliance.logo}
                          alt={alliance.name}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-medium text-right max-w-[140px] truncate">
                        {alliance.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#0b2144] tracking-tight mt-3">
                      {alliance.name}
                    </h3>
                    <div
                      className="text-[11px] font-mono text-[#c42f0b] font-medium mt-0.5"
                      dangerouslySetInnerHTML={{ __html: alliance.coverage }}
                    />

                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                      {alliance.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>Status</span>
                    <span className="text-[#0b2144] font-semibold">Active Member</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── International Agency Collaboration Desk ── */}
          <div className="bg-[#0b2144] text-white rounded-2xl p-7 sm:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-[#ff6b4a] text-xs font-mono tracking-widest uppercase font-semibold">
                Bilateral Forwarder Partnership
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                Seeking a reliable handling partner in India?
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-1.5 leading-relaxed">
                Connect with our Global Alliances desk for reciprocal agency representation, DDP/DAP clearance handling, and breakbulk project coordination across India.
              </p>
            </div>

            <div className="shrink-0 flex flex-wrap items-center gap-3">
              <a
                href="mailto:info@freyerinternational.com?subject=International%20Agency%20Inquiry%20-%20Freyer%20Logistics"
                className="inline-flex items-center gap-2 bg-[#c42f0b] hover:bg-[#a82506] text-white text-xs font-semibold px-5 py-3 rounded transition-colors shadow-md shadow-[#c42f0b]/20"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Alliances Desk</span>
              </a>
              <Link
                href="/locations"
                className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold px-5 py-3 rounded border border-white/10 transition-colors"
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
