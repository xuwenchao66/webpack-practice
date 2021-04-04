const { merge } = require('webpack-merge')
const { resolvePath } = require('./utils')
const base = require('./webpack.common')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: resolvePath('dist'),
    hot: true,
    compress: true,
    port: 3000
  }
})
