"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const NAV_COLUMNS = [
  {
    heading: "Services",
    links: [
      { label: "Ocean Freight", href: "/services" },
      { label: "Air Freight", href: "/services" },
      { label: "Customs Brokerage", href: "/services" },
      { label: "Warehousing & Distribution", href: "/services" },
      { label: "Risk Management", href: "/services" },
      { label: "Project Cargo", href: "/services" },
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
    <footer className="bg-[#030710] border-t border-white/10 text-white">

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
