const key = 'OWNER'

const getOwner = session => {
  const owner = session.get(key) ?? {}

  return owner
}

const setOwnerName = (session, payload) => {
  const owner = getOwner(session)

  owner.firstName = payload.firstName
  owner.lastName = payload.lastName

  session.set(key, owner)

  return owner
}

module.exports = {
  getOwner,
  setOwnerName
}
