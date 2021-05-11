const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const plugins = [
  new CopyWebpackPlugin({ patterns: [{ from: './public' }] }),
  new webpack.HotModuleReplacementPlugin(),
];

module.exports = {
  devtool: 'hidden-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
    port: 8557,
  },
  entry: './src/js/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'index.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  optimization: {
    moduleIds: 'named',
  },
};
