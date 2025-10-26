import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gowhereitzat.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
