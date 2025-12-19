const jwt = require("jsonwebtoken");
require("dotenv").config();
const validateUser = async (req, res, next) => {
  const reqHeader = req.headers;
  let { auth } = reqHeader;

  let token;
  if (auth && auth.startsWith("Bearer")) {
    token = auth.split(" ")[1];
    const verification = await jwt.verify(token, process.env.jwt_secret);
    req.user = verification;
    next();
  } else {
    return res.status(400).json({
      msg: "Please Login First",
    });
  }
};

module.exports = validateUser;
//
