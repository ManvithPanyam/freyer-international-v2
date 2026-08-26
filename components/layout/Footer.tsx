import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// Clean inline SVGs for verified official corporate social links
function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.67a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12Z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#040a14] text-slate-400 border-t border-white/10 pt-16 pb-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Identity, Official Tagline & Address */}
          <div className="md:col-span-2 space-y-4">
            <div className="relative h-10 w-32 brightness-0 invert">
              <Image
                src="/images/logo.png"
                alt="Freyer International Logistics"
                fill
                className="object-contain object-left"
              />
            </div>
            
            {/* Official Corporate Tagline */}
            <p className="text-xs font-mono tracking-widest text-[#ff6b4a] uppercase font-semibold">
              Logistics Beyond Boundaries
            </p>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Integrated international freight forwarding, AEO-certified customs brokerage, and turnkey project cargo engineering across India and global trade corridors.
            </p>

            <div className="text-xs text-slate-500 font-mono space-y-1 pt-1">
              <p>Registered Office: Bengaluru - 560037</p>
              <p>Operational Hub: Chennai - 600008</p>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-semibold mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
              </li>
              <li>
                <a href="#project-cargo" className="hover:text-white transition-colors">Project Cargo</a>
              </li>
              <li>
                <a href="#network" className="hover:text-white transition-colors">Pan-India Network</a>
              </li>
              <li>
                <a href="#quote" className="hover:text-white transition-colors">Freight Configurator</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact & Verified Socials */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-semibold mb-4">
                Contact Desk
              </h3>
              <div className="space-y-2 text-xs text-slate-400">
                <p>General: +91 44 4319 1919</p>
                <p>Email: info@freyerinternational.com</p>
                <p className="pt-2 text-xs text-slate-500 font-medium">10 Hubs Across India</p>
              </div>
            </div>

            {/* Official Verified Social Links */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-semibold mb-3">
                Corporate Social
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/freyer-international-logistics-pvt-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Freyer International Logistics on LinkedIn"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-150 group"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://www.facebook.com/FreyerInternational2018/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Freyer International Logistics on Facebook"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-150 group"
                >
                  <FacebookIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Freyer International Logistics Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#network" className="hover:text-slate-400 transition-colors">Pan-India Operations</a>
            <span>·</span>
            <a href="#quote" className="hover:text-slate-400 transition-colors flex items-center gap-1">
              <span>Request Quote</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
