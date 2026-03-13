const routes = require('express').Router();

routes.use('/swagger', require('./swagger'));

routes.get('/', (req, res) => {
  res.send('Hello, World!');
});

routes.use('/users', require('./users'));

module.exports = routes;