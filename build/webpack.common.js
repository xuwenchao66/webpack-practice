const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolvePath } = require('./utils')
const { VueLoaderPlugin } = require('vue-loader')
const ESLintPlugin = require('eslint-webpack-plugin')
const appSourcePath = resolvePath('app')

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'main.js',
    path: resolvePath('app', 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [appSourcePath],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(css|less)$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'less-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath('app', 'index.html')
    }),
    new VueLoaderPlugin(),
    new ESLintPlugin({
      context: appSourcePath,
      extensions: ['.js', '.vue']
    })
  ]
}
