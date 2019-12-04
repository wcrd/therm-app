const path = require("path")
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCSSWebPackPlugin = require("mini-css-extract-plugin")
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")

module.exports = {
  entry: {
    app: './src/app.js',
    about: './src/about.js',
    theory: './src/theory.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  target: 'web',
  //devtool: 'source-map',
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins 
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [ MiniCSSWebPackPlugin.loader, 'css-loader' ]
      },
      {
       test: /\.(png|svg|jpg|gif)$/,
       use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/html/index.html",
      filename: "index.html",
      chunks: [ 'app' ]
    }),
    new HtmlWebPackPlugin({
      template: "./src/html/about.html",
      filename: "about.html",
      chunks: ['about']
    }),
    new HtmlWebPackPlugin({
      template: "./src/html/theory.html",
      filename: "theory.html",
      chunks: ['theory']
    }),
    new MiniCSSWebPackPlugin({
      filename: "[name].css",
      chunkFilename: "[name].css"
    })
  ]
}