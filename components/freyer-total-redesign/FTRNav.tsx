"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Locations", href: "/locations" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function FTRNav() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
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
            ? "bg-[#040812]/50 backdrop-blur-md border-b border-white/8 py-4"
            : "bg-[#040812]/95 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl",
        ].join(" ")}
      >
        <div className="max-w-[1560px] mx-auto px-6 lg:px-12 flex items-center justify-between gap-8">

          {/* ── Wordmark ── */}
          <Link
            href="/"
            aria-label="Freyer International Logistics — Home"
            className="flex items-center gap-3 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e1390f] rounded"
          >
            <div className="relative h-9 w-[62px]">
              <Image
                src="/images/logo.png"
                alt="Freyer International Logistics"
                fill
                sizes="62px"
                className="object-contain object-left brightness-0 invert"
                priority
              />
            </div>
            <span
              className="hidden xl:inline-block text-[11px] font-mono tracking-[0.18em] uppercase text-white/40 select-none"
              aria-hidden
            >
              |
            </span>
            <span className="hidden xl:inline-block text-[11px] font-mono tracking-[0.16em] uppercase text-white/60 font-semibold whitespace-nowrap">
              Logistics Beyond Boundaries
            </span>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-7 lg:gap-9">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    "text-sm font-medium tracking-wide transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#e1390f] rounded px-0.5",
                    active
                      ? "text-white"
                      : "text-white/55 hover:text-white",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              );
            })}
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

      {/* ── Mobile Full-Screen Drawer ── */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#05090f] flex flex-col md:hidden"
            aria-modal="true"
            role="dialog"
            aria-label="Navigation menu"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <Link
                href="/"
                onClick={() => setDrawerOpen(false)}
                className="flex items-center gap-2.5"
              >
                <div className="relative h-8 w-[54px]">
                  <Image
                    src="/images/logo.png"
                    alt="Freyer International"
                    fill
                    sizes="54px"
                    className="object-contain object-left brightness-0 invert"
                  />
                </div>
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

            {/* Drawer Nav Links */}
            <nav className="flex-1 flex flex-col justify-center px-8 gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.08, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setDrawerOpen(false)}
                    className="block text-3xl font-bold text-white/80 hover:text-white transition-colors py-1.5 tracking-tight"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Drawer Bottom Actions */}
            <div className="px-6 pb-10 pt-6 border-t border-white/10 space-y-3">
              <a
                href="tel:+914443191919"
                className="flex items-center justify-center gap-2 w-full border border-white/20 text-white font-mono text-sm font-semibold py-4 rounded-lg hover:bg-white/5 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#e1390f]" />
                +91 44 43191919
              </a>
              <Link
                href="/contact"
                onClick={() => setDrawerOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-[#e1390f] hover:bg-[#c42f0b] text-white font-mono text-sm font-semibold py-4 rounded-lg transition-colors"
              >
                Request Freight Rate
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
