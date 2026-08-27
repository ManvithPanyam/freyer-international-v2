import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Desk & Corporate Offices | Freyer International Logistics",
  description: "Connect with Freyer International Logistics corporate headquarters in Bengaluru, primary operational hub in Chennai, or branch desks across India.",
};

const CONTACTS = [
  { city: "Bengaluru", type: "Corporate headquarters", email: "Vijay.Palagiri@freyerinternational.com", phone: "080 4120 0300", address: "Marathahalli, Bengaluru — Karnataka" },
  { city: "Chennai", type: "Primary operational hub", email: "Selvakumar@freyerinternational.com", phone: "+91 44 4319 1919", address: "Egmore, Chennai — Tamil Nadu" },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fbfcfd] text-[#0b2144] pt-28 pb-24 sm:pt-32">
        <section className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
          <div className="mb-3 flex items-center gap-2 font-mono text-[11px] text-slate-400">
            <Link href="/" className="transition-colors hover:text-[#c42f0b]">Home</Link>
            <span>/</span>
            <span className="text-slate-700">Contact</span>
          </div>

          <div className="max-w-6xl pt-4 sm:pt-8">
            <span className="block font-mono text-xs font-bold uppercase tracking-[0.22em] text-[#c42f0b] sm:text-sm">Commercial desks & inquiries</span>
            <h1 className="mt-4 max-w-6xl text-[clamp(3.6rem,7.6vw,7.8rem)] font-bold leading-[0.91] tracking-[-0.055em] text-[#0b2144]">
              Talk to the team
              <br />
              <span className="font-light italic text-slate-500">moving your cargo.</span>
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              Direct communication with our corporate office in Bengaluru, primary seaport operations in Chennai, and station desks across India.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#quote" className="inline-flex items-center gap-2 rounded-full bg-[#0b2144] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">Request a quote <ArrowUpRight className="h-4 w-4" /></Link>
              <Link href="/locations" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-[#0b2144] transition-colors hover:border-[#0b2144]">Find a branch</Link>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-[1440px] px-6 sm:mt-32 sm:px-10 lg:px-16">
          <div className="border-y border-slate-200">
            {CONTACTS.map((contact) => (
              <div key={contact.city} className="grid gap-8 border-b border-slate-200 py-10 last:border-b-0 sm:grid-cols-[1.1fr_1fr_1fr] sm:items-center sm:py-14">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#c42f0b]">{contact.type}</span>
                  <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{contact.city}</h2>
                  <p className="mt-2 text-sm text-slate-500">{contact.address}</p>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.15em] text-slate-400">Direct line</div>
                  <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="mt-2 block text-lg font-semibold hover:text-[#c42f0b]">{contact.phone}</a>
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.15em] text-slate-400">Email</div>
                  <a href={`mailto:${contact.email}`} className="mt-2 inline-flex items-center gap-2 text-base font-semibold hover:text-[#c42f0b]">{contact.email} <ArrowUpRight className="h-4 w-4" /></a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 grid gap-10 sm:grid-cols-2 sm:gap-16">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">Commercial</span>
              <a href="mailto:info@freyerinternational.com" className="mt-3 block text-2xl font-semibold tracking-tight hover:text-[#c42f0b]">info@freyerinternational.com</a>
            </div>
            <div>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">Careers</span>
              <a href="mailto:careers@freyerinternational.com" className="mt-3 block text-2xl font-semibold tracking-tight hover:text-[#c42f0b]">careers@freyerinternational.com</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
