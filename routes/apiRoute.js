const apiRoute = require('express').Router();

apiRoute.get('/', (req, res) => {
  res.send('api route');
});

apiRoute.get('/details', (req, res) => {
  res.send('api route DETAILS PAGE');
});

module.exports = apiRoute;

