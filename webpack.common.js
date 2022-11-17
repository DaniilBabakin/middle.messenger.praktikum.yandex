const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "project-name.bundle.js",
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
    alias: {
      index: path.resolve(__dirname, "./src/index.ts"),
      core: path.resolve(__dirname, "./src/core"),
      components: path.resolve(__dirname, "./src/components"),
      helpers: path.resolve(__dirname, "./src/helpers"),
      pages: path.resolve(__dirname, "./src/pages"),
      service: path.resolve(__dirname, "./src/service"),
      constants: path.resolve(__dirname, "./src/constants"),
      api: path.resolve(__dirname, "./src/api"),
      handlebars: "handlebars/dist/handlebars.min.js",
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
      },
      // Изображения
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      // Шрифты и SVG
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
      // Стили
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
      favicon: './public/favicon.ico',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "style-[hash].css",
    }),
  ],
}
