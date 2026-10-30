import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // The old Vercel address keeps working and sends people to the real domain.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "portfolio-eosin-delta-24.vercel.app" }],
        destination: "https://www.anthonyjaimez.com/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    // Screenshots carry small UI text, so they ship at a higher quality.
    qualities: [75, 90],
  },
};

export default nextConfig;
