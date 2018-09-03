module.exports = {
  entryPath: process.cwd() + "/app/src/main.js",
  outputPath: process.cwd() + "/app/dist/",
  devServer: {
    // host: '0.0.0.0',
    port: 8888,
    historyApiFallback: true,
    inline: true
  },
  modules: {
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
        exclude: [/nodemodules/]
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
  templatePath: process.cwd() + "/build/index.html",
  faviconPath: "",
  CleanPath: process.cwd() + "/app/dist/",
}
