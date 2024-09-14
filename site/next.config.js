/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'gh0stnet Kasm Registry',
    description: 'The official gh0stnet Kasm registry of workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://misuchiru03.github.io/kasm-registry/',
    contactUrl: 'https://github.com/misuchiru03/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
