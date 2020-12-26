// パスの取得
const path = require("path");

// プラグインゾーン
// const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //こいつは ｛｝なし！！！
//

module.exports = {
  // エントリーファイル どこから始めるか
  entry: "./src/ts/main.ts",
  // コンパイル後の出力先とファイル名
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[hash].js",
    // publicPath: "./dist",
    chunkFilename: "js/[name].[contenthash].js",
  },

  // ts-loader  typescriptをコンパイルする
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },

  // プラグインたち
  plugins: [
    //ビルド時に、outDirのファイルをリセットしてから出力する。
    // 不要なファイルの消し忘れを防ぐため
    new CleanWebpackPlugin({
      // 削除対象を記載
      // cleanOnceBeforeBuildPatterns: ["**/*"],
    }),
    // webpackで生成されたファイルを読み込んだhtmlファイルを生成して出力する
    // scriptタグやlinkタグで 手動で読み込む必要がなくなる
    new HtmlWebpackPlugin({
      // ここのパスにあるHTMLファイルに 必要なscriptタグや linkタグをつけて、
      // 上記の module.exoorts{}内の、outputの場所にファイルを生成する
      template: "./src/html/index.html",
      // 読み込ませるjsファイル名
      chunks: ["main"],
    }),
  ],
};
