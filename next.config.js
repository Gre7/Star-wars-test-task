/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
