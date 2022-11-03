const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
