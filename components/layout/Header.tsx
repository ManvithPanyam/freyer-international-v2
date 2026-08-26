"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-xs text-[#0b2144]"
            : "bg-gradient-to-b from-black/85 via-black/40 to-transparent py-4 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Prominent Two-Line Brand Lockup (+40% scaled Logo + Tagline) */}
          <Link
            href="/"
            className="flex flex-col items-start group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c42f0b] rounded-md"
            aria-label="Freyer International Logistics — Home"
          >
            <div
              className={`relative h-12 sm:h-14 md:h-16 w-44 sm:w-52 md:w-60 transition-all duration-300 ${
                scrolled ? "brightness-100 invert-0" : "brightness-0 invert"
              }`}
            >
              <Image
                src="/images/logo.png"
                alt="Freyer International Logistics"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <span
              className={`text-[10px] sm:text-[11px] tracking-wide font-medium transition-colors duration-300 mt-1 ${
                scrolled ? "text-[#c42f0b]" : "text-white/90"
              }`}
            >
              Logistics Beyond Boundaries
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-9 text-base font-medium">
            <a
              href="/#capabilities"
              className={`transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c42f0b] px-1 py-0.5 ${
                scrolled ? "text-slate-700 hover:text-[#0b2144]" : "text-slate-200 hover:text-white"
              }`}
            >
              Capabilities
            </a>
            <a
              href="/#project-cargo"
              className={`transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c42f0b] px-1 py-0.5 ${
                scrolled ? "text-slate-700 hover:text-[#0b2144]" : "text-slate-200 hover:text-white"
              }`}
            >
              Project Cargo
            </a>
            <a
              href="/#network"
              className={`transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c42f0b] px-1 py-0.5 ${
                scrolled ? "text-slate-700 hover:text-[#0b2144]" : "text-slate-200 hover:text-white"
              }`}
            >
              Network
            </a>
            <a
              href="/#quote"
              className={`transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c42f0b] px-1 py-0.5 ${
                scrolled ? "text-slate-700 hover:text-[#0b2144]" : "text-slate-200 hover:text-white"
              }`}
            >
              Quote
            </a>
          </nav>

          {/* Single Restrained Action */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="/#quote"
              className="inline-flex items-center gap-1.5 bg-[#c42f0b] hover:bg-[#a82506] text-white text-xs font-semibold px-4 py-2.5 rounded transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b2144]"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c42f0b] ${
              scrolled ? "text-slate-800" : "text-white"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[72px] z-40 bg-white/98 backdrop-blur-xl p-6 flex flex-col justify-between md:hidden border-t border-slate-200 text-[#0b2144] shadow-2xl"
          >
            <nav className="flex flex-col gap-6 text-xl font-semibold pt-4">
              <a
                href="/#capabilities"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#c42f0b] transition-colors py-1"
              >
                Capabilities
              </a>
              <a
                href="/#project-cargo"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#c42f0b] transition-colors py-1"
              >
                Project Cargo
              </a>
              <a
                href="/#network"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#c42f0b] transition-colors py-1"
              >
                10 Hub Network
              </a>
              <a
                href="/#quote"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#c42f0b] transition-colors py-1"
              >
                Request a Quote
              </a>
            </nav>

            <div className="space-y-4 pt-6 border-t border-slate-200">
              <a
                href="/#quote"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-[#c42f0b] text-white font-semibold py-3.5 rounded block text-sm"
              >
                Request a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
