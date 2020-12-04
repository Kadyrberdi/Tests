const path = require('path');

module.exports = {
    mode: 'production',
    entry: "./js/index.js",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: '/dist'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }

}