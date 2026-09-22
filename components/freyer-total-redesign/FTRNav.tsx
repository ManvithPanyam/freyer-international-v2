"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  Menu,
  X,
  Phone,
  ChevronDown,
  Globe2,
  MapPin,
  Anchor,
  Plane,
  ShieldCheck,
  Building2,
  Warehouse,
  ShieldAlert,
  Briefcase,
  HeartHandshake,
  Users,
} from "lucide-react";

export function FTRNav() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close drawer and dropdowns on route change
  useEffect(() => {
    setDrawerOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isTransparentMode =
    (pathname === "/" || pathname === "/experiments/freyer-total-redesign") && !scrolled;

  return (
    <>
      {/* ── Primary Header ── */}
      <header
        className={[
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          isTransparentMode
            ? "bg-[#121316]/50 backdrop-blur-md border-b border-white/8 py-4"
            : "bg-[#121316]/95 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl",
        ].join(" ")}
      >
        <div className="max-w-[1560px] mx-auto px-6 lg:px-12 flex items-center justify-between gap-8">

          {/* ── Wordmark & Brand Lockup ── */}
          <Link
            href="/"
            aria-label="Freyer International Logistics — Home"
            className="flex items-center gap-2 sm:gap-3 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e1390f] rounded"
          >
            <div className="relative h-8 sm:h-9 w-[54px] sm:w-[62px]">
              <Image
                src="/images/logo.png"
                alt="Freyer International Logistics"
                width={62}
                height={36}
                unoptimized
                className="w-full h-full object-contain object-left brightness-0 invert"
                priority
              />
            </div>
            <span
              className="text-[10px] sm:text-[11px] font-mono tracking-[0.16em] uppercase text-white/30 select-none"
              aria-hidden
            >
              |
            </span>
            <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-mono tracking-[0.12em] sm:tracking-[0.16em] uppercase text-white/70 font-semibold leading-tight">
              Logistics Beyond Boundaries
            </span>
          </Link>

          {/* ── Desktop Nav Links with Menus ── */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1 lg:gap-2">
            
            {/* 1. SERVICES (Dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/services"
                className={[
                  "inline-flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-150 px-3 py-2 rounded",
                  pathname.startsWith("/services") ? "text-white font-semibold" : "text-white/70 hover:text-white",
                ].join(" ")}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-transform" />
              </Link>

              {activeDropdown === "services" && (
                <div className="absolute top-full left-0 w-80 bg-[#16181E] border border-white/12 rounded-xl shadow-2xl p-3 pt-2 text-xs backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#e1390f] font-semibold px-2 py-1.5 border-b border-white/8 mb-1">
                    Multimodal Logistics Portfolio
                  </div>
                  <div className="space-y-0.5">
                    <Link
                      href="/services#ocean-freight"
                      className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white/[0.06] transition-colors group"
                    >
                      <Anchor className="w-4 h-4 text-[#e1390f] shrink-0" />
                      <div>
                        <div className="text-white font-medium group-hover:text-[#e1390f] transition-colors">Ocean Freight Forwarding</div>
                        <div className="text-[11px] text-white/40">FCL &amp; LCL global liner allocations</div>
                      </div>
                    </Link>
                    <Link
                      href="/services#air-freight"
                      className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white/[0.06] transition-colors group"
                    >
                      <Plane className="w-4 h-4 text-[#e1390f] shrink-0" />
                      <div>
                        <div className="text-white font-medium group-hover:text-[#e1390f] transition-colors">Air Freight Solutions</div>
                        <div className="text-[11px] text-white/40">Direct apron IATA agent privileges</div>
                      </div>
                    </Link>
                    <Link
                      href="/services#customs-brokerage"
                      className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white/[0.06] transition-colors group"
                    >
                      <ShieldCheck className="w-4 h-4 text-[#e1390f] shrink-0" />
                      <div>
                        <div className="text-white font-medium group-hover:text-[#e1390f] transition-colors">Customs Brokerage</div>
                        <div className="text-[11px] text-white/40">CBIC AEO-LO Tier 2 clearance</div>
                      </div>
                    </Link>
                    <Link
                      href="/services#project-cargo"
                      className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white/[0.06] transition-colors group"
                    >
                      <Building2 className="w-4 h-4 text-[#e1390f] shrink-0" />
                      <div>
                        <div className="text-white font-medium group-hover:text-[#e1390f] transition-colors">Project Cargo &amp; Heavy Lift</div>
                        <div className="text-[11px] text-white/40">Engineered out-of-gauge transport</div>
                      </div>
                    </Link>
                    <Link
                      href="/services#warehousing"
                      className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white/[0.06] transition-colors group"
                    >
                      <Warehouse className="w-4 h-4 text-[#e1390f] shrink-0" />
                      <div>
                        <div className="text-white font-medium group-hover:text-[#e1390f] transition-colors">Warehousing &amp; 3PL</div>
                        <div className="text-[11px] text-white/40">CFS &amp; bonded facility management</div>
                      </div>
                    </Link>
                    <Link
                      href="/services#risk-management"
                      className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white/[0.06] transition-colors group"
                    >
                      <ShieldAlert className="w-4 h-4 text-[#e1390f] shrink-0" />
                      <div>
                        <div className="text-white font-medium group-hover:text-[#e1390f] transition-colors">Marine Risk Management</div>
                        <div className="text-[11px] text-white/40">Comprehensive transit protection</div>
                      </div>
                    </Link>
                  </div>
                  <div className="mt-2 pt-2 border-t border-white/8 px-2 flex justify-between items-center text-[11px] font-mono">
                    <Link href="/services" className="text-[#e1390f] hover:text-white transition-colors flex items-center gap-1">
                      <span>View All Services</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 2. PROJECTS (Direct Link) */}
            <Link
              href="/projects"
              className={[
                "text-sm font-medium tracking-wide transition-colors duration-150 px-3 py-2 rounded",
                pathname === "/projects" ? "text-white font-semibold" : "text-white/70 hover:text-white",
              ].join(" ")}
            >
              Projects
            </Link>

            {/* 3. NETWORK (Dropdown: India Stations + World Atlas) */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("network")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/locations"
                className={[
                  "inline-flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-150 px-3 py-2 rounded",
                  pathname === "/locations" || pathname === "/network-partners"
                    ? "text-white font-semibold"
                    : "text-white/70 hover:text-white",
                ].join(" ")}
              >
                <span>Network</span>
                <ChevronDown className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-transform" />
              </Link>

              {activeDropdown === "network" && (
                <div className="absolute top-full left-0 w-80 bg-[#16181E] border border-white/12 rounded-xl shadow-2xl p-3 pt-2 text-xs backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#e1390f] font-semibold px-2 py-1.5 border-b border-white/8 mb-1">
                    Pan-India &amp; International Network
                  </div>
                  <div className="space-y-1">
                    <Link
                      href="/locations"
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.06] transition-colors group"
                    >
                      <MapPin className="w-4 h-4 text-[#e1390f] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-white font-medium group-hover:text-[#e1390f] transition-colors">
                          India Branch Network (10)
                        </div>
                        <div className="text-[11px] text-white/40 leading-relaxed mt-0.5">
                          Physical station footprint across primary seaports, air hubs &amp; industrial ICDs.
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/network-partners"
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.06] transition-colors group"
                    >
                      <Globe2 className="w-4 h-4 text-[#e1390f] shrink-0 mt-0.5" />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-white font-medium group-hover:text-[#e1390f] transition-colors">
                            World Movement Atlas
                          </span>
                          <span className="px-1.5 py-0.2 rounded bg-[#e1390f]/20 text-[#e1390f] text-[9px] font-mono font-bold">
                            ATLAS
                          </span>
                        </div>
                        <div className="text-[11px] text-white/40 leading-relaxed mt-0.5">
                          Interactive cartography of 11 documented global voyages across 10 countries.
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/network-partners"
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.06] transition-colors group"
                    >
                      <Users className="w-4 h-4 text-[#e1390f] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-white font-medium group-hover:text-[#e1390f] transition-colors">
                          Network Alliances
                        </div>
                        <div className="text-[11px] text-white/40 leading-relaxed mt-0.5">
                          Vetted reciprocal agency through WCA World, SCN, WPA, FDX, AMTOI &amp; ACAAI.
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 4. COMPANY (Dropdown: About, Careers, CSR) */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("company")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/about"
                className={[
                  "inline-flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-150 px-3 py-2 rounded",
                  pathname === "/about" || pathname === "/careers" || pathname === "/csr"
                    ? "text-white font-semibold"
                    : "text-white/70 hover:text-white",
                ].join(" ")}
              >
                <span>Company</span>
                <ChevronDown className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-transform" />
              </Link>

              {activeDropdown === "company" && (
                <div className="absolute top-full left-0 w-80 bg-[#16181E] border border-white/12 rounded-xl shadow-2xl p-3 pt-2 text-xs backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#e1390f] font-semibold px-2 py-1.5 border-b border-white/8 mb-1">
                    Enterprise &amp; Institutional Governance
                  </div>
                  <div className="space-y-1">
                    <Link
                      href="/about"
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.06] transition-colors group"
                    >
                      <Building2 className="w-4 h-4 text-[#e1390f] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-white font-medium group-hover:text-[#e1390f] transition-colors">
                          About &amp; Leadership
                        </div>
                        <div className="text-[11px] text-white/40 leading-relaxed mt-0.5">
                          Board of Directors, MCA dossier, statutory AEO-LO licenses &amp; philosophy.
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/careers"
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.06] transition-colors group"
                    >
                      <Briefcase className="w-4 h-4 text-[#e1390f] shrink-0 mt-0.5" />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-white font-medium group-hover:text-[#e1390f] transition-colors">
                            Careers at Freyer
                          </span>
                          <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 text-[9px] font-mono font-bold">
                            HIRING
                          </span>
                        </div>
                        <div className="text-[11px] text-white/40 leading-relaxed mt-0.5">
                          Forwarding operations, licensed brokerage &amp; heavy-lift engineering talent.
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/csr"
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.06] transition-colors group"
                    >
                      <HeartHandshake className="w-4 h-4 text-[#e1390f] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-white font-medium group-hover:text-[#e1390f] transition-colors">
                          CSR &amp; Community
                        </div>
                        <div className="text-[11px] text-white/40 leading-relaxed mt-0.5">
                          Vocational training, green freight corridors &amp; regional healthcare support.
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 5. CONTACT (Direct Link) */}
            <Link
              href="/contact"
              className={[
                "text-sm font-medium tracking-wide transition-colors duration-150 px-3 py-2 rounded",
                pathname === "/contact" ? "text-white font-semibold" : "text-white/70 hover:text-white",
              ].join(" ")}
            >
              Contact
            </Link>
          </nav>

          {/* ── Desktop Actions ── */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* Phone — always visible */}
            <a
              href="tel:+914443191919"
              className="hidden lg:flex items-center gap-1.5 text-xs font-mono text-white/50 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#e1390f]" />
              +91 44 43191919
            </a>

            <div className="h-4 w-px bg-white/15 hidden lg:block" />

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 bg-[#e1390f] hover:bg-[#c42f0b] text-white text-xs font-semibold px-4 py-2.5 rounded transition-colors duration-150 font-mono tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Request Rate
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            type="button"
            onClick={() => setDrawerOpen((v) => !v)}
            aria-expanded={drawerOpen}
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e1390f] rounded"
          >
            {drawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* ── Mobile Full-Screen Drawer with Complete Directory ── */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#070A0F] flex flex-col md:hidden overflow-y-auto"
            aria-modal="true"
            role="dialog"
            aria-label="Navigation menu"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 sticky top-0 bg-[#070A0F]/95 backdrop-blur-md z-10">
              <Link
                href="/"
                onClick={() => setDrawerOpen(false)}
                className="flex items-center gap-2.5"
              >
                <div className="relative h-8 w-[54px]">
                  <Image
                    src="/images/logo.png"
                    alt="Freyer International"
                    width={54}
                    height={32}
                    unoptimized
                    className="w-full h-full object-contain object-left brightness-0 invert"
                  />
                </div>
                <span className="text-[10px] font-mono tracking-[0.16em] uppercase text-white/30" aria-hidden>
                  |
                </span>
                <span className="text-[9px] font-mono tracking-[0.14em] uppercase text-white/70 font-semibold">
                  Logistics Beyond Boundaries
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="p-2 text-white/70 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Complete Mobile Directory */}
            <nav className="flex-1 px-6 py-6 space-y-8">
              {/* Group 1: Logistics & Network */}
              <div className="space-y-3">
                <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#e1390f] font-semibold">
                  Operations &amp; Network
                </div>
                <div className="grid grid-cols-1 gap-2 text-base">
                  <Link
                    href="/services"
                    onClick={() => setDrawerOpen(false)}
                    className="p-3 rounded-lg bg-white/[0.03] border border-white/8 text-white font-medium hover:border-white/20 transition-colors flex items-center justify-between"
                  >
                    <span>Services Directory</span>
                    <ArrowUpRight className="w-4 h-4 text-white/40" />
                  </Link>
                  <Link
                    href="/projects"
                    onClick={() => setDrawerOpen(false)}
                    className="p-3 rounded-lg bg-white/[0.03] border border-white/8 text-white font-medium hover:border-white/20 transition-colors flex items-center justify-between"
                  >
                    <span>Documented Projects</span>
                    <ArrowUpRight className="w-4 h-4 text-white/40" />
                  </Link>
                  <Link
                    href="/locations"
                    onClick={() => setDrawerOpen(false)}
                    className="p-3 rounded-lg bg-white/[0.03] border border-white/8 text-white font-medium hover:border-white/20 transition-colors flex items-center justify-between"
                  >
                    <span>India Stations (10 Gateways)</span>
                    <ArrowUpRight className="w-4 h-4 text-white/40" />
                  </Link>
                  <Link
                    href="/network-partners"
                    onClick={() => setDrawerOpen(false)}
                    className="p-3 rounded-lg bg-white/[0.03] border border-white/8 text-white font-medium hover:border-white/20 transition-colors flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <span>World Movement Atlas</span>
                      <span className="px-1.5 py-0.2 rounded bg-[#e1390f] text-white text-[9px] font-mono font-bold">
                        ATLAS
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-white/40" />
                  </Link>
                </div>
              </div>

              {/* Group 2: Enterprise & Governance */}
              <div className="space-y-3">
                <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#e1390f] font-semibold">
                  Enterprise &amp; Culture
                </div>
                <div className="grid grid-cols-1 gap-2 text-base">
                  <Link
                    href="/about"
                    onClick={() => setDrawerOpen(false)}
                    className="p-3 rounded-lg bg-white/[0.03] border border-white/8 text-white font-medium hover:border-white/20 transition-colors flex items-center justify-between"
                  >
                    <span>About &amp; Leadership</span>
                    <ArrowUpRight className="w-4 h-4 text-white/40" />
                  </Link>
                  <Link
                    href="/network-partners"
                    onClick={() => setDrawerOpen(false)}
                    className="p-3 rounded-lg bg-white/[0.03] border border-white/8 text-white font-medium hover:border-white/20 transition-colors flex items-center justify-between"
                  >
                    <span>Network Partners &amp; Alliances</span>
                    <ArrowUpRight className="w-4 h-4 text-white/40" />
                  </Link>
                  <Link
                    href="/careers"
                    onClick={() => setDrawerOpen(false)}
                    className="p-3 rounded-lg bg-white/[0.03] border border-white/8 text-white font-medium hover:border-white/20 transition-colors flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <span>Careers at Freyer</span>
                      <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 text-[9px] font-mono font-bold">
                        HIRING
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-white/40" />
                  </Link>
                  <Link
                    href="/csr"
                    onClick={() => setDrawerOpen(false)}
                    className="p-3 rounded-lg bg-white/[0.03] border border-white/8 text-white font-medium hover:border-white/20 transition-colors flex items-center justify-between"
                  >
                    <span>CSR &amp; Stewardship</span>
                    <ArrowUpRight className="w-4 h-4 text-white/40" />
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setDrawerOpen(false)}
                    className="p-3 rounded-lg bg-white/[0.03] border border-white/8 text-white font-medium hover:border-white/20 transition-colors flex items-center justify-between"
                  >
                    <span>Contact &amp; Regional Desks</span>
                    <ArrowUpRight className="w-4 h-4 text-white/40" />
                  </Link>
                </div>
              </div>
            </nav>

            {/* Drawer Bottom Actions */}
            <div className="px-6 pb-8 pt-4 border-t border-white/10 space-y-3 sticky bottom-0 bg-[#070A0F]">
              <a
                href="tel:+914443191919"
                className="flex items-center justify-center gap-2 w-full border border-white/20 text-white font-mono text-xs font-semibold py-3.5 rounded-lg hover:bg-white/5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#e1390f]" />
                +91 44 43191919
              </a>
              <Link
                href="/contact"
                onClick={() => setDrawerOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-[#e1390f] hover:bg-[#c42f0b] text-white font-mono text-xs font-semibold py-3.5 rounded-lg transition-colors"
              >
                Request Freight Rate
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
