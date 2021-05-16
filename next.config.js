const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = withPlugins([optimizedImages]);

module.exports = {
  webpack: config => {
    config.plugins = config.plugins || [];

    config.node = {
      fs: "empty",
    };

    return config;
  },
};

module.exports = {
  target: "serverless",
  webpack: function (config) {
    config.module.rules.push({ test: /\.md$/, use: "raw-loader" });
    config.module.rules.push({ test: /\.yml$/, use: "raw-loader" });
    return config;
  },
};

module.exports = {
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,
      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true,
      }),
    ];

    return config;
  },
};
