const homeRoute = require('express').Router();

homeRoute.get('/', (req, res) => {
  const results = [
    {
      id: 1,
      name: 'John',
      email: 'john@doe.mail.au',
      birthDate: '22222'
    },
    {
      id: 2,
      name: 'Huli',
      email: 'hu@oe.mail.usa',
      birthDate: '00 00 22'
    }
  ];
  res.render('index', { users: results });
});

module.exports = homeRoute;

