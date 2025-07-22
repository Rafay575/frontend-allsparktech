import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    dynamicParams: true, // ✅ ensure dynamic routes work properly on Vercel
  },
};

export default nextConfig;
