"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Award, Globe, Shield, ChevronLeft, ChevronRight } from "lucide-react";

/** Verified accreditation ribbons — high-contrast enterprise authority strip. */
const ACCREDITATIONS = [
  {
    name: "CBIC AEO-LO",
    badge: "AEO Certified",
    detail: "INAAQCA4076M0F243",
    img: "/images/aeo-logo.jpg",
    width: 68,
  },
  {
    name: "IATA Cargo",
    badge: "Approved Agent",
    detail: "Direct Carrier Authority",
    img: "/images/IATA.png",
    width: 58,
  },
  {
    name: "WCA World",
    badge: "Verified Member",
    detail: "Global Forwarding Network",
    img: "/images/wca.png",
    width: 58,
  },
  {
    name: "SCN Network",
    badge: "Security Cargo",
    detail: "Independent Elite Agents",
    img: "/images/SCN.png",
    width: 58,
  },
  {
    name: "AMTOI",
    badge: "MTO Member",
    detail: "Multimodal Transport India",
    img: "/images/amtoi.png",
    width: 48,
  },
];

export function LTTrustBar() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(false);

  const checkScroll = React.useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  React.useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scrollBy = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section
      aria-label="Official Accreditations & Statutory Certifications"
      className="relative bg-[var(--color-bg-alt)] border-y border-[var(--color-border-subtle)] py-4.5 sm:py-5 overflow-hidden"
    >
      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6">

          {/* Institutional Label & Carousel Controls */}
          <div className="flex items-center justify-between gap-4 shrink-0">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[var(--color-brand-orange)] shrink-0" />
              <div>
                <div className="text-xs sm:text-sm font-semibold text-[var(--color-text-primary)]">
                  Accreditations and memberships
                </div>
                <div className="text-xs text-[var(--color-text-secondary)]">
                  Statutory certifications and global network alliances
                </div>
              </div>
            </div>

            {/* Subtle Carousel Arrow Controls (Visible when overflowing) */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() => scrollBy(-240)}
                disabled={!canScrollLeft}
                aria-label="Scroll left credentials"
                className={`w-7 h-7 rounded-full border border-[var(--color-border-subtle)] flex items-center justify-center transition-all ${
                  canScrollLeft
                    ? "bg-[var(--color-bg-elevated)] text-[var(--color-text-primary)] hover:border-[var(--color-brand-blue)] hover:text-[var(--color-brand-blue)] shadow-xs"
                    : "bg-transparent text-[var(--color-border-subtle)] opacity-40 cursor-not-allowed"
                }`}
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => scrollBy(240)}
                disabled={!canScrollRight}
                aria-label="Scroll right credentials"
                className={`w-7 h-7 rounded-full border border-[var(--color-border-subtle)] flex items-center justify-center transition-all ${
                  canScrollRight
                    ? "bg-[var(--color-bg-elevated)] text-[var(--color-text-primary)] hover:border-[var(--color-brand-blue)] hover:text-[var(--color-brand-blue)] shadow-xs"
                    : "bg-transparent text-[var(--color-border-subtle)] opacity-40 cursor-not-allowed"
                }`}
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Credential Cards Carousel Container with Edge Fades */}
          <div className="relative min-w-0 flex-1">
            {/* Left Edge Fade */}
            {canScrollLeft && (
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[var(--color-bg-alt)] to-transparent z-10 pointer-events-none" />
            )}

            {/* Right Edge Fade */}
            {canScrollRight && (
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[var(--color-bg-alt)] to-transparent z-10 pointer-events-none" />
            )}

            <div
              ref={scrollRef}
              className="flex items-center gap-3 sm:gap-3.5 overflow-x-auto scrollbar-none pb-1 pt-0.5 px-0.5 scroll-smooth"
            >
              {ACCREDITATIONS.map((item) => (
                <div
                  key={item.name}
                  className="shrink-0 flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] hover:border-[var(--color-brand-blue)] transition-all shadow-xs"
                >
                  <div className="relative h-7 w-12 shrink-0 bg-white rounded-lg border border-[var(--color-border-subtle)] p-0.5 flex items-center justify-center">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      sizes="48px"
                      className="object-contain p-0.5"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-semibold text-[var(--color-text-primary)]">
                        {item.name}
                      </span>
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-[var(--color-tag-bg)] text-[var(--color-tag-text)] border border-[var(--color-tag-text)]/20 font-medium">
                        {item.badge}
                      </span>
                    </div>
                    <div className="text-[10px] text-[var(--color-text-secondary)] font-mono">
                      {item.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
