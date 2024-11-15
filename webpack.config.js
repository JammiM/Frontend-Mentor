const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = [
  {
    mode: "development",
    entry: {
      product_preview_card_component:
        "./product-preview-card-component-main/src/index.js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "/product-preview-card-component-main/src/index.html",
      }),
    ],
    devtool: "inline-source-map",
    devServer: {
      static: "./product-preview-card-component-main",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(
        __dirname,
        "./product-preview-card-component-main/dist"
      ),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/resource",
        },
      ],
    },
  },
];
