var users = require('../../app/controllers/users.server.controller');
module.exports = function(app) {
  app.route('/users')
    .post(users.create)
    .get(users.list);

  app.route('/users/:userId')
    .get(users.read);

  // fires and adds param 'userId' to req object
  // before all other routes are  called
  app.param('userId', users.userByID);
};
