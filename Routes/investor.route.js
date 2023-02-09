const express = require("express")
const {saveInvestor,fetchInvestors} = require("../controllers/investor.controller")
const investorRouter = express.Router()
const { body, validationResult } = require('express-validator');

investorRouter.post("/saveInvestor",saveInvestor)
investorRouter.get("/fetchInvestors",fetchInvestors)

module.exports = {
    investorRouter
}