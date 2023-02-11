const express = require("express")
const {saveInvestor,fetchInvestors,paraphrase} = require("../controllers/investor.controller")
const investorRouter = express.Router()
const { body, validationResult } = require('express-validator');

investorRouter.post("/saveInvestor",saveInvestor)
investorRouter.get("/fetchInvestors",fetchInvestors)
investorRouter.post("/paraphrase",paraphrase)

module.exports = {
    investorRouter
}