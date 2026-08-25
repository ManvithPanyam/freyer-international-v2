"use client";

import React, { useState } from "react";
import { Phone, Mail, ArrowUpRight } from "lucide-react";

interface Branch {
  id: string;
  city: string;
  state: string;
  hubRole: string;
  address: string;
  phone?: string;
  email: string;
}

const HUBS: Branch[] = [
  {
    id: "chennai_egmore",
    city: "Chennai (Egmore)",
    state: "Tamil Nadu",
    hubRole: "Primary Operational Hub",
    address: "TAGA Tower, New No: 45 Old No 20, 1st Floor, Sait Colony, Egmore, Chennai - 600008",
    phone: "+91 44 43191919",
    email: "Selvakumar@freyerinternational.com",
  },
  {
    id: "bengaluru",
    city: "Bengaluru",
    state: "Karnataka",
    hubRole: "Corporate Registered Office",
    address: "No.19, KMJ AVEN, 3rd Floor, Outer Ring Road, Marathahalli, Bengaluru - 560037",
    phone: "080 4120 0300",
    email: "Vijay.Palagiri@freyerinternational.com",
  },
  {
    id: "delhi",
    city: "Delhi / NCR",
    state: "Haryana",
    hubRole: "North India Gateway Hub",
    address: "Plot No. 524, 1st Floor, Udyog Vihar Phase 5, Gurugram - 122016",
    phone: "0124-4068388",
    email: "vk@freyerinternational.com",
  },
  {
    id: "mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    hubRole: "West Coast Maritime Hub",
    address: "A-401, Polaris Building, Off Makwana Road, Marol, Andheri (East), Mumbai - 400059",
    phone: "022-46191301",
    email: "raju.jamdar@freyerinternational.com",
  },
  {
    id: "hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    hubRole: "Deccan Logistics Hub",
    address: "#109, 1st Floor, Ashoka Bhoopal Chambers, S.P. Road, Secunderabad - 500003",
    phone: "040-48561797",
    email: "Vijay.Palagiri@freyerinternational.com",
  },
  {
    id: "visakhapatnam",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    hubRole: "East Coast Seaport Office",
    address: "YCN Complex, D.No.58-1-256, NAD X Road, Visakhapatnam - 530009",
    phone: "+91 97402 20069",
    email: "Vijay.Palagiri@freyerinternational.com",
  },
  {
    id: "coimbatore",
    city: "Coimbatore",
    state: "Tamil Nadu",
    hubRole: "Industrial Manufacturing Corridor",
    address: "3A, 1264, Mayflower Valencia, 5th Floor, Avinashi Road, Coimbatore - 641004",
    phone: "+91 9962541554",
    email: "shivakumar.ps@freyerinternational.com",
  },
  {
    id: "tuticorin",
    city: "Tuticorin",
    state: "Tamil Nadu",
    hubRole: "Major Maritime Seaport Office",
    address: "J Garden 4A/C, 278, Housing Board RTC Nagar, Tuticorin - 628001",
    phone: "+91 87544 46077",
    email: "donald@freyerinternational.com",
  },
  {
    id: "ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    hubRole: "Gujarat Commercial Hub",
    address: "Office No. 220, Flexi Business Hub, Madhur Complex, Navrangpur, Ahmedabad - 380009",
    phone: "+91 98214 65939",
    email: "raju.jamdar@freyerinternational.com",
  },
  {
    id: "chennai_airport",
    city: "Chennai (Airport)",
    state: "Tamil Nadu",
    hubRole: "Air Cargo Terminal Station",
    address: "No.2 Ambedkar Street, G.S.T. Road, Meenambakkam, Chennai - 600017",
    phone: "+91 96000 41033",
    email: "selvakumar@freyerinternational.com",
  },
];

export function NetworkInteractive() {
  const [selectedHub, setSelectedHub] = useState<Branch>(HUBS[0]);

  return (
    <section id="network" className="py-24 sm:py-32 bg-white text-[#0b2144]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <span className="text-[#c42f0b] text-xs font-mono tracking-widest uppercase font-semibold">
            Pan-India Network
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0b2144] mt-2">
            10 Strategic Locations
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Direct operational presence across India&apos;s manufacturing corridors, international seaports, and air cargo stations.
          </p>
        </div>

        {/* Minimal Interactive Hub Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* City Selector List */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {HUBS.map((hub) => {
              const isSelected = hub.id === selectedHub.id;
              return (
                <button
                  key={hub.id}
                  onClick={() => setSelectedHub(hub)}
                  className={`text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c42f0b] ${
                    isSelected
                      ? "bg-[#0b2144] text-white border-[#0b2144] shadow-md"
                      : "bg-[#f8f9fa] text-slate-800 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div>
                    <div className="font-bold text-sm">{hub.city}</div>
                    <div className={`text-xs ${isSelected ? "text-slate-300" : "text-slate-500"}`}>
                      {hub.state}
                    </div>
                  </div>
                  <ArrowUpRight
                    className={`w-4 h-4 ${isSelected ? "text-[#ff6b4a]" : "text-slate-400"}`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Location Detail Display */}
          <div className="lg:col-span-6 bg-[#f8f9fa] p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#c42f0b] uppercase tracking-wider font-semibold">
                {selectedHub.hubRole}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0b2144] tracking-tight">
                {selectedHub.city}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed pt-2">
                {selectedHub.address}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              {selectedHub.phone ? (
                <a
                  href={`tel:${selectedHub.phone.replace(/[^0-9+]/g, "")}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0b2144] hover:text-[#c42f0b] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#c42f0b]" />
                  <span>{selectedHub.phone}</span>
                </a>
              ) : (
                <span className="text-xs text-slate-500">Direct Routing</span>
              )}

              <a
                href={`mailto:${selectedHub.email}`}
                className="inline-flex items-center gap-2 bg-[#0b2144] hover:bg-[#07152b] text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Branch Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
