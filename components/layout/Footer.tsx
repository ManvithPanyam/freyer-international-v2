import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Phone, Mail } from "lucide-react";

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
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Identity & Credentials (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="relative h-11 w-36 brightness-0 invert">
              <Image
                src="/images/logo.png"
                alt="Freyer International Logistics"
                fill
                className="object-contain object-left"
              />
            </div>

            <p className="text-xs font-mono tracking-widest text-[#ff6b4a] uppercase font-semibold">
              Logistics Beyond Boundaries
            </p>

            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Integrated multimodal freight forwarding, AEO Tier-2 licensed customs brokerage, high-bay warehousing, and heavy-lift project engineering across India and global trading corridors.
            </p>

            <div className="pt-2 text-xs font-mono text-slate-500 space-y-1">
              <div>AEO Tier-2: INAAQCA4076M0F243</div>
              <div>IATA Regulated Cargo Agent</div>
              <div>Great Place to Work&reg; Certified</div>
            </div>
          </div>

          {/* Col 2: Capabilities (3 cols) */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-semibold mb-4">
              Disciplines
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/services/project-cargo" className="hover:text-white transition-colors">
                  Project Cargo Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/warehousing" className="hover:text-white transition-colors">
                  Warehousing &amp; 3PL Distribution
                </Link>
              </li>
              <li>
                <Link href="/services/ocean-freight" className="hover:text-white transition-colors">
                  Ocean Freight (FCL &amp; LCL)
                </Link>
              </li>
              <li>
                <Link href="/services/air-freight" className="hover:text-white transition-colors">
                  Air Freight &amp; Charter
                </Link>
              </li>
              <li>
                <Link href="/services/customs-brokerage" className="hover:text-white transition-colors">
                  Customs Brokerage
                </Link>
              </li>
              <li>
                <Link href="/services/risk-management" className="hover:text-white transition-colors">
                  Cargo Risk Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Network (2 cols) */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-semibold mb-4">
              Enterprise
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Freyer
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Documented Projects
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-white transition-colors">
                  10 Indian Hubs
                </Link>
              </li>
              <li>
                <Link href="/network-partners" className="hover:text-white transition-colors">
                  Global Alliances
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers &amp; Culture
                </Link>
              </li>
              <li>
                <Link href="/csr" className="hover:text-white transition-colors">
                  CSR Charter
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Desks & Verified Social (3 cols) */}
          <div className="md:col-span-3 space-y-6">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-semibold mb-3">
                Corporate Desks
              </h3>
              <div className="space-y-2 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#ff6b4a]" />
                  <span>+91 44 4319 1919 &middot; Chennai</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#ff6b4a]" />
                  <span>080 4120 0300 &middot; Bengaluru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-500" />
                  <span>info@freyerinternational.com</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2.5">
                Official Channels
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/freyer-international-logistics-pvt-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Freyer International Logistics on LinkedIn"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://www.facebook.com/FreyerInternational2018/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Freyer International Logistics on Facebook"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
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
            <Link href="/locations" className="hover:text-slate-400 transition-colors">
              Pan-India Network
            </Link>
            <span>&middot;</span>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">
              Contact Desks
            </Link>
            <span>&middot;</span>
            <Link href="/#quote" className="hover:text-slate-400 transition-colors flex items-center gap-1">
              <span>Freight Configurator</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
