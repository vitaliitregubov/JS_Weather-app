const routes = require('express').Router();
const userController = require('../controllers/userController');

routes.get('/', userController.view);
routes.get('/add-user', userController.form);
routes.post('/add-user', userController.addUser)
routes.get('/:id', userController.userDetails);
routes.post('/find', userController.find);

module.exports = routes;

