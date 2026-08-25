"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { type RfqFormData } from "@/lib/validations/rfq";
import { ArrowRight, ArrowLeft, CheckCircle2, Plane, Anchor, Compass, FileCheck, Warehouse } from "lucide-react";

type ServiceOption = {
  id: RfqFormData["service"];
  title: string;
  subtitle: string;
  icon: React.ElementType;
};

const SERVICES: ServiceOption[] = [
  { id: "air_freight", title: "Air Freight", subtitle: "Time-critical & international air cargo", icon: Plane },
  { id: "ocean_fcl", title: "Ocean Freight (FCL)", subtitle: "Full container load shipments", icon: Anchor },
  { id: "ocean_lcl", title: "Ocean Freight (LCL)", subtitle: "Consolidated cargo containers", icon: Anchor },
  { id: "project_cargo", title: "Project Cargo", subtitle: "Over-dimensional & heavy-lift freight", icon: Compass },
  { id: "customs_brokerage", title: "Customs Brokerage", subtitle: "AEO-certified regulatory clearance", icon: FileCheck },
  { id: "warehousing", title: "Warehousing", subtitle: "Contract storage & distribution", icon: Warehouse },
];

export function RfqProduct() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<Partial<RfqFormData>>({
    service: "air_freight",
    cargoType: "general",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleServiceSelect = (serviceId: RfqFormData["service"]) => {
    setFormData((prev) => ({ ...prev, service: serviceId }));
  };

  const handleNext = () => {
    setErrors({});
    if (step === 2) {
      if (!formData.origin || formData.origin.length < 2) {
        setErrors((prev) => ({ ...prev, origin: "Origin location is required" }));
        return;
      }
      if (!formData.destination || formData.destination.length < 2) {
        setErrors((prev) => ({ ...prev, destination: "Destination location is required" }));
        return;
      }
    }
    if (step === 3) {
      if (!formData.weightKg || formData.weightKg <= 0) {
        setErrors((prev) => ({ ...prev, weightKg: "Weight must be greater than zero" }));
        return;
      }
    }
    if (step === 4) {
      if (!formData.companyName || formData.companyName.length < 2) {
        setErrors((prev) => ({ ...prev, companyName: "Company name is required" }));
        return;
      }
      if (!formData.contactName || formData.contactName.length < 2) {
        setErrors((prev) => ({ ...prev, contactName: "Contact name is required" }));
        return;
      }
      if (!formData.corporateEmail || !formData.corporateEmail.includes("@")) {
        setErrors((prev) => ({ ...prev, corporateEmail: "Valid corporate email is required" }));
        return;
      }
      if (!formData.phone || formData.phone.length < 8) {
        setErrors((prev) => ({ ...prev, phone: "Valid phone number is required" }));
        return;
      }
      setSubmitted(true);
      return;
    }
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handlePrev = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <section id="quote" className="py-24 sm:py-32 bg-[#07152b] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[#ff542e] text-xs font-mono tracking-widest uppercase font-semibold">
            Guided Freight Quote Engine
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-2">
            Configure Your Shipment
          </h2>
          <p className="text-slate-300 text-sm mt-3">
            Structured freight parameters routed directly to our commercial pricing desk.
          </p>
        </div>

        {/* Product Card Container */}
        <div className="bg-[#0b2144] rounded-2xl border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {!submitted ? (
            <div>
              {/* Progress Indicator */}
              <div className="flex items-center justify-between pb-8 mb-8 border-b border-slate-700/60">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-slate-400">Step {step} of 4</span>
                </div>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i <= step ? "w-8 bg-[#d63309]" : "w-4 bg-slate-700"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Step Content with Motion */}
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <h3 className="text-lg font-semibold text-white">
                      01 / What type of logistics service do you need?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {SERVICES.map((srv) => {
                        const isSelected = formData.service === srv.id;
                        const Icon = srv.icon;
                        return (
                          <button
                            key={srv.id}
                            type="button"
                            onClick={() => handleServiceSelect(srv.id)}
                            className={`p-4 rounded-xl border text-left transition-all duration-200 flex items-start gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff542e] ${
                              isSelected
                                ? "bg-white/10 border-[#ff542e] shadow-sm"
                                : "bg-white/[0.02] border-white/10 hover:border-white/20"
                            }`}
                          >
                            <Icon
                              className={`w-5 h-5 shrink-0 mt-0.5 ${
                                isSelected ? "text-[#ff542e]" : "text-slate-400"
                              }`}
                            />
                            <div>
                              <div className="font-medium text-white text-sm">{srv.title}</div>
                              <div className="text-xs text-slate-400 mt-0.5">{srv.subtitle}</div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <h3 className="text-lg font-semibold text-white">
                      02 / What are the origin and destination ports/cities?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="origin" className="block text-xs font-mono text-slate-300 uppercase">
                          Origin (City / Port / Airport) *
                        </label>
                        <input
                          id="origin"
                          type="text"
                          placeholder="e.g. Chennai Port (INMAA)"
                          value={formData.origin || ""}
                          onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff542e]"
                        />
                        {errors.origin && <p className="text-xs text-red-400">{errors.origin}</p>}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="destination" className="block text-xs font-mono text-slate-300 uppercase">
                          Destination (City / Port / Airport) *
                        </label>
                        <input
                          id="destination"
                          type="text"
                          placeholder="e.g. Hamburg Port (DEHAM)"
                          value={formData.destination || ""}
                          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff542e]"
                        />
                        {errors.destination && (
                          <p className="text-xs text-red-400">{errors.destination}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <h3 className="text-lg font-semibold text-white">
                      03 / Cargo weight & specifications
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="weight" className="block text-xs font-mono text-slate-300 uppercase">
                          Total Gross Weight (KG / MT) *
                        </label>
                        <input
                          id="weight"
                          type="number"
                          placeholder="e.g. 2500"
                          value={formData.weightKg || ""}
                          onChange={(e) =>
                            setFormData({ ...formData, weightKg: parseFloat(e.target.value) || 0 })
                          }
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff542e]"
                        />
                        {errors.weightKg && <p className="text-xs text-red-400">{errors.weightKg}</p>}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="cargoType" className="block text-xs font-mono text-slate-300 uppercase">
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
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff542e]"
                        >
                          <option value="general">Standard Commercial Goods</option>
                          <option value="hazardous">Hazardous / Dangerous Goods (DG)</option>
                          <option value="temperature_controlled">Temperature Sensitive / Cold-Chain</option>
                          <option value="breakbulk_oversized">Over-Dimensional / Project Heavy Lift</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <h3 className="text-lg font-semibold text-white">
                      04 / Shipper & Company Details
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="company" className="block text-xs font-mono text-slate-300 uppercase">
                          Company Name *
                        </label>
                        <input
                          id="company"
                          type="text"
                          placeholder="e.g. Precision Engineering Ltd"
                          value={formData.companyName || ""}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff542e]"
                        />
                        {errors.companyName && (
                          <p className="text-xs text-red-400">{errors.companyName}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="contactName" className="block text-xs font-mono text-slate-300 uppercase">
                          Contact Person *
                        </label>
                        <input
                          id="contactName"
                          type="text"
                          placeholder="e.g. Suresh Kumar"
                          value={formData.contactName || ""}
                          onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff542e]"
                        />
                        {errors.contactName && (
                          <p className="text-xs text-red-400">{errors.contactName}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-xs font-mono text-slate-300 uppercase">
                          Corporate Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="e.g. suresh@company.com"
                          value={formData.corporateEmail || ""}
                          onChange={(e) => setFormData({ ...formData, corporateEmail: e.target.value })}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff542e]"
                        />
                        {errors.corporateEmail && (
                          <p className="text-xs text-red-400">{errors.corporateEmail}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-xs font-mono text-slate-300 uppercase">
                          Phone / WhatsApp *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="e.g. +91 98765 43210"
                          value={formData.phone || ""}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff542e]"
                        />
                        {errors.phone && <p className="text-xs text-red-400">{errors.phone}</p>}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-8 mt-8 border-t border-slate-700/60">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white px-4 py-2.5 rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 bg-[#d63309] hover:bg-[#b82a06] text-white font-semibold text-sm px-6 py-3 rounded transition-all duration-200 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>{step === 4 ? "Transmit RFQ" : "Continue"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10 space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Request for Quote Received
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Your cargo parameters have been structured and transmitted to the Freyer commercial pricing desk. A logistics coordinator will contact you directly.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                    setFormData({ service: "air_freight", cargoType: "general" });
                  }}
                  className="text-xs font-mono text-[#ff542e] hover:underline"
                >
                  Configure Another Shipment
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
