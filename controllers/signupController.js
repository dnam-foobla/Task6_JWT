const User = require("../schemas/userSchema");

module.exports.signUp = async (req, res) => {
    const { name, user, password } = req.body;
    const newUser = new User({
      name: name,
      user: user,
      password: password,
    });
    const result = await newUser.save()
        .then((done) => res.sendStatus(200))
        .catch(err => res.sendStatus(400));
}