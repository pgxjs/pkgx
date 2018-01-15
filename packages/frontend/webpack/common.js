const { resolve } = require('path')
const HtmlPlugin = require('html-webpack-plugin')

const Package = require('../package.json')


module.exports = {
  name: 'pkx',
  context: resolve(__dirname, '..', 'src'),
  target: 'web',

  entry: {
    index: [],
    polyfill: [
      '@babel/polyfill',
    ],
  },

  output: {
    path: resolve(__dirname, '..', 'dist'),
    filename: 'js/[name]-[hash].js',
    publicPath: '/',
    pathinfo: false,
  },

  resolve: {
    extensions: ['.mjs', '.js'],
    modules: [
      resolve(__dirname, '..', 'src'),
      'node_modules',
    ],
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },

  plugins: [
    new HtmlPlugin({
      template: resolve(__dirname, '..', 'src', 'index.html'),
      version: Package.version,
    }),
  ],
}
