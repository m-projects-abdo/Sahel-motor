// webpack.config.js
const path = require( 'path' );

module.exports = {
    context: __dirname,
    entry: './src/service/index.js',
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", {
                    loader: "postcss-loader",
                        options: {
                        postcssOptions: {
                            plugins: [ [ "postcss-preset-env", { /* options */ }, ], ],
                      },
                    },
                  },
                ],
            },
        ]
    },
    plugins: []
};