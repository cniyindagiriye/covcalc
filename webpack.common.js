const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
    chunkFilename: '[id].js',
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.mjs', '.json'],
    alias: {
      root: path.resolve(__dirname, './src'),
    },
    fallback: {
      stream: require.resolve('stream-browserify'),
      crypto: require.resolve('crypto-browserify'),
      path: require.resolve('path-browserify'),
      fs: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/transform-runtime'],
        },
      },
      {
        test: /\.(?:ico|gif|jpg|png|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(),

    new Dotenv({
      safe: true,
      allowEmptyValues: true,
      systemvars: true,
      silent: true,
      defaults: false,
    }),

    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inlineSource: '.(js|jsx|css)$',
    }),

    new CopyPlugin({
      patterns: [
        {
          from: 'public/manifest.json',
          to: path.resolve(__dirname, 'build'),
        },
        {
          from: 'public/favicon.ico',
          to: path.resolve(__dirname, 'build'),
        },
        {
          from: 'public/*.png',
          to: path.resolve(__dirname, 'build'),
        },
      ],
    }),
  ],
};
