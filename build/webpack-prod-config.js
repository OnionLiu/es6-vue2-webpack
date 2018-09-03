
const Webpack = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      CleanWebpackPlugin = require('clean-webpack-plugin'),
      CommonConfig = require("./config");

const config = {
  entry:  {
    main: CommonConfig.entryPath,
    common: ["vue", "vue-router", "vue-resource"]
  },
  output: {
    path: CommonConfig.outputPath,
    filename: "js/[name]-[hash].js"
  },
  module: CommonConfig.modules,
  plugins: [
    new Webpack.optimize.CommonsChunkPlugin({
      name: 'common'
    }),
    new HtmlWebpackPlugin({
      template: CommonConfig.templatePath
    }),
    new Webpack.optimize.UglifyJsPlugin(),
    new CleanWebpackPlugin(
      [CommonConfig.CleanPath],
      {
        root: process.cwd(),
        verbose: true,
        dry: false
      }
    )
  ]
}

module.exports = config
