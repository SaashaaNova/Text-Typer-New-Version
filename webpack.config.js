// Konfiguracja Webpack
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  devtool: 'cheap-eval-source-map',
  watch: true,
  mode: 'development',
  entry: './src/App.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9002,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  module: {

    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', '@babel/preset-react',
            ],
            plugins: [
              [
                '@babel/plugin-proposal-class-properties', {
                  loose: true,
                },
              ],
            ],
          },
        },
      }, {
        test: /\.(png|jpe?g|svg|gif|woff|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/',
          },
        },
      }, {
        test: /\.css/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }, {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
      hash: true,
    }),
    new MiniCssExtractPlugin({ filename: '[name].css', chunkFilename: '[id].css' }),
  ],
};
