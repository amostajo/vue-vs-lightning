// webpack.config.js
const VueLoaderPlugin = require( 'vue-loader/lib/plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const webpack = require( 'webpack' );
const path = require( 'path' );

/**
 * Webpack configuration file.
 *
 * @author Bellwether Coffee <https://www.bellwethercoffee.com/>
 * @package onboarding
 * @version 1.1.0
 */
module.exports = {
    mode: 'production',
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
    },
    entry: {
        'init': './vue/src/init.js',
        'app': './vue/src/apps/app.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve( __dirname, 'vue/build' ),
        publicPath: './vue/build',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                  'vue-style-loader',
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                ]
            },
            {
                test: /\.scss$/,
                use: [
                  'vue-style-loader',
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  'sass-loader',
                ]
            },
        ]
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin( {
            filename: '[name].css',
            chunkFilename: '[id].css',
            path: path.resolve( __dirname, 'vue/css' ),
            publicPath: './vue/build',
        } ),
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js',
        },
    },
};