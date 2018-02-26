const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, '/client'),
  entry: path.join(__dirname, '/client/index.jsx'),
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'env'],
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, '/public/dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
