const User = require("../schemas/userSchema");
const jwt = require('jsonwebtoken');

require('dotenv').config();

module.exports.login = async (req, res) => {
    let {
        user
    } = req.body;
    // console.log(result.user);

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