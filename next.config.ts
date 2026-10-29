import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // Screenshots carry small UI text, so they ship at a higher quality.
    qualities: [75, 90],
  },
};

export default nextConfig;
