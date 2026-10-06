"use client";

import React, { useState, useRef } from "react";

/**
 * ManifestQuote
 *
 * Two-column enquiry / contact section for the Manifest homepage.
 *
 * Left col (5/12):
 *   - H2 "Engage directly."
 *   - HQ contact block (mono 13px)
 *   - AEO credential line
 *
 * Right col (7/12):
 *   - Underline-only styled RFQ form
 *   - Fields: Name, Company, Origin Port, Destination Port,
 *             Cargo Type (select), Message (textarea 4 rows)
 *   - SEND ENQUIRY primary button
 *
 * Form submission logic mirrors FTRDispatch.tsx (simulate + success state).
 */

const CARGO_OPTIONS = [
  "Project Cargo",
  "Ocean FCL",
  "Ocean LCL",
  "Air Freight",
  "Customs",
  "Warehousing",
  "Inland",
] as const;

type CargoOption = (typeof CARGO_OPTIONS)[number];
type FormState = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  company: string;
  originPort: string;
  destinationPort: string;
  cargoType: CargoOption | "";
  message: string;
}

const EMPTY_FORM: FormData = {
  name: "",
  company: "",
  originPort: "",
  destinationPort: "",
  cargoType: "",
  message: "",
};

// Shared input/label style helpers
const labelCls =
  "block text-[10px] uppercase tracking-[0.1em] text-[#71717A] mb-1";

const inputCls = [
  "w-full border-0 border-b border-white/20 bg-transparent",
  "px-0 py-3 text-[16px] text-[#F8F7F4] placeholder:text-[#71717A]",
  "outline-none transition-colors duration-150",
  "focus-visible:border-[#E1390F] focus-visible:ring-0",
].join(" ");

