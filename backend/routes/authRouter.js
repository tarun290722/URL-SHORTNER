const express = require("express");
const authRouter = express.Router();
const { signIn, signUp } = require("../controllers/auth");
const {
  signUpValidation,
  loginValidation,
} = require("../middlewares/authValidation");
authRouter.get("/ping", (req, res) => {
  res.send("pong");
});
authRouter.post("/login", loginValidation, signIn);
authRouter.post("/signup", signUpValidation, signUp);
module.exports = authRouter;
