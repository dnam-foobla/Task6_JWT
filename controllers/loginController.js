const User = require("../schemas/userSchema");
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.login = async (req, res) => {
    let { user, password } = req.body;
    const result = await User.findOne({ user: user, password: password })
    if (!result) {
        res.status(400).json({ message: "Wrong password" });
    } else {
        const token = jwt.sign(
            {
                data: {
                    user: user
                }
            },
            process.env.SECRET_KEY,
            {expiresIn: 60 * 300}
        )
        res.status(200).json({token: token});
    }
}