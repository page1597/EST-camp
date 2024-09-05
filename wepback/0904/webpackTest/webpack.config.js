const path = require("path");
const webpack = require("webpack");
require("dotenv").config();
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// node.js 환경에서 모듈을 밖으로 빼내는 문법
module.exports = {
  mode: process.env.NODE_ENV === "development" ? "development" : "production",
  entry: {
    main: path.resolve("./src/app.js"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  module: {
    rules: [
      // {
      //   test: /\.js/,
      //   use: [path.resolve("./myLoader.js")],
      // },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
      {
        // 여기 추가합니다.
        test: /\.(png|jpg|gif|svg|webp)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024, // 1kb가 1024byte 이기 때문에 20kb를 원한다면 1024에 20을 곱합니다.
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: "마지막 빌드 시간은 " + new Date().toLocaleString() + " 입니다.",
    }),
    new webpack.DefinePlugin({
      dev: JSON.stringify(process.env.DEV_API),
      pro: JSON.stringify(process.env.PRO_API),
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html", // 목표 html 파일의 위치입니다.
    }),

    // 빌드 이전에 남아있는 결과물을 제거
    new CleanWebpackPlugin(),
  ],
};
