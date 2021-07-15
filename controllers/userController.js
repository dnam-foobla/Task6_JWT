const User = require("../schemas/userSchema");

module.exports.createUser = async (req, res) => {
    const { name, user, password } = req.body;
    const newUser = new User({
      name: name,
      user: user,
      password: password,
    });
    await newUser
      .save()
      .then((done) => res.sendStatus(200))
      .catch((err) => res.sendStatus(400));
  }