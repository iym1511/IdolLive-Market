import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/market/:path*", // 프록시 경로
        destination: "http://localhost:8000/:path*",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/home", // 첫 로딩 페이지 설정
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
