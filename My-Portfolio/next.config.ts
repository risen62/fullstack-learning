import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  devIndicators: false,
  ...(process.env.NEXT_BUILD_WORKER_THREADS === "1"
    ? {
        experimental: { workerThreads: true, useTypeScriptCli: false, cpus: 2 },
      }
    : {}),
};

export default nextConfig;
