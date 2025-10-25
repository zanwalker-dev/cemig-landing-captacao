/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // gera /out p/ WP
  images: { unoptimized: true }, // compatível com export
  trailingSlash: true, // ajuda com uploads/links no WP
  experimental: {
    optimizePackageImports: ["clsx", "tailwind-merge"],
    // reactCompiler: true, // deixe comentado (decidimos "No" por agora)
  },
};

export default nextConfig;