export function ManifestQuote() {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [formState, setFormState] = useState<FormState>("idle");
  const [arrowShift, setArrowShift] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulate server action — replace with real Server Action in production
    await new Promise<void>((res) => setTimeout(res, 1400));
    setFormState("success");
  };

  return (
    <section
      id="enquiry"
      aria-label="Freight enquiry and direct contact"
      className="border-t border-white/[0.08] py-32 sm:py-20 bg-[#121316]"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* ── LEFT: Heading + HQ block (5/12) ──────────────────── */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <h2
              className="text-[#F8F7F4] font-semibold leading-[1.1] tracking-[-0.01em]"
              style={{
                fontFamily: "var(--font-archivo)",
                fontSize: "clamp(32px, 4vw, 56px)",
              }}
            >
              Engage directly.
            </h2>

            {/* HQ contact block */}
            <div className="flex flex-col gap-1">
              {[
                "Freyer International Logistics Pvt. Ltd.",
                "No. 1, 6th Cross Street, CIT Colony,",
                "Mylapore, Chennai \u2013 600004",
                "+91 44 43191919",
                "info@freyerinternational.com",
              ].map((line) => (
                <span
                  key={line}
                  className="text-[13px] text-[#A1A1AA]"
                  style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                >
                  {line}
                </span>
              ))}
            </div>

            {/* AEO credential */}
            <p
              className="text-[11px] text-[#71717A] border-t border-white/[0.08] pt-6"
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              CBIC AEO-LO &middot; INAAQCA4076M0F243
            </p>
          </div>

          {/* ── RIGHT: Form (7/12) ───────────────────────────────── */}
          <div className="lg:col-span-7">
            {formState === "success" ? (
              /* Success state */
              <div className="flex flex-col gap-5 py-8">
                <span
                  className="text-[#E1390F] text-[12px] uppercase tracking-[0.08em]"
                  style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                >
                  Enquiry received
                </span>
                <p
                  className="text-[17px] text-[#F8F7F4] leading-relaxed max-w-md"
                  style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
                >
                  Your freight enquiry has been submitted to the Freyer
                  operations team. You&rsquo;ll receive a direct response from
                  the relevant commercial desk within one business day.
                </p>
                <button
                  onClick={() => {
                    setFormData(EMPTY_FORM);
                    setFormState("idle");
                  }}
                  className="self-start text-[11px] uppercase tracking-[0.08em] text-[#71717A] hover:text-[#F8F7F4] transition-colors duration-150"
                  style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                >
                  Submit another enquiry &rarr;
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col gap-8"
              >
                {/* Row 1: Name + Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="mq-name"
                      className={labelCls}
                      style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                    >
                      Name
                    </label>
                    <input
                      id="mq-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full name"
                      className={inputCls}
                      style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="mq-company"
                      className={labelCls}
                      style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                    >
                      Company
                    </label>
                    <input
                      id="mq-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company or trade name"
                      className={inputCls}
                      style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
                    />
                  </div>
                </div>

                {/* Row 2: Origin Port + Destination Port */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="mq-origin"
                      className={labelCls}
                      style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                    >
                      Origin Port
                    </label>
                    <input
                      id="mq-origin"
                      name="originPort"
                      type="text"
                      value={formData.originPort}
                      onChange={handleChange}
                      placeholder="e.g. Chennai, INNSA"
                      className={inputCls}
                      style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="mq-destination"
                      className={labelCls}
                      style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                    >
                      Destination Port
                    </label>
                    <input
                      id="mq-destination"
                      name="destinationPort"
                      type="text"
                      value={formData.destinationPort}
                      onChange={handleChange}
                      placeholder="e.g. Hamburg, DEHAM"
                      className={inputCls}
                      style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
                    />
                  </div>
                </div>

                {/* Cargo Type */}
                <div>
                  <label
                    htmlFor="mq-cargo"
                    className={labelCls}
                    style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                  >
                    Cargo Type
                  </label>
                  <select
                    id="mq-cargo"
                    name="cargoType"
                    required
                    value={formData.cargoType}
                    onChange={handleChange}
                    className={[
                      inputCls,
                      "cursor-pointer appearance-none",
                      // Colour the placeholder option differently
                      formData.cargoType === "" ? "text-[#71717A]" : "",
                    ].join(" ")}
                    style={{
                      fontFamily: "var(--font-ibm-plex-sans)",
                      colorScheme: "dark",
                    }}
                  >
                    <option value="" disabled>
                      Select cargo type
                    </option>
                    {CARGO_OPTIONS.map((opt) => (
                      <option
                        key={opt}
                        value={opt}
                        className="bg-[#121316] text-[#F8F7F4]"
                      >
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="mq-message"
                    className={labelCls}
                    style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="mq-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Commodity, approximate weight / volume, timeline, special requirements…"
                    className={[inputCls, "resize-none"].join(" ")}
                    style={{ fontFamily: "var(--font-ibm-plex-sans)" }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  onMouseEnter={() => setArrowShift(true)}
                  onMouseLeave={() => setArrowShift(false)}
                  className={[
                    "h-[52px] w-full rounded-none bg-[#E1390F] text-white",
                    "text-[12px] uppercase tracking-[0.08em]",
                    "flex items-center justify-center gap-2",
                    "transition-colors duration-150",
                    "hover:bg-[#C42F0B] disabled:opacity-60 disabled:cursor-not-allowed",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E1390F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121316]",
                  ].join(" ")}
                  style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                >
                  {formState === "submitting" ? (
                    <>
                      <svg
                        className="w-4 h-4 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending&hellip;
                    </>
                  ) : (
                    <>
                      Send Enquiry
                      <span
                        className="transition-transform duration-150"
                        style={{
                          transform: arrowShift
                            ? "translateX(4px)"
                            : "translateX(0)",
                        }}
                        aria-hidden
                      >
                        &rarr;
                      </span>
                    </>
                  )}
                </button>

                <p
                  className="text-[11px] text-[#71717A] leading-relaxed"
                  style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                >
                  Direct submission to the Freyer operations desk. Responses
                  within one business day.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
