const User = require("../schemas/userSchema");
module.exports.login = async (req, res) => {
    let { user, password } = req.body;
    const result = await User.findOne({ user: user, password: password })
    if (!result) {
        res.status(400).send("Wrong password");
    } else {
        res.status(200).send("token");
    }
}