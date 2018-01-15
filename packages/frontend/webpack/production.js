const { resolve } = require('path')
const {
  LoaderOptionsPlugin,
  EnvironmentPlugin,
} = require('webpack')
const UglifyPlugin = require('uglifyjs-webpack-plugin')
const AssetsPlugin = require('assets-webpack-plugin')
const webpackMerge = require('webpack-merge')
const commonConfig = require('./common')


module.exports = webpackMerge(commonConfig, {
  entry: {
    index: ['./index'],
  },

  plugins: [
    new LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
    new UglifyPlugin({
      parallel: 4,
      uglifyOptions: {
        ecma: 5,
      },
    }),
    new AssetsPlugin({
      filename: 'assets.json',
      path: resolve(__dirname, '..', 'dist'),
    }),
  ],
})
