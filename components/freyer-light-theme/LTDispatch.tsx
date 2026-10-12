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
      className="bg-[var(--color-bg-alt)] text-[var(--color-text-primary)] border-t border-[var(--color-border-subtle)]"
    >
      <div
        ref={sectionRef}
        className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32"
      >
        {/* Section headline */}
        <div className="mb-14">
          <div className="flex items-center gap-2.5 text-xs uppercase tracking-wider text-[var(--color-cta)] font-semibold mb-4">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand-orange)] opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-brand-orange)]" />
            </span>
            <span>Contact us</span>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={isInView ? { y: "0%" } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[var(--color-text-primary)] font-semibold tracking-[-0.02em] leading-tight"
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "var(--token-text-4xl)",
              }}
            >
              Request a quote
            </motion.h2>
            <p className="mt-3 text-base sm:text-lg text-[var(--color-text-secondary)] font-normal max-w-2xl leading-relaxed">
              Send shipment details and our commercial desk will reply within one business day.
            </p>
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
              <div className="flex flex-col items-start gap-5 p-8 rounded-xl bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] shadow-sm">
                <CheckCircle2 className="w-10 h-10 text-[var(--color-brand-orange)]" />
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">Enquiry received</h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed max-w-md font-normal">
                  Your freight enquiry has been submitted to the Freyer operations team.
                  You will receive a direct response from the relevant commercial desk
                  within one business day.
                </p>
                <button
                  onClick={() => {
                    setFormState("idle");
                    setFormData({ name: "", company: "", serviceType: "", message: "" });
                  }}
                  className="mt-2 text-xs uppercase tracking-wider text-[var(--color-brand-blue)] hover:text-[var(--color-brand-blue-hover)] transition-colors font-medium"
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
                      className="block text-xs uppercase tracking-wider text-[var(--color-text-secondary)] mb-2 font-medium"
                    >
                      Your name
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
                      className="w-full bg-[var(--color-bg-elevated)] border border-[var(--color-border-input)] rounded-lg px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-brand-blue)] focus:ring-1 focus:ring-[var(--color-brand-blue)] transition-colors"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="ftr-company"
                      className="block text-xs uppercase tracking-wider text-[var(--color-text-secondary)] mb-2 font-medium"
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
                      placeholder="Company name"
                      className="w-full bg-[var(--color-bg-elevated)] border border-[var(--color-border-input)] rounded-lg px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-brand-blue)] focus:ring-1 focus:ring-[var(--color-brand-blue)] transition-colors"
                    />
                  </div>
                </div>

                {/* Service Type */}
                <div>
                  <label
                    htmlFor="ftr-service"
                    className="block text-xs uppercase tracking-wider text-[var(--color-text-secondary)] mb-2 font-medium"
                  >
                    Service required
                  </label>
                  <select
                    id="ftr-service"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full bg-[var(--color-bg-elevated)] border border-[var(--color-border-input)] rounded-lg px-4 py-3 text-sm text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-brand-blue)] focus:ring-1 focus:ring-[var(--color-brand-blue)] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="text-[var(--color-text-secondary)]">
                      Select service type
                    </option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-[var(--color-bg-elevated)] text-[var(--color-text-primary)]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="ftr-message"
                    className="block text-xs uppercase tracking-wider text-[var(--color-text-secondary)] mb-2 font-medium"
                  >
                    Shipment details
                  </label>
                  <textarea
                    id="ftr-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    placeholder="Origin, destination, commodity, approximate weight/volume, required timeline..."
                    className="w-full bg-[var(--color-bg-elevated)] border border-[var(--color-border-input)] rounded-lg px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-brand-blue)] focus:ring-1 focus:ring-[var(--color-brand-blue)] transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full flex items-center justify-center gap-2 bg-[var(--color-cta)] text-white hover:bg-[var(--color-cta-hover)] rounded-lg px-6 py-3 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                >
                  {formState === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting enquiry…</span>
                    </>
                  ) : (
                    <>
                      <span>Get a quote</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed font-normal">
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
            <div className="bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] rounded-xl p-6 space-y-5 shadow-sm">
              <div>
                <div className="text-2xs uppercase tracking-wider text-[var(--color-text-secondary)] mb-2 font-medium">
                  Head office
                </div>
                <div className="text-base font-semibold text-[var(--color-text-primary)]">
                  Freyer International Logistics Pvt Ltd
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[var(--color-brand-orange)] shrink-0 mt-0.5" />
                <address className="not-italic text-sm text-[var(--color-text-secondary)] leading-relaxed">
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
                <Phone className="w-4 h-4 text-[var(--color-brand-orange)] shrink-0" />
                <div>
                  <div className="text-2xs uppercase tracking-wider text-[var(--color-text-secondary)] mb-0.5 font-medium">
                    Telephone
                  </div>
                  <span className="text-sm font-semibold text-[var(--color-brand-blue)] group-hover:underline underline-offset-2">
                    +91 44 43191919
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@freyerinternational.com"
                className="flex items-center gap-3 group"
              >
                <Mail className="w-4 h-4 text-[var(--color-brand-orange)] shrink-0" />
                <div>
                  <div className="text-2xs uppercase tracking-wider text-[var(--color-text-secondary)] mb-0.5 font-medium">
                    Email
                  </div>
                  <span className="text-sm font-semibold text-[var(--color-brand-blue)] group-hover:underline underline-offset-2">
                    info@freyerinternational.com
                  </span>
                </div>
              </a>
            </div>

            {/* Credentials summary */}
            <div className="space-y-2">
              <div className="text-2xs uppercase tracking-wider text-[var(--color-text-secondary)] mb-3 font-medium">
                Accreditations
              </div>
              {[
                "CBIC AEO-LO (INAAQCA4076M0F243)",
                "IATA Approved Cargo Agent",
                "WCA World Member",
                "Security Cargo Network (SCN)",
                "AMTOI Member",
                "MTO Licensed",
              ].map((cred) => (
                <div key={cred} className="flex items-center gap-2.5 text-xs text-[var(--color-text-secondary)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-orange)] shrink-0" />
                  {cred}
                </div>
              ))}
            </div>

            {/* Locations CTA */}
            <div className="border-t border-[var(--color-border-subtle)] pt-6">
              <TextLink
                href="/locations"
                icon={<ArrowRight className="w-3.5 h-3.5" />}
                className="text-[var(--color-brand-blue)] hover:text-[var(--color-brand-blue-hover)] font-medium text-sm"
              >
                View all office locations
              </TextLink>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
