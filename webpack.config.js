const path = require('path');
const Dotenv = require('dotenv-webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'public'),
        // publicPath: '/'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 3000,
        historyApiFallback: true,
    },
    module: {
        rules:
            [
                {
                    test: [/.css$/, /\.(s*)css$/, /\.css$/i],
                    use:
                        [
                            'style-loader',
                            'css-loader',
                        ],
                    exclude: /node_modules/
                },
                {
                    test: /\.tsx?$/,
                    use:
                        [
                            {
                                loader: 'ts-loader',
                                options: { transpileOnly: true }
                            },
                        ],
                    exclude: /node_modules/
                },
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    use: [
                        'file-loader',
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                bypassOnDebug: true, // webpack@1.x
                                disable: true, // webpack@2.x and newer
                            },
                        },
                    ],
                },
                {
                    test: /\.(jpg|png)$/,
                    use: {
                        loader: 'url-loader',
                    },
                },
                // { test: /\.(js)$/, use: 'babel-loader' },

            ]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new Dotenv(),
        // new HtmlWebpackPlugin({
        //     template: 'public/index.html'
        // })
    ],
    node: {
        child_process: "empty",
        fs: "empty",
        dgram: "empty",
        // fs: "empty", // if unable to resolve "fs"
    },
};