const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const phaserModule = path.join(__dirname, '/node_modules/phaser/');
const phaser = path.join(phaserModule, 'build/custom/phaser-split.js');
const pixi = path.join(phaserModule, 'build/custom/pixi.js');
const p2 = path.join(phaserModule, 'build/custom/p2.js');

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      path.resolve(__dirname, 'js/index.js')
    ],
    vendor: [ 'pixi.js', 'p2', 'phaser' ]
  },
  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'bundle.js'
  },
  devTool: 'source-map',
  module: {
    loaders: [
      {
        test: /pixi\.js$/,
        loader: 'expose?PIXI'
      },
      {
        test: /p2\.js$/,
        loader: 'expose?p2'
      },
      {
        test: /phaser-split\.js$/,
        loader: 'expose?Phaser'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join(__dirname, 'js')
      }
    ]
  },
  resolve: {
    alias: {
      'phaser': phaser,
      'pixi.js': pixi,
      'p2': p2
    }
  },
  plugins: [
    new CopyWebpackPlugin([
      { context: 'public', from: '**/*' }
    ]),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ]
};
