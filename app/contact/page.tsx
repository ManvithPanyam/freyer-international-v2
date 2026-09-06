import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RfqProduct } from "@/components/home/RfqProduct";
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Clock,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Desk & Corporate Offices",
  description:
    "Direct commercial desks, tender RFQs, and operational hubs across 9 branches in 8 cities in India: Bengaluru HQ, Chennai, Mumbai, Delhi NCR, Hyderabad, Vizag, Coimbatore, Tuticorin, and Ahmedabad.",
  alternates: {
    canonical: "/contact",
  },
};

interface BranchContact {
  city: string;
  role: string;
  region: "Corporate HQ" | "South India" | "North India" | "West India";
  address: string;
  phone: string;
  email: string;
  gateway: string;
}

const ALL_BRANCHES: BranchContact[] = [
  {
    city: "Bengaluru",
    role: "Corporate Registered Headquarters",
    region: "Corporate HQ",
    address: "No.19, KMJ AVEN, 3rd Floor, Outer Ring Road, Marathahalli, Bengaluru - 560037, Karnataka",
    phone: "+91 80 4120 0300",
    email: "blr.corporate@freyerinternational.com",
    gateway: "Kempegowda Int'l Airport (BLR) & Whitefield ICD",
  },
  {
    city: "Chennai (Central)",
    role: "Primary Maritime & Project Cargo Operations",
    region: "South India",
    address: "TAGA Tower, New No: 45 Old No 20, 1st Floor, 2nd Street, Sait Colony, Egmore, Chennai - 600008, Tamil Nadu",
    phone: "+91 44 4319 1919",
    email: "chennai.ops@freyerinternational.com",
    gateway: "Chennai Port (CITPL / CCTPL) & Kamarajar Port",
  },
  {
    city: "Chennai Airport",
    role: "Airfreight & Pharma Cold-Chain Terminal",
    region: "South India",
    address: "No.2 Ambedkar Street, G.S.T. Road, Meenambakkam, Chennai - 600017, Tamil Nadu",
    phone: "+91 44 4319 1920",
    email: "chennai.air@freyerinternational.com",
    gateway: "Chennai International Airport Cargo Complex (MAA)",
  },
  {
    city: "Mumbai",
    role: "West Coast Maritime & Container Gateway",
    region: "West India",
    address: "A - 401, Polaris Building, Off Makwana Road, Marol, Andheri (East), Mumbai - 400059, Maharashtra",
    phone: "+91 22 4619 1301",
    email: "mumbai.ops@freyerinternational.com",
    gateway: "Jawaharlal Nehru Port (JNPT / Nhava Sheva) & BOM Air Cargo",
  },
  {
    city: "Delhi / NCR",
    role: "North India Gateway & Automotive Desk",
    region: "North India",
    address: "Plot No. 524, First Floor, Udyog Vihar Phase 5, Gurugram - 122016, Haryana",
    phone: "+91 124 406 8388",
    email: "delhi.ops@freyerinternational.com",
    gateway: "Indira Gandhi Int'l Airport (DEL) & TKD ICD",
  },
  {
    city: "Hyderabad",
    role: "Deccan Pharma & Life Sciences Gateway",
    region: "South India",
    address: "#109, 1st Floor, Ashoka Bhoopal Chambers, S.P. Road, Secunderabad - 500003, Telangana",
    phone: "+91 40 4856 1797",
    email: "hyd.ops@freyerinternational.com",
    gateway: "Rajiv Gandhi Int'l Airport (HYD) Cargo Complex",
  },
  {
    city: "Visakhapatnam",
    role: "East Coast Deep-Water Seaport Desk",
    region: "South India",
    address: "YCN Complex, D.No.58-1-256, NAD X Road, Visakhapatnam - 530009, Andhra Pradesh",
    phone: "+91 891 278 4910",
    email: "vizag.ops@freyerinternational.com",
    gateway: "Visakhapatnam Port Trust (VPT) & Gangavaram Port",
  },
  {
    city: "Coimbatore",
    role: "Industrial Machinery & Textile Corridor",
    region: "South India",
    address: "S.F.No. 407/1, Avinashi Road, Peelamedu, Coimbatore - 641004, Tamil Nadu",
    phone: "+91 422 439 1919",
    email: "cbe.ops@freyerinternational.com",
    gateway: "Irugur ICD & Coimbatore International Airport",
  },
  {
    city: "Tuticorin",
    role: "Southern Deep-Sea Maritime Gateway",
    region: "South India",
    address: "No. 4/128-B, Madurai Road, Meelavittan, Tuticorin - 628008, Tamil Nadu",
    phone: "+91 461 234 1919",
    email: "tuticorin.ops@freyerinternational.com",
    gateway: "V.O. Chidambaranar Port (VOCPT)",
  },
  {
    city: "Ahmedabad",
    role: "Gujarat Commercial & Chemical Corridor",
    region: "West India",
    address: "304, Saffron Building, Near Panchwati Cross Road, Ambawadi, Ahmedabad - 380006, Gujarat",
    phone: "+91 79 4891 1919",
    email: "gujarat.ops@freyerinternational.com",
    gateway: "Mundra Port (INMUN) & Khodiyar ICD",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fbfcfd] text-[#0b2144] pt-28 pb-24 sm:pt-32">
        {/* Page Header */}
        <section className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 mb-12">
          <div className="mb-3 flex items-center gap-2 font-mono text-[11px] text-slate-400">
            <Link href="/" className="transition-colors hover:text-[#c42f0b]">Home</Link>
            <span>/</span>
            <span className="text-slate-700 font-medium">Contact Desks</span>
          </div>
          <div className="max-w-4xl pt-2 sm:pt-4">
            <span className="block font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#c42f0b] sm:text-sm mb-3">
              Commercial Desks &amp; Operating Network
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0b2144] leading-[1.05]">
              Talk to the team
              <br />
              <span className="font-light italic text-slate-500">
                moving your cargo.
              </span>
            </h1>
            <p className="mt-4 sm:mt-5 max-w-3xl text-base sm:text-lg lg:text-xl leading-relaxed text-slate-600">
              Direct routing support from licensed customs brokers, air charter controllers, and project engineers across 9 branches in 8 cities in India.
            </p>
          </div>
        </section>

        {/* 4-Step Enterprise RFQ Module */}
        <div className="mb-20">
          <RfqProduct />
        </div>

        {/* Direct Branch Office Directory */}
        <section className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
          <div className="mb-10 pb-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#c42f0b] font-bold block mb-1">
                Direct Station Directory
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b2144]">
                9 Branches Across 8 Cities
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md font-mono">
              All telephone numbers route directly to corporate landline desks (Mon&ndash;Sat, 09:00&ndash;18:00 IST). Emergency AOG / Project lines operate 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_BRANCHES.map((b) => (
              <div
                key={b.city}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                        {b.region}
                      </span>
                      <h3 className="text-xl font-bold text-[#0b2144]">{b.city}</h3>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                      Active Desk
                    </span>
                  </div>

                  <p className="text-xs font-mono text-[#c42f0b] font-medium leading-tight">
                    {b.role}
                  </p>

                  <div className="text-xs text-slate-600 space-y-2 pt-2 border-t border-slate-100">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span className="font-sans leading-relaxed">{b.address}</span>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-slate-500 text-[11px]">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{b.gateway}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs">
                  <a
                    href={`tel:${b.phone.replace(/[^0-9+]/g, "")}`}
                    className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-800 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#c42f0b]" />
                    <span className="truncate">{b.phone}</span>
                  </a>
                  <a
                    href={`mailto:${b.email}`}
                    className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-800 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#c42f0b]" />
                    <span className="truncate">Email Desk</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Institutional Contact Bar */}
          <div className="mt-16 p-8 rounded-2xl bg-[#0b2144] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-[#ff6b4a] font-bold">
                Tender &amp; Global Procurement Desk
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Have a multi-lane annual tender or enterprise RFQ?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Direct commercial proposals submitted to corporate management in Bengaluru within 24 hours.
              </p>
            </div>
            <a
              href="mailto:info@freyerinternational.com?subject=Enterprise%20Freight%20Tender%20Inquiry"
              className="inline-flex items-center gap-2 bg-[#c42f0b] hover:bg-[#a82506] text-white font-mono text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl transition-colors shrink-0 shadow-lg shadow-[#c42f0b]/30"
            >
              <span>Email Commercial Tender Desk</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
