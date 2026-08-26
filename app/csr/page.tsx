import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Corporate Social Responsibility (CSR) | Freyer International Logistics",
  description: "Freyer International Logistics Corporate Social Responsibility initiatives and community engagement.",
};

export default function CsrPage() {
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
              Corporate Stewardship
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0b2144] leading-[1.1]">
              Corporate Social Responsibility
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
              Committed to sustainable supply chain operations, environmental responsibility, and community welfare programs across India.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-12 rounded-xl border border-slate-200/80 shadow-xs max-w-3xl space-y-6">
            <div className="w-10 h-10 rounded-lg bg-[#c42f0b]/10 text-[#c42f0b] flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-[#0b2144] tracking-tight">Our Commitment to Society</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Freyer International Logistics actively participates in community welfare, educational support, and green logistics practices designed to reduce carbon intensity across multimodal transport corridors.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
