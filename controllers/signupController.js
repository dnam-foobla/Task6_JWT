const User = require("../schemas/userSchema");
const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports.signUp = async (req, res) => {
    const { name, user, password } = req.body;
    const newUser = new User({
      name: name,
      user: user,
      password: password,
    });
    const result = await newUser.save()
      .then((done) => {
        const token = jwt.sign(
          {
              data: {
                  user: user
              }
          },
          process.env.SECRET_KEY,
          {expiresIn: 60 * 300}
        )
        res.status(200).json({token: token, message: "Create account successfully"})
      }) 
      .catch(err => res.status(400).json({message: "Do not create account, please try again"}));
}