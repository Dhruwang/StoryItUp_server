const express = require('express')
const {authRouter} = require("./auth.route")
const { investorRouter } = require('./investor.route')
const { storyRouter } = require('./story.route')

const api = express.Router()

api.use("/auth",authRouter)
api.use("/story",storyRouter)
api.use("/investor",investorRouter)


module.exports = api;