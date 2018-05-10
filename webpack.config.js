
const webpack = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      CleanWebpackPlugin = require('clean-webpack-plugin'),
      commonConfig = require("./build/config");

const config = {
  entry:  {
    main: __dirname +commonConfig.entry,
    vendor: ["vue", "vue-router", "vue-resource"]
  },
  output: {
    path: __dirname + commonConfig.outputPash,
    filename: "[name].js"
  },
  devServer: commonConfig.devServer,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: [/node_modules/]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 1,
            name: 'images/[name].[ext]'
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'fonts/[name][hash].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new HtmlWebpackPlugin({
      template: __dirname + commonConfig.templateUrl,
      favicon: __dirname + commonConfig.faviconUrl
    })
  ]
}

if (process.env.NODE_ENV) {
  config.output.filename = "js/[name]-[hash].js";
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new CleanWebpackPlugin(
      [commonConfig.CleanPash],
      {
        root: __dirname,
        verbose: true,
        dry: false
      }
    )
  );
}

module.exports = config