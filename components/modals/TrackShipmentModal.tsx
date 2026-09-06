"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Search,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from "lucide-react";

export interface TrackShipmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTrackingNumber?: string;
}

interface Milestone {
  title: string;
  location: string;
  timestamp: string;
  status: "completed" | "current" | "upcoming";
  details?: string;
}

interface TrackingResult {
  number: string;
  type: "Ocean FCL" | "Air Freight" | "Project Cargo";
  origin: string;
  destination: string;
  vesselFlight: string;
  eta: string;
  currentStatus: string;
  milestones: Milestone[];
}

const DEMO_PRESETS: Record<string, TrackingResult> = {
  "MEDU8492019": {
    number: "MEDU8492019",
    type: "Ocean FCL",
    origin: "Chennai Port (INMAA)",
    destination: "Hamburg (DEHAM)",
    vesselFlight: "MSC LAUREN / Voy 2408W",
    eta: "14 Sept 2026",
    currentStatus: "Vessel In Transit (Red Sea / Suez Corridor)",
    milestones: [
      {
        title: "Export Customs Release",
        location: "Chennai Air & Sea Customs",
        timestamp: "01 Sept 2026, 14:20 IST",
        status: "completed",
        details: "AEO Tier-2 Green Channel Clearance (ICEGATE EDI File #7849102)",
      },
      {
        title: "Container Gated-In & Weighed (VGM)",
        location: "CCTPL Terminal, Chennai",
        timestamp: "02 Sept 2026, 09:15 IST",
        status: "completed",
        details: "VGM Certified: 24,180 KG / Sealed & Inspected",
      },
      {
        title: "Loaded onto Vessel",
        location: "Berth 02, Chennai Seaport",
        timestamp: "03 Sept 2026, 22:40 IST",
        status: "completed",
        details: "Stowed underdeck slot 32-04-82",
      },
      {
        title: "Ocean Transit to Transshipment Hub",
        location: "En Route to Port of Colombo (LKCMB)",
        timestamp: "05 Sept 2026, 18:00 IST",
        status: "current",
        details: "Speed 18.2 knots / On Schedule",
      },
      {
        title: "Discharge & Onward Mother Vessel",
        location: "Hamburg Container Terminal (CTA)",
        timestamp: "Expected 14 Sept 2026",
        status: "upcoming",
        details: "Final delivery order (DO) dispatch upon arrival",
      },
    ],
  },
  "176-48201941": {
    number: "176-48201941",
    type: "Air Freight",
    origin: "Bengaluru Cargo Terminal (BLR)",
    destination: "Frankfurt Main (FRA)",
    vesselFlight: "Emirates Cargo EK 9831 / B777F",
    eta: "08 Sept 2026",
    currentStatus: "Flight Departed Hub (Dubai Al Maktoum DWC)",
    milestones: [
      {
        title: "Airway Bill Executed",
        location: "Freyer Kempegowda Ops Desk",
        timestamp: "04 Sept 2026, 11:00 IST",
        status: "completed",
        details: "Master AWB 176-48201941 / House AWB FRY-BLR-8921",
      },
      {
        title: "Security Screened & X-Ray Cleared",
        location: "AISATS Coolport, BLR",
        timestamp: "04 Sept 2026, 17:30 IST",
        status: "completed",
        details: "RA3 / IATA Cargo Agent regulated screening passed",
      },
      {
        title: "Departed Origin",
        location: "BLR Airport",
        timestamp: "05 Sept 2026, 02:15 IST",
        status: "completed",
        details: "Flight EK 505 to Dubai DWC Transit Hub",
      },
      {
        title: "Transferred to Connecting Flight",
        location: "Dubai DWC Terminal",
        timestamp: "06 Sept 2026, 14:10 GST",
        status: "current",
        details: "Active cold-chain monitoring (2°C - 8°C maintained)",
      },
      {
        title: "Arrival & Customs Handover",
        location: "Frankfurt CargoCity South",
        timestamp: "Expected 08 Sept 2026, 06:30 CET",
        status: "upcoming",
      },
    ],
  },
  "PC-11-MUNDRA": {
    number: "PC-11-MUNDRA",
    type: "Project Cargo",
    origin: "Mundra Port Quayside (INMUN)",
    destination: "Site Foundation (Rajasthan)",
    vesselFlight: "12-Axle Goldhofer SPMT Convoy",
    eta: "10 Sept 2026",
    currentStatus: "Civil Corridor Movement (NH-68 Bypass)",
    milestones: [
      {
        title: "Tandem Crane Quayside Discharge",
        location: "Adani Ports Berth 4, Mundra",
        timestamp: "02 Sept 2026, 08:00 IST",
        status: "completed",
        details: "37.6 MT ITALGRU boom assembly lifted via heavy spreader beam",
      },
      {
        title: "Lashed to 12-Axle Hydraulic Platform",
        location: "Mundra Port Intermediate Laydown",
        timestamp: "03 Sept 2026, 16:30 IST",
        status: "completed",
        details: "Certified marine lashing calculations verified by Port Captain",
      },
      {
        title: "En Route with Escort Convoy",
        location: "Km 420, Gujarat - Rajasthan Border",
        timestamp: "06 Sept 2026, 19:45 IST",
        status: "current",
        details: "Daylight escort convoy / Overhead wire clearances coordinated",
      },
      {
        title: "Final Site Foundation Placement",
        location: "Energy Project Site Foundation",
        timestamp: "Expected 10 Sept 2026",
        status: "upcoming",
        details: "Hydraulic jacking & direct foundation bolt alignment",
      },
    ],
  },
};

