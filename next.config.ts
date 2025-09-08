import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vercel.libererllc.com',
        pathname: '/images/**', // Optionally restrict to specific paths
      },
    ],
  },
};

export default nextConfig;