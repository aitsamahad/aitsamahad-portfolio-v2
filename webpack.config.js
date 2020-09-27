module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        loaders: ["file-loader", "webp-loader?{quality: 13}"],
      },
    ],
  },
};
