/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    prependData: `@import "Common/styles/index.scss";`
  }
}

module.exports = nextConfig;
