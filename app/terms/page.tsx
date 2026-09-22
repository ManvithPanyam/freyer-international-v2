import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHeader, THEME_TOKENS } from "@/components/ui/design-system";

export const metadata: Metadata = {
  title: "Terms & Conditions | Standard Trading Conditions",
  description:
    "Commercial trading terms, multimodal carriage conditions, quotation validity, and limitation of liability governing services by Freyer International Logistics Pvt. Ltd.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-[#e1390f] selection:text-white">
      <Header />
      <main>
        <PageHeader
          breadcrumbs={[{ label: "Terms of Service" }]}
          eyebrow="Commercial Trading Terms &middot; Statutory Framework"
          title="TERMS & CONDITIONS"
          subtitle="MULTIMODAL CARRIAGE & TRADING GOVERNANCE"
          description="These Standard Trading Conditions govern all quotation estimates, multimodal freight carriage, customs brokerage, contract warehousing, and project cargo engineering services rendered by Freyer International Logistics Pvt. Ltd."
        />

        <div className={`py-16 sm:py-24 max-w-[1560px] mx-auto ${THEME_TOKENS.layout.contentGutter}`}>
          <div className="max-w-4xl space-y-12 text-slate-300 font-light text-base sm:text-lg leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white font-mono uppercase tracking-tight">
                1. Application &amp; Regulatory Framework
              </h2>
              <p>
                All services provided by Freyer International Logistics Pvt. Ltd. (&ldquo;the Company&rdquo;) are subject to these Standard Trading Conditions. Contracts of carriage and warehousing are executed in accordance with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-400 text-base font-light">
                <li>The Multimodal Transportation of Goods Act, 1993 (India).</li>
                <li>The Indian Carriage of Goods by Sea Act, 1925, and Carriage by Air Act, 1972.</li>
                <li>The Customs Act, 1962, under Authorized Economic Operator (CBIC AEO-LO) rules.</li>
                <li>The International Air Transport Association (IATA) and FIATA standard operating rules.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white font-mono uppercase tracking-tight">
                2. Quotations &amp; Commercial Rates
              </h2>
              <p>
                Quotations provided by the Company are subject to carrier space availability and equipment positioning at the time of confirmed booking. Unless otherwise stated in writing:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-400 text-base font-light">
                <li>Ocean and air freight rates are subject to bunker adjustment factors (BAF), currency adjustment factors (CAF), and terminal handling charges (THC) prevailing at time of shipment.</li>
                <li>Customs duties, GST, statutory fees, demurrage, and detention are payable directly by the customer unless explicitly included in written tender agreements.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white font-mono uppercase tracking-tight">
                3. Limitation of Liability &amp; Marine Insurance
              </h2>
              <p>
                In the absence of declared value and payment of supplementary ad valorem charges, the Company&apos;s liability for loss or damage to cargo is strictly limited in accordance with statutory transport conventions:
              </p>
              <p>
                Shippers and consignors are strongly advised to secure comprehensive All-Risk marine cargo insurance through the Company&apos;s Risk Management division to protect against transit loss, general average, and physical damage.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
