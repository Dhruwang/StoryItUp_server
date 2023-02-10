const express = require('express')
const Story = require('../models/story')
const fetchUser = require("../middlewares/fetchUser")
require("dotenv").config()


function decodeToken (token) {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}


async function publishStory(req,res){ 
    try {
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
    res.status(201).send("ok")
    } catch (error) {
        res.status(400).json({"error":"internal server error"})
    }  
}
async function editStory(req,res){ 
    try {
        const{name,description,sector,founders,year,story,funding,problem,solution,website,linkedin,imgLink} = req.body;
        const id = req.query.id
    let editStory = await Story.findByIdAndUpdate(id,{
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
    res.status(201).send("ok")
    } catch (error) {
        res.status(400).json({"error":"internal server error"})
    }  
}
async function editVerify(req,res){ 
    try {
        const{verified} = req.body;
        const id = req.query.id
    let editStory = await Story.updateOne(
        { '_id':id },
        {
          $set: {
            'verified': verified,
          },
        }
      )
    res.status(201).send("ok")
    } catch (error) {
        res.status(400).json({"error":"internal server error"})
    }  
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
        const reqStory = await Story.findById(id)
        res.status(200).send(reqStory)
        
    } catch (error) {
        res.status(400).json({"error":"internal server error"})
    }
    
}
async function searchStory(req,res) {
    try {
        const search = req.body.search
        const reqStory = await Story.find({ name: { $regex: search, $options: "i" } })
        res.status(200).send(reqStory)
        
    } catch (error) {
        res.status(400).json({"error":"internal server error"})
    }
    
}
async function deleteStory(req,res) {
    try {
        const auth = req.query.auth;
        let role = await decodeToken(auth).user.role
        if(role==="admin"){
            const id = req.query.id
        const reqStory = await Story.findByIdAndDelete(id)
        res.status(200).send("ok")
        }
        else{
            res.send(400).send("not allowed")
        }
        
        
    } catch (error) {
        res.status(400).json({"error":"internal server error"})
    }
    
}

module.exports ={
    publishStory,fetchStories,fetchSingleStory,deleteStory,editStory,searchStory,editVerify
}
