"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Menu, X, ShieldCheck, PhoneCall } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0b2144]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-lg shadow-black/10"
            : "bg-gradient-to-b from-[#07152b]/90 via-[#07152b]/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff542e] rounded-md">
            <div className="w-9 h-9 rounded bg-[#d63309] flex items-center justify-center font-bold text-white tracking-wider text-base shadow-sm group-hover:bg-[#b82a06] transition-colors">
              F
            </div>
            <div className="flex flex-col">
              <span className="text-white font-semibold tracking-tight text-base sm:text-lg uppercase leading-none">
                Freyer
              </span>
              <span className="text-slate-300 text-[10px] tracking-[0.2em] uppercase font-light mt-0.5">
                International Logistics
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-200">
            <a
              href="#capabilities"
              className="hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#ff542e] px-1 py-0.5"
            >
              Capabilities
            </a>
            <a
              href="#project-cargo"
              className="hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#ff542e] px-1 py-0.5"
            >
              Project Cargo
            </a>
            <a
              href="#network"
              className="hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#ff542e] px-1 py-0.5"
            >
              10 Hubs Network
            </a>
            <a
              href="#quote"
              className="hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#ff542e] px-1 py-0.5"
            >
              Quote Engine
            </a>
          </nav>

          {/* Desktop Primary CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:+914443191919"
              className="text-xs font-medium text-slate-200 hover:text-white transition-colors flex items-center gap-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-white rounded px-2 py-1"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#ff542e]" />
              <span>044-4319 1919</span>
            </a>
            <a
              href="#quote"
              className="inline-flex items-center gap-1.5 bg-[#d63309] hover:bg-[#b82a06] text-white text-sm font-semibold px-4 py-2.5 rounded transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Start Shipment</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-200 hover:text-white p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff542e] rounded-md"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[60px] z-40 bg-[#07152b]/95 backdrop-blur-xl p-6 flex flex-col justify-between md:hidden border-t border-slate-800"
          >
            <nav className="flex flex-col gap-6 text-lg font-medium text-slate-100 pt-4">
              <a
                href="#capabilities"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#ff542e] transition-colors py-1"
              >
                Capabilities
              </a>
              <a
                href="#project-cargo"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#ff542e] transition-colors py-1"
              >
                Project Cargo
              </a>
              <a
                href="#network"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#ff542e] transition-colors py-1"
              >
                10 Hubs Network
              </a>
              <a
                href="#quote"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#ff542e] transition-colors py-1"
              >
                Quote Engine
              </a>
            </nav>

            <div className="space-y-4 pt-6 border-t border-slate-800">
              <div className="text-xs text-slate-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>AEO Certified • IATA Cargo Agent • WCA World</span>
              </div>
              <a
                href="#quote"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-[#d63309] text-white font-semibold py-3.5 rounded block text-sm"
              >
                Start a Shipment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
