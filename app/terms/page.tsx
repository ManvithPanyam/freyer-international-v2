import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Freyer International Logistics",
  description:
    "Terms and conditions governing the access and use of Freyer International Logistics Pvt. Ltd. digital portals, commercial inquiry tools, and intellectual property.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#fbfcfd] text-[#0b2144] pt-32 pb-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-3">
            <Link href="/" className="hover:text-[#c42f0b] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Terms of Service</span>
          </div>

          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-[#c42f0b] text-xs sm:text-sm font-mono tracking-[0.22em] uppercase font-bold block mb-3">
              Commercial Terms of Service
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#0b2144] leading-[1.08]">
              Terms &amp; Conditions
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
              These Terms &amp; Conditions govern the use of the digital information, tools, and communication services provided by Freyer International Logistics Pvt. Ltd.
            </p>
          </div>

          <div className="max-w-3xl space-y-12 text-slate-700 text-base sm:text-lg leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0b2144] tracking-tight">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing this website, submitting information through the Freight Configurator, or communicating with our corporate and branch desks, you agree to comply with these terms. If you do not agree with any part of these terms, please discontinue use of the site.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0b2144] tracking-tight">
                2. Information Accuracy and Freight Estimates
              </h2>
              <p>
                All information presented on this site—including service descriptions, route connectivity, case study metrics, and automated quotation calculations—is provided for informational and preliminary planning purposes. Formal freight rate quotations, vessel bookings, air charters, and customs clearance commitments are subject to verified bills of lading, written carrier contracts, statutory duties, and physical cargo inspections.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0b2144] tracking-tight">
                3. Intellectual Property
              </h2>
              <p>
                All visual brand assets, logos, photographic documentation of cargo movements, design systems, and published texts are the exclusive intellectual property of Freyer International Logistics Pvt. Ltd. or their respective alliance partners (WCA, SCN, WPA, FDX, AMTOI, ACAAI). Unauthorized reproduction, scraping, or commercial reuse without explicit written consent is strictly prohibited.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0b2144] tracking-tight">
                4. Limitation of Liability
              </h2>
              <p>
                While Freyer takes all reasonable measures to maintain uninterrupted and accurate website operation, we assume no liability for temporary downtime, transmission errors, or reliance upon preliminary estimates prior to formal contractual execution. Physical transport and warehousing operations are governed by standard Indian Multimodal Transport of Goods Acts and statutory carrier terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0b2144] tracking-tight">
                5. Governance and Contact
              </h2>
              <p>
                These terms are governed by the laws of India. For commercial contracts or legal inquiries, please contact:
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-sm font-mono space-y-1 text-slate-800">
                <div><strong>Freyer International Logistics Pvt. Ltd.</strong></div>
                <div>Registered HQ: No.19, KMJ AVEN, 3rd Floor, Outer Ring Road, Marathahalli, Bengaluru - 560037, Karnataka, India</div>
                <div>Email: <a href="mailto:info@freyerinternational.com" className="text-[#c42f0b] hover:underline">info@freyerinternational.com</a></div>
                <div>Phone: +91 44 4319 1919 / 080 4120 0300</div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
