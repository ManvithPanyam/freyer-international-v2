import React from "react";
import { ShieldCheck, ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#07152b] text-slate-300 border-t border-slate-800/80 pt-16 pb-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Identity & Governance */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#d63309] flex items-center justify-center font-bold text-white text-sm">
                F
              </div>
              <span className="text-white font-semibold tracking-wider uppercase text-base">
                Freyer Logistics
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Integrated international freight forwarding, AEO-certified customs brokerage, and heavy-lift project cargo engineering across India and global trade lanes.
            </p>
            <div className="pt-2 text-xs text-slate-400 font-mono space-y-1">
              <p>Registered Office: Bengaluru - 560037</p>
              <p>Operational Hub: Chennai - 600008</p>
            </div>
          </div>

          {/* Col 2: Verified Capabilities */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Capabilities
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">Air Freight Solutions</a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">Ocean Freight (FCL / LCL)</a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">Customs Brokerage (CHA)</a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">Contract Warehousing</a>
              </li>
              <li>
                <a href="#project-cargo" className="hover:text-white transition-colors">Project Cargo & Heavy-Lift</a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">Marine Cargo Insurance</a>
              </li>
            </ul>
          </div>

          {/* Col 3: 10 Hub Network */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Branch Network
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
              <span>Bengaluru</span>
              <span>Chennai</span>
              <span>Delhi NCR</span>
              <span>Mumbai</span>
              <span>Hyderabad</span>
              <span>Visakhapatnam</span>
              <span>Coimbatore</span>
              <span>Tuticorin</span>
              <span>Ahmedabad</span>
              <span>Meenambakkam</span>
            </div>
          </div>

          {/* Col 4: Verified Accreditations */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Accreditations
            </h3>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>AEO Certified (Indian Customs)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>IATA Cargo Agent</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WCA World Member</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Security Cargo Network (SCN)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} Freyer International Logistics Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Corporate CIN Verification in Progress</span>
            <a
              href="#top"
              className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
