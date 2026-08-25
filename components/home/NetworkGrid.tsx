import React from "react";
import { Phone, ArrowUpRight } from "lucide-react";

interface Branch {
  city: string;
  state: string;
  hubRole: string;
  address: string;
  phone?: string;
  email: string;
}

const VERIFIED_BRANCHES: Branch[] = [
  {
    city: "Bengaluru",
    state: "Karnataka",
    hubRole: "Corporate Registered Office",
    address: "No.19, KMJ AVEN, 3rd Floor, Outer Ring Road, Marathahalli, Bengaluru-560037",
    phone: "080 4120 0300",
    email: "Vijay.Palagiri@freyerinternational.com",
  },
  {
    city: "Chennai (Egmore)",
    state: "Tamil Nadu",
    hubRole: "Primary Operational Hub",
    address: "TAGA Tower New No: 45 Old No 20, 1st Floor, Sait Colony Egmore, Chennai-600008",
    phone: "+91 44 43191919",
    email: "Selvakumar@freyerinternational.com",
  },
  {
    city: "Chennai (Airport)",
    state: "Tamil Nadu",
    hubRole: "Air Cargo Terminal Office",
    address: "No.2 Ambedkar Street, G.S.T. Road, Meenambakkam, Chennai-600017",
    phone: "+91 96000 41033",
    email: "selvakumar@freyerinternational.com",
  },
  {
    city: "Delhi NCR",
    state: "Haryana",
    hubRole: "North India Gateway",
    address: "Plot No. 524, 1st Floor, Udyog Vihar Phase 5, Gurugram-122016",
    phone: "0124-4068388",
    email: "vk@freyerinternational.com",
  },
  {
    city: "Mumbai",
    state: "Maharashtra",
    hubRole: "West Coast Maritime Hub",
    address: "A-401, Polaris Building, Off Makwana Road, Marol, Andheri (East), Mumbai-400059",
    phone: "022-46191301",
    email: "raju.jamdar@freyerinternational.com",
  },
  {
    city: "Hyderabad",
    state: "Telangana",
    hubRole: "Deccan Logistics Hub",
    address: "#109, 1st Floor, Ashoka Bhoopal Chambers, S.P. Road, Secunderabad-500003",
    phone: "040-48561797",
    email: "Vijay.Palagiri@freyerinternational.com",
  },
  {
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    hubRole: "East Coast Port Office",
    address: "YCN Complex, D.No.58-1-256, NAD X Road, Visakhapatnam-530009",
    phone: "+91 97402 20069",
    email: "Vijay.Palagiri@freyerinternational.com",
  },
  {
    city: "Coimbatore",
    state: "Tamil Nadu",
    hubRole: "Industrial Corridor Office",
    address: "3A, 1264, Mayflower Valencia, 5th Floor, Avinashi Road, Coimbatore-641004",
    phone: "+91 9962541554",
    email: "shivakumar.ps@freyerinternational.com",
  },
  {
    city: "Tuticorin",
    state: "Tamil Nadu",
    hubRole: "Major Seaport Office",
    address: "J Garden 4A/C, 278, Housing Board RTC Nagar, Tuticorin-628001",
    phone: "+91 87544 46077",
    email: "donald@freyerinternational.com",
  },
  {
    city: "Ahmedabad",
    state: "Gujarat",
    hubRole: "Gujarat Commercial Hub",
    address: "Office No. 220, Flexi Business Hub, Madhur Complex, Navrangpur, Ahmedabad-380009",
    phone: "+91 98214 65939",
    email: "raju.jamdar@freyerinternational.com",
  },
];

export function NetworkGrid() {
  return (
    <section id="network" className="py-24 sm:py-32 bg-[#0b2144] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-[#ff6b4a] text-xs font-mono tracking-widest uppercase font-semibold">
            Pan-India Footprint
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-3">
            10 Strategic Logistics Hubs
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
            Direct operational presence across India&apos;s primary industrial manufacturing corridors, major seaports, and international air cargo terminals.
          </p>
        </div>

        {/* Restrained Typographic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VERIFIED_BRANCHES.map((branch) => (
            <div
              key={branch.city}
              className="p-6 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-200 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white tracking-tight">{branch.city}</h3>
                  <span className="text-[10px] font-mono bg-white/10 text-slate-300 px-2 py-0.5 rounded">
                    {branch.state}
                  </span>
                </div>
                <span className="text-xs font-medium text-[#ff6b4a] block">
                  {branch.hubRole}
                </span>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">{branch.address}</p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                {branch.phone ? (
                  <a
                    href={`tel:${branch.phone.replace(/[^0-9+]/g, "")}`}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>{branch.phone}</span>
                  </a>
                ) : (
                  <span>Direct Routing</span>
                )}
                <a
                  href={`mailto:${branch.email}`}
                  className="hover:text-[#ff6b4a] transition-colors flex items-center gap-1"
                >
                  <span>Contact Hub</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
