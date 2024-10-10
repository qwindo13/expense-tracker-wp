/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'expenses-tracker-fc76f9.ingress-alpha.ewp.live',
      },
    ],
  },
};

export default nextConfig;
