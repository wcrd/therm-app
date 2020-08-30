const path = require("path")
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")

const faviconPath = path.resolve(__dirname, 'src/media/icons/icons8-heating-50.png')

module.exports = {
  entry: {
    app: './src/app.js',
    about: './src/about.js',
    theory: './src/theory.js',
    index: './src/index.js',
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
      { test: /\.(png|svg|jpg|gif)$/, use: 'file-loader' }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/html/index.html",
      favicon: faviconPath,
      filename: "./index.html",
      chunks: ['index'],
    }),
    new HtmlWebPackPlugin({
      template: "./src/html/app.html",
      favicon: faviconPath,
      filename: "./app.html",
      chunks: [ 'app', 'dev_helpers' ],
    }),
    new HtmlWebPackPlugin({
      template: "./src/html/about.html",
      favicon: faviconPath,
      filename: "./about.html",
      chunks: ['about']
    }),
    new HtmlWebPackPlugin({
      template: "./src/html/theory.html",
      favicon: faviconPath,
      filename: "./theory.html",
      chunks: ['theory']
    })
  ]
}