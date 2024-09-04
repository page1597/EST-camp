const path = require("path");

// node.js 환경에서 모듈을 밖으로 빼내는 문법
module.exports = {
  mode: "development",
  entry: {
    main: path.resolve("./src/app.js"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
};
