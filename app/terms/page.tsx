import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Freyer International Logistics",
  description:
    "Commercial trading terms, multimodal carriage conditions, quotation validity, and limitation of liability governing services by Freyer International Logistics Pvt. Ltd.",
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

          <div className="max-w-4xl mb-12 sm:mb-16">
            <span className="text-[#c42f0b] text-xs sm:text-sm font-mono tracking-[0.22em] uppercase font-bold block mb-3">
              Standard Trading Conditions &amp; Multimodal Carriage Terms
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#0b2144] leading-[1.08]">
              Terms &amp; Conditions
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed max-w-3xl">
              These Standard Trading Conditions govern all quotation estimates, multimodal freight carriage, customs brokerage, contract warehousing, and project engineering services rendered by Freyer International Logistics Pvt. Ltd.
            </p>
            <p className="text-xs font-mono text-slate-600 mt-3">
              Effective Date: January 1, 2026 &middot; Applicable Entity: Freyer International Logistics Pvt. Ltd.
            </p>
          </div>

          <div className="max-w-4xl space-y-12 text-slate-700 text-base sm:text-lg leading-relaxed">
            {/* 1. Scope & Definitions */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0b2144] tracking-tight">
                1. Application &amp; Regulatory Framework
              </h2>
              <p>
                All services provided by Freyer International Logistics Pvt. Ltd. (&ldquo;the Company&rdquo;) are subject to these Standard Trading Conditions. Unless expressly agreed otherwise in writing signed by an authorized director of the Company, contracts of carriage and warehousing are executed in accordance with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 text-base">
                <li>The Multimodal Transportation of Goods Act, 1993 (India).</li>
                <li>The Indian Carriage of Goods by Sea Act, 1925, and Carriage by Air Act, 1972.</li>
                <li>The Customs Act, 1962, under Authorized Economic Operator Tier-2 (AEO-T2) compliance rules.</li>
                <li>The International Air Transport Association (IATA) Regulated Agent standards and FIATA standard rules where applicable.</li>
              </ul>
            </section>

            {/* 2. Quotation Estimates & Rate Adjustments */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0b2144] tracking-tight">
                2. Quotations, Freight Estimates &amp; Rate Validity
              </h2>
              <p>
                Preliminary calculations generated via the website Freight Configurator or informal email estimates are indicative and non-binding:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 text-base">
                <li><strong>Validity Window:</strong> Formal written quotations are valid for 14 calendar days from issuance unless specified otherwise in writing.</li>
                <li><strong>Dynamic Surcharges:</strong> Quotations are subject to fluctuations in vessel bunker adjustment factors (BAF), emergency bunker surcharges (EBS), currency adjustment factors (CAF), airline fuel/security surcharges, and statutory port tariff revisions between quote date and actual bill of lading execution.</li>
                <li><strong>Dimensional &amp; Weight Verification:</strong> Freight charges are calculated on gross weight or volumetric weight (whichever is greater). If physical cargo presented at CFS, airport terminal, or quay-side differs in dimensions, weight, or center-of-gravity from declared parameters, revised rates and handling surcharges apply immediately.</li>
              </ul>
            </section>

            {/* 3. Shipper Warranties & Dangerous Goods */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0b2144] tracking-tight">
                3. Customer Warranties &amp; Hazardous Goods Declarations
              </h2>
              <p>
                The customer warrants that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 text-base">
                <li><strong>Accuracy of Description:</strong> All descriptions, values, weights, HS customs codes, and marks supplied to the Company are full and accurate.</li>
                <li><strong>Packaging &amp; Lashing:</strong> Goods are properly packed, stowed, and marked to withstand the ordinary risks of multimodal transit, maritime roll-pitch, and intermediate crane handling.</li>
                <li><strong>Dangerous &amp; Hazardous Goods (IMO/DG):</strong> The customer must disclose in writing whether cargo contains hazardous, flammable, toxic, or regulated materials (IMDG/ICAO classification) accompanied by valid Material Safety Data Sheets (MSDS). The customer indemnifies the Company against all fines, environmental cleanup damages, or carrier penalties resulting from undeclared or improperly packaged hazardous materials.</li>
              </ul>
            </section>

            {/* 4. Limitation of Liability */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0b2144] tracking-tight">
                4. Carrier Liability Limitations &amp; Cargo Insurance
              </h2>
              <p>
                In common with international freight forwarding standards, Freyer operates under strictly defined statutory liability limits:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 text-base">
                <li><strong>Statutory Caps:</strong> Where the Company acts as a multimodal transport operator (MTO), liability for loss or damage to goods is limited to 2 SDRs per gross kilogram or 666.67 SDRs per package (whichever is higher) as stipulated by the Multimodal Transportation of Goods Act, 1993, or applicable Hague-Visby / Montreal Conventions.</li>
                <li><strong>Consequential &amp; Indirect Losses:</strong> The Company shall not under any circumstances be liable for indirect loss, business interruption, loss of market, delay damages, loss of profits, or consequential damages.</li>
                <li><strong>Cargo Transit Insurance:</strong> Freyer strongly recommends that clients obtain comprehensive Institute Cargo Clauses (A) all-risk transit insurance. The Company can arrange third-party marine/transit cargo insurance policies upon written client request.</li>
              </ul>
            </section>

            {/* 5. Force Majeure & Demurrage */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0b2144] tracking-tight">
                5. Demurrage, Detention &amp; Force Majeure
              </h2>
              <p>
                The customer is solely responsible for container demurrage, quay storage, airline detention, and customs hold penalties arising from delayed documentation, regulatory inspections (e.g. FSSAI, Plant Quarantine, SVB), or consignee non-acceptance.
              </p>
              <p>
                Neither party shall be liable for failure to perform obligations caused by acts of God, strikes, port lockouts, war, civil commotion, extreme meteorological events, piracy, or statutory government trade embargoes.
              </p>
            </section>

            {/* 6. Intellectual Property & Digital Usage */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0b2144] tracking-tight">
                6. Intellectual Property &amp; Website Usage
              </h2>
              <p>
                All trademarks, domain assets, case study project engineering photography, logos, and technical blueprints published on this portal are the proprietary property of Freyer International Logistics Pvt. Ltd. or their respective alliance licensors. Scraping, unauthorized data extraction, or commercial reproduction is prohibited.
              </p>
            </section>

            {/* 7. Governing Law & Dispute Resolution */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0b2144] tracking-tight">
                7. Governing Law &amp; Exclusive Jurisdiction
              </h2>
              <p>
                These Standard Trading Conditions and all contracts for carriage or services entered into with the Company shall be construed and governed in accordance with the substantive laws of India. Any dispute, controversy, or claim arising under or relating to these terms shall be subject to the exclusive jurisdiction of the competent courts in <strong>Bengaluru, Karnataka, India</strong> (or for maritime seaport matters, <strong>Chennai, Tamil Nadu, India</strong>).
              </p>
              <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 text-sm font-mono space-y-1.5 text-slate-800">
                <div className="text-base font-bold text-[#0b2144] font-sans mb-1">
                  Legal &amp; Commercial Contracts Desk
                </div>
                <div><strong>Entity:</strong> Freyer International Logistics Pvt. Ltd.</div>
                <div><strong>Registered Office:</strong> No.19, KMJ AVEN, 3rd Floor, Outer Ring Road, Marathahalli, Bengaluru - 560037, Karnataka, India</div>
                <div><strong>Contact:</strong> info@freyerinternational.com &middot; +91 44 4319 1919</div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
