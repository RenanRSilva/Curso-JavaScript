const path = require('path'); //CommonJS

module.exports = {
    mode: 'develpment',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
          exclude: /node_modules/,
          test: /\.js$/,
          use: {
              loader: 'babael-loader',
              options: {
                  presets: ['@babel/env']
              }
          }
        }]
    },
    devtool: 'source-map'
    };