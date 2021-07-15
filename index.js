const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./router/userRouter");
const signupRoute = require('./router/signupRouter')
const { authSignup } = require("./middleware/signupAuth");


require("dotenv").config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  res.send("Welcome to my page");
});

app.use('/signup', authSignup, signupRoute);
// app.use('/login', authLogin, loginRoute);
// app.use("/user", userRouter)

app.listen(process.env.PORT, () => {
  console.log("Connected to server on port 3000");
});
