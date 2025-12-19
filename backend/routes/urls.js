const urlModels = require("../model/urls");
const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const validateSignIn = require("../middlewares/validateUserSignin");
const router = express.Router();
const {
  handleGetAllUrls,
  handleGetSingleUrl,
  handleCreateUrl,
} = require("../controllers/url");

router.get("/", validateSignIn, handleGetAllUrls);
router.get("/:id", handleGetSingleUrl);
router.post("/", validateSignIn, handleCreateUrl);
// router.patch("/:id");
// router.delete("/:id");
module.exports = router;
