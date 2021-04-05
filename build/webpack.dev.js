const { merge } = require('webpack-merge')
const { resolvePath } = require('./utils')
const base = require('./webpack.common')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  target: 'web',
  devServer: {
    contentBase: resolvePath('app', 'dist'),
    hot: true,
    compress: true,
    port: 3000
  }
})
