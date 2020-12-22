

var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: ['babel-polyfill', './index.tsx'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '/dist'),
        publicPath: 'dist'
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',
    node: { fs: 'empty' },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.json', '.less', '.css']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },

            // CSS loader
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            modules: true,
                            // localIdentName: "[local]___[hash:base64:5]"
                        }
                    },
                    {
                        loader: "less-loader"
                        // options: {
                        //     relativeUrls: true
                        // }
                    }
                ]
            },

            { test: /\.css$/, loader: 'style-loader!css-loader', exclude: '/node_modules//' },

            // Url loader (semantic-ui-css)
            {
                test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            esModule: false
                        }
                    },
                ]
            }
        ]
    },

    devServer: {
        historyApiFallback: true,
        port: 8000,
        host: '0.0.0.0'
    }
};

