const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const resolvePath = (...args) => path.resolve(process.cwd(), ...args)

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
