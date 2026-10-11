"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, MapPin, Phone, Mail, CheckCircle2, ChevronRight } from "lucide-react";
import facts from "@/data/facts.json";
import { TrackShipmentModal } from "@/components/modals/TrackShipmentModal";
import {
  MAINLAND_PATH,
  ISLAND_PATHS,
  STATIONS_DATA,
} from "@/components/experiments/india_map_final/AuthoritativeIndiaMap";

export function HomepageContent() {
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState(facts.offices[0].label);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    service: facts.services[0].name,
    message: "",
  });

  const activeOffice = facts.offices.find((o) => o.label === selectedOffice) || facts.offices[0];

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSubmitted(true);
  };

  return (
    <div className="bg-[var(--bg)] text-[var(--text)] min-h-screen selection:bg-[var(--accent)] selection:text-white">
      {/* ══════════════════════════════════════════════════════════════
          BLOCK 1: HERO
          Job: Value proposition & direct pathways
          Headline: 8 words max, sentence case
          Two buttons: Get a Quote, Track
          Background: full-width video with ~50% dark overlay, white text
          ══════════════════════════════════════════════════════════════ */}
      <section
        aria-label="Freyer International Logistics"
        className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
      >
        {/* Hero video background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
            aria-hidden="true"
          >
            <source src="/video/freyer-hero-mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
            <source src="/video/freyer-hero.mp4" type="video/mp4" />
          </video>
          {/* ~50% dark overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
          <h1
            className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl"
            style={{ lineHeight: 1.15 }}
          >
            Freight forwarding and project cargo across global trade routes
          </h1>
          <p className="mt-6 text-white/90 text-lg sm:text-xl max-w-2xl font-normal leading-relaxed">
            Direct ocean, air, customs, and heavy-lift logistics managed across ten Indian stations.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="#quote"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-md bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors shadow-md"
            >
              Get a Quote
            </a>
            <button
              type="button"
              onClick={() => setIsTrackModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-md bg-white text-[var(--text)] hover:bg-[var(--bg-alt)] transition-colors shadow-md"
            >
              <Search className="w-4 h-4 mr-2 text-[var(--muted)]" />
              Track
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          BLOCK 2: CREDENTIALS STRIP
          Logos only, max 6, no licence numbers
          AEO, IATA, AMTOI, SCN, Great Place to Work, ISO
          Background: var(--bg-alt)
          ══════════════════════════════════════════════════════════════ */}
      <section
        aria-label="Accreditations and certifications"
        className="py-12 bg-[var(--bg-alt)] border-y border-[var(--border)]"
      >
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            {facts.credentials.map((cred) => (
              <div
                key={cred.id}
                className="relative h-12 w-28 sm:h-14 sm:w-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-85 hover:opacity-100"
                title={cred.name}
              >
                <Image
                  src={cred.logo}
                  alt={cred.name}
                  fill
                  sizes="128px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          BLOCK 3: PROOF
          3 to 4 large verified numbers, then flagship project
          Numbers: 10 offices, 9 cities, 482 MT, 796 CBM / 29 units
          Background: var(--bg)
          ══════════════════════════════════════════════════════════════ */}
      <section
        aria-label="Operational scale and flagship project"
        className="py-24 bg-[var(--bg)]"
      >
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text)]">
              Documented capacity and operational execution
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[var(--muted)] leading-relaxed">
              Every shipment is grounded in verified physical footprint and executed cargo tonnage.
            </p>
          </div>

          {/* Numbers Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-16">
            <div className="p-6 rounded-lg bg-[var(--bg-alt)] border border-[var(--border)]">
              <div className="text-4xl sm:text-5xl font-bold text-[var(--text)] font-mono">
                {facts.stats.offices}
              </div>
              <div className="mt-2 text-sm font-medium text-[var(--muted)]">
                Operating offices
              </div>
            </div>
            <div className="p-6 rounded-lg bg-[var(--bg-alt)] border border-[var(--border)]">
              <div className="text-4xl sm:text-5xl font-bold text-[var(--text)] font-mono">
                {facts.stats.cities}
              </div>
              <div className="mt-2 text-sm font-medium text-[var(--muted)]">
                Strategic industrial cities
              </div>
            </div>
            <div className="p-6 rounded-lg bg-[var(--bg-alt)] border border-[var(--border)]">
              <div className="text-4xl sm:text-5xl font-bold text-[var(--text)] font-mono">
                {facts.stats.flagshipWeight}
              </div>
              <div className="mt-2 text-sm font-medium text-[var(--muted)]">
                Single heavy lift breakbulk
              </div>
            </div>
            <div className="p-6 rounded-lg bg-[var(--bg-alt)] border border-[var(--border)]">
              <div className="text-4xl sm:text-5xl font-bold text-[var(--text)] font-mono">
                {facts.stats.flagshipCBM}
              </div>
              <div className="mt-2 text-sm font-medium text-[var(--muted)]">
                Volume across 29 heavy units
              </div>
            </div>
          </div>

          {/* Flagship Project Card */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-alt)] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-[var(--border)] text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-4">
                  Flagship Project (Pending document confirmation)
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text)]">
                  {facts.flagshipProject.weight} {facts.flagshipProject.weightNote} from {facts.flagshipProject.origin} to {facts.flagshipProject.destination}
                </h3>
                <p className="mt-4 text-base text-[var(--muted)] leading-relaxed">
                  Engineered industrial transport mobilizing {facts.flagshipProject.cbm} across {facts.flagshipProject.units} {facts.flagshipProject.unitLabel}. Executed with specialized marine stowage and multi-axle handling.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-wrap items-center gap-6 text-sm font-mono text-[var(--muted)]">
                <div>
                  <span className="text-[var(--text)] font-bold">{facts.flagshipProject.origin}</span> → <span className="text-[var(--text)] font-bold">{facts.flagshipProject.destination}</span>
                </div>
                <div>
                  Volume: <span className="text-[var(--text)] font-bold">{facts.flagshipProject.cbm}</span>
                </div>
                <div>
                  Units: <span className="text-[var(--text)] font-bold">{facts.flagshipProject.units}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full bg-neutral-100">
              <Image
                src={facts.flagshipProject.image}
                alt="Flagship heavy lift project cargo"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          BLOCK 4: SERVICES
          Grid of exactly 6 cards, one line each, each with a link
          Six names: Air Services, Ocean Services, Customs Services,
          Warehouse, Risk Management, Project Cargo
          Background: var(--bg-alt)
          ══════════════════════════════════════════════════════════════ */}
      <section
        id="services"
        aria-label="Core logistics services"
        className="py-24 bg-[var(--bg-alt)] border-t border-[var(--border)]"
      >
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text)]">
              Core freight forwarding disciplines
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[var(--muted)] leading-relaxed">
              Integrated multi-modal services managed by licensed in-house operations teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {facts.services.map((service) => (
              <div
                key={service.id}
                className="rounded-xl border border-[var(--border)] bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="relative h-48 w-full bg-neutral-100">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text)]">
                      {service.name}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--muted)] line-clamp-1">
                      {service.name === "Air Services" && "Scheduled air cargo allocations and priority charter flights."}
                      {service.name === "Ocean Services" && "Containerized FCL and LCL ocean forwarding across global lanes."}
                      {service.name === "Customs Services" && "Licensed customs clearance at major seaports and air cargo terminals."}
                      {service.name === "Warehouse" && "Managed storage, bonded distribution, and container freight handling."}
                      {service.name === "Risk Management" && "Marine cargo insurance and risk mitigation for transit capital."}
                      {service.name === "Project Cargo" && "Heavy lift engineering, out-of-gauge transport, and route surveys."}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[var(--border)]">
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-sm font-semibold text-[var(--accent-text)] hover:underline"
                    >
                      Learn more
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          BLOCK 5: NETWORK
          Map plus branch list (10 offices in 9 cities)
          Background: var(--bg)
          ══════════════════════════════════════════════════════════════ */}
      <section
        id="network"
        aria-label="Branch office network across India"
        className="py-24 bg-[var(--bg)] border-t border-[var(--border)]"
      >
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--text)]">
              Ten branch offices across nine cities
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[var(--muted)] leading-relaxed">
              Direct physical operations across primary industrial centers, ports, and air cargo gateways.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Map Canvas (7 cols) */}
            <div className="lg:col-span-7 bg-[var(--bg-alt)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 flex items-center justify-center">
              <svg
                viewBox="0 0 1000 1208"
                className="w-full h-auto max-h-[580px] select-none"
              >
                <defs>
                  <linearGradient id="hpIndiaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="100%" stopColor="#EAEBED" />
                  </linearGradient>
                </defs>

                {/* India Mainland */}
                <path
                  d={MAINLAND_PATH}
                  fill="url(#hpIndiaGrad)"
                  stroke="#C8CBD0"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />

                {/* Island Territories */}
                {ISLAND_PATHS.map((d, idx) => (
                  <path
                    key={idx}
                    d={d}
                    fill="url(#hpIndiaGrad)"
                    stroke="#C8CBD0"
                    strokeWidth="1.2"
                  />
                ))}

                {/* Stations Markers */}
                {STATIONS_DATA.map((st) => {
                  const isSelected =
                    (st.id === "chennai_egmore" && selectedOffice === "Chennai (Egmore)") ||
                    (st.id === "chennai_airport" && selectedOffice === "Chennai Airport") ||
                    (st.id === "delhi" && selectedOffice === "Delhi / NCR (Gurugram)") ||
                    (st.id === "hyderabad" && selectedOffice === "Hyderabad (Secunderabad)") ||
                    (st.city === activeOffice.city && !selectedOffice.includes("Chennai"));

                  return (
                    <g
                      key={st.id}
                      className="cursor-pointer group"
                      onClick={() => {
                        const matched = facts.offices.find(
                          (o) =>
                            (st.id === "chennai_egmore" && o.label === "Chennai (Egmore)") ||
                            (st.id === "chennai_airport" && o.label === "Chennai Airport") ||
                            (st.id === "delhi" && o.label === "Delhi / NCR (Gurugram)") ||
                            (st.id === "hyderabad" && o.label === "Hyderabad (Secunderabad)") ||
                            o.city.toLowerCase() === st.city.toLowerCase()
                        );
                        if (matched) setSelectedOffice(matched.label);
                      }}
                    >
                      <circle
                        cx={st.cx}
                        cy={st.cy}
                        r={isSelected ? 10 : 6}
                        fill={isSelected ? "var(--accent)" : "#121316"}
                        stroke="#ffffff"
                        strokeWidth="2"
                        className="transition-all"
                      />
                      <text
                        x={st.cx + 12}
                        y={st.cy + 4}
                        fontSize={isSelected ? "14" : "11"}
                        fontWeight={isSelected ? "bold" : "600"}
                        fontFamily="var(--font-poppins), sans-serif"
                        fill={isSelected ? "var(--accent)" : "#121316"}
                      >
                        {st.short}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Office Directory List (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--muted)] mb-2">
                Select an office for direct contact
              </div>
              <div className="space-y-2 max-h-[580px] overflow-y-auto pr-1">
                {facts.offices.map((office) => {
                  const isSelected = office.label === selectedOffice;
                  return (
                    <div
                      key={office.label}
                      onClick={() => setSelectedOffice(office.label)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? "bg-white border-[var(--accent)] shadow-sm"
                          : "bg-[var(--bg-alt)] border-[var(--border)] hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-base text-[var(--text)]">
                          {office.label}
                        </span>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                        )}
                      </div>
                      <p className="mt-2 text-xs text-[var(--muted)] leading-relaxed">
                        {office.address}
                      </p>
                      <div className="mt-3 flex items-center gap-2 text-xs font-mono font-medium text-[var(--text)]">
                        <Phone className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                        <a
                          href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`}
                          className="hover:underline"
                        >
                          {office.phone}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          BLOCK 6: QUOTE FORM AND FOOTER
          Quote form (left/top) + direct contact facts + standard footer
          Background: var(--bg-alt) transitioning into clean footer
          ══════════════════════════════════════════════════════════════ */}
      <section
        id="quote"
        aria-label="Request freight quote"
        className="py-24 bg-[var(--bg-alt)] border-t border-[var(--border)]"
      >
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Quote Form (7 cols) */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-[var(--border)] shadow-sm">
              <h2 className="text-3xl font-bold text-[var(--text)] tracking-tight">
                Get a freight quote
              </h2>
              <p className="mt-2 text-base text-[var(--muted)]">
                Submit shipment parameters for direct operations review.
              </p>

              {quoteSubmitted ? (
                <div className="mt-8 p-6 rounded-xl bg-[var(--bg-alt)] border border-[var(--border)] space-y-4">
                  <div className="flex items-center gap-3 text-[var(--accent)]">
                    <CheckCircle2 className="w-6 h-6" />
                    <span className="font-bold text-lg text-[var(--text)]">Quote request received</span>
                  </div>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    Thank you. Your freight enquiry has been forwarded directly to the operations desk at {facts.company.name}.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setQuoteSubmitted(false);
                      setQuoteForm({ name: "", email: "", service: facts.services[0].name, message: "" });
                    }}
                    className="text-sm font-semibold text-[var(--accent-text)] hover:underline"
                  >
                    Submit another quote request →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="mt-8 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="quote-name" className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-2">
                        Contact Name
                      </label>
                      <input
                        id="quote-name"
                        type="text"
                        required
                        value={quoteForm.name}
                        onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white text-[var(--text)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="quote-email" className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-2">
                        Email Address
                      </label>
                      <input
                        id="quote-email"
                        type="email"
                        required
                        value={quoteForm.email}
                        onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white text-[var(--text)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="quote-service" className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-2">
                      Required Service
                    </label>
                    <select
                      id="quote-service"
                      value={quoteForm.service}
                      onChange={(e) => setQuoteForm({ ...quoteForm, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white text-[var(--text)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
                    >
                      {facts.services.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="quote-details" className="block text-xs font-semibold uppercase tracking-wider text-[var(--muted)] mb-2">
                      Shipment Details
                    </label>
                    <textarea
                      id="quote-details"
                      rows={4}
                      required
                      value={quoteForm.message}
                      onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
                      placeholder="Origin, destination, cargo type, approximate weight or volume..."
                      className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-white text-[var(--text)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 text-base font-semibold rounded-md bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors shadow-md"
                  >
                    Submit Quote Request
                  </button>
                </form>
              )}
            </div>

            {/* Direct Contact & Mission (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white p-8 rounded-2xl border border-[var(--border)] shadow-sm space-y-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[var(--muted)] mb-1">
                    Company Registered Details
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text)]">
                    {facts.company.name}
                  </h3>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span className="text-[var(--muted)] leading-relaxed">
                      {facts.offices[0].address}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[var(--accent)] shrink-0" />
                    <a href={`tel:${facts.company.phone.replace(/[^0-9+]/g, "")}`} className="font-mono font-medium hover:underline">
                      {facts.company.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[var(--accent)] shrink-0" />
                    <a href={`mailto:${facts.company.email}`} className="font-mono font-medium hover:underline">
                      {facts.company.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Mission Statement */}
              <div className="p-8 rounded-2xl bg-white border border-[var(--border)] shadow-sm">
                <div className="text-xs font-mono uppercase tracking-wider text-[var(--muted)] mb-2">
                  Corporate Mission
                </div>
                <p className="text-sm text-[var(--text)] leading-relaxed">
                  {facts.mission}
                </p>
                <div className="mt-4 pt-4 border-t border-[var(--border)] flex items-center gap-4 text-xs font-semibold text-[var(--muted)]">
                  {facts.values.map((v) => (
                    <span key={v} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PAGE FOOTER
          Clean editorial footer with directory links and colophon
          ══════════════════════════════════════════════════════════════ */}
      <footer className="bg-white border-t border-[var(--border)] py-16">
        <div className="max-w-[1280px] mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[var(--border)]">
            {/* Col 1: Brand */}
            <div className="space-y-4">
              <div className="relative h-8 w-[54px]">
                <Image
                  src="/logos/logo.png"
                  alt="Freyer International"
                  width={54}
                  height={32}
                  className="object-contain"
                />
              </div>
              <p className="text-xs text-[var(--muted)] leading-relaxed">
                {facts.company.name}. Precision freight forwarding, heavy lift project cargo, and licensed customs clearance.
              </p>
            </div>

            {/* Col 2: Services */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text)] mb-4">
                Services
              </div>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                {facts.services.map((s) => (
                  <li key={s.id}>
                    <Link href={s.href} className="hover:text-[var(--text)]">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Company */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text)] mb-4">
                Company
              </div>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li><Link href="/about" className="hover:text-[var(--text)]">About Us</Link></li>
                <li><Link href="/projects" className="hover:text-[var(--text)]">Documented Projects</Link></li>
                <li><Link href="/locations" className="hover:text-[var(--text)]">Branch Network</Link></li>
                <li><Link href="/careers" className="hover:text-[var(--text)]">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-[var(--text)]">Contact</Link></li>
              </ul>
            </div>

            {/* Col 4: Operations Desks */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text)] mb-4">
                Branch Footprint
              </div>
              <p className="text-xs text-[var(--muted)] leading-relaxed mb-3">
                10 offices across Chennai, Bengaluru, Delhi / NCR, Mumbai, Hyderabad, Visakhapatnam, Coimbatore, Tuticorin, and Ahmedabad.
              </p>
              <div className="text-xs font-mono text-[var(--text)]">
                Direct: {facts.company.phone}
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--muted)]">
            <div>
              © {new Date().getFullYear()} {facts.company.name}. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-[var(--text)]">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[var(--text)]">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Shipment Tracking Modal */}
      <TrackShipmentModal
        isOpen={isTrackModalOpen}
        onClose={() => setIsTrackModalOpen(false)}
      />
    </div>
  );
}
