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
  metadataBase: new URL("https://freyer-international-logistics.vercel.app"),
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
    url: "https://freyer-international-logistics.vercel.app",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-screen antialiased bg-[#fbfcfd] text-[#0b2144]">{children}</body>
    </html>
  );
}
