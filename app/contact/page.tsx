import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Desk & Head Office | Freyer International Logistics",
  description: "Get in touch with Freyer International Logistics head office and branch desks across India.",
};

export default function ContactPage() {
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
              Direct Communication
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0b2144] leading-[1.1]">
              Contact Freyer International
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
              Connect directly with our corporate registered office in Bengaluru, primary operational hub in Chennai, or any of our 10 national branches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Primary Hubs Card */}
            <div className="bg-white p-8 rounded-xl border border-slate-200/80 shadow-xs space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#c42f0b] font-semibold block mb-1">
                  Primary Operational Hub
                </span>
                <h2 className="text-xl font-bold text-[#0b2144] tracking-tight">Chennai (Egmore)</h2>
                <div className="flex items-start gap-2 text-xs text-slate-600 mt-2">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <p>TAGA Tower, New No: 45 Old No 20, 1st Floor, Sait Colony, Egmore, Chennai - 600008</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 mt-3 font-mono">
                  <Phone className="w-3.5 h-3.5 text-[#c42f0b]" />
                  <span>+91 44 4319 1919</span>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-semibold block mb-1">
                  Corporate Registered Office
                </span>
                <h3 className="text-lg font-bold text-[#0b2144] tracking-tight">Bengaluru</h3>
                <div className="flex items-start gap-2 text-xs text-slate-600 mt-2">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <p>No.19, KMJ AVEN, 3rd Floor, Outer Ring Road, Marathahalli, Bengaluru - 560037</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 mt-3 font-mono">
                  <Phone className="w-3.5 h-3.5 text-[#c42f0b]" />
                  <span>080 4120 0300</span>
                </div>
              </div>
            </div>

            {/* Inquiries & RFQ routing */}
            <div className="bg-white p-8 rounded-xl border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-[#0b2144] tracking-tight">General Inquiries</h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For pricing, carrier bookings, customs advisory, or partnership inquiries:
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-700 font-mono">
                    <Mail className="w-3.5 h-3.5 text-[#c42f0b]" />
                    <a href="mailto:info@freyerinternational.com" className="hover:underline">
                      info@freyerinternational.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 bg-slate-50 p-6 rounded-lg">
                <h3 className="text-sm font-bold text-[#0b2144]">Need an immediate freight quote?</h3>
                <p className="text-xs text-slate-600 mt-1">Use our structured digital Freight Configurator.</p>
                <div className="pt-4">
                  <Link
                    href="/#quote"
                    className="inline-flex items-center gap-2 bg-[#0b2144] hover:bg-[#07152b] text-white text-xs font-semibold px-4 py-2.5 rounded transition-colors"
                  >
                    <span>Open Configurator</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
