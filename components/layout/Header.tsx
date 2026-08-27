"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDarkPage = pathname === "/";
  const isLightSolid = !isDarkPage;
  const isDarkScrolled = isDarkPage && scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isLightSolid
            ? "bg-white/98 backdrop-blur-md border-b border-slate-200/80 py-4 shadow-2xs text-[#0b2144]"
            : isDarkScrolled
            ? "bg-[#03060f]/95 backdrop-blur-md border-b border-white/10 py-4 shadow-lg text-white"
            : "bg-transparent py-5 text-white"
        }`}
      >
        <div className="max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Lockup */}
          <Link
            href="/"
            className="flex flex-col items-start group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c42f0b] rounded-md"
            aria-label="Freyer International Logistics — Home"
          >
            <div
              className={`relative h-13 sm:h-15 md:h-17 w-48 sm:w-56 md:w-64 transition-all duration-200 ${
                isLightSolid ? "brightness-100 invert-0" : "brightness-0 invert"
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
              className={`text-xs sm:text-sm tracking-wide font-medium transition-colors duration-200 mt-1 ${
                isLightSolid ? "text-[#c42f0b]" : "text-[#ff6b4a]"
              }`}
            >
              Logistics Beyond Boundaries
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-10 text-base font-medium">
            <Link
              href="/services"
              className={`transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c42f0b] px-1 py-0.5 ${
                isLightSolid ? "text-slate-700 hover:text-[#0b2144]" : "text-slate-200 hover:text-white"
              }`}
            >
              Capabilities
            </Link>
            <Link
              href="/projects"
              className={`transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c42f0b] px-1 py-0.5 ${
                isLightSolid ? "text-slate-700 hover:text-[#0b2144]" : "text-slate-200 hover:text-white"
              }`}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className={`transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c42f0b] px-1 py-0.5 ${
                isLightSolid ? "text-slate-700 hover:text-[#0b2144]" : "text-slate-200 hover:text-white"
              }`}
            >
              About
            </Link>
            <Link
              href="/locations"
              className={`transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c42f0b] px-1 py-0.5 ${
                isLightSolid ? "text-slate-700 hover:text-[#0b2144]" : "text-slate-200 hover:text-white"
              }`}
            >
              Locations
            </Link>
            <Link
              href="/contact"
              className={`transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c42f0b] px-1 py-0.5 ${
                isLightSolid ? "text-slate-700 hover:text-[#0b2144]" : "text-slate-200 hover:text-white"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Single Restrained Action */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="/#quote"
              className="inline-flex items-center gap-2 bg-[#c42f0b] hover:bg-[#a82506] text-white text-sm font-semibold px-5 py-3 rounded-lg transition-all duration-150 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b2144]"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c42f0b] ${
              isLightSolid ? "text-slate-800" : "text-white"
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
                10 Operating Hubs
              </Link>
              <Link
                href="/network-partners"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#c42f0b] transition-colors py-1"
              >
                Global Alliances
              </Link>
              <Link
                href="/careers"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#c42f0b] transition-colors py-1"
              >
                Careers &amp; Culture
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#c42f0b] transition-colors py-1"
              >
                Contact Commercial Desks
              </Link>
            </nav>

            <div className="pt-6 border-t border-slate-200">
              <Link
                href="/#quote"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-[#c42f0b] text-white font-semibold py-3.5 rounded block text-base"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
