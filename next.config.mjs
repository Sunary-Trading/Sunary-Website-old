/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 確保 Next.js 使用靜態匯出模式
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.coingecko.com',
      },
      {
        protocol: "https",
        hostname: "cdn.sunary.tw",
      },
    ],
  },
};

export default nextConfig;
