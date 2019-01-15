const { getAllSub } = require(`../../hooks/after/subscription/findGetAllSubscription.js`);
const { createSubscription } = require(`../../hooks/before/subscription/createMakeSubscription.js`);


module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [createSubscription],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [getAllSub],
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
