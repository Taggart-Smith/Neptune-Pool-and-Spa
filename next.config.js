/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If your repo is not at the root, set basePath and assetPrefix
  // basePath: '/YOUR_REPO_NAME',
  // assetPrefix: '/YOUR_REPO_NAME/',
};

module.exports = nextConfig;
