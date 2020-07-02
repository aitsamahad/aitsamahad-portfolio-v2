module.exports = {
  webpack: config => {
    config.plugins = config.plugins || [];

    config.node = {
      fs: "empty",
    };

    return config;
  },
};
