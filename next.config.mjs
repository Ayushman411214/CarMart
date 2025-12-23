/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsHmrCache: false,
        appDir: true,// defaults to true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zdqscbhbjxuajtvcespm.supabase.co",
      },
    ],
  },
};

export default nextConfig;
