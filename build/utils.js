const path = require('path')
const resolvePath = (...args) => path.resolve(process.cwd(), ...args)

module.exports = {
  resolvePath
}
