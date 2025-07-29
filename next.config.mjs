/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "localhost:1337",
      "classic-paradise-3c626b956c.media.strapiapp.com",
    ],
  },
  rewrites() {
    return [
      {
        source: "/Competitions/activeCompetitions",
        destination: "/competitions",
      },
      {
        source: "/competitions/pastCompetitions",
        destination: "/competitions",
      },
    ];
  },
};

export default nextConfig;
