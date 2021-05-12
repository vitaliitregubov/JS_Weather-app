const userRoutes = require('express').Router();

userRoutes.get('/', (req, res) => {
  res.render('index', { user: 'John' });
});

userRoutes.get('/about', (req, res) => {
  res.render('about');
});

module.exports = userRoutes;

