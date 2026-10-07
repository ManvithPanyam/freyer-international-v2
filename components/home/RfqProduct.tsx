"use client";

import React, { useState, useTransition } from "react";
import { motion, AnimatePresence } from "motion/react";
import { type RfqFormData } from "@/lib/validations/rfq";
import { submitRfqAction } from "@/app/actions/submitRfq";
import { ArrowRight, ArrowLeft, CheckCircle2, Plane, Anchor, Compass, FileCheck, Warehouse, Loader2 } from "lucide-react";

type ServiceOption = {
  id: RfqFormData["service"];
  title: string;
  code: string;
  subtitle: string;
  icon: React.ElementType;
};

const SERVICES: ServiceOption[] = [
  { id: "air_freight", code: "AIR", title: "Air Freight", subtitle: "Time-critical international air cargo", icon: Plane },
  { id: "ocean_fcl", code: "OCEAN FCL", title: "Ocean Freight (FCL)", subtitle: "Full container load shipments", icon: Anchor },
  { id: "ocean_lcl", code: "OCEAN LCL", title: "Ocean Freight (LCL)", subtitle: "Consolidated cargo containers", icon: Anchor },
  { id: "project_cargo", code: "PROJECT", title: "Project Cargo", subtitle: "Over-dimensional & heavy-lift engineering", icon: Compass },
  { id: "customs_brokerage", code: "CUSTOMS", title: "Customs Brokerage", subtitle: "AEO-certified regulatory clearance", icon: FileCheck },
  { id: "warehousing", code: "STORAGE", title: "Warehousing", subtitle: "Contract storage & distribution", icon: Warehouse },
];

const CARGO_TYPES = [
  { id: "general", label: "Standard Commercial Goods" },
  { id: "hazardous", label: "Hazardous / Dangerous Goods (DG)" },
  { id: "temperature_controlled", label: "Temperature Sensitive / Cold-Chain" },
  { id: "breakbulk_oversized", label: "Over-Dimensional / Project Cargo" },
];

