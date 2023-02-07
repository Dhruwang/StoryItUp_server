const express = require("express")
const {publishStory,fetchStories} = require("../controllers/story.controller")
const storyRouter = express.Router()
const { body, validationResult } = require('express-validator');

storyRouter.post("/publishStory",publishStory)
storyRouter.get("/fetchStories",fetchStories)

module.exports = {
    storyRouter
}