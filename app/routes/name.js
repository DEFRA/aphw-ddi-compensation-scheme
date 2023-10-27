const { getOwner, setOwnerName } = require('../owner')

module.exports = [
  {
    method: 'GET',
    path: '/name',
    handler: (request, h) => {
      const owner = getOwner(request.yar)

      return h.view('name', {
        firstName: owner.firstName,
        lastName: owner.lastName
      })
    }
  },
  {
    method: 'POST',
    path: '/name',
    handler: (request, h) => {
      setOwnerName(request.yar, request.payload)
      return h.redirect('/upload/vet')
    }
  }
]
