/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@acme/ui', 'lodash-es', 'antd'],
};

export default nextConfig;