const commonConfig = require("./webpack.common");
const { merge } = require("webpack-merge");

// ローカルサーバーで使うため必要
const path = require("path");

module.exports = merge(commonConfig, {
  mode: "development",
  // ソースマップの出力
  // devtool: "inline-source-map",
  watch: true,
  // HMR付きローカルサーバーの起動
  devServer: {
    open: true,
    // watchContentBase: true,
    // port: 8000,
    contentBase: path.resolve(__dirname, "dist"),
  },
});
