/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Active le basePath uniquement en production (GitHub Pages)
  basePath: process.env.NODE_ENV === 'production' ? '/is-it-jcvd' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/is-it-jcvd' : '',
};

export default nextConfig;
