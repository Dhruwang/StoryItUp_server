const express = require('express')
const User = require('../models/user')
const fetchUser = require("../middlewares/fetchUser")
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config()

const privateKey = process.env.PRIVATE_KEY

// function to create user
async function createUser(req, res){
    let success = false
    // if there are errors return bad request and errors 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // check whether the user with this email exist already 
    const {email,password,role}=req.body
    let user = await User.findOne({ email: email })
    if (user) {
        return res.status(400).json({ error: "sorry user with same email already exist" })
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(password, salt);

    user = await User.create({
        email: email,
        password: secPass,
        role:role,
    })
    const data = {
        user: {
            id: user.id
        }
    }
    console.log(user)
    const token = jwt.sign(data, privateKey);
    success = true
    res.json({success, token })
    
}

//function to login user
async function loginUser(req,res){
    let success = false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {email,password}=req.body
    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error:"please enter valid credentials"})
        }
        const passwordCompare = await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            return res.status(400).json({error:"please enter valid credentials"})
        }
        const data ={
            user:{
                id: user.id
            }
        }
        const token = jwt.sign(data, privateKey);
        success = true;
        res.json({success,token})
    } catch (error) {
        console.log(error.message)
        res.status(500).send("internal server error")
    }
}

module.exports = {
    createUser,loginUser
}