"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ShieldCheck, Award, FileText, ChevronRight, X, ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TextLink } from "@/components/ui/TextLink";
import { IconButton } from "@/components/ui/IconButton";
import { THEME_TOKENS } from "@/components/ui/design-system";

const FEATURED_AWARDS = [
  { id: 1, img: "/images/awards/1.jpg", title: "Logistics Excellence Recognition", forum: "Industry Award Trophy" },
  { id: 3, img: "/images/awards/3.jpg", title: "Project Cargo Achievement", forum: "Industry Award Trophy" },
  { id: 11, img: "/images/awards/11.jpeg", title: "Freight Forwarder Recognition", forum: "Industry Award Trophy" },
];

const ALL_AWARDS = [
  { id: 1, img: "/images/awards/1.jpg", title: "Logistics Excellence Recognition", forum: "Industry Award Trophy" },
  { id: 2, img: "/images/awards/2.jpg", title: "Cargo Handling Achievement", forum: "Industry Award Trophy" },
  { id: 3, img: "/images/awards/3.jpg", title: "Project Cargo Achievement", forum: "Industry Award Trophy" },
  { id: 4, img: "/images/awards/4.jpg", title: "Supply Chain Performance Trophy", forum: "Industry Award Trophy" },
  { id: 5, img: "/images/awards/5.jpg", title: "Customs Operations Recognition", forum: "Industry Award Trophy" },
  { id: 11, img: "/images/awards/11.jpeg", title: "Freight Forwarder Recognition", forum: "Industry Award Trophy" },
  { id: 12, img: "/images/awards/12.jpeg", title: "Operational Rigor Citation", forum: "Industry Award Trophy" },
  { id: 13, img: "/images/awards/13.jpeg", title: "Multimodal Performance Trophy", forum: "Industry Award Trophy" },
  { id: 14, img: "/images/awards/14.jpeg", title: "Carrier Partnership Award", forum: "Industry Award Trophy" },
];

