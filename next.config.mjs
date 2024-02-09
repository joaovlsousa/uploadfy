/** @type {import('next').NextConfig} */
const nextConfig = {
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
