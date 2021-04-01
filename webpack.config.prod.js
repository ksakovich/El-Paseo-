const path = require('path');
const CleanLugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'false',
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

            ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new CleanLugin.CleanWebpackPlugin()
    ]
};