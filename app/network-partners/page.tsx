import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Globe, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Network Partners & Alliances | Freyer International Logistics",
  description: "Global network partnerships and international freight alliances spanning 120+ countries.",
};

export default function NetworkPartnersPage() {
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
              Global Reach
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0b2144] leading-[1.1]">
              International Network Partners
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
              Through strategic bilateral partnerships and premier freight network memberships, Freyer provides seamless door-to-door forwarding and customs clearance across 120+ countries worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200/80 shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#0b2144]/10 text-[#0b2144] flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-[#0b2144] tracking-tight">Accredited Alliances</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Active member of WCA World, Security Cargo Network (SCN), Association of Multimodal Transport Operators of India (AMTOI), and Air Cargo Agents Association of India (ACAAI).
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200/80 shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#c42f0b]/10 text-[#c42f0b] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-[#0b2144] tracking-tight">Partner Collaboration</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                For international agency representation or joint forwarding cooperation, please connect with our global commercial partnerships desk.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
