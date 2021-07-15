const { Router } = require("express");
const userController = require('../controllers/userController');

const userRouter = new Router();

userRouter.post('/', userController.createUser)

module.exports = userRouter;
