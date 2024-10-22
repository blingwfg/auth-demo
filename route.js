const handler = require('./handler');
const route = [
  {
    path: '/',
    method: 'GET',
    handler: handler.getOnly,
  },
  {
    path: '/login',
    method: 'POST',
    handler: handler.login,
  },
  {
    path: '/register',
    method: 'POST',
    handler: handler.register,
  },
];

module.exports = route;
