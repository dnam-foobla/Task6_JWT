const User = require("../schemas/userSchema");

module.exports.authSignup = async(req, res, next) => {
    let {
        user 
    } = req.body;

    const result = await User.findOne({ user: user })
    if (!result) {
        next();   
    }
    else {
        res.status(403).send("Account is exist")
    }
}