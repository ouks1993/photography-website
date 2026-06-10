import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drscdn.500px.org",
      },
    ],
  },
};

export default nextConfig;
