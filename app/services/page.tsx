import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Capabilities | Freyer International Logistics",
  description: "Comprehensive freight forwarding, customs brokerage, warehousing, and project cargo services across India and global trade lanes.",
};

const SERVICES = [
  { title: "Air Freight Forwarding", desc: "Direct and consolidated scheduled air cargo with major airline carriers worldwide." },
  { title: "Ocean Freight (FCL & LCL)", desc: "Full container load and consolidated maritime freight solutions across major ocean routes." },
  { title: "Customs Brokerage & Clearance", desc: "AEO-certified regulatory compliance and automated ICEGATE documentation handling." },
  { title: "Project Cargo Engineering", desc: "Heavy-lift, over-dimensional (ODC), and turnkey multimodal breakbulk transportation." },
  { title: "Contract Warehousing & 3PL", desc: "Strategic secure storage, inventory management, and regional distribution facilities." },
  { title: "Cargo Risk Management", desc: "Comprehensive transit coverage, route surveys, and marine risk management solutions." },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fbfcfd] text-[#0b2144] pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-[#c42f0b] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Overview</span>
            </Link>
          </div>

          <div className="max-w-3xl mb-16">
            <span className="text-[#c42f0b] text-xs font-mono tracking-[0.22em] uppercase font-semibold block mb-3">
              Capabilities Index
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0b2144] leading-[1.1]">
              Integrated Logistics Capabilities
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
              Specialized multimodal logistics solutions engineered for complex supply chains, regulated imports/exports, and industrial project cargo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="bg-white p-7 rounded-xl border border-slate-200/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-lg font-bold text-[#0b2144] tracking-tight">{s.title}</h2>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{s.desc}</p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Link
                    href="/#quote"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#c42f0b] hover:text-[#a82506] transition-colors"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
