const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./router/userRouter");
const signupRoute = require('./router/signupRouter');
const loginRoute = require('./router/loginRouter');
const { authSignup } = require("./middleware/signupAuth");
const { authLogin } = require("./middleware/loginAuth");


require("dotenv").config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/signup', authSignup, signupRoute); //Done
app.use('/login', authLogin, loginRoute); // Done 
// app.use("/user", userRouter)

app.listen(process.env.PORT, () => {
  console.log("Connected to server on port 3000");
});
