const express = require("express")
const {publishStory} = require("../controllers/story.controller")
const storyRouter = express.Router()
const { body, validationResult } = require('express-validator');

storyRouter.post("/publishStory",publishStory)

module.exports = {
    storyRouter
}