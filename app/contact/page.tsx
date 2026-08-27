import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Phone, Mail, MapPin, ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Desk & Corporate Offices | Freyer International Logistics",
  description: "Connect with Freyer International Logistics corporate headquarters in Bengaluru, primary operational hub in Chennai, or branch desks across India.",
};

export default function ContactPage() {
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
            <span className="text-slate-900 font-medium">Contact</span>
          </div>

          <div className="max-w-3xl">
            <span className="text-[#c42f0b] text-[11px] font-mono tracking-[0.22em] uppercase font-semibold block mb-1.5">
              Commercial Desks &amp; Inquiries
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0b2144] leading-[1.08]">
              Talk to the team moving your cargo.
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-2 sm:mt-3 leading-relaxed">
              Direct communication channels to our corporate office in Bengaluru, primary seaport operations in Chennai, and dedicated station desks across 10 commercial centers in India.
            </p>
          </div>

          {/* Concise Decision Row */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-4 text-xs font-mono">
            <Link
              href="/#quote"
              className="px-3.5 py-1.5 bg-[#0b2144] hover:bg-[#07152b] text-white rounded font-medium transition-colors inline-flex items-center gap-1"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
            <Link
              href="/locations"
              className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded transition-colors"
            >
              Find a Branch (10 Hubs)
            </Link>
            <a
              href="mailto:info@freyerinternational.com"
              className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded transition-colors"
            >
              Corporate Desk
            </a>
            <Link
              href="/careers"
              className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded transition-colors"
            >
              Careers
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          {/* ── Primary Engagement Grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Two Primary Operational Hubs (Chennai & Bengaluru) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Chennai Primary Operational Hub */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-[#c42f0b]">
                    Primary Operational Hub &middot; Tamil Nadu
                  </span>
                  <span className="text-xs font-mono text-slate-400">Sea Port Gateway</span>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0b2144] tracking-tight">Chennai (Egmore)</h2>
                  <p className="text-xs font-mono text-slate-500 mt-0.5">Maritime Operations &amp; Licensed Customs Clearance</p>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed pt-1">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <p>TAGA Tower, New No: 45 Old No 20, 1st Floor, 2nd Street, Sait Colony, Egmore, Chennai - 600008, Tamil Nadu, India</p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                  <div className="flex flex-wrap items-center gap-4 text-slate-700">
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#c42f0b]" />
                      <span>+91 44 4319 1919</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#c42f0b]" />
                      <span>+91 95000 67831</span>
                    </div>
                  </div>

                  <a
                    href="mailto:Selvakumar@freyerinternational.com"
                    className="inline-flex items-center gap-1 font-semibold text-[#0b2144] hover:text-[#c42f0b] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>Email Chennai Desk</span>
                  </a>
                </div>
              </div>

              {/* Bengaluru Corporate Registered Office */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-[#c42f0b]">
                    Corporate Registered Office &middot; Karnataka
                  </span>
                  <span className="text-xs font-mono text-slate-400">Headquarters</span>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#0b2144] tracking-tight">Bengaluru</h2>
                  <p className="text-xs font-mono text-slate-500 mt-0.5">Corporate Governance &amp; Contract 3PL Logistics</p>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed pt-1">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <p>No.19, KMJ AVEN, 3rd Floor, Outer Ring Road, Marathahalli, Bengaluru - 560037, Karnataka, India</p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                  <div className="flex flex-wrap items-center gap-4 text-slate-700">
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#c42f0b]" />
                      <span>080 4120 0300</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#c42f0b]" />
                      <span>+91 97402 20069</span>
                    </div>
                  </div>

                  <a
                    href="mailto:Vijay.Palagiri@freyerinternational.com"
                    className="inline-flex items-center gap-1 font-semibold text-[#0b2144] hover:text-[#c42f0b] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>Email Bengaluru HQ</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Flattened Editorial Routing Panel */}
            <div className="lg:col-span-5 space-y-6">
              {/* Flattened Email Routing */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-2xs space-y-5">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-slate-400 block mb-1">
                    Central Commercial Routing
                  </span>
                  <h3 className="text-xl font-bold text-[#0b2144] tracking-tight">
                    Corporate Email Desks
                  </h3>
                </div>

                <div className="space-y-3 pt-2 text-xs">
                  <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-[#0b2144] block">General &amp; Commercial</span>
                      <span className="font-mono text-slate-500 text-[11px]">info@freyerinternational.com</span>
                    </div>
                    <a
                      href="mailto:info@freyerinternational.com"
                      className="text-[#c42f0b] font-semibold hover:underline"
                    >
                      Email &rarr;
                    </a>
                  </div>

                  <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-[#0b2144] block">Human Resources &amp; Careers</span>
                      <span className="font-mono text-slate-500 text-[11px]">careers@freyerinternational.com</span>
                    </div>
                    <a
                      href="mailto:careers@freyerinternational.com"
                      className="text-[#c42f0b] font-semibold hover:underline"
                    >
                      Email &rarr;
                    </a>
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-500 leading-relaxed">
                  Indian Customs AEO Tier-2 Certificate No: <strong className="text-slate-800 font-mono">INAAQCA4076M0F243</strong>
                </div>
              </div>

              {/* Instant Freight Quotation CTA */}
              <div className="bg-[#060f1e] text-white p-6 sm:p-8 rounded-2xl border border-white/10 shadow-lg space-y-4">
                <span className="text-xs font-mono text-[#ff6b4a] uppercase font-semibold">
                  Commercial Pricing
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Need an immediate freight quote?
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Use our structured digital Freight Configurator to calculate routing options across Air, Ocean, Project Cargo, and Warehousing.
                </p>

                <div className="pt-1">
                  <Link
                    href="/#quote"
                    className="inline-flex items-center gap-2 bg-[#c42f0b] hover:bg-[#a82506] text-white text-xs font-semibold px-5 py-3 rounded transition-colors shadow-md shadow-[#c42f0b]/20"
                  >
                    <span>Open Freight Configurator</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ── Pan-India 10 Locations Router Banner ── */}
          <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#c42f0b] font-bold block mb-1">
                Regional Hub Network
              </span>
              <h3 className="text-lg font-bold text-[#0b2144]">
                Looking for branch operations outside Chennai and Bengaluru?
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Direct stations in Delhi/NCR, Mumbai, Hyderabad, Visakhapatnam, Coimbatore, Tuticorin, and Ahmedabad.
              </p>
            </div>

            <Link
              href="/locations"
              className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2.5 rounded transition-colors shrink-0 self-start sm:self-auto"
            >
              <span>Explore All 10 Stations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
