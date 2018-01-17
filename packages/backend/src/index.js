const { createKoaRouter } = require('createrest-koa')
// const debug = require('debug')('pkx:root')
const Koa = require('koa')
const { BACKEND_PORT } = require('@pkx/config')
const { routes } = require('./routes')


const router = createKoaRouter(routes)
const app = new Koa()

app.use(router.routes(), router.allowedMethods())

async function start() {
  return app.listen(BACKEND_PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening port ${BACKEND_PORT}...`)
  })
}

module.exports = {
  start,
  app,
}
