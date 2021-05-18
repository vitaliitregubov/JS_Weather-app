const routes = require('express').Router();
const userController = require('../controllers/userController');

routes.get('/', userController.view);
routes.get('/add-user', userController.form);
routes.post('/add-user', userController.addUser)
routes.get('/edit-user/:id', userController.editUser);
routes.post('/edit-user/:id', userController.updateUser);
routes.get('/delete-user/:id', userController.deleteUser);

routes.get('/:id', userController.userDetails);

module.exports = routes;

