const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolvePath } = require('./utils')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'main.js',
    path: resolvePath('app/dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath('app/index.html')
    }),
    new VueLoaderPlugin()
  ]
}