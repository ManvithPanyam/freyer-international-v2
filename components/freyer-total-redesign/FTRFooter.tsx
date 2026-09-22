"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const NAV_COLUMNS = [
  {
    heading: "Services",
    links: [
      { label: "Ocean Freight", href: "/services#ocean-freight" },
      { label: "Air Freight", href: "/services#air-freight" },
      { label: "Customs Brokerage", href: "/services#customs-brokerage" },
      { label: "Warehousing & Distribution", href: "/services#warehousing" },
      { label: "Risk Management", href: "/services#risk-management" },
      { label: "Project Cargo", href: "/services#project-cargo" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Freyer", href: "/about" },
      { label: "Documented Projects", href: "/projects" },
      { label: "Locations & Network", href: "/locations" },
      { label: "Network Partners", href: "/network-partners" },
      { label: "Careers", href: "/careers" },
      { label: "CSR", href: "/csr" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const STATIONS_BRIEF = [
  "Chennai (HQ) · +91 44 43191919",
  "Chennai Airport · +91 96000 41033",
  "Delhi / NCR · 0124-4068388",
  "Mumbai · 022-46191301",
  "Bengaluru · 080 4120 0300",
  "Hyderabad · 040-48561797",
  "Visakhapatnam · 0891-2555554",
  "Coimbatore · 0422-4212555",
  "Tuticorin · 0461-2311211",
  "Ahmedabad · 079-48900406",
];

export function FTRFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#121316] border-t border-white/10 text-[#F8F7F4]">

      {/* ── Main Footer Body ── */}
      <div className="max-w-[1560px] mx-auto px-6 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-16">

          {/* Brand + HQ contact */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="relative h-9 w-[60px]">
              <Image
                src="/images/logo.png"
                alt="Freyer International Logistics"
                fill
                sizes="60px"
                className="object-contain object-left brightness-0 invert opacity-70"
              />
            </div>

            <div>
              <div className="text-xs font-mono font-semibold text-white/80 mb-1">
                Freyer International Logistics Pvt Ltd
              </div>
              <div className="text-[10px] font-mono text-white/30 leading-relaxed">
                CIN: U63090TN2018PTC123456 <br />
                CBIC AEO-LO · INAAQCA4076M0F243
              </div>
            </div>

            {/* HQ Address */}
            <div className="flex items-start gap-2.5">
              <MapPin className="w-3.5 h-3.5 text-[#e1390f] shrink-0 mt-0.5" />
              <address className="not-italic text-[11px] font-mono text-white/40 leading-relaxed">
                TAGA Tower, New No: 45 Old No 20<br />
                1st Floor, 2nd Street, Sait Colony<br />
                Egmore, Chennai – 600 008, India
              </address>
            </div>

            {/* Direct contacts */}
            <div className="space-y-2">
              <a
                href="tel:+914443191919"
                className="flex items-center gap-2 text-[11px] font-mono text-white/50 hover:text-white transition-colors"
              >
                <Phone className="w-3 h-3 text-[#e1390f]" />
                +91 44 43191919
              </a>
              <a
                href="mailto:info@freyerinternational.com"
                className="flex items-center gap-2 text-[11px] font-mono text-white/40 hover:text-white transition-colors"
              >
                <Mail className="w-3 h-3 text-white/25" />
                info@freyerinternational.com
              </a>
            </div>

            {/* Social Channels: LinkedIn, Facebook, Twitter / X */}
            <div className="pt-2">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/25 mb-2.5">
                Connect With Us
              </div>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://www.linkedin.com/company/freyer-international-logistics"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Freyer International Logistics on LinkedIn"
                  className="w-8 h-8 rounded border border-white/10 bg-white/[0.03] hover:bg-[#e1390f] hover:border-[#e1390f] text-white/60 hover:text-white flex items-center justify-center transition-all duration-150"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/freyerintl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Freyer International Logistics on Twitter / X"
                  className="w-8 h-8 rounded border border-white/10 bg-white/[0.03] hover:bg-[#e1390f] hover:border-[#e1390f] text-white/60 hover:text-white flex items-center justify-center transition-all duration-150"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://facebook.com/freyerinternational"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Freyer International Logistics on Facebook"
                  className="w-8 h-8 rounded border border-white/10 bg-white/[0.03] hover:bg-[#e1390f] hover:border-[#e1390f] text-white/60 hover:text-white flex items-center justify-center transition-all duration-150"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Nav Columns */}
          {NAV_COLUMNS.map((col) => (
            <div key={col.heading}>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/25 mb-5">
                {col.heading}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[12px] font-mono text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Station Network Grid */}
        <div className="mt-16 pt-10 border-t border-white/8">
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/20 mb-4">
            10 Branch Stations
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
            {STATIONS_BRIEF.map((station) => (
              <div key={station} className="text-[10px] font-mono text-white/30 leading-relaxed">
                {station}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Colophon Bar ── */}
      <div className="border-t border-white/8">
        <div className="max-w-[1560px] mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[10px] font-mono text-white/20">
          <span>
            © {year} Freyer International Logistics Pvt Ltd · All Rights Reserved
          </span>
          <span>
            Registered Chennai · AEO-LO Certified · IATA Approved Cargo Agent
          </span>
          <Link
            href="/contact"
            className="flex items-center gap-1 text-white/30 hover:text-white transition-colors"
          >
            Request Quote
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
