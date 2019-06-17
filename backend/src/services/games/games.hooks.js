const igdb = require('../../hooks/igdb-api-call')

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [igdb()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
