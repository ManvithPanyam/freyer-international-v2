import React from "react";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200 pt-16 pb-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-200">
          {/* Col 1: Identity & Description */}
          <div className="md:col-span-2 space-y-4">
            <div className="relative h-8 w-28">
              <Image
                src="/images/logo.png"
                alt="Freyer International Logistics"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-xs text-slate-600 max-w-md leading-relaxed">
              Integrated international freight forwarding, AEO-certified customs brokerage, and turnkey project cargo engineering across India and global trade corridors.
            </p>
            <div className="text-xs text-slate-600 font-mono space-y-1 pt-1">
              <p>Registered Office: Bengaluru - 560037</p>
              <p>Operational Hub: Chennai - 600008</p>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="text-xs font-semibold text-[#0b2144] uppercase tracking-wider mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <a href="#capabilities" className="hover:text-[#0b2144] transition-colors">Capabilities</a>
              </li>
              <li>
                <a href="#project-cargo" className="hover:text-[#0b2144] transition-colors">Project Cargo</a>
              </li>
              <li>
                <a href="#network" className="hover:text-[#0b2144] transition-colors">Pan-India Network</a>
              </li>
              <li>
                <a href="#quote" className="hover:text-[#0b2144] transition-colors">Request a Quote</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div>
            <h3 className="text-xs font-semibold text-[#0b2144] uppercase tracking-wider mb-4">
              Contact Desk
            </h3>
            <div className="space-y-2 text-xs text-slate-600">
              <p>General: 044-4319 1919</p>
              <p>Email: info@freyerinternational.com</p>
              <p className="pt-2 text-xs text-slate-500 font-medium">10 Hubs Across India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© {currentYear} Freyer International Logistics Pvt. Ltd. All rights reserved.</p>
          <span>Corporate CIN Verification in Progress</span>
        </div>
      </div>
    </footer>
  );
}