export function AboutCredentialsAwards() {
  const [showAllAwardsModal, setShowAllAwardsModal] = useState<boolean>(false);

  useEffect(() => {
    if (!showAllAwardsModal) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowAllAwardsModal(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showAllAwardsModal]);

  return (
    <section id="credentials-awards" className="scroll-mt-28 py-16 sm:py-24 border-b border-white/10 bg-[#121316]">
      <div className={`max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-white/10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono text-[#e1390f] font-semibold">06</span>
              <span className="text-white/20 font-mono">/</span>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/50">
                Statutory Authority &middot; Verified Accreditations
              </span>
            </div>
            <h2
              className="text-white font-black tracking-[-0.02em] leading-[0.95] uppercase text-3xl sm:text-4xl lg:text-5xl"
              style={{ fontFamily: THEME_TOKENS.typography.fontDisplay }}
            >
              LICENSES &amp; HONORS
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-mono text-white/50 max-w-md">
            Audited statutory certifications issued by the Ministry of Finance, international aviation bodies, and documented industry trophies.
          </p>
        </div>

        {/* Credentials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-xl border border-white/10 bg-[#181A1F] flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-white/40 pb-2 border-b border-white/10">
                <span className="text-[#e1390f] font-bold">AEO-LO TIER 2</span>
                <span>CBIC Customs</span>
              </div>
              <h3 className="text-xl font-bold text-white mt-4">
                Authorized Economic Operator
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed font-light">
                Highest tier of trusted customs logistics operator accreditation granted by the Central Board of Indirect Taxes and Customs (CBIC), Ministry of Finance, Government of India.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs font-mono text-white/50 flex items-center justify-between">
              <span>License: <strong className="text-white font-mono">INAAQCA4076M0F243</strong></span>
              <ShieldCheck className="w-4 h-4 text-[#e1390f]" />
            </div>
          </div>

          <div className="p-8 rounded-xl border border-white/10 bg-[#181A1F] flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-white/40 pb-2 border-b border-white/10">
                <span className="text-[#e1390f] font-bold">IATA ACCREDITED</span>
                <span>Aviation Authority</span>
              </div>
              <h3 className="text-xl font-bold text-white mt-4">
                Approved Cargo Agent
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed font-light">
                Direct apron and terminal privileges across major international air carriers, enabling rapid airway bill (AWB) issuance and prioritized space booking.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs font-mono text-white/50 flex items-center justify-between">
              <span>Agent Code: <strong className="text-white font-mono">14-3-4852</strong></span>
              <CheckCircle2 className="w-4 h-4 text-[#e1390f]" />
            </div>
          </div>

          <div className="p-8 rounded-xl border border-white/10 bg-[#181A1F] flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-white/40 pb-2 border-b border-white/10">
                <span className="text-[#e1390f] font-bold">GLOBAL ALLIANCES</span>
                <span>Forwarding Networks</span>
              </div>
              <h3 className="text-xl font-bold text-white mt-4">
                WCA &amp; SCN Member
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed font-light">
                Audited membership in Security Cargo Network and WCA World, providing verified reciprocal agency coverage across major international sea and air gateways.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs font-mono text-white/50 flex items-center justify-between">
              <span>Status: <strong className="text-white font-mono">Vetted Member</strong></span>
              <Award className="w-4 h-4 text-[#e1390f]" />
            </div>
          </div>
        </div>

        {/* Featured Industry Awards Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#e1390f] font-semibold block">
              Documented Industry Awards &amp; Recognitions
            </span>
            <span className="text-xs text-white/40">
              Accolades awarded for freight forwarding, breakbulk operations, and customs compliance.
            </span>
          </div>
          <TextLink
            onClick={() => setShowAllAwardsModal(true)}
            icon={<ChevronRight className="w-3.5 h-3.5 text-[#e1390f]" />}
          >
            View All {ALL_AWARDS.length} Accolades
          </TextLink>
        </div>

        {/* Featured 3 Trophies */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          {FEATURED_AWARDS.map((award) => (
            <div key={award.id} className="p-5 rounded-xl border border-white/10 bg-[#181A1F] flex items-center gap-4">
              <div className="relative w-16 h-16 rounded overflow-hidden bg-black/40 shrink-0 border border-white/10">
                <Image src={award.img} alt={award.title} fill className="object-contain p-2" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">{award.title}</h4>
                <p className="text-[10px] font-mono text-white/40 mt-1">{award.forum}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for All Awards */}
        {showAllAwardsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-4xl max-h-[85vh] bg-[#15171C] border border-white/20 rounded-2xl p-6 sm:p-8 flex flex-col shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-tight font-mono">
                    All Documented Industry Honors
                  </h3>
                  <p className="text-xs font-mono text-white/50 mt-1">
                    Verified archive trophies &middot; Freyer International Logistics
                  </p>
                </div>
                <IconButton
                  icon={<X className="w-5 h-5" />}
                  aria-label="Close accolades archive"
                  onClick={() => setShowAllAwardsModal(false)}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto py-6 pr-2">
                {ALL_AWARDS.map((award) => (
                  <div
                    key={award.id}
                    className="p-4 rounded-xl border border-white/8 bg-[#1B1E26] flex items-center gap-3.5 hover:border-white/20 transition-colors"
                  >
                    <div className="relative w-16 h-16 rounded overflow-hidden bg-black/50 shrink-0 border border-white/10">
                      <Image src={award.img} alt={award.title} fill className="object-contain p-1.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white leading-snug">{award.title}</h4>
                      <p className="text-[10px] font-mono text-white/40 mt-1">{award.forum}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end shrink-0">
                <button
                  type="button"
                  onClick={() => setShowAllAwardsModal(false)}
                  className="px-5 py-2.5 rounded-lg bg-[#e1390f] hover:bg-[#c42f0b] text-white text-xs font-mono uppercase tracking-wider font-semibold transition-colors"
                >
                  Close Archive
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
