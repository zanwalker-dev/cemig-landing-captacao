import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // gera /out para deploy estático (WordPress)
  images: {
    unoptimized: true, // compatível com next export
  },
  trailingSlash: true, // facilita uploads em alguns ambientes WP
  experimental: {
    optimizePackageImports: ["clsx", "tailwind-merge"],
  },
};

export default nextConfig;
