import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //output: 'export',
  reactStrictMode: true,
  images : {
    remotePatterns : [
      {
        protocol: 'https',
        hostname: 'api.quickdecor.com.ua'
      },
      ] // <== Domain name
  }
};

export default nextConfig;
