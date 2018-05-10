module.exports = {
  entry: "/app/src/main.js",
  outputPash: "/app/dist/",
  devServer: {
    port: 8888,
    historyApiFallback: true,
    inline: true
  },
  templateUrl: "/build/index.html",
  faviconUrl: "/app/icons/web-favicon.ico",
  CleanPash: "app/dist/js",
}
