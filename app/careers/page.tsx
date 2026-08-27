import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Mail, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers & Culture | Freyer International Logistics",
  description: "Join Freyer International Logistics, a Great Place to Work certified logistics organization operating across 10 corporate branch hubs in India.",
};

const PRACTICE_AREAS = [
  {
    num: "01",
    title: "Freight Forwarding Operations",
    desc: "International Air and Ocean freight desks, carrier space allocations, multimodal routing, and global milestone tracking.",
  },
  {
    num: "02",
    title: "Licensed Customs Brokerage",
    desc: "Indian Customs import/export compliance, AEO Tier-2 statutory filings, EDI documentation, and tariff classification.",
  },
  {
    num: "03",
    title: "Project Cargo Engineering",
    desc: "Heavy-lift crane rigging calculations, oversized breakbulk stowage, route civil surveys, and on-site foundation delivery.",
  },
  {
    num: "04",
    title: "Contract Warehousing & 3PL",
    desc: "WMS inventory control, high-bay racking operations, pick-and-pack fulfillment, cross-docking, and CFS management.",
  },
  {
    num: "05",
    title: "Commercial & Account Management",
    desc: "Enterprise supply chain consulting, industrial customer relationship management, and commercial freight rate structuring.",
  },
];

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fbfcfd] text-[#0b2144] pt-28 pb-20">
        {/* ── Page Header: Asymmetric Two-Column Composition on 1560px Canvas ── */}
        <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-12 mb-10 sm:mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-3">
            <Link href="/" className="hover:text-[#c42f0b] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Careers</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            {/* Left: Broad Headline & Lead (8 cols) */}
            <div className="lg:col-span-8">
              <span className="text-[#c42f0b] text-xs sm:text-sm font-mono tracking-[0.22em] uppercase font-bold block mb-2">
                Human Capital &amp; Operational Culture
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0b2144] leading-[1.05]">
                People who move the movement.
              </h1>
              <p className="text-slate-600 text-base sm:text-lg lg:text-xl mt-3 sm:mt-4 leading-relaxed max-w-3xl">
                Freyer International is certified as a Great Place to Work&reg;. We invest continuously in talented logistics practitioners, licensed customs specialists, and supply chain architects operating across 10 strategic hubs in India.
              </p>
            </div>

            {/* Right: Authoritative Culture Snapshot (4 cols) */}
            <div className="lg:col-span-4 bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/90 shadow-2xs space-y-4">
              <div className="flex items-baseline justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-medium">
                  Culture &amp; Standards
                </span>
                <span className="text-xs font-mono text-emerald-600 font-bold">CERTIFIED</span>
              </div>

              <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 text-left">
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-[#0b2144] font-mono block">GPTW&reg;</span>
                  <span className="text-xs sm:text-sm font-mono text-slate-500 uppercase tracking-wider mt-0.5 block">
                    Great Place to Work Certified
                  </span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-[#0b2144] font-mono block">5 Core</span>
                  <span className="text-xs sm:text-sm font-mono text-slate-500 uppercase tracking-wider mt-0.5 block">
                    Operational Disciplines
                  </span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-[#0b2144] font-mono block">10 Hubs</span>
                  <span className="text-xs sm:text-sm font-mono text-slate-500 uppercase tracking-wider mt-0.5 block">
                    Pan-India Team Network
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-12 space-y-16 sm:space-y-20">
          {/* ── Authentic Office Culture Photography Spread ── */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 relative aspect-[16/10] rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm">
              <Image
                src="/images/gallery/office/1.jpg"
                alt="Freyer Logistics Operations Floor Bengaluru"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 60vw, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 text-sm sm:text-base font-mono text-white bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                Corporate Operations Floor &middot; Bengaluru Headquarters
              </span>
            </div>

            <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
              <div className="relative aspect-[16/9] md:aspect-[16/8] rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm">
                <Image
                  src="/images/gallery/office/2.jpg"
                  alt="Customs Documentation Coordination Desk"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs sm:text-sm font-mono text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                  Customs &amp; Compliance Team
                </span>
              </div>

              <div className="relative aspect-[16/9] md:aspect-[16/8] rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm">
                <Image
                  src="/images/gallery/office/3.jpg"
                  alt="Freight Desk & Commercial Operations Floor"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs sm:text-sm font-mono text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                  Commercial Freight Coordination
                </span>
              </div>
            </div>
          </div>

          {/* ── Five Disciplines. One Operating Culture. ── */}
          <div>
            <div className="pb-4 border-b border-slate-200 flex items-baseline justify-between">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0b2144]">
                Five disciplines. One operating culture.
              </h2>
              <span className="text-sm font-mono text-slate-400 hidden sm:inline-block">
                Active Operating Roles
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
              {PRACTICE_AREAS.map((practice) => (
                <div
                  key={practice.num}
                  className="p-8 sm:p-10 bg-white rounded-3xl border border-slate-200/90 shadow-sm space-y-4 flex flex-col justify-between"
                >
                  <div>
                    <div className="text-sm font-mono text-[#c42f0b] font-bold">
                      {practice.num}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0b2144] mt-1.5">
                      {practice.title}
                    </h3>
                    <p className="text-base sm:text-lg text-slate-600 mt-2.5 leading-relaxed">
                      {practice.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-mono text-slate-400">
                    <span>10 Indian Hubs</span>
                    <span className="text-[#0b2144] font-semibold">Active Practice</span>
                  </div>
                </div>
              ))}

              {/* GPTW Trust Highlight Card */}
              <div className="p-8 sm:p-10 bg-[#060f1e] text-white rounded-3xl border border-white/10 shadow-md space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs sm:text-sm font-mono text-emerald-400 font-bold">
                    <span>NATIONAL STANDARD</span>
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1.5">
                    Great Place to Work&reg; Certified
                  </h3>
                  <p className="text-base sm:text-lg text-slate-300 mt-2.5 leading-relaxed">
                    Nationally certified for fostering high workplace trust, long-term talent retention, and professional development across all Indian branch offices.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 text-sm font-mono text-slate-400">
                  Trust Index Assessment
                </div>
              </div>
            </div>
          </div>

          {/* ── Direct Application Mechanism ── */}
          <div className="bg-[#0b2144] text-white rounded-3xl p-9 sm:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[#ff6b4a] text-xs sm:text-sm font-mono tracking-widest uppercase font-semibold">
                Direct Human Resources Desk
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mt-1.5">
                Submit your profile for consideration.
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mt-2 leading-relaxed">
                We are always interested in meeting experienced freight professionals, licensed customs brokers, and project logistics specialists. Send your CV and preferred operating location.
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="mailto:careers@freyerinternational.com?subject=Career%20Application%20-%20Freyer%20International"
                className="inline-flex items-center gap-2 bg-[#c42f0b] hover:bg-[#a82506] text-white text-base font-semibold px-8 py-4 rounded-xl transition-colors shadow-md shadow-[#c42f0b]/20"
              >
                <Mail className="w-5 h-5" />
                <span>Email CV to careers@freyerinternational.com</span>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
