"use client";

import React, { useState } from "react";
import { Phone, Mail, Building2 } from "lucide-react";

export const STATIONS = [
  {
    id: 1,
    city: "Chennai (Egmore HQ)",
    address: "TAGA Tower New No: 45 Old No 20, 1st Floor, 2nd Street, Sait Colony, Egmore, Chennai-600008.",
    phone: "+91 44 43191919",
    email: "chennai@freyerinternational.com",
    isHQ: true,
    cx: 295,
    cy: 485
  },
  {
    id: 2,
    city: "Chennai Airport Office",
    address: "No.2 Ambedkar Street, G.S.T. Road, Meenambakkam, Chennai-600017.",
    phone: "+91 96000 41033",
    email: "chennai@freyerinternational.com",
    cx: 292,
    cy: 497
  },
  {
    id: 3,
    city: "Bengaluru",
    address: "No.19, KMJ AVEN, 3rd Floor, Outer Ring Road, Marathahalli, Bengaluru-560037.",
    phone: "080 4120 0300",
    email: "Vijay.Palagiri@freyerinternational.com",
    cx: 250,
    cy: 490
  },
  {
    id: 4,
    city: "Delhi / NCR",
    address: "Plot No. 524, First Floor, Udyog Vihar Phase 5, Gurugram-122016, Haryana.",
    phone: "0124-4068388",
    email: "info@freyerinternational.com",
    cx: 235,
    cy: 220
  },
  {
    id: 5,
    city: "Mumbai",
    address: "A - 401, Polaris Building, Off Makwana Road, Marol, Andheri (East), Mumbai-400059.",
    phone: "022-46191301",
    email: "raju.jamdar@freyerinternational.com",
    cx: 175,
    cy: 395
  },
  {
    id: 6,
    city: "Hyderabad",
    address: "#109, 1st Floor, Ashoka Bhoopal Chambers, S.P. Road, Secunderbad-500003, Telangana.",
    phone: "040-48561797",
    email: "Vijay.Palagiri@freyerinternational.com",
    cx: 265,
    cy: 410
  },
  {
    id: 7,
    city: "Visakhapatnam",
    address: "YCN Complex, D.No.58-1-256, NAD X Road, Visakhapatnam, Andhra Pradesh-530009.",
    phone: "+91 97402 20069",
    email: "Vijay.Palagiri@freyerinternational.com",
    cx: 350,
    cy: 420
  },
  {
    id: 8,
    city: "Coimbatore",
    address: "3A, 1264, Mayflower Valencia, 5th Floor, Avinashi Road, Nava India, Coimbatore-641004.",
    phone: "+91 9962541554",
    email: "shivakumar.ps@freyerinternational.com",
    cx: 240,
    cy: 535
  },
  {
    id: 9,
    city: "Tuticorin",
    address: "J GARDEN 4A/C, 278, Housing Board RTC Nagar, Tuticorin-628001.",
    phone: "+91 87544 46077",
    email: "donald@freyerinternational.com",
    cx: 245,
    cy: 575
  },
  {
    id: 10,
    city: "Ahmedabad",
    address: "Office No. 220, Flexi Business HUB, 2nd Floor, Madhur Complex, Navrangpur, Ahmedabad-380009.",
    phone: "+91 98214 65939",
    email: "raju.jamdar@freyerinternational.com",
    cx: 165,
    cy: 325
  }
];

