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

            ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    }
};