import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost", "vercel.libererllc.com"],

    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000", // Allow dev API
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "vercel.libererllc.com",
        pathname: "/images/**",
      },
    ],
  },

}


export default nextConfig;