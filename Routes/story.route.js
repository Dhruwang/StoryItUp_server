const express = require("express")
const {publishStory,fetchStories,fetchSingleStory,deleteStory,editStory,searchStory,editVerify} = require("../controllers/story.controller")
const storyRouter = express.Router()
const { body, validationResult } = require('express-validator');

storyRouter.post("/publishStory",publishStory)
storyRouter.get("/fetchStories",fetchStories)
storyRouter.get("/fetchStory",fetchSingleStory)
storyRouter.delete("/deleteStory",deleteStory)
storyRouter.put("/editStory",editStory)
storyRouter.put("/searchStory",searchStory)
storyRouter.put("/editVerify",editVerify)


module.exports = {
    storyRouter
}