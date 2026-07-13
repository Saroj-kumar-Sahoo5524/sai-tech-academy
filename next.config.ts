import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow importing from @react-three packages
  transpilePackages: [],
  // Enable experimental features for better performance
  experimental: {},
  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
