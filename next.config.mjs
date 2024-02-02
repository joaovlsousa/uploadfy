/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'anhghlqeivqemenrwgot.supabase.co',
        protocol: 'https',
      },
    ],
  },
}

export default nextConfig
