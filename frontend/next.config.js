module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  webpack(config) {
    config.optimization.splitChunks = {
      chunks: 'all',
      maxSize: 200000, // Adjust the max size of a chunk (in bytes)
    };
    return config;
  },
};
