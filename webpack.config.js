const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'public')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 3000,
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

            ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    }
};