const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const resolvePath = (...args) => path.resolve(process.cwd(), ...args)

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'main.js',
    path: resolvePath('app/dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath('app/index.html')
    })
  ]
}
