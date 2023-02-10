const express = require("express")
const {publishStory,fetchStories,fetchSingleStory,deleteStory,editStory,searchStory} = require("../controllers/story.controller")
const storyRouter = express.Router()
const { body, validationResult } = require('express-validator');

storyRouter.post("/publishStory",publishStory)
storyRouter.get("/fetchStories",fetchStories)
storyRouter.get("/fetchStory",fetchSingleStory)
storyRouter.delete("/deleteStory",deleteStory)
storyRouter.put("/editStory",editStory)
storyRouter.put("/searchStory",searchStory)


module.exports = {
    storyRouter
}