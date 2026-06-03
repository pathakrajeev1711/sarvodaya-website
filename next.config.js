/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  },
  async redirects() {
    return [
      {
        source: "/programs/sarvodaya-ias",
        destination: "/programs/sarvodaya-youth-empowerment",
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
