import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // skips all ESLint errors at build time
  },
};

export default nextConfig;
