"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What core logistics disciplines does Freyer International provide?",
    answer:
      "Freyer operates across 6 integrated disciplines: Project Cargo & Heavy-Lift Engineering, High-Bay Warehousing & 3PL Distribution, Ocean Freight Forwarding (FCL/LCL), Scheduled Airfreight & Charters, AEO Tier-2 Licensed Customs Brokerage, and Cargo Risk Management.",
  },
  {
    question: "Which Indian ports, airports, and commercial centers does Freyer operate from?",
    answer:
      "Freyer maintains dedicated physical operations across 10 strategic Indian commercial hubs: Corporate Registered Office in Bengaluru, primary seaport gateway in Chennai (Egmore & Meenambakkam Airport), North India hub in Delhi/NCR, West Coast hub in Mumbai, Deccan hub in Hyderabad, East Coast maritime hub in Visakhapatnam, plus industrial stations in Coimbatore, Tuticorin, and Ahmedabad.",
  },
  {
    question: "How does Freyer coordinate door-to-door overseas cargo outside India?",
    answer:
      "Freyer is a certified active member of premier global freight forwarder consortiums including WCA World, Security Cargo Network (SCN), Worldwide Partners Alliance (WPA), and FDX Global. This grants our clients audited, reciprocal agency coverage across 190+ countries with door-to-door customs and final-mile coordination.",
  },
  {
    question: "What information is required to receive a formal freight proposal?",
    answer:
      "You can submit estimated origin/destination ports or cities, cargo weight/volume, commodity classification, and any specialized handling needs (e.g., breakbulk crane rigging, temperature-control, bonded CFS warehousing) via our online Freight Configurator or directly to info@freyerinternational.com.",
  },
];

export function ServiceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="pt-8">
      <div className="pb-6 border-b border-slate-200 flex items-baseline justify-between">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#c42f0b] font-bold block mb-1">
            Operational FAQs
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0b2144]">
            Frequently Asked Questions
          </h2>
        </div>
        <span className="text-xs sm:text-sm font-mono text-slate-400">
          Commercial Governance
        </span>
      </div>

      <div className="divide-y divide-slate-200/90 pt-4">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="py-6 sm:py-7">
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between gap-4 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c42f0b] rounded-lg"
                aria-expanded={isOpen}
              >
                <span className="text-lg sm:text-xl font-bold text-[#0b2144] group-hover:text-[#c42f0b] transition-colors leading-snug">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 group-hover:text-[#c42f0b] shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-[#c42f0b]" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
