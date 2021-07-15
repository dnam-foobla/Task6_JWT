const User = require("../schemas/userSchema");

module.exports.authLogin = async (req, res, next) => {
    let {
        user
    } = req.body;
    const result = await User.findOne({ user: user })
    if (!result) {
        res.status(403).send("You can create account before login")
    } else {
        next();
    }
}