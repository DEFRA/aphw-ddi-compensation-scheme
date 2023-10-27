module.exports = {
  plugin: {
    name: 'view-context',
    register: (server, options) => {
      server.ext('onPreResponse', (request, h) => {
        return h.continue
      })
    }
  }
}
