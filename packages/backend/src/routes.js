const { createRest } = require('createrest')


const routes = createRest((root) => {
  root.scope('-', (npm) => {
    npm.get('/', (ctx) => {
      ctx.body = { test: true }
    })
  })
})

module.exports = {
  routes,
}
