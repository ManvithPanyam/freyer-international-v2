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
  "Visakhapatnam · +91 97402 20069",
  "Coimbatore · +91 99625 41554",
  "Tuticorin · +91 87544 46077",
  "Ahmedabad · +91 98214 65939",
];

export function LTFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#17181B] border-t border-[#F7F6F2]/8 text-[#F7F6F2]">

      {/* ── Main Footer Body ── */}
      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20">
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
                className="object-contain object-left brightness-0 invert opacity-80"
              />
            </div>

            <div>
              <div className="text-xs font-mono font-semibold text-[#F7F6F2]/70 mb-1">
                Freyer International Logistics Pvt Ltd
              </div>
              <div className="text-2xs font-mono text-[#F7F6F2]/70 leading-relaxed">
                CBIC AEO-LO · INAAQCA4076M0F243
              </div>
            </div>

            {/* HQ Address */}
            <div className="flex items-start gap-2.5">
              <MapPin className="w-3.5 h-3.5 text-[#e1390f] shrink-0 mt-0.5" />
              <address className="not-italic text-xs font-mono text-[#F7F6F2]/50 hover:text-[#F7F6F2] transition-colors leading-relaxed">
                TAGA Tower, New No: 45 Old No 20<br />
                1st Floor, 2nd Street, Sait Colony<br />
                Egmore, Chennai – 600 008, India
              </address>
            </div>

            {/* Direct contacts */}
            <div className="space-y-2">
              <a
                href="tel:+914443191919"
                className="flex items-center gap-2 text-xs font-mono text-[#F7F6F2]/50 hover:text-[#F7F6F2] transition-colors"
              >
                <Phone className="w-3 h-3 text-[#e1390f]" />
                +91 44 43191919
              </a>
              <a
                href="mailto:info@freyerinternational.com"
                className="flex items-center gap-2 text-xs font-mono text-[#F7F6F2]/50 hover:text-[#F7F6F2] transition-colors"
              >
                <Mail className="w-3 h-3 text-[#F7F6F2]/25" />
                info@freyerinternational.com
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.linkedin.com/company/freyer-international-logistics-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Freyer International on LinkedIn"
                className="text-[#F7F6F2]/40 hover:text-[#E33B12] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/FreyerInternational2018/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Freyer International on Facebook"
                className="text-[#F7F6F2]/40 hover:text-[#E33B12] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Nav Columns */}
          {NAV_COLUMNS.map((col) => (
            <div key={col.heading}>
              <div className="text-2xs font-mono uppercase tracking-[0.2em] text-[#F7F6F2]/30 mb-5">
                {col.heading}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs font-mono text-[#F7F6F2]/50 hover:text-[#F7F6F2] transition-colors"
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
        <div className="mt-16 pt-10 border-t border-[#F7F6F2]/8">
          <div className="text-2xs font-mono uppercase tracking-[0.2em] text-[#F7F6F2]/30 mb-4">
            10 Branch Stations
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
            {STATIONS_BRIEF.map((station) => (
              <div key={station} className="text-2xs font-mono text-[#F7F6F2]/30 leading-relaxed">
                {station}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Colophon Bar ── */}
      <div className="border-t border-[#F7F6F2]/8">
        <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-2xs font-mono text-[#F7F6F2]/25">
          <span>
            © {year} Freyer International Logistics Pvt Ltd · All Rights Reserved
          </span>
          <span>
            Registered Chennai · AEO-LO Certified · IATA Approved Cargo Agent
          </span>
          <Link
            href="/contact"
            className="flex items-center gap-1 text-[#F7F6F2]/50 hover:text-[#F7F6F2] transition-colors"
          >
            Request Quote
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
