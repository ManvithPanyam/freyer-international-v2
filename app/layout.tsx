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
  maximumScale: 5, // Accessible zoom enabled
  themeColor: "#0b2144",
};

export const metadata: Metadata = {
  title: "Freyer International Logistics | Freight Forwarding & Project Cargo",
  description:
    "Integrated logistics, international air and ocean freight forwarding, AEO-certified customs brokerage, and heavy-lift project cargo engineering across India.",
  metadataBase: new URL("https://www.freyerinternational.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Freyer International Logistics",
    description: "Precision Freight Forwarding & Heavy-Lift Project Cargo Engineering.",
    url: "https://www.freyerinternational.com",
    siteName: "Freyer International Logistics",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-screen antialiased bg-[#f8f9fa] text-[#0b2144]">{children}</body>
    </html>
  );
}
