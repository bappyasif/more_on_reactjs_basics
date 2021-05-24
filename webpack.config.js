let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index-bundle.js",
  },
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "./src"),
    // contentBase: path.join(__dirname, "./dist"),
    hot: true,
    // make histopry api to true, so that router can have access to all routes url
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
        // use: {
        //   loader: ["style-loader", "css-loader"]
        // }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./src/index.html"),
      title: "React App Boilerplate Code With Webpack",
      favicon: "./src/logo.svg",
    }),
    // [["@babel/plugin-proposal-class-properties", { loose: true }]],
    // [["@babel/plugin-proposal-class-properties"]],
  ],
  // plugins: [["@babel/plugin-proposal-class-properties", { loose: true }]]
};
