import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Mail, Award, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Freyer International Logistics",
  description: "Join the team at Freyer International Logistics, a Great Place to Work certified logistics organization.",
};

export default function CareersPage() {
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
              Careers & Culture
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0b2144] leading-[1.1]">
              Build Your Career in Global Logistics
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
              Freyer International Logistics is certified as a Great Place to Work. We offer rewarding career pathways across international freight forwarding, customs brokerage, supply chain consulting, and project operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200/80 shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-[#0b2144] tracking-tight">Our Work Culture</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                We believe in continuous professional development, operational excellence, mutual trust, and transparent communication across all our 10 national hubs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200/80 shadow-xs space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#0b2144]/10 text-[#0b2144] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-[#0b2144] tracking-tight">Direct Applications</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                To submit your resume for freight forwarding, customs clearance, or operations roles, please email our human resources desk.
              </p>
              <div className="pt-2">
                <a
                  href="mailto:careers@freyerinternational.com"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#c42f0b] hover:text-[#a82506] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>careers@freyerinternational.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
