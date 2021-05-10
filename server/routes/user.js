const userRouter = require('express').Router();
const userController = require('../controllers/userController');

userRouter.get('/', userController.view);
userRouter.post('/', userController.find);
userRouter.post('/add', userController.form);
userRouter.get('/:id', userController.viewSingleUser);

module.exports = userRouter;

