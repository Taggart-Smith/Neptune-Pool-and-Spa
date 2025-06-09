/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd? '/Neptune-Pool-and-Spa' : '',
  trailingSlash: true,
};

module.exports = nextConfig;
