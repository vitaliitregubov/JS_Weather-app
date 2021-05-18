const routes = require('express').Router();
const userController = require('../controllers/userController');

routes.get('/', userController.view);

module.exports = routes;

