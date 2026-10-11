"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

export function HomepageNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-[var(--bg)] border-b border-[var(--border)] shadow-sm text-[var(--text)]"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 h-20 flex items-center justify-between gap-6">
        {/* Brand Lockup: Logo + Allowed Tagline */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="relative h-9 w-[60px]">
            <Image
              src="/logos/logo.png"
              alt="Freyer International Logistics"
              width={60}
              height={36}
              className={`w-full h-full object-contain ${
                scrolled ? "" : "brightness-0 invert"
              }`}
              priority
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span
              className={`text-xs font-semibold tracking-wider uppercase ${
                scrolled ? "text-[var(--text)]" : "text-white"
              }`}
            >
              Freyer International
            </span>
            <span
              className={`text-[11px] tracking-normal ${
                scrolled ? "text-[var(--muted)]" : "text-white/75"
              }`}
            >
              Logistics Beyond Boundaries
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
          <Link
            href="/services"
            className={`transition-colors hover:text-[var(--accent-text)] ${
              scrolled ? "text-[var(--text)]" : "text-white/90 hover:text-white"
            }`}
          >
            Services
          </Link>
          <Link
            href="/projects"
            className={`transition-colors hover:text-[var(--accent-text)] ${
              scrolled ? "text-[var(--text)]" : "text-white/90 hover:text-white"
            }`}
          >
            Projects
          </Link>
          <Link
            href="/locations"
            className={`transition-colors hover:text-[var(--accent-text)] ${
              scrolled ? "text-[var(--text)]" : "text-white/90 hover:text-white"
            }`}
          >
            Network
          </Link>
          <Link
            href="/about"
            className={`transition-colors hover:text-[var(--accent-text)] ${
              scrolled ? "text-[var(--text)]" : "text-white/90 hover:text-white"
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`transition-colors hover:text-[var(--accent-text)] ${
              scrolled ? "text-[var(--text)]" : "text-white/90 hover:text-white"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+914443191919"
            className={`flex items-center gap-2 text-sm font-medium ${
              scrolled ? "text-[var(--muted)]" : "text-white/80"
            }`}
          >
            <Phone className="w-4 h-4 text-[var(--accent)]" />
            +91 44 43191919
          </a>
          <a
            href="#quote"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-md bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors shadow-sm"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-md ${
            scrolled ? "text-[var(--text)]" : "text-white"
          }`}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--bg)] border-b border-[var(--border)] text-[var(--text)] px-6 py-6 space-y-4 shadow-lg">
          <nav className="flex flex-col space-y-3 font-medium text-base">
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[var(--accent-text)]"
            >
              Services
            </Link>
            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[var(--accent-text)]"
            >
              Projects
            </Link>
            <Link
              href="/locations"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[var(--accent-text)]"
            >
              Network
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[var(--accent-text)]"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[var(--accent-text)]"
            >
              Contact
            </Link>
          </nav>
          <div className="pt-4 border-t border-[var(--border)] flex flex-col gap-3">
            <a
              href="tel:+914443191919"
              className="flex items-center gap-2 text-sm font-medium text-[var(--muted)]"
            >
              <Phone className="w-4 h-4 text-[var(--accent)]" />
              +91 44 43191919
            </a>
            <a
              href="#quote"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold rounded-md bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors text-center"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
