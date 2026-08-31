import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0b2144",
};

export const metadata: Metadata = {
  title: {
    default: "Freyer International Logistics | Freight Forwarding & Project Cargo",
    template: "%s | Freyer International Logistics",
  },
  description:
    "Integrated logistics, international air and ocean freight forwarding, AEO Tier-2 certified customs brokerage, and heavy-lift project cargo engineering across India and global trading corridors.",
  metadataBase: new URL("https://freyer-international-v2.vercel.app"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Freyer International Logistics | Precision Freight Forwarding",
    description:
      "Integrated logistics, AEO Tier-2 customs clearance, high-bay warehousing, and heavy-lift project cargo engineering across 10 Indian hubs and 190+ countries.",
    url: "https://freyer-international-v2.vercel.app",
    siteName: "Freyer International Logistics",
    images: [
      {
        url: "/images/hero-poster.jpg",
        width: 1200,
        height: 630,
        alt: "Freyer International Logistics Corporate & Industrial Operations",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freyer International Logistics",
    description:
      "Precision freight forwarding, AEO Tier-2 customs clearance, and heavy-lift engineering across India.",
    images: ["/images/hero-poster.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://freyer-international-v2.vercel.app/#organization",
      "name": "Freyer International Logistics",
      "legalName": "Freyer International Logistics Private Limited",
      "url": "https://freyer-international-v2.vercel.app",
      "logo": "https://freyer-international-v2.vercel.app/images/logo.png",
      "description": "Integrated logistics, international freight forwarding, AEO Tier-2 certified customs brokerage, and project cargo engineering.",
      "telephone": "+91-44-43191919",
      "email": "Selvakumar@freyerinternational.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "TAGA Tower, New No: 45 Old No 20, 1st Floor, Sait Colony, Egmore",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600008",
        "addressCountry": "IN"
      },
      "award": [
        "AEO Tier-2 Authorized Economic Operator (CBIC License INAAQCA4076M0F243)",
        "IATA Regulated Cargo Agent Accreditation",
        "Great Place to Work Certified"
      ],
      "memberOf": [
        {
          "@type": "Organization",
          "name": "WCA World"
        },
        {
          "@type": "Organization",
          "name": "Security Cargo Network (SCN)"
        },
        {
          "@type": "Organization",
          "name": "Association of Multimodal Transport Operators of India (AMTOI)"
        },
        {
          "@type": "Organization",
          "name": "Air Cargo Agents Association of India (ACAAI)"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://freyer-international-v2.vercel.app/#website",
      "url": "https://freyer-international-v2.vercel.app",
      "name": "Freyer International Logistics",
      "publisher": {
        "@id": "https://freyer-international-v2.vercel.app/#organization"
      }
    },
    {
      "@type": "LogisticsService",
      "@id": "https://freyer-international-v2.vercel.app/#service",
      "name": "Multimodal Freight Forwarding & Project Cargo Engineering",
      "provider": {
        "@id": "https://freyer-international-v2.vercel.app/#organization"
      },
      "serviceType": [
        "Ocean Freight Forwarding (FCL/LCL)",
        "International Air Cargo Handling",
        "AEO Tier-2 Customs Clearance",
        "Heavy-Lift Project Cargo Logistics",
        "Contract Warehousing & 3PL Distribution",
        "Marine Cargo Risk Underwriting & Survey"
      ],
      "areaServed": [
        {
          "@type": "Country",
          "name": "India"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Worldwide via 190+ Country Forwarding Alliances"
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased bg-[#fbfcfd] text-[#0b2144]">{children}</body>
    </html>
  );
}
