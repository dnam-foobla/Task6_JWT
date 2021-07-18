require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports.authorUser = (req, res, next) => {
    if (req.headers["x-access-token"] == null) {
        res.status(403).json({ message: "You must login" });
    }
    else {
        jwt.verify(
            req.headers["x-access-token"],
            process.env.SECRET_KEY,
            (err, decoded) => {
              try {
                if (decoded) next();
                else res.status(401).json({ message: "Unauthorized!" });
              } catch (err) {
                res.status(400).json({message: "You can try again"});
              }
            }
        );
    }
}