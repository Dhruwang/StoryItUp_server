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

module.exports ={
    publishStory
}
