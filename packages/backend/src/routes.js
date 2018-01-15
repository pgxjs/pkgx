const { createRest } = require('createrest')
const { getAssets } = require('./assets')


function assets(ctx) {
  try {
    ctx.body = getAssets()
  }
  catch (error) {
    ctx.body = {}
  }
}

const routes = createRest((root) => {
  root.get('assets', assets)

  // NPM registry
  root.scope('-', (npm) => {
    npm.get('/', (ctx) => {
      ctx.body = { test: true }
    })
  })
})

module.exports = {
  routes,
}
