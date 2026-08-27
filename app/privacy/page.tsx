import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Freyer International Logistics",
  description:
    "Privacy policy and data governance practices of Freyer International Logistics Pvt. Ltd. detailing inquiry handling, statutory compliance, and communication standards.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicyPage() {
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
            <span className="text-slate-900 font-medium">Privacy Policy</span>
          </div>

          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-[#c42f0b] text-xs sm:text-sm font-mono tracking-[0.22em] uppercase font-bold block mb-3">
              Data Governance &amp; Compliance
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#0b2144] leading-[1.08]">
              Privacy Policy
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
              This Privacy Policy explains how Freyer International Logistics Pvt. Ltd. collects, handles, and protects information submitted through our digital channels and commercial inquiries.
            </p>
          </div>

          <div className="max-w-3xl space-y-12 text-slate-700 text-base sm:text-lg leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0b2144] tracking-tight">
                1. Information We Collect
              </h2>
              <p>
                We only collect personal and commercial information that you voluntarily provide when requesting a freight quote, contacting an operating branch, submitting a career application, or engaging our commercial desks.
              </p>
              <p>This information may include:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 text-base">
                <li>Contact details: Name, company name, professional email address, phone number, and branch office interest.</li>
                <li>Shipment information: Origin, destination, commodity type, dimensions, estimated weight, and routing requirements submitted via the Freight Configurator.</li>
                <li>Recruitment submissions: Résumés, employment history, and contact coordinates submitted to our Human Resources desk.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0b2144] tracking-tight">
                2. Purpose and Use of Data
              </h2>
              <p>
                Freyer International Logistics Pvt. Ltd. processes submitted information exclusively for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 text-base">
                <li>Formulating and transmitting freight forwarding rate proposals and multimodal route plans.</li>
                <li>Facilitating direct communication between our commercial station leads and your enterprise.</li>
                <li>Fulfilling statutory customs documentation and compliance under Indian Customs AEO Tier-2 regulations.</li>
                <li>Evaluating prospective candidates for open operational roles across our 10 Indian hubs.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0b2144] tracking-tight">
                3. Data Protection and Confidentiality
              </h2>
              <p>
                We maintain strict administrative and technical safeguards to ensure that commercial freight rates, cargo specifications, and contact data remain strictly confidential. We do not sell, rent, or monetize personal information. Data is shared with overseas forwarding partners and statutory customs authorities solely to execute requested transportation movements.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0b2144] tracking-tight">
                4. Cookies and Analytical Tracking
              </h2>
              <p>
                This website uses essential functional cookies and minimal technical metrics required to deliver responsive layouts, interactive routing maps, and fast content delivery. We do not employ third-party behavioral advertising or cross-site tracking trackers.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0b2144] tracking-tight">
                5. Data Retention and Inquiries
              </h2>
              <p>
                Commercial inquiry records and compliance documentation are retained in accordance with statutory logistics audit timelines. To request data verification, correction, or deletion, contact our governance desk at:
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-sm font-mono space-y-1 text-slate-800">
                <div><strong>Freyer International Logistics Pvt. Ltd.</strong></div>
                <div>Corporate Office: No.19, KMJ AVEN, 3rd Floor, Outer Ring Road, Marathahalli, Bengaluru - 560037, Karnataka, India</div>
                <div>Governance Email: <a href="mailto:info@freyerinternational.com" className="text-[#c42f0b] hover:underline">info@freyerinternational.com</a></div>
                <div>AEO Tier-2 Accreditation: INAAQCA4076M0F243</div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
