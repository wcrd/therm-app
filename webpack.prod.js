const path = require("path")
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCSSWebPackPlugin = require("mini-css-extract-plugin")
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")

const buildPath = path.resolve(__dirname, 'dist')

module.exports = {

    // This option controls if and how source maps are generated.
    // https://webpack.js.org/configuration/devtool/
    devtool: false,

    // https://webpack.js.org/concepts/entry-points/#multi-page-application
    entry: {
        app: './src/app.js',
        about: './src/about.js',
        theory: './src/theory.js'
    },

    // how to write the compiled files to disk
    // https://webpack.js.org/concepts/output/
    // using hash (full build hash) for now as it is simplest
    output: {
        filename: '[name].[hash:8].js',
        path: buildPath
    },

    // https://webpack.js.org/concepts/loaders/
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },

    // https://webpack.js.org/concepts/plugins/
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/app.html',
            inject: 'body',
            chunks: ['app'],
            filename: 'app.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/about.html',
            inject: 'body',
            chunks: ['about'],
            filename: 'about.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/theory.html',
            inject: 'body',
            chunks: ['theory'],
            filename: 'theory.html'
        }),
        new MiniCssExtractPlugin({
            // Using content hash so CSS is only reloaded if it changes
            filename: "[name].[contenthash].css",
            chunkFilename: "[name].[contenthash].css"
        })
    ],

    // https://webpack.js.org/configuration/optimization/
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: false,
                options: {
                    mangle: true,
                }
            }),
            new OptimizeCssAssetsPlugin({})
        ]
    }
};