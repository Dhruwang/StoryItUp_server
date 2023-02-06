const express = require("express")
const {createUser,loginUser} = require("../controllers/auth.controller")
const authRouter = express.Router()
const { body, validationResult } = require('express-validator');

authRouter.post("/createUser",
body('email', 'enter a valid email').isEmail(),
body('password', 'enter a valid password').isLength({ min: 5 }),
createUser)
authRouter.post("/login",loginUser)

module.exports = {
    authRouter
}