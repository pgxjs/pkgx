const { resolve } = require('path')
const { FRONTEND_PORT, BACKEND_PORT } = require('@pkx/config')
const {
  LoaderOptionsPlugin,
  NamedModulesPlugin,
  EnvironmentPlugin,
  HotModuleReplacementPlugin,
} = require('webpack')
const webpackMerge = require('webpack-merge')
const AssetsPlugin = require('assets-webpack-plugin')

// TODO remove that hack
const uiBabelConfig = require('@pkx/ui/build.babelrc.json')

const commonConfig = require('./common')


module.exports = webpackMerge(commonConfig, {
  devtool: 'inline-source-map',

  entry: {
    index: ['./index'],
  },

  module: {
    rules: [
      {
        test: /@pkx\/ui/,
        loader: 'babel-loader',
        options: uiBabelConfig,
      },
    ],
  },

  resolve: {
    alias: {
      '@pkx/ui': resolve(__dirname, '..', 'node_modules', '@pkx', 'ui', 'src'),
    },
  },

  plugins: [
    new LoaderOptionsPlugin({
      minimize: false,
      debug: true,
    }),
    new HotModuleReplacementPlugin(),
    new NamedModulesPlugin(),
    new EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV || 'development',
    }),
    new AssetsPlugin({
      filename: 'assets.json',
      path: resolve(__dirname, '..', 'dist'),
    }),
  ],

  devServer: {
    contentBase: resolve(__dirname, '..', 'static'),
    historyApiFallback: true,
    hot: true,
    noInfo: true,
    overlay: true,
    stats: {
      colors: true,
      version: true,
    },
    port: FRONTEND_PORT,
    publicPath: '/',

    proxy: {
      '/-': {
        target: `http://localhost:${BACKEND_PORT}`,
      },
    },
  },
})
