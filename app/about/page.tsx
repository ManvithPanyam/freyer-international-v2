import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, ShieldCheck, Award, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Freyer International Logistics",
  description: "Learn about Freyer International Logistics, an integrated freight forwarder and AEO-certified customs brokerage headquartered in India.",
};

export default function AboutPage() {
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
              Corporate Identity
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0b2144] leading-[1.1]">
              Logistics Beyond Boundaries
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
              Freyer International Logistics Pvt. Ltd. delivers end-to-end supply chain solutions, multimodal freight forwarding, AEO-certified customs clearance, and heavy-lift engineering across India and global trading corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-xl border border-slate-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#c42f0b]/10 text-[#c42f0b] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-[#0b2144] tracking-tight">Regulatory Compliance</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Indian Customs Authorized Economic Operator (AEO Certificate No. INAAQCA4076M0F243) and IATA accredited cargo agent.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl border border-slate-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#0b2144]/10 text-[#0b2144] flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-[#0b2144] tracking-tight">Global Alliances</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Active member of WCA World, Security Cargo Network (SCN), AMTOI, and ACAAI with agent coverage in 120+ countries.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl border border-slate-200/80 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-[#0b2144] tracking-tight">Certified Excellence</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Great Place to Work certified organization committed to operational rigor, safety standards, and team excellence.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
