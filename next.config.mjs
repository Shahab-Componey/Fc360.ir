/** @type {import('next').NextConfig} */
const nextConfig = {
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
