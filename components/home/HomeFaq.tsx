"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle, ShieldCheck, PhoneCall } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  tag: string;
}

const FAQS: FaqItem[] = [
  {
    question: "What is Freyer's operational presence across India and global trade lanes?",
    answer:
      "Freyer operates 9 full-fledged company branch offices covering India's vital trade hubs: Bengaluru (Corporate HQ), Chennai (Seaport & Air Cargo terminals), Mumbai (Nhava Sheva/JNPT), Delhi NCR, Hyderabad, Visakhapatnam, Coimbatore, Tuticorin, and Ahmedabad. Globally, we hold direct service contracts with premier ocean lines (Maersk, MSC, Hapag-Lloyd) and airlines (Emirates, Qatar, Singapore), supplemented by vetted WCA InterGlobal and FIATA agency networks across 190+ countries.",
    tag: "Network & Scale",
  },
  {
    question: "How does Freyer's AEO Tier-2 certification accelerate customs clearance?",
    answer:
      "As an Authorized Economic Operator Tier-2 (AEO-T2) certified forwarder accredited by the Indian Customs Administration (CBIC), Freyer's consignments receive priority 'Green Channel' assessment on ICEGATE EDI, significantly reduced physical inspections, Direct Port Delivery (DPD) priority, reduced bank guarantee requirements, and expedited 24/7 customs examination at maritime ports and air cargo complexes.",
    tag: "Customs Regulatory",
  },
  {
    question: "What capacity do you have for Over-Dimensional Cargo (ODC) & project logistics?",
    answer:
      "Project cargo is one of Freyer's flagship competencies. We engineer complete turnkey solutions: route civil surveys, bridge load verifications, overhead utility clearances, state road transit permits, hydraulic multi-axle trailer mobilization (Goldhofer / SPMT), and port captaincy lashing certifications. Our documented portfolio includes single-piece heavy lifts up to 296 MT and continuous breakbulk movements up to 482 MT.",
    tag: "Project Cargo",
  },
  {
    question: "How do you manage emergency AOG (Aircraft On Ground) and time-critical airfreight?",
    answer:
      "As an accredited IATA Cargo Agent, Freyer issues Air Waybills directly and maintains airside operations teams at Bengaluru (BLR), Chennai (MAA), Mumbai (BOM), and Delhi (DEL). For critical emergencies, our 24/7 AOG control desk executes next-flight-out routing, on-board courier (OBC) dispatches, and full or part aircraft charters (B777F, A330F, B747-8F) with active temperature-controlled cold-chain management.",
    tag: "Air Operations",
  },
  {
    question: "What milestone tracking and EDI visibility do you provide to shippers?",
    answer:
      "We provide multi-channel milestone visibility: real-time container tracking, EDI event updates (Customs filed, ICEGATE cleared, VGM verified, vessel loaded, transshipment alert, and proof of delivery), automated email exception alerts, and direct single-click tracking for ocean containers, air waybills, and project manifests on our 24/7 portal.",
    tag: "Tracking & Tech",
  },
  {
    question: "How does Freyer handle commercial credit and billing for enterprise shippers?",
    answer:
      "We establish tailored commercial credit agreements for verified enterprise shippers following standard KYC and financial appraisal. Commercial terms typically offer 15 to 30 days credit on ocean and air freight charges, with transparent customs duty advance mechanisms and standardized itemized invoicing.",
    tag: "Commercial Terms",
  },
];

export function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="py-16 sm:py-24 bg-white text-[#0b2144] border-b border-slate-200"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#c42f0b]" />
            Direct Answers &middot; Unhedged
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0b2144]">
            Frequently Asked Commercial &amp; Operational Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-2xl mx-auto">
            Everything enterprise shippers and procurement teams ask about our licenses, network depth, and project capabilities.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-colors duration-150 hover:border-slate-300 bg-slate-50/50"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c42f0b]"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-500 shrink-0 mt-0.5">
                      {faq.tag}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#0b2144] leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#c42f0b]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Direct Switchboard CTA Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0b2144] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Have specific project or lane inquiry?
            </h4>
            <p className="text-xs text-slate-300">
              Direct routing advice from senior freight operations and customs superintendents.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+914443191919"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-xl transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              +91 44 4319 1919
            </a>
            <a
              href="/#quote"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold bg-[#c42f0b] hover:bg-[#a82506] text-white px-5 py-2.5 rounded-xl transition-colors"
            >
              Submit Tender RFQ &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
