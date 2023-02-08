const express = require('express')
const Story = require('../models/story')
const fetchUser = require("../middlewares/fetchUser")
require("dotenv").config()

async function publishStory(req,res){   
    const{name,description,sector,founders,year,story,funding,problem,solution,website,linkedin,imgLink} = req.body;
    let newStory = await Story.create({
        name:name,
        imgLink:imgLink,
        description:description,
        sector:sector,
        founders:founders,
        year_established:year,
        story:story,
        funding:funding,
        problems:problem,
        solution:solution,
        website:website,
        linkedIn:linkedin
    })
    res.status(201).send(newStory)
}
async function fetchStories(req,res) {
    try {
        const Stories = await Story.find({})
        res.status(200).send(Stories)
        
    } catch (error) {
        res.status(400).json({"error":"internal server error"})
    }
    
}
async function fetchSingleStory(req,res) {
    try {
        const id = req.query.id
        console.log(id)
        const reqStory = await Story.findById(id)
        res.status(200).send(reqStory)
        
    } catch (error) {
        res.status(400).json({"error":"internal server error"})
    }
    
}

module.exports ={
    publishStory,fetchStories,fetchSingleStory
}
