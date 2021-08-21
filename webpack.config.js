const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const plugins = [
  new CopyWebpackPlugin({ patterns: [{ from: './public' }] }),
];

module.exports = {
  devtool: 'hidden-source-map',
  devServer: {
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
