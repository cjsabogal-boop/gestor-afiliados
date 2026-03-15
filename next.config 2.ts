import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  serverExternalPackages: [
    'firebase-admin',
    '@google-cloud/firestore',
    '@opentelemetry/api',
  ],
};

export default nextConfig;
