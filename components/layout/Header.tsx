"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Menu, X, Search } from "lucide-react";
import { TrackShipmentModal } from "@/components/modals/TrackShipmentModal";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isSolid = !isHome || scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isSolid
            ? "bg-white/98 backdrop-blur-md border-b border-slate-200/80 py-2.5 sm:py-3 shadow-2xs text-[#0b2144]"
            : "bg-transparent py-3 sm:py-4 text-white"
        }`}
      >
        <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Lockup: [FREYER LOGO] | LOGISTICS BEYOND BOUNDARIES */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 sm:gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c42f0b] rounded-md py-0.5 shrink-0"
            aria-label="Freyer International Logistics — Home"
          >
            <div
              className={`relative h-10 sm:h-11 md:h-12 w-[65px] sm:w-[72px] md:w-[78px] transition-all duration-200 ${
                isSolid ? "brightness-100 invert-0" : "brightness-0 invert"
              }`}
            >
              <Image
                src="/images/logo.png"
                alt="Freyer International Logistics"
                fill
                sizes="(max-width: 640px) 65px, (max-width: 768px) 72px, 78px"
                className="object-contain object-left"
                priority
              />
            </div>
            <span
              className={`hidden lg:inline-block font-mono text-xs select-none transition-colors px-0.5 ${
                isSolid ? "text-slate-300" : "text-white/40"
              }`}
              aria-hidden="true"
            >
              |
            </span>
            <span
              className={`hidden lg:inline-block text-[11px] xl:text-[12px] font-mono uppercase tracking-[0.14em] font-bold transition-colors whitespace-nowrap ${
                isSolid ? "text-[#c42f0b]" : "text-white/95"
              }`}
            >
              Logistics Beyond Boundaries
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10 text-base font-medium">
            <Link
              href="/services"
              className={`transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c42f0b] px-1 py-0.5 ${
                isSolid ? "text-slate-700 hover:text-[#0b2144]" : "text-slate-200 hover:text-white"
              }`}
            >
              Capabilities
            </Link>
            <Link
              href="/#industries"
              className={`transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c42f0b] px-1 py-0.5 ${
                isSolid ? "text-slate-700 hover:text-[#0b2144]" : "text-slate-200 hover:text-white"
              }`}
            >
              Industries
            </Link>
            <Link
              href="/projects"
              className={`transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c42f0b] px-1 py-0.5 ${
                isSolid ? "text-slate-700 hover:text-[#0b2144]" : "text-slate-200 hover:text-white"
              }`}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className={`transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c42f0b] px-1 py-0.5 ${
                isSolid ? "text-slate-700 hover:text-[#0b2144]" : "text-slate-200 hover:text-white"
              }`}
            >
              About
            </Link>
            <Link
              href="/locations"
              className={`transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c42f0b] px-1 py-0.5 ${
                isSolid ? "text-slate-700 hover:text-[#0b2144]" : "text-slate-200 hover:text-white"
              }`}
            >
              Locations
            </Link>
            <Link
              href="/contact"
              className={`transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c42f0b] px-1 py-0.5 ${
                isSolid ? "text-slate-700 hover:text-[#0b2144]" : "text-slate-200 hover:text-white"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Functional Tools: Track + Request a Quote */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setIsTrackModalOpen(true)}
              className={`inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3.5 py-2.5 rounded-lg border transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c42f0b] ${
                isSolid
                  ? "border-slate-200 text-slate-700 hover:text-[#0b2144] hover:bg-slate-100"
                  : "border-white/20 text-white hover:bg-white/10"
              }`}
            >
              <Search className="w-3.5 h-3.5 text-[#c42f0b]" />
              <span>Track</span>
            </button>

            <Link
              href="/#quote"
              className="inline-flex items-center gap-2 bg-[#c42f0b] hover:bg-[#a82506] text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-all duration-150 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b2144] font-mono"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c42f0b] ${
              isSolid ? "text-slate-800" : "text-white"
            }`}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 top-[72px] z-40 bg-white/98 backdrop-blur-xl p-6 flex flex-col justify-between md:hidden border-t border-slate-200 text-[#0b2144] shadow-2xl"
          >
            <nav className="flex flex-col gap-5 text-xl font-semibold pt-3">
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#c42f0b] transition-colors py-1"
              >
                Capabilities &amp; Services
              </Link>
              <Link
                href="/#industries"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#c42f0b] transition-colors py-1"
              >
                Industries Served
              </Link>
              <Link
                href="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#c42f0b] transition-colors py-1"
              >
                Documented Projects
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#c42f0b] transition-colors py-1"
              >
                About &amp; Credentials
              </Link>
              <Link
                href="/locations"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#c42f0b] transition-colors py-1"
              >
                9 Operating Hubs
              </Link>
              <Link
                href="/network-partners"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#c42f0b] transition-colors py-1"
              >
                Global Alliances
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#c42f0b] transition-colors py-1"
              >
                Contact Commercial Desks
              </Link>
            </nav>

            <div className="pt-6 border-t border-slate-200 space-y-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsTrackModalOpen(true);
                }}
                className="w-full text-center bg-slate-100 hover:bg-slate-200 text-[#0b2144] font-semibold py-3.5 rounded-xl block text-base font-mono border border-slate-200"
              >
                Live Consignment Tracking
              </button>
              <Link
                href="/#quote"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-[#c42f0b] hover:bg-[#a82506] text-white font-semibold py-3.5 rounded-xl block text-base font-mono"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <TrackShipmentModal
        isOpen={isTrackModalOpen}
        onClose={() => setIsTrackModalOpen(false)}
      />
    </>
  );
}
