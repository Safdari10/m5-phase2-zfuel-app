import { NextConfig } from "next";
import { Configuration } from "webpack";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config: Configuration) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        "@components": path.resolve(__dirname, "src/components"),
        "@db": path.resolve(__dirname, "src/db"),
        "@lib": path.resolve(__dirname, "src/lib"),
        "@app": path.resolve(__dirname, "src/app"),
      },
    };
    return config;
  },
};

export default nextConfig;