var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './js/index.js',
  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /(pixi|phaser).js/,
        loader: 'script'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { context: 'public', from: '**/*' }
    ])
  ]
};
