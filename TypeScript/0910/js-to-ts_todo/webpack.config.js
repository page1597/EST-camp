const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 올바르게 모듈 가져오기

module.exports = {
  entry: "./index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/, // TypeScript 파일을 처리하도록 설정
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"], // 파일 확장자 추가
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"), // 템플릿 파일의 경로 설정
    }),
  ],
};
