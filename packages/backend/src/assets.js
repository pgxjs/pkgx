const {
  NODE_ENV = 'development',
} = process.env

/* eslint-disable global-require, import/no-dynamic-require */
const ASSETS_MODULE_PATH = '@pkx/frontend/dist/assets.json'
const DEV = NODE_ENV === 'development'

function getAssets() {
  if (DEV) {
    const path = require.resolve(ASSETS_MODULE_PATH)

    delete require.cache[path]
    return require(path)
  }

  return require(ASSETS_MODULE_PATH)
}

module.exports = {
  getAssets,
}
