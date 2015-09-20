'use strict';

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer-core')();
var csswring = require('csswring')();

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public/js',
    filename: './bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css!postcss')
      }
    ]
  },
  postcss: [
    autoprefixer({
      browsers: ['last 1 version']
    }),
    csswring({
      removeAllComments: true
    })
  ],
  node: {
    fs: 'empty'
  },
  plugins: [
    new ExtractTextPlugin('../css/styles.css')
  ],
  devtool: '#inline-source-map'
};