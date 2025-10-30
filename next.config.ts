import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port:'',
        pathname: '/images/**'
      },
    ],
  },
  /* config options here */
  
};

export default nextConfig;
