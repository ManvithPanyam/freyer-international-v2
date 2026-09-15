"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export function DirectDispatchFinalist() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Ocean Services (FCL/LCL)",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact-finalist" className="relative bg-[#02050b] text-white py-20 sm:py-28 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <div className="max-w-2xl space-y-3 pb-12 border-b border-white/10">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#e1390f]">
            Direct Commercial Dispatch
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            ENGAGE REGISTERED HEADQUARTERS.
          </h2>
          <p className="text-sm text-slate-300 font-light leading-relaxed">
            No automated switchboards or anonymous ticketing portals. Connect directly to Freyer's corporate headquarters in Chennai or contact any of our 10 branch stations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 items-start">
          {/* Registered Office & Contact Dossier */}
          <div className="lg:col-span-5 space-y-8 p-8 rounded-lg bg-[#050c18] border border-white/10">
            <div>
              <div className="text-[10px] font-mono text-[#e1390f] uppercase tracking-widest">
                Corporate Registered Office
              </div>
              <h3 className="text-xl font-bold text-white mt-1">
                Freyer International Logistics Pvt Ltd
              </h3>
              <div className="flex items-start gap-3 mt-4 text-xs font-mono text-slate-300 leading-relaxed">
                <MapPin className="w-4 h-4 text-[#e1390f] shrink-0 mt-0.5" />
                <span>
                  TAGA Tower New No: 45 Old No 20,<br />
                  1st Floor, 2nd Street, Sait Colony,<br />
                  Egmore, Chennai - 600 008, India.
                </span>
              </div>
            </div>

            <div className="space-y-4 border-t border-white/10 pt-6">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                Verified Direct Inquiries
              </div>
              <div className="space-y-3">
                <a
                  href="tel:+914443191919"
                  className="flex items-center gap-3 p-3 rounded bg-white/5 hover:bg-white/10 border border-white/10 transition text-xs font-mono text-white"
                >
                  <Phone className="w-4 h-4 text-[#e1390f]" />
                  <span>HQ Landline: +91 44 4319 1919</span>
                </a>
                <a
                  href="mailto:info@freyerinternational.com"
                  className="flex items-center gap-3 p-3 rounded bg-white/5 hover:bg-white/10 border border-white/10 transition text-xs font-mono text-white"
                >
                  <Mail className="w-4 h-4 text-[#e1390f]" />
                  <span>Official: info@freyerinternational.com</span>
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 text-[11px] font-mono text-slate-400 space-y-2">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#e1390f]" />
                <span>CBIC AEO-LO Certified Logistics Operator</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#e1390f]" />
                <span>IATA Cargo Agent Endorsed</span>
              </div>
            </div>
          </div>

          {/* Direct Freight RFQ Form */}
          <div className="lg:col-span-7 p-8 rounded-lg bg-[#071120] border border-white/10">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#e1390f]/20 border border-[#e1390f]/50 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6 text-[#e1390f]" />
                </div>
                <h3 className="text-xl font-bold text-white">Inquiry Received</h3>
                <p className="text-sm text-slate-300 font-light max-w-md mx-auto">
                  Your inquiry has been routed directly to our commercial operations team at Chennai HQ. You will receive an official response shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded text-xs font-mono uppercase tracking-wider bg-white/10 hover:bg-white/15 text-white transition"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <div className="text-xs font-mono text-[#e1390f] uppercase tracking-widest">
                    Request for Quotation / Forwarding Inquiry
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1">
                    Direct Commercial Routing
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full bg-[#040810] border border-white/15 rounded px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#e1390f] transition font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. logistics@company.com"
                      className="w-full bg-[#040810] border border-white/15 rounded px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#e1390f] transition font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Primary Service Requirement *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#040810] border border-white/15 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-[#e1390f] transition font-sans"
                  >
                    <option value="Ocean Services (FCL/LCL)">Ocean Services (FCL & LCL Container Freight)</option>
                    <option value="Air Services (Scheduled & Charter)">Air Services (Scheduled Freight & Full Charter)</option>
                    <option value="Customs Brokerage & Compliance">Customs Brokerage (Import / Export PGA Compliance)</option>
                    <option value="Warehouse & Contract 3PL">Warehouse & Distribution (1,000,000+ Sq Ft WMS)</option>
                    <option value="Risk Management & Cargo Insurance">Risk Management & Comprehensive Marine Insurance</option>
                    <option value="Project Cargo (Heavy-Lift & Breakbulk)">Project Cargo (Heavy-Lift & Breakbulk Engineering)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Cargo Details & Routing Specifics
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Origin, destination, approximate weight, volume, or equipment requirements..."
                    className="w-full bg-[#040810] border border-white/15 rounded px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#e1390f] transition font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded bg-[#e1390f] hover:bg-[#c42f0b] text-white py-3.5 px-6 text-xs font-mono font-bold uppercase tracking-wider transition"
                >
                  <Send className="w-4 h-4" />
                  <span>Dispatch Freight Inquiry to Chennai HQ</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
