const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

const useAlias = process.env.USE_ALIAS;

const plugins = [
  new WriteFilePlugin(),
  new CopyWebpackPlugin([{ from: './public' }]),
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin(),
];

let alias;
if (useAlias) {
  console.log('Using alias to local grommet-icons.');
  alias = {
    'grommet-icons': path.resolve(__dirname, '../grommet-icons/src/js'),
    'grommet': path.resolve(__dirname, '../grommet/src/js'),
  };
}

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
    publicPath: '/grommet-icons/',
  },
  resolve: {
    alias,
    extensions: ['.js', '.json'],
  },
  plugins,
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