export function RfqProduct() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<Partial<RfqFormData>>({
    service: "air_freight",
    cargoType: "general",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isPending, startTransition] = useTransition();

  const activeService = SERVICES.find((s) => s.id === formData.service) || SERVICES[0];

  const handleServiceSelect = (serviceId: RfqFormData["service"]) => {
    setFormData((prev) => ({ ...prev, service: serviceId }));
  };

  const handleNext = () => {
    setErrors({});
    if (step === 1) {
      if (!formData.service) {
        setErrors({ service: "Please select a service modality" });
        return;
      }
      setStep(2);
      return;
    }
    if (step === 2) {
      const stepErrors: Record<string, string> = {};
      if (!formData.origin || formData.origin.trim().length < 2) {
        stepErrors.origin = "Origin location is required";
      }
      if (!formData.destination || formData.destination.trim().length < 2) {
        stepErrors.destination = "Destination location is required";
      }
      if (Object.keys(stepErrors).length > 0) {
        setErrors(stepErrors);
        return;
      }
      setStep(3);
      return;
    }
    if (step === 3) {
      if (!formData.weightKg || formData.weightKg <= 0 || isNaN(formData.weightKg)) {
        setErrors({ weightKg: "Total weight must be greater than zero" });
        return;
      }
      setStep(4);
      return;
    }
    if (step === 4) {
      const stepErrors: Record<string, string> = {};
      if (!formData.companyName || formData.companyName.trim().length < 2) {
        stepErrors.companyName = "Company name is required";
      }
      if (!formData.contactName || formData.contactName.trim().length < 2) {
        stepErrors.contactName = "Contact name is required";
      }
      if (!formData.corporateEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.corporateEmail.trim())) {
        stepErrors.corporateEmail = "Valid corporate email is required";
      }
      if (!formData.phone || formData.phone.trim().length < 8) {
        stepErrors.phone = "Valid phone number is required";
      }
      if (Object.keys(stepErrors).length > 0) {
        setErrors(stepErrors);
        return;
      }

      // Execute Server Action with loading state
      startTransition(async () => {
        const res = await submitRfqAction(formData);
        if (res.success) {
          setSubmitted(true);
        } else if (res.errors) {
          setErrors(res.errors);
        } else {
          setErrors({ form: res.message || "Failed to submit request" });
        }
      });
    }
  };

  const handlePrev = () => {
    setErrors({});
    setStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <section id="quote" className="text-[#17181B] relative">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-[#E33B12] text-xs font-mono tracking-[0.25em] uppercase font-semibold block mb-3">
            Freight Configurator
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#17181B] leading-[1.1]">
            Tell us what needs moving.
          </h2>
          <p className="text-[#62656B] text-sm sm:text-base mt-3 leading-relaxed">
            Tell us what you&apos;re moving. We&apos;ll take it from there.
          </p>
        </div>

        {/* Configurator Container */}
        <div className="bg-white rounded-2xl border border-[#DCDCD7] p-5 sm:p-10 shadow-xs relative">
          {!submitted ? (
            <div>
              {/* Accumulating Summary Bar */}
              <div className="pb-5 mb-7 border-b border-[#DCDCD7] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex flex-wrap items-center gap-2 text-[#62656B]">
                  <span className="text-[#E33B12] font-semibold">{activeService.code}</span>
                  {formData.origin && formData.destination && (
                    <>
                      <span className="text-[#DCDCD7]">·</span>
                      <span className="text-[#17181B] font-semibold uppercase">
                        {formData.origin} → {formData.destination}
                      </span>
                    </>
                  )}
                  {formData.weightKg ? (
                    <>
                      <span className="text-[#DCDCD7]">·</span>
                      <span className="text-[#62656B]">{formData.weightKg.toLocaleString()} KG</span>
                    </>
                  ) : null}
                </div>

                {/* Step Counter */}
                <div className="text-[#62656B] font-mono text-[11px] tracking-wider">
                  STEP 0{step} / 04
                </div>
              </div>

              {/* Server-level error banner */}
              {errors.form && (
                <div className="mb-6 p-3 rounded bg-red-500/10 border border-red-500/20 text-red-600 text-xs font-mono">
                  {errors.form}
                </div>
              )}

              {/* Step Flow */}
              <AnimatePresence mode="wait">
                {/* STEP 1: SERVICE SELECTION */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="space-y-5"
                  >
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#17181B] tracking-tight">
                        What are you shipping?
                      </h3>
                      <p className="text-xs font-mono text-[#62656B] mt-1 uppercase tracking-wider">
                        Select required logistics modality
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      {SERVICES.map((srv) => {
                        const isSelected = formData.service === srv.id;
                        const Icon = srv.icon;

                        return (
                          <button
                            key={srv.id}
                            type="button"
                            onClick={() => handleServiceSelect(srv.id)}
                            className={`p-4 sm:p-4.5 rounded-xl border text-left transition-all duration-150 flex items-start gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E33B12] ${
                              isSelected
                                ? "bg-[#17181B] border-[#17181B] text-[#F7F6F2] shadow-xs"
                                : "bg-[#F7F6F2] border-[#DCDCD7] text-[#17181B] hover:border-[#17181B]"
                            }`}
                          >
                            <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${isSelected ? "bg-[#E33B12] text-white" : "bg-white border border-[#DCDCD7] text-[#17181B]"}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className={`font-semibold text-sm sm:text-base tracking-tight flex items-center justify-between ${isSelected ? "text-[#F7F6F2]" : "text-[#17181B]"}`}>
                                <span>{srv.title}</span>
                                {isSelected && (
                                  <span className="w-2 h-2 rounded-full bg-[#E33B12]" />
                                )}
                              </div>
                              <p className={`text-xs mt-0.5 leading-relaxed line-clamp-1 sm:line-clamp-none ${isSelected ? "text-[#F7F6F2]/70" : "text-[#62656B]"}`}>
                                {srv.subtitle}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: ROUTING */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="space-y-5"
                  >
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#17181B] tracking-tight">
                        Where is it going?
                      </h3>
                      <p className="text-xs font-mono text-[#62656B] mt-1 uppercase tracking-wider">
                        Specify origin and destination ports or stations
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                      <div className="space-y-1.5">
                        <label htmlFor="origin" className="block text-xs font-mono text-[#62656B] uppercase tracking-wider">
                          Origin (City / Port / Airport) *
                        </label>
                        <input
                          id="origin"
                          type="text"
                          autoFocus
                          placeholder="e.g. Chennai Port (INMAA)"
                          value={formData.origin || ""}
                          onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                          className={`w-full bg-[#F7F6F2] border rounded-lg px-4 py-3 text-sm text-[#17181B] focus:outline-none focus:bg-white transition-colors ${
                            errors.origin ? "border-red-500" : "border-[#DCDCD7] focus:border-[#E33B12]"
                          }`}
                        />
                        {errors.origin && <p className="text-xs text-red-500 font-mono">{errors.origin}</p>}
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="destination" className="block text-xs font-mono text-[#62656B] uppercase tracking-wider">
                          Destination (City / Port / Airport) *
                        </label>
                        <input
                          id="destination"
                          type="text"
                          placeholder="e.g. Hamburg Port (DEHAM)"
                          value={formData.destination || ""}
                          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                          className={`w-full bg-[#F7F6F2] border rounded-lg px-4 py-3 text-sm text-[#17181B] focus:outline-none focus:bg-white transition-colors ${
                            errors.destination ? "border-red-500" : "border-[#DCDCD7] focus:border-[#E33B12]"
                          }`}
                        />
                        {errors.destination && <p className="text-xs text-red-500 font-mono">{errors.destination}</p>}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: CARGO SPECIFICATIONS */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="space-y-5"
                  >
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#17181B] tracking-tight">
                        Tell us about the cargo.
                      </h3>
                      <p className="text-xs font-mono text-[#62656B] mt-1 uppercase tracking-wider">
                        Weight and handling classification
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                      <div className="space-y-1.5">
                        <label htmlFor="weight" className="block text-xs font-mono text-[#62656B] uppercase tracking-wider">
                          Total Gross Weight (KG) *
                        </label>
                        <input
                          id="weight"
                          type="number"
                          autoFocus
                          placeholder="e.g. 2500"
                          value={formData.weightKg || ""}
                          onChange={(e) =>
                            setFormData({ ...formData, weightKg: parseFloat(e.target.value) || 0 })
                          }
                          className={`w-full bg-[#F7F6F2] border rounded-lg px-4 py-3 text-sm text-[#17181B] focus:outline-none focus:bg-white transition-colors ${
                            errors.weightKg ? "border-red-500" : "border-[#DCDCD7] focus:border-[#E33B12]"
                          }`}
                        />
                        {errors.weightKg && <p className="text-xs text-red-500 font-mono">{errors.weightKg}</p>}
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="cargoType" className="block text-xs font-mono text-[#62656B] uppercase tracking-wider">
                          Cargo Classification
                        </label>
                        <select
                          id="cargoType"
                          value={formData.cargoType}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              cargoType: e.target.value as RfqFormData["cargoType"],
                            })
                          }
                          className="w-full bg-[#F7F6F2] border border-[#DCDCD7] rounded-lg px-4 py-3 text-sm text-[#17181B] focus:outline-none focus:border-[#E33B12] focus:bg-white"
                        >
                          {CARGO_TYPES.map((c) => (
                            <option key={c.id} value={c.id} className="bg-white text-[#17181B]">
                              {c.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: CONTACT */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="space-y-5"
                  >
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#17181B] tracking-tight">
                        How should we reach you?
                      </h3>
                      <p className="text-xs font-mono text-[#62656B] mt-1 uppercase tracking-wider">
                        Authorized commercial contact details
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                      <div className="space-y-1.5">
                        <label htmlFor="company" className="block text-xs font-mono text-[#62656B] uppercase tracking-wider">
                          Company Name *
                        </label>
                        <input
                          id="company"
                          type="text"
                          autoFocus
                          placeholder="e.g. Acme Industrial Corp"
                          value={formData.companyName || ""}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          className={`w-full bg-[#F7F6F2] border rounded-lg px-4 py-3 text-sm text-[#17181B] focus:outline-none focus:bg-white transition-colors ${
                            errors.companyName ? "border-red-500" : "border-[#DCDCD7] focus:border-[#E33B12]"
                          }`}
                        />
                        {errors.companyName && <p className="text-xs text-red-500 font-mono">{errors.companyName}</p>}
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="contactName" className="block text-xs font-mono text-[#62656B] uppercase tracking-wider">
                          Contact Person *
                        </label>
                        <input
                          id="contactName"
                          type="text"
                          placeholder="e.g. Suresh Kumar"
                          value={formData.contactName || ""}
                          onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                          className={`w-full bg-[#F7F6F2] border rounded-lg px-4 py-3 text-sm text-[#17181B] focus:outline-none focus:bg-white transition-colors ${
                            errors.contactName ? "border-red-500" : "border-[#DCDCD7] focus:border-[#E33B12]"
                          }`}
                        />
                        {errors.contactName && <p className="text-xs text-red-500 font-mono">{errors.contactName}</p>}
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="email" className="block text-xs font-mono text-[#62656B] uppercase tracking-wider">
                          Corporate Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="e.g. suresh@company.com"
                          value={formData.corporateEmail || ""}
                          onChange={(e) => setFormData({ ...formData, corporateEmail: e.target.value })}
                          className={`w-full bg-[#F7F6F2] border rounded-lg px-4 py-3 text-sm text-[#17181B] focus:outline-none focus:bg-white transition-colors ${
                            errors.corporateEmail ? "border-red-500" : "border-[#DCDCD7] focus:border-[#E33B12]"
                          }`}
                        />
                        {errors.corporateEmail && <p className="text-xs text-red-500 font-mono">{errors.corporateEmail}</p>}
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="block text-xs font-mono text-[#62656B] uppercase tracking-wider">
                          Phone / WhatsApp *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="e.g. +91 98765 43210"
                          value={formData.phone || ""}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full bg-[#F7F6F2] border rounded-lg px-4 py-3 text-sm text-[#17181B] focus:outline-none focus:bg-white transition-colors ${
                            errors.phone ? "border-red-500" : "border-[#DCDCD7] focus:border-[#E33B12]"
                          }`}
                        />
                        {errors.phone && <p className="text-xs text-red-500 font-mono">{errors.phone}</p>}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-6 mt-8 border-t border-[#DCDCD7]">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    disabled={isPending}
                    className="inline-flex items-center gap-2 text-xs font-mono text-[#62656B] hover:text-[#17181B] px-3 py-2 rounded focus:outline-none transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>PREVIOUS</span>
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={isPending}
                  className="inline-flex items-center gap-2 bg-[#17181B] hover:bg-[#E33B12] disabled:opacity-50 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-lg transition-all duration-150 shadow-xs focus:outline-none"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>{step === 4 ? "Request Quote" : "Continue"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          ) : (
            /* Success State */
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="text-center py-10 sm:py-16 space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-[#E33B12]/10 border border-[#E33B12]/20 text-[#E33B12] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#17181B] tracking-tight">
                Request received.
              </h3>
              <p className="text-sm text-[#62656B] max-w-md mx-auto leading-relaxed">
                Our team will follow up using the contact details provided.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                    setFormData({ service: "air_freight", cargoType: "general" });
                  }}
                  className="text-xs font-mono text-[#E33B12] hover:underline uppercase tracking-wider"
                >
                  Configure Another Shipment →
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
