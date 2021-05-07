const userRouter = require('express').Router();
const userController = require('../controllers/userController');

userRouter.get('/', userController.view);

module.exports = userRouter;

