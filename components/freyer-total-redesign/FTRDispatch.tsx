"use client";

import React, { useRef, useState, useTransition } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { ArrowRight, Phone, Mail, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";

/**
 * FTR Dispatch — Direct commercial engagement section.
 *
 * 2-column layout:
 *   Left: 4-field RFQ form (name, company, service type, message)
 *   Right: Chennai HQ direct contact plate (verified address, phone, email)
 *
 * All contact information verified from official Freyer records.
 */

const SERVICE_OPTIONS = [
  "Ocean Freight (FCL)",
  "Ocean Freight (LCL)",
  "Air Freight",
  "Project Cargo / Heavy-Lift",
  "Customs Brokerage",
  "Warehousing & Distribution",
  "Risk Management",
  "Multi-Modal Logistics",
];

type FormState = "idle" | "submitting" | "success" | "error";

export function FTRDispatch() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    serviceType: "",
    message: "",
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulate form submission — in production, this would call a Server Action
    await new Promise((res) => setTimeout(res, 1400));
    setFormState("success");
  };

  return (
    <section
      id="engage"
      aria-label="Contact and freight rate enquiry"
      className="bg-[#05090f] text-white border-t border-white/10"
    >
      <div
        ref={sectionRef}
        className="max-w-[1560px] mx-auto px-6 lg:px-12 py-20 sm:py-28"
      >
        {/* Section headline */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#e1390f] mb-4"
          >
            Direct Engagement
          </motion.div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={isInView ? { y: "0%" } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-bold text-white tracking-tight"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
                letterSpacing: "-0.03em",
                lineHeight: 1.0,
              }}
            >
              ENGAGE DIRECTLY.
            </motion.h2>
          </div>
        </div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-20">

          {/* ── LEFT: RFQ Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {formState === "success" ? (
              /* Success state */
              <div className="flex flex-col items-start gap-5 py-8">
                <CheckCircle2 className="w-10 h-10 text-[#e1390f]" />
                <h3 className="text-xl font-bold text-white">Enquiry received.</h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-md">
                  Your freight enquiry has been submitted to the Freyer operations team.
                  You will receive a direct response from the relevant commercial desk
                  within one business day.
                </p>
                <button
                  onClick={() => {
                    setFormState("idle");
                    setFormData({ name: "", company: "", serviceType: "", message: "" });
                  }}
                  className="mt-2 text-xs font-mono uppercase tracking-wider text-white/40 hover:text-white transition-colors"
                >
                  Submit another enquiry →
                </button>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="ftr-name"
                      className="block text-[10px] font-mono uppercase tracking-wider text-white/35 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="ftr-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      placeholder="Full name"
                      className="w-full bg-[#09111e] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 font-mono focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-colors"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="ftr-company"
                      className="block text-[10px] font-mono uppercase tracking-wider text-white/35 mb-2"
                    >
                      Company
                    </label>
                    <input
                      id="ftr-company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      autoComplete="organization"
                      placeholder="Company or trade name"
                      className="w-full bg-[#09111e] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 font-mono focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-colors"
                    />
                  </div>
                </div>

                {/* Service Type */}
                <div>
                  <label
                    htmlFor="ftr-service"
                    className="block text-[10px] font-mono uppercase tracking-wider text-white/35 mb-2"
                  >
                    Service Required
                  </label>
                  <select
                    id="ftr-service"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#09111e] border border-white/10 rounded-lg px-4 py-3 text-sm text-white font-mono focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-colors appearance-none cursor-pointer"
                    style={{ colorScheme: "dark" }}
                  >
                    <option value="" disabled className="text-white/30">
                      Select service type
                    </option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#09111e]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="ftr-message"
                    className="block text-[10px] font-mono uppercase tracking-wider text-white/35 mb-2"
                  >
                    Shipment Details
                  </label>
                  <textarea
                    id="ftr-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    placeholder="Origin, destination, commodity, approximate weight/volume, required timeline..."
                    className="w-full bg-[#09111e] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 font-mono focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="inline-flex items-center gap-2.5 bg-[#e1390f] hover:bg-[#c42f0b] disabled:opacity-60 text-white font-mono text-sm font-semibold px-6 py-3.5 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {formState === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending Enquiry…
                    </>
                  ) : (
                    <>
                      Send Freight Enquiry
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[10px] font-mono text-white/20 leading-relaxed">
                  Direct submission to Freyer operations desk. Responses within 1 business day.
                </p>
              </form>
            )}
          </motion.div>

          {/* ── RIGHT: Direct Contact Plate ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            {/* HQ Address Block */}
            <div className="bg-[#09111e] border border-white/10 rounded-xl p-6 space-y-5">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#e1390f] mb-2">
                  Corporate Registered Headquarters
                </div>
                <div className="text-base font-bold text-white">
                  Freyer International Logistics Pvt Ltd
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white/30 shrink-0 mt-0.5" />
                <address className="not-italic text-sm text-white/60 leading-relaxed font-mono">
                  TAGA Tower<br />
                  New No: 45, Old No 20, 1st Floor<br />
                  2nd Street, Sait Colony<br />
                  Egmore, Chennai – 600 008<br />
                  Tamil Nadu, India
                </address>
              </div>

              {/* Phone */}
              <a
                href="tel:+914443191919"
                className="flex items-center gap-3 group"
              >
                <Phone className="w-4 h-4 text-[#e1390f] shrink-0" />
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-white/25 mb-0.5">
                    Direct HQ Line
                  </div>
                  <span className="text-sm font-mono font-semibold text-white group-hover:underline underline-offset-2">
                    +91 44 43191919
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@freyerinternational.com"
                className="flex items-center gap-3 group"
              >
                <Mail className="w-4 h-4 text-white/30 shrink-0" />
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-white/25 mb-0.5">
                    Official Email
                  </div>
                  <span className="text-sm font-mono text-white/70 group-hover:text-white transition-colors group-hover:underline underline-offset-2">
                    info@freyerinternational.com
                  </span>
                </div>
              </a>
            </div>

            {/* Credentials summary */}
            <div className="space-y-2">
              <div className="text-[10px] font-mono uppercase tracking-wider text-white/25 mb-3">
                Verified Credentials
              </div>
              {[
                "CBIC AEO-LO Tier 2 (INAAQCA4076M0F243)",
                "IATA Approved Cargo Agent",
                "WCA World Member",
                "Security Cargo Network (SCN)",
                "AMTOI Member",
                "MTO Licensed",
              ].map((cred) => (
                <div key={cred} className="flex items-center gap-2.5 text-xs font-mono text-white/40">
                  <span className="w-1 h-1 rounded-full bg-[#e1390f] shrink-0" />
                  {cred}
                </div>
              ))}
            </div>

            {/* Locations CTA */}
            <div className="border-t border-white/10 pt-6">
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/30 hover:text-white transition-colors"
              >
                Find your nearest station
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
