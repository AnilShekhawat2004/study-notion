const express = require("express");
const router = express.Router();

//import middleware
const { auth } = require("../middleware/auth");
//import controllers of auth
const {
  sendOTP,
  signUp,
  login,
  changePassword,
} = require("../controllers/Auth");
//import controllers of ResetPassword
const {
  resetPasswordToken,
  resetPassword,
} = require("../controllers/ResetPassword");

//create route for auth's controllers
router.post("/sendOTP", sendOTP);
router.post("/signUp", signUp);
router.post("/login", login);
router.post("/changePassword", auth, changePassword);

//create route for ResetPassword controllers
router.post("/resetPasswordToken", resetPasswordToken);
router.post("/resetPassword", resetPassword);

module.exports = router;
