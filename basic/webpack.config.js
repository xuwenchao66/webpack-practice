const path = require('path')

module.exports = {
  entry: './basic/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(process.cwd(), 'basic/dist')
  }
}
