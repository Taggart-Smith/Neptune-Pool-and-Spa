/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Optional: Set basePath if your repo is not your GitHub username (e.g., /neptune-app)
  basePath: '/neptune-app',
  trailingSlash: true,
};

export default nextConfig;
