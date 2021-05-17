const homeRoute = require('express').Router();

homeRoute.get('/', (req, res) => {
  res.render('index', { userName: 'Vitalii' });
});

module.exports = homeRoute;

