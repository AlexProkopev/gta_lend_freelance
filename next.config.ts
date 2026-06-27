import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.rockstargames.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "cdn2.rockstargames.com" },
      { protocol: "https", hostname: "img.youtube.com" },
    ],
    unoptimized: true,
  },
};

export default nextConfig;

