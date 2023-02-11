const express = require('express')
const Investor = require('../models/Investor')
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: "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"
});



async function saveInvestor(req,res){ 
    try {
        const{name,description,profession,imgLink,experience,interest,linkedin,twitter,email} = req.body;
    let newInvestor = await Investor.create({
        name:name,
        imgLink:imgLink,
        email:email,
        description:description,
        linkedIn:linkedin,
        experience:experience,
        interest:interest,
        twitter:twitter,
        profession:profession,
    })
    res.status(201).send("ok")
    } catch (error) {
        res.status(400).json({"error":"internal server error"})
    }
    
}
async function fetchInvestors(req,res) {
    try {
        const Investors = await Investor.find({})
        res.status(200).send(Investors)
        
    } catch (error) {
        res.status(400).json({"error":"internal server error"})
    }
    
}
 async function paraphrase (req, res) {
    try {
        const openai = new OpenAIApi(configuration)

        const completion = openai.createCompletion({
            model: 'text-davinci-003',
            prompt: req.body.search,
            max_tokens: 100
        })

        completion.then((r) => {
            res.send(r.data.choices[0].text)
        })


    } catch (error) {
        console.log(error.message)
        res.status(500).send("internal server error")
    }

}



module.exports ={
    saveInvestor,fetchInvestors,paraphrase
}
