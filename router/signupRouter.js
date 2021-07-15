const { Router } = require("express");
const { signUp } = require('../controllers/signupController');

const userRouter = new Router();

userRouter.post('/', signUp)

module.exports = userRouter;
