const path = require("path");

module.exports = [
  {
    mode: "production",
    entry: {
      recipe_page: "./recipe-page-main/src/index.js",
    },
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "./recipe-page-main/dist"),
    },
  },
];
