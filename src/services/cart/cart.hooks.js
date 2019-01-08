const { disallow } = require('feathers-hooks-common');
const { rejectExternal } = require(`../../hooks/before/cart/rejectExternal.js`);

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [rejectExternal],
    update: [disallow()],
    patch: [disallow()],
    remove: [disallow()]
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
