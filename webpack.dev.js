//const path = require("path")
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    app: './src/app.js',
    about: './src/about.js',
    theory: './src/theory.js',
    // This is for development only
    dev_helpers: './src/js/dev_helpers/console_access_components.js'
  },
  devServer: {
    port: 8080
  },
  module: {
    rules: [
      { test: /\.html$/, use: "html-loader" },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", options: { presets: ['@babel/preset-env'] } },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/html/app.html",
      filename: "./index.html",
      chunks: [ 'app', 'dev_helpers' ],
    }),
    new HtmlWebPackPlugin({
      template: "./src/html/about.html",
      filename: "./about.html",
      chunks: ['about']
    }),
    new HtmlWebPackPlugin({
      template: "./src/html/theory.html",
      filename: "./theory.html",
      chunks: ['theory']
    })
  ]
}