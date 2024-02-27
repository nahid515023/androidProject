const Router = require("express").Router();
const { signupData, verifyEmail } = require("../controller/signup");
const loginData = require("../controller/login");
const { forgotPass, checkPin } = require("../controller/forgotPassword");

Router.post("/forgot-password", forgotPass);
Router.post("/send-code",checkPin);
Router.post("/signup", signupData);
Router.post("/login", loginData);
Router.get("/verify/:userId/:token", verifyEmail);




module.exports = Router;