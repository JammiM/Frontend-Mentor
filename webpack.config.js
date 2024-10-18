const path = require("path");

module.exports = {
  entry: "./recipe-page-main/src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./recipe-page-main/dist"),
  },
};
