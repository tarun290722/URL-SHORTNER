const userModel = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtSec = process.env.jwt_secret;
const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(409).json({
        msg: "User already exist, go to login page and login",
        sucess: false,
      });
    } else if (!user) {
      const hashedPass = await bcrypt.hash(password, 10);
      userModel.create({
        name,
        email,
        password: hashedPass,
      });
      res.status(201).json({
        msg: "User register sucessfully",
        status: true,
      });
    }
  } catch (err) {
    res.status(500).json({
      msg: "Internal server error",
      sucess: false,
    });
  }
};
const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email.trim() != "" && password.trim() != "") {
      let user = null;
      user = await userModel.findOne({ email: email });

      if (user && (await bcrypt.compare(password, user.password))) {
        const token = await jwt.sign(
          {
            email,
            id: user.id,
          },
          jwtSec,
          {
            expiresIn: "24h",
          }
        );
        // console.log(token);

        return res.status(200).json({
          msg: "Login Success",
          sucess: true,
          session: token,
        });
      } else if (!user) {
        return res.status(403).json({
          msg: "User doesnt exists, please signup first",
          sucess: false,
        });
      } else {
        return res.status(400).json({
          msg: "Password doesnt match",
          sucess: false,
        });
      }
    }
  } catch (err) {
    return res.status(500).json({
      msg: "Inernal server error",
      err,
    });
  }
};
module.exports = {
  signIn,
  signUp,
};
