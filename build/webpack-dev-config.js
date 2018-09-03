
const Webpack = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      CommonConfig = require("./config");

const config = {
  entry:  {
    main: CommonConfig.entryPath
  },
  output: {
    path: CommonConfig.outputPath,
    filename: "[name].js"
  },
  devServer: CommonConfig.devServer,
  module: CommonConfig.modules,
  plugins: [
    new HtmlWebpackPlugin({
      template: CommonConfig.templatePath
    })
  ]
}

module.exports = config;
