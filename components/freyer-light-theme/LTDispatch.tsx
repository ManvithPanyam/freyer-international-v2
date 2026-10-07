"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { ArrowRight, Phone, Mail, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { TextLink } from "@/components/ui/TextLink";

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

export function LTDispatch() {
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
    // Simulate form submission
    await new Promise((res) => setTimeout(res, 1400));
    setFormState("success");
  };

  return (
    <section
      id="engage"
      aria-label="Contact and freight rate enquiry"
      className="bg-[#17181B] text-[#F7F6F2] border-t border-[#F7F6F2]/10"
    >
      <div
        ref={sectionRef}
        className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32"
      >
        {/* Section headline */}
        <div className="mb-14">
          <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.24em] text-[#E33B12] font-medium mb-4">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E33B12] opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E33B12]" />
            </span>
            <span>Commercial Dispatch &amp; Rate Inquiries</span>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={isInView ? { y: "0%" } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#F7F6F2] font-black tracking-[-0.02em] leading-[0.92] uppercase"
              style={{
                fontFamily: "var(--font-barlow-condensed), system-ui, sans-serif",
                fontSize: "var(--token-text-4xl)",
              }}
            >
              ENGAGE DIRECTLY
              <span className="text-[#E33B12]">.</span>
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
              <div className="flex flex-col items-start gap-5 p-8 rounded-xl bg-[#E33B12]/10 border border-[#E33B12]/30">
                <CheckCircle2 className="w-10 h-10 text-[#E33B12]" />
                <h3 className="text-xl font-bold text-[#F7F6F2]">Enquiry received.</h3>
                <p className="text-[#F7F6F2]/60 text-sm leading-relaxed max-w-md">
                  Your freight enquiry has been submitted to the Freyer operations team.
                  You will receive a direct response from the relevant commercial desk
                  within one business day.
                </p>
                <button
                  onClick={() => {
                    setFormState("idle");
                    setFormData({ name: "", company: "", serviceType: "", message: "" });
                  }}
                  className="mt-2 text-xs font-mono uppercase tracking-wider text-[#F7F6F2]/40 hover:text-[#F7F6F2] transition-colors"
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
                      className="block text-xs font-mono uppercase tracking-wider text-[#F7F6F2]/50 mb-2"
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
                      className="w-full bg-[#F7F6F2]/[0.06] border border-[#F7F6F2]/15 rounded-lg px-4 py-3 text-sm text-[#F7F6F2] placeholder-[#F7F6F2]/30 font-mono focus:outline-none focus:border-[#E33B12] focus:ring-1 focus:ring-[#E33B12] transition-colors"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="ftr-company"
                      className="block text-xs font-mono uppercase tracking-wider text-[#F7F6F2]/50 mb-2"
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
                      className="w-full bg-[#F7F6F2]/[0.06] border border-[#F7F6F2]/15 rounded-lg px-4 py-3 text-sm text-[#F7F6F2] placeholder-[#F7F6F2]/30 font-mono focus:outline-none focus:border-[#E33B12] focus:ring-1 focus:ring-[#E33B12] transition-colors"
                    />
                  </div>
                </div>

                {/* Service Type */}
                <div>
                  <label
                    htmlFor="ftr-service"
                    className="block text-xs font-mono uppercase tracking-wider text-[#F7F6F2]/50 mb-2"
                  >
                    Service Required
                  </label>
                  <select
                    id="ftr-service"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#F7F6F2]/[0.06] border border-[#F7F6F2]/15 rounded-lg px-4 py-3 text-sm text-[#F7F6F2] font-mono focus:outline-none focus:border-[#E33B12] focus:ring-1 focus:ring-[#E33B12] transition-colors appearance-none cursor-pointer"
                    style={{ colorScheme: "dark" }}
                  >
                    <option value="" disabled className="text-gray-500">
                      Select service type
                    </option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#17181B] text-[#F7F6F2]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="ftr-message"
                    className="block text-xs font-mono uppercase tracking-wider text-[#F7F6F2]/50 mb-2"
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
                    className="w-full bg-[#F7F6F2]/[0.06] border border-[#F7F6F2]/15 rounded-lg px-4 py-3 text-sm text-[#F7F6F2] placeholder-[#F7F6F2]/30 font-mono focus:outline-none focus:border-[#E33B12] focus:ring-1 focus:ring-[#E33B12] transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full flex items-center justify-center gap-2 bg-[#E33B12] text-white hover:bg-[#E33B12]/90 rounded-lg px-6 py-3 font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Enquiry…</span>
                    </>
                  ) : (
                    <>
                      <span>Send Freight Enquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-xs font-mono text-[#F7F6F2]/40 leading-relaxed">
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
            <div className="bg-[#F7F6F2]/[0.06] border border-[#F7F6F2]/15 rounded-xl p-6 space-y-5">
              <div>
                <div className="font-mono text-xs uppercase tracking-wider text-[#F7F6F2]/40 mb-2">
                  Corporate Registered Headquarters
                </div>
                <div className="text-base font-bold text-[#F7F6F2]">
                  Freyer International Logistics Pvt Ltd
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E33B12] shrink-0 mt-0.5" />
                <address className="not-italic text-sm text-[#F7F6F2]/70 leading-relaxed font-mono">
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
                <Phone className="w-4 h-4 text-[#E33B12] shrink-0" />
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-[#F7F6F2]/40 mb-0.5">
                    Direct HQ Line
                  </div>
                  <span className="text-sm font-mono font-semibold text-[#E33B12] group-hover:underline underline-offset-2">
                    +91 44 43191919
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@freyerinternational.com"
                className="flex items-center gap-3 group"
              >
                <Mail className="w-4 h-4 text-[#F7F6F2]/50 shrink-0" />
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-[#F7F6F2]/40 mb-0.5">
                    Official Email
                  </div>
                  <span className="text-sm font-mono text-[#F7F6F2]/50 group-hover:text-[#F7F6F2] transition-colors group-hover:underline underline-offset-2">
                    info@freyerinternational.com
                  </span>
                </div>
              </a>
            </div>

            {/* Credentials summary */}
            <div className="space-y-2">
              <div className="font-mono text-xs uppercase tracking-wider text-[#F7F6F2]/40 mb-3">
                Verified Credentials
              </div>
              {[
                "CBIC AEO-LO (INAAQCA4076M0F243)",
                "IATA Approved Cargo Agent",
                "WCA World Member",
                "Security Cargo Network (SCN)",
                "AMTOI Member",
                "MTO Licensed",
              ].map((cred) => (
                <div key={cred} className="flex items-center gap-2.5 font-mono text-xs text-[#E33B12]/80">
                  <span className="w-1 h-1 rounded-full bg-[#E33B12] shrink-0" />
                  {cred}
                </div>
              ))}
            </div>

            {/* Locations CTA */}
            <div className="border-t border-[#F7F6F2]/10 pt-6">
              <TextLink
                href="/locations"
                icon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Find your nearest station
              </TextLink>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
