const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: "production",
  entry: {
    bundle: path.join(__dirname, "src", "index.tsx"),
  },
  devServer: {
    port: 4000,
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          MiniCSSExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        exclude: /node_modules/,
        use: ["file-loader?name=[name].[ext]"],
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html"),
      hash: true,
    }),
    new MiniCSSExtractPlugin({
      filename: "static/css/[name].css",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "public" }],
    }),
    new Dotenv(),
  ],
};
