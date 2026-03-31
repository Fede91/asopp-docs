import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
