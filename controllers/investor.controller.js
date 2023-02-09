const express = require('express')
const Investor = require('../models/Investor')

async function saveInvestor(req,res){ 
    try {
        const{name,description,profession,imgLink,experience,interest,linkedin,twitter,email} = req.body;
    let newInvestor = await Investor.create({
        name:name,
        imgLink:imgLink,
        email:email,
        description:description,
        linkedIn:linkedin,
        experience:experience,
        interest:interest,
        twitter:twitter,
        profession:profession,
    })
    res.status(201).send("ok")
    } catch (error) {
        res.status(400).json({"error":"internal server error"})
    }
    
}
async function fetchInvestors(req,res) {
    try {
        const Investors = await Investor.find({})
        res.status(200).send(Investors)
        
    } catch (error) {
        res.status(400).json({"error":"internal server error"})
    }
    
}


module.exports ={
    saveInvestor,fetchInvestors
}
