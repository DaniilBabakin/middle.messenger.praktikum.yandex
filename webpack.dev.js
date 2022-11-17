const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-source-map',
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 2000,
  },
});
