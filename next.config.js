/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build', // Changed build output directory to 'build'
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
      },
    ],
  },
};

module.exports = nextConfig;
