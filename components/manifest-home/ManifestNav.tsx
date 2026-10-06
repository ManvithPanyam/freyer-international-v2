"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Network", href: "/locations" },
  { label: "Company", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

const PHONE = "+91 44 43191919";

export function ManifestNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile sheet is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={[
          "fixed top-0 inset-x-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-[#121316] border-b border-white/[0.08]"
            : "bg-transparent border-b border-transparent",
        ].join(" ")}
      >
        <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between gap-6">

          {/* ── Logo ── */}
          <Link href="/" aria-label="Freyer International Logistics — Home" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="Freyer International Logistics"
              height={32}
              width={160}
              className="h-8 w-auto brightness-0 invert"
              priority
            />
          </Link>

          {/* ── Desktop center nav ── */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="font-['var(--font-ibm-plex-mono)',ui-monospace,monospace] text-[13px] uppercase tracking-[0.08em] text-[#A1A1AA] hover:text-[#F8F7F4] transition-colors duration-150"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* ── Desktop right cluster ── */}
          <div className="hidden lg:flex items-center gap-5 shrink-0">
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="font-['var(--font-ibm-plex-mono)',ui-monospace,monospace] text-xs text-[#A1A1AA] hover:text-[#F8F7F4] transition-colors duration-150 whitespace-nowrap"
            >
              {PHONE}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-['var(--font-ibm-plex-mono)',ui-monospace,monospace] uppercase text-xs tracking-[0.08em] text-white bg-[#E1390F] hover:bg-[#C42F0B] h-[40px] px-5 rounded-none transition-colors duration-150 whitespace-nowrap"
            >
              Request Rate
            </Link>
          </div>

          {/* ── Mobile right cluster ── */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-['var(--font-ibm-plex-mono)',ui-monospace,monospace] uppercase text-xs tracking-[0.08em] text-white bg-[#E1390F] hover:bg-[#C42F0B] h-[36px] px-4 rounded-none transition-colors duration-150"
            >
              Request Rate
            </Link>
            <button
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-sheet"
              onClick={() => setMenuOpen((v) => !v)}
              className="flex items-center justify-center w-10 h-10 text-[#F8F7F4] hover:text-[#A1A1AA] transition-colors duration-150"
            >
              {menuOpen ? (
                /* Close icon */
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                  <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                </svg>
              ) : (
                /* Hamburger icon */
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <line x1="3" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                  <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                  <line x1="3" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile full-screen nav sheet ── */}
      <div
        id="mobile-nav-sheet"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={[
          "fixed inset-0 bg-[#121316] z-50 flex flex-col lg:hidden transition-opacity duration-200",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        {/* Sheet header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-white/[0.08] shrink-0">
          <Link href="/" onClick={() => setMenuOpen(false)} aria-label="Home">
            <Image
              src="/images/logo.png"
              alt="Freyer International Logistics"
              height={32}
              width={160}
              className="h-8 w-auto brightness-0 invert"
            />
          </Link>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center w-10 h-10 text-[#F8F7F4] hover:text-[#A1A1AA] transition-colors duration-150"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
              <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
            </svg>
          </button>
        </div>

        {/* Sheet nav links */}
        <nav aria-label="Mobile navigation" className="flex-1 flex flex-col justify-center px-6 gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-['var(--font-ibm-plex-mono)',ui-monospace,monospace] text-[22px] uppercase tracking-[0.08em] text-[#A1A1AA] hover:text-[#F8F7F4] py-4 border-b border-white/[0.08] transition-colors duration-150"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Sheet footer — phone number */}
        <div className="px-6 py-8 border-t border-white/[0.08] shrink-0">
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="font-['var(--font-ibm-plex-mono)',ui-monospace,monospace] text-xs text-[#71717A] hover:text-[#A1A1AA] transition-colors duration-150"
          >
            {PHONE}
          </a>
        </div>
      </div>
    </>
  );
}
