import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',         // allow port 5000
        pathname: '/images/**',
      }
      // {
      //   protocol: 'https',
      //   hostname: 'vercel.libererllc.com',
      //   pathname: '/images/**', // Optionally restrict to specific paths
      // }
    ],
    
  },
};

export default nextConfig;