export function TruthfulNetworkFinalist() {
  const [selectedId, setSelectedId] = useState(1);
  const selected = STATIONS.find(s => s.id === selectedId) || STATIONS[0];

  return (
    <section id="network-finalist" className="relative bg-[#060c18] text-white py-20 sm:py-28 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 pb-12 border-b border-white/10">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#e1390f]">
            Verified Physical Footprint
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            10 STATIONS ACROSS INDIA.
          </h2>
          <p className="text-sm text-slate-300 font-light leading-relaxed">
            No fictional trade lines. Simply the real, physical presence of Freyer across India's principal commercial centers, with our Registered Office in Chennai.
          </p>
        </div>

        {/* Station Selectors (Accessible on all screen sizes) */}
        <div className="flex flex-wrap gap-2 pt-6 pb-8">
          {STATIONS.map(s => (
            <button
              key={s.id}
              onClick={() => setSelectedId(s.id)}
              className={`px-3.5 py-1.5 rounded text-xs font-mono transition ${
                selectedId === s.id
                  ? "bg-[#e1390f] text-white font-bold"
                  : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
              }`}
            >
              {s.isHQ && <span className="text-amber-300 mr-1">&bull;</span>}
              {s.city.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* The Cartographic Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#040810] rounded-lg border border-white/10 p-6 sm:p-8">
          {/* Map Vector Stage — Zero Fake Corridor Lines */}
          <div className="lg:col-span-7 flex justify-center items-center py-2">
            <svg
              viewBox="0 0 520 620"
              className="w-full max-w-[420px] h-auto drop-shadow-2xl select-none"
            >
              {/* Accurate Indian Subcontinent Silhouette */}
              <path
                d="M 180,45 L 210,35 L 250,55 L 280,75 L 300,105 L 285,140 L 260,170 L 290,195 L 330,190 L 370,225 L 360,260 L 390,285 L 430,280 L 460,310 L 440,335 L 380,335 L 350,370 L 370,410 L 335,465 L 305,520 L 265,585 L 245,600 L 225,580 L 205,530 L 175,470 L 155,410 L 140,350 L 115,310 L 110,270 L 140,240 L 165,190 L 150,140 L 180,85 Z"
                fill="#071120"
                stroke="#172b48"
                strokeWidth="1.5"
              />

              {/* Station Locations Only — No Fake Connectors */}
              {STATIONS.map(s => {
                const isSelected = s.id === selectedId;
                return (
                  <g
                    key={s.id}
                    onClick={() => setSelectedId(s.id)}
                    className="cursor-pointer group"
                  >
                    {/* Visual Pulse for HQ only */}
                    {s.isHQ && (
                      <circle cx={s.cx} cy={s.cy} r="10" fill="#e1390f" fillOpacity="0.25" />
                    )}
                    {isSelected && (
                      <circle cx={s.cx} cy={s.cy} r="8" fill="none" stroke="#e1390f" strokeWidth="1.5" />
                    )}
                    <circle
                      cx={s.cx}
                      cy={s.cy}
                      r={s.isHQ ? "4.5" : isSelected ? "4" : "3"}
                      fill={s.isHQ ? "#e1390f" : isSelected ? "#ffffff" : "#94a3b8"}
                    />
                    <text
                      x={s.cx + 7}
                      y={s.cy + 3}
                      fontSize="9"
                      fontFamily="monospace"
                      fill={isSelected ? "#ffffff" : s.isHQ ? "#e1390f" : "#64748b"}
                    >
                      {s.city.split(" ")[0]}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Station Details Card */}
          <div className="lg:col-span-5 bg-[#071120] p-6 rounded-lg border border-white/10 space-y-4">
            <div className="flex items-start justify-between border-b border-white/10 pb-3">
              <div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                  Station #{selected.id} of 10
                </div>
                <h3 className="text-xl font-bold text-white mt-0.5">{selected.city}</h3>
              </div>
              {selected.isHQ && (
                <span className="text-[10px] font-mono uppercase bg-[#e1390f]/20 border border-[#e1390f] text-[#e1390f] px-2 py-0.5 rounded font-bold">
                  Head Office
                </span>
              )}
            </div>

            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="text-[10px] font-mono uppercase text-slate-400 flex items-center gap-1">
                <Building2 className="w-3 h-3" /> Address
              </div>
              <p className="font-light leading-relaxed pl-4">{selected.address}</p>
            </div>

            <div className="pt-2 border-t border-white/10 space-y-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-[#e1390f]" />
                <span className="text-white">{selected.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span className="truncate">{selected.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
