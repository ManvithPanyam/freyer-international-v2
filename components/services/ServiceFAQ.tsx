"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What core logistics disciplines does Freyer International provide?",
    answer:
      "Freyer operates across 6 integrated disciplines: Project Cargo & Heavy-Lift Engineering, High-Bay Warehousing & 3PL Distribution, Ocean Freight Forwarding (FCL/LCL), Scheduled Airfreight & Charters, CBIC AEO-LO Certified Customs Brokerage, and Marine Cargo Risk Management.",
  },
  {
    question: "Which Indian ports, airports, and commercial centers does Freyer operate from?",
    answer:
      "Freyer maintains dedicated physical operations across 10 branch stations in India: Corporate Headquarters & Air Cargo Gateway in Chennai (Egmore & Meenambakkam), Bengaluru Corporate Registered Office, Northern Gateway in Delhi/NCR, Western Seaboard in Mumbai, Central Deccan in Hyderabad, Eastern Deepwater Gateway in Visakhapatnam, plus industrial hubs in Coimbatore, Tuticorin, and Ahmedabad.",
  },
  {
    question: "How does Freyer coordinate door-to-door overseas cargo outside India?",
    answer:
      "Freyer is an active certified member of global freight forwarding alliances including WCA World, Security Cargo Network (SCN), WPA, and FDX Logistics Network. This provides verified reciprocal agency representation across major global trade corridors with door-to-door customs and final-mile delivery.",
  },
  {
    question: "What information is required to receive a formal freight proposal?",
    answer:
      "Submit estimated origin/destination ports or cities, cargo weight/dimensions, commodity HS classification, and any specialized handling needs (e.g., breakbulk crane rigging, temperature-control, bonded CFS warehousing) via our online RFQ portal or directly to info@freyerinternational.com.",
  },
];

export function ServiceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section>
      <div className="pb-6 border-b border-white/10 flex items-baseline justify-between">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#e1390f] font-semibold block mb-2">
            Operational Clarifications
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono uppercase">
            Frequently Asked Questions
          </h2>
        </div>
        <span className="text-xs font-mono text-white/40 hidden sm:inline-block">
          Commercial Governance
        </span>
      </div>

      <div className="divide-y divide-white/10 pt-4">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="py-6 sm:py-7">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between text-left gap-4 group"
              >
                <span className="text-base sm:text-lg font-semibold text-white group-hover:text-[#e1390f] transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-white/40 transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-180 text-[#e1390f]" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="mt-4 text-sm text-slate-300 font-light leading-relaxed max-w-4xl">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
