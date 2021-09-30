const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  // entry: path.resolve(__dirname, "src/app.tsx"),
  entry: path.resolve(__dirname, "src/App.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    // filename: "app.js",
    filename: "App.js",
    publicPath: "/",
  },
  resolve: {
    modules: [path.resolve(__dirname, "node_modules")],
    extensions: [".ts", ".tsx", ".js"], // ts, tsx追加、jsx削除
//    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
//        test: [/\.js$/, /\.jsx$/],
        test: [/\.ts$/, /\.tsx$/],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript"]  // <- 追加
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
  devServer: {
//    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
  },
};
