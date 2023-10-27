const routes = [].concat(
  require('../routes/home'),
  require('../routes/upload/upload-receipt'),
  require('../routes/upload/upload-vet'),
  require('../routes/cookie'),
  require('../routes/name'),
  require('../routes/healthy'),
  require('../routes/healthz'),
  require('../routes/static')
)

module.exports = {
  plugin: {
    name: 'router',
    register: (server, options) => {
      server.route(routes)
    }
  }
}
