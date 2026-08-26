import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Pan-India Locations & Hubs | Freyer International Logistics",
  description: "Direct operational footprint across 10 verified Freyer branch locations in India.",
};

const HUBS = [
  { city: "Chennai (Egmore)", state: "Tamil Nadu", role: "Primary Operational Hub", address: "TAGA Tower, New No: 45 Old No 20, 1st Floor, Sait Colony, Egmore, Chennai - 600008", phone: "+91 44 43191919", email: "Selvakumar@freyerinternational.com" },
  { city: "Bengaluru", state: "Karnataka", role: "Corporate Registered Office", address: "No.19, KMJ AVEN, 3rd Floor, Outer Ring Road, Marathahalli, Bengaluru - 560037", phone: "080 4120 0300", email: "Vijay.Palagiri@freyerinternational.com" },
  { city: "Delhi / NCR", state: "Haryana", role: "North India Gateway Hub", address: "Plot No. 524, 1st Floor, Udyog Vihar Phase 5, Gurugram - 122016", phone: "0124-4068388", email: "vk@freyerinternational.com" },
  { city: "Mumbai", state: "Maharashtra", role: "West Coast Maritime Hub", address: "A-401, Polaris Building, Off Makwana Road, Marol, Andheri (East), Mumbai - 400059", phone: "022-46191301", email: "raju.jamdar@freyerinternational.com" },
  { city: "Hyderabad", state: "Telangana", role: "Deccan Logistics Hub", address: "#109, 1st Floor, Ashoka Bhoopal Chambers, S.P. Road, Secunderabad - 500003", phone: "040-48561797", email: "Vijay.Palagiri@freyerinternational.com" },
  { city: "Visakhapatnam", state: "Andhra Pradesh", role: "East Coast Seaport Office", address: "YCN Complex, D.No.58-1-256, NAD X Road, Visakhapatnam - 530009", phone: "+91 97402 20069", email: "Vijay.Palagiri@freyerinternational.com" },
  { city: "Coimbatore", state: "Tamil Nadu", role: "Industrial Corridor Hub", address: "3A, 1264, Mayflower Valencia, 5th Floor, Avinashi Road, Coimbatore - 641004", phone: "+91 9962541554", email: "shivakumar.ps@freyerinternational.com" },
  { city: "Tuticorin", state: "Tamil Nadu", role: "Maritime Port Office", address: "J Garden 4A/C, 278, Housing Board RTC Nagar, Tuticorin - 628001", phone: "+91 87544 46077", email: "donald@freyerinternational.com" },
  { city: "Ahmedabad", state: "Gujarat", role: "Commercial Gateway", address: "Office No. 220, Flexi Business Hub, Madhur Complex, Navrangpur, Ahmedabad - 380009", phone: "+91 98214 65939", email: "raju.jamdar@freyerinternational.com" },
  { city: "Chennai (Airport)", state: "Tamil Nadu", role: "Air Cargo Terminal Station", address: "No.2 Ambedkar Street, G.S.T. Road, Meenambakkam, Chennai - 600017", phone: "+91 96000 41033", email: "selvakumar@freyerinternational.com" },
];

export default function LocationsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fbfcfd] text-[#0b2144] pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-[#c42f0b] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Overview</span>
            </Link>
          </div>

          <div className="max-w-3xl mb-16">
            <span className="text-[#c42f0b] text-xs font-mono tracking-[0.22em] uppercase font-semibold block mb-3">
              National Network
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0b2144] leading-[1.1]">
              Branch Locations & Operational Hubs
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
              A physical network spanning 10 verified Freyer locations across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HUBS.map((h) => (
              <div
                key={h.city}
                className="bg-white p-7 rounded-xl border border-slate-200/80 shadow-xs space-y-4"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#c42f0b] font-semibold block mb-1">
                    {h.role}
                  </span>
                  <h2 className="text-xl font-bold text-[#0b2144] tracking-tight">{h.city}</h2>
                  <p className="text-xs font-mono text-slate-500">{h.state} · India</p>
                </div>

                <div className="flex items-start gap-2.5 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <p>{h.address}</p>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-500 font-mono">
                    <Phone className="w-3.5 h-3.5 text-[#c42f0b]" />
                    <span>{h.phone}</span>
                  </div>
                  <a
                    href={`mailto:${h.email}`}
                    className="inline-flex items-center gap-1 font-semibold text-[#0b2144] hover:text-[#c42f0b] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>Email Branch</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
