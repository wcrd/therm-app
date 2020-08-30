const path = require("path")
const webpack = require('webpack')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")

const buildPath = path.resolve(__dirname, 'dist')
const faviconPath = path.resolve(__dirname, 'src/media/icons/icons8-heating-50.png')

module.exports = {

    // This option controls if and how source maps are generated.
    // https://webpack.js.org/configuration/devtool/
    devtool: false,

    // https://webpack.js.org/concepts/entry-points/#multi-page-application
    entry: {
        app: './src/app.js',
        about: './src/about.js',
        theory: './src/theory.js',
        index: './src/index.js'
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
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            { 
                test: /\.(png|svg|jpg|gif)$/, 
                use: 'file-loader' 
            }
        ]
    },

    // https://webpack.js.org/concepts/plugins/
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            favicon: faviconPath,
            inject: 'body',
            chunks: ['index'],
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/app.html',
            favicon: faviconPath,
            inject: 'body',
            chunks: ['app'],
            filename: 'app.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/about.html',
            favicon: faviconPath,
            inject: 'body',
            chunks: ['about'],
            filename: 'about.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/theory.html',
            favicon: faviconPath,
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
                terserOptions: {
                    mangle: true,
                }
            }),
            new OptimizeCssAssetsPlugin({})
        ]
    }
};