export function TrackShipmentModal({
  isOpen,
  onClose,
  initialTrackingNumber = "",
}: TrackShipmentModalProps) {
  const [trackingNumber, setTrackingNumber] = useState(initialTrackingNumber);
  const [result, setResult] = useState<TrackingResult | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    if (initialTrackingNumber) {
      setTrackingNumber(initialTrackingNumber);
      handleSearch(initialTrackingNumber);
    }
  }, [initialTrackingNumber]);

  // Lock scroll & handle Escape key
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSearch = (query: string) => {
    const trimmed = query.trim().toUpperCase();
    setHasSearched(true);
    if (DEMO_PRESETS[trimmed]) {
      setResult(DEMO_PRESETS[trimmed]);
    } else {
      // Fallback custom generated demo matching user's custom tracking query
      if (trimmed.length >= 4) {
        setResult({
          number: trimmed,
          type: trimmed.startsWith("176") ? "Air Freight" : "Ocean FCL",
          origin: "Nhava Sheva Port (INNSA)",
          destination: "Rotterdam (NLRTM)",
          vesselFlight: "MAERSK MC-KINNEY / 2609E",
          eta: "18 Sept 2026",
          currentStatus: "Indian Customs Cleared (AEO Tier-2) / Ready for Departure",
          milestones: [
            {
              title: "Booking & Equipment Released",
              location: "Freyer Commercial Desk, Mumbai",
              timestamp: "04 Sept 2026, 10:00 IST",
              status: "completed",
            },
            {
              title: "Customs AEO Tier-2 Verification",
              location: "JNPT Customs Commissionerate",
              timestamp: "05 Sept 2026, 15:30 IST",
              status: "completed",
              details: "Direct Port Delivery (DPD) priority approved",
            },
            {
              title: "Quayside Staged",
              location: "GTI Terminal, Nhava Sheva",
              timestamp: "06 Sept 2026, 12:00 IST",
              status: "current",
            },
            {
              title: "Maritime Corridor Transit",
              location: "Arabian Sea → Port of Rotterdam",
              timestamp: "Expected 18 Sept 2026",
              status: "upcoming",
            },
          ],
        });
      } else {
        setResult(null);
      }
    }
  };

  const handleSelectPreset = (presetKey: string) => {
    setTrackingNumber(presetKey);
    handleSearch(presetKey);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-[#071325]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0, y: 16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white border border-slate-200 rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl text-[#0b2144]"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#0b2144] text-white flex items-center justify-center font-mono text-xs font-bold">
                  24/7
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0b2144] tracking-tight">
                    Live Consignment Tracking
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">
                    Air Waybill &middot; Container &middot; Ocean BL &middot; Project Manifest
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="min-w-[40px] min-h-[40px] p-2 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100 transition-colors flex items-center justify-center"
                aria-label="Close tracking modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Input & Presets */}
            <div className="p-6 bg-slate-50 border-b border-slate-100 space-y-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearch(trackingNumber);
                }}
                className="flex items-center gap-2"
              >
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder="Enter Container, Ocean BL, or AWB Number (e.g. MEDU8492019)"
                    className="w-full bg-white border border-slate-300 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm font-mono text-[#0b2144] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#c42f0b] focus:border-transparent uppercase shadow-2xs"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#c42f0b] hover:bg-[#a82506] text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl transition-colors shrink-0 shadow-sm font-mono"
                >
                  Track Cargo
                </button>
              </form>

              {/* Pitch Demo Presets */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Sample Consignments:
                </span>
                <button
                  type="button"
                  onClick={() => handleSelectPreset("MEDU8492019")}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white border border-slate-200 hover:border-[#c42f0b] text-slate-700 hover:text-[#c42f0b] transition-colors"
                >
                  MEDU8492019 (Ocean FCL)
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectPreset("176-48201941")}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white border border-slate-200 hover:border-[#c42f0b] text-slate-700 hover:text-[#c42f0b] transition-colors"
                >
                  176-48201941 (Air Freight)
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectPreset("PC-11-MUNDRA")}
                  className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white border border-slate-200 hover:border-[#c42f0b] text-slate-700 hover:text-[#c42f0b] transition-colors"
                >
                  PC-11-MUNDRA (Project 37.6 MT)
                </button>
              </div>
            </div>

            {/* Results Section */}
            <div className="p-6 sm:p-8">
              {result ? (
                <div className="space-y-6">
                  {/* Status Card */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-mono text-[11px] font-bold uppercase tracking-wider">
                        <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                        {result.currentStatus}
                      </span>
                      <span className="text-xs font-mono text-slate-500 font-medium">
                        Carrier: <strong className="text-slate-800">{result.vesselFlight}</strong>
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase">Origin</span>
                        <span className="font-bold text-[#0b2144]">{result.origin}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase">Destination</span>
                        <span className="font-bold text-[#0b2144]">{result.destination}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase">Estimated Arrival</span>
                        <span className="font-bold text-[#c42f0b]">{result.eta}</span>
                      </div>
                    </div>
                  </div>

                  {/* Milestones Ledger */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#0b2144] font-bold mb-4">
                      Operational Transit Milestones
                    </h4>
                    <div className="space-y-4 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                      {result.milestones.map((ms, idx) => (
                        <div key={idx} className="relative flex items-start gap-4 pl-1">
                          <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 z-10 ${
                              ms.status === "completed"
                                ? "bg-emerald-600 text-white"
                                : ms.status === "current"
                                ? "bg-[#c42f0b] text-white ring-4 ring-[#c42f0b]/20"
                                : "bg-slate-200 text-slate-400"
                            }`}
                          >
                            {ms.status === "completed" ? (
                              <CheckCircle2 className="w-4 h-4" />
                            ) : ms.status === "current" ? (
                              <Clock className="w-4 h-4" />
                            ) : (
                              <span className="w-2 h-2 rounded-full bg-slate-400" />
                            )}
                          </div>
                          <div className="flex-1 pt-0.5">
                            <div className="flex flex-wrap items-center justify-between gap-1">
                              <h5 className="text-xs sm:text-sm font-bold text-[#0b2144]">
                                {ms.title}
                              </h5>
                              <span className="text-[11px] font-mono text-slate-400">
                                {ms.timestamp}
                              </span>
                            </div>
                            <p className="text-xs font-mono text-slate-600 mt-0.5">
                              {ms.location}
                            </p>
                            {ms.details && (
                              <p className="text-[11px] text-slate-500 bg-white border border-slate-200/80 rounded-md p-2 mt-1.5 font-mono">
                                {ms.details}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : hasSearched ? (
                <div className="text-center py-12 space-y-3">
                  <p className="text-sm text-slate-600">
                    No active consignment matched &ldquo;<strong className="text-slate-800">{trackingNumber}</strong>&rdquo;.
                  </p>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    Try one of the sample numbers above to preview live milestone tracking.
                  </p>
                </div>
              ) : (
                <div className="text-center py-10 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-[#0b2144]">
                    <Search className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-[#0b2144]">
                    Direct Milestone &amp; ICEGATE EDI Integration
                  </h4>
                  <p className="text-xs text-slate-500 max-w-md mx-auto">
                    Enter any Ocean Container Number, Master Air Waybill, or Freyer Project File ID above to retrieve milestone checkpoints.
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                AEO Tier-2 Priority Clearance Enabled
              </span>
              <span className="hidden sm:inline">24/7 Control Tower: +91 44 4319 1919</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
