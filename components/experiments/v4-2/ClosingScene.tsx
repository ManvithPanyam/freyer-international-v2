"use client";

import React from "react";
import { Mail, Phone, ShieldCheck, Award } from "lucide-react";

export function ClosingScene() {
  return (
    <footer
      id="contact-scene"
      className="relative pt-16 pb-24 sm:pb-32 bg-[#060e1a] text-white selection:bg-[#e1390f] selection:text-white border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Focused Resolution Statement */}
        <div className="pb-10 border-b border-white/10">
          <div className="text-xs uppercase tracking-[0.3em] text-[#e1390f] font-mono mb-2">
            Contact
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-tight">
            LOGISTICS BEYOND BOUNDARIES
          </h2>
        </div>

        {/* Corporate Information & Direct Channels */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 border-b border-white/10">
          {/* Operational Head Office (Chennai Egmore) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Chennai (Egmore)
            </div>
            <div className="text-xl font-light text-white">
              Freyer International Logistics Pvt Ltd
            </div>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              TAGA Tower, New No: 45 Old No 20, 1st Floor, Sait Colony, Egmore, Chennai - 600008, Tamil Nadu, India.
            </p>
            <div className="pt-2 space-y-1.5 text-sm font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+91 44 4296 1111</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <span>info@freyerinternational.com</span>
              </div>
            </div>
          </div>

          {/* Corporate Registered Office (Bengaluru) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Bengaluru
            </div>
            <div className="text-xl font-light text-white">
              Bengaluru Office
            </div>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              No.19, KMJ AVEN, 3rd Floor, Outer Ring Road, Marathahalli, Bengaluru - 560037, Karnataka, India.
            </p>
            <div className="pt-2 text-sm font-mono text-slate-300 flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-400" />
              <span>+91 80 4120 0300</span>
            </div>
          </div>

          {/* Regulatory Accreditation */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Accreditations
            </div>
            <div className="bg-white/[0.04] p-5 rounded-2xl border border-white/10 space-y-3 text-xs">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">
                    CBIC Authorized Economic Operator (AEO-LO)
                  </div>
                  <div className="text-slate-400 font-mono mt-0.5">
                    INAAQCA4076M0F243 &bull; 2024 to 2029
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                <Award className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">
                    IATA Cargo Agent &bull; AMTOI &bull; FFI
                  </div>
                  <div className="text-slate-400 mt-0.5">
                    WCA Inter Global &bull; SCN Member
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Baseline */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400 font-light">
          <div>
            &copy; {new Date().getFullYear()} Freyer International Logistics Pvt Ltd.
          </div>
          <div className="font-mono text-slate-400">
            10 Stations &bull; Isolated Route (/experiments/homepage-v4-2)
          </div>
        </div>
      </div>
    </footer>
  );
}
