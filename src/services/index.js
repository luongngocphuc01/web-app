const user = require('./user/user.service.js');
const charge = require('./charge/charge.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(user);
  app.configure(charge);
};
