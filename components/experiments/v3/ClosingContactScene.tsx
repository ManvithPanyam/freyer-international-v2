"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, ShieldCheck, Award } from "lucide-react";

export function ClosingContactScene() {
  return (
    <footer
      id="contact-scene"
      className="py-24 sm:py-32 bg-[#060e1a] text-white selection:bg-[#e1390f] selection:text-white border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Monumental Closing Statement */}
        <div className="pb-16 border-b border-white/10">
          <div className="text-xs uppercase tracking-[0.3em] text-[#e1390f] font-mono mb-4">
            Chapter 05 &bull; Operational Headquarters
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white leading-[0.95] max-w-5xl">
            LOGISTICS <br />
            <span className="font-normal text-white">BEYOND BOUNDARIES.</span>
          </h2>
        </div>

        {/* Core Corporate Information Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 border-b border-white/10">
          {/* Operational Head Office (Chennai Egmore) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Operational Head Office &bull; Chennai
            </div>
            <div className="text-xl font-light text-white">
              Freyer International Logistics Pvt Ltd
            </div>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              TAGA Tower, New No: 45 Old No 20, 1st Floor, Sait Colony, Egmore, Chennai - 600008, Tamil Nadu, India.
            </p>
            <div className="pt-2 space-y-2 text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-amber-400" />
                <span className="font-mono">+91 44 4296 1111</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-amber-400" />
                <span className="font-mono">info@freyerinternational.com</span>
              </div>
            </div>
          </div>

          {/* Corporate Registered Office (Bengaluru) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Registered Corporate Office &bull; Bengaluru
            </div>
            <div className="text-xl font-light text-white">
              Bengaluru Office
            </div>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              No.19, KMJ AVEN, 3rd Floor, Outer Ring Road, Marathahalli, Bengaluru - 560037, Karnataka, India.
            </p>
            <div className="pt-2 space-y-2 text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-amber-400" />
                <span className="font-mono">+91 80 4120 0300</span>
              </div>
            </div>
          </div>

          {/* Compliance & Accreditations Badge Block */}
          <div className="lg:col-span-4 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Regulatory Accreditations
            </div>
            <div className="bg-white/[0.04] p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">
                    CBIC Authorized Economic Operator (AEO-LO)
                  </div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">
                    Certificate No: INAAQCA4076M0F243
                  </div>
                  <div className="text-xs text-slate-400 font-light mt-0.5">
                    Valid: 20/08/2024 to 19/08/2029
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                <Award className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">
                    IATA Cargo Agent &bull; AMTOI &bull; FFI
                  </div>
                  <div className="text-xs text-slate-400 font-light mt-0.5">
                    WCA Inter Global &bull; SCN Member
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Baseline */}
        <div className="pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs text-slate-400 font-light">
          <div>
            &copy; {new Date().getFullYear()} Freyer International Logistics Pvt Ltd. All rights reserved.
          </div>
          <div className="font-mono text-slate-400">
            10 Stations Across 8 Cities &bull; Isolated Route (/experiments/homepage-v3)
          </div>
        </div>
      </div>
    </footer>
  );
}
