import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // Security: Remove X-Powered-By header
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.freyerinternational.com",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
};

export default nextConfig;
