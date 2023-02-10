const mongoose = require('mongoose')
const { Schema } = mongoose;

const StorySchema = new Schema({
    imgLink:
    {
        type:String,
        required:true
    },
    name : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    sector : {
        type : String,
        required : true,
    },
    founders:{
        type:[String],
        required :true,
    },
    year_established : {
        type : Number,
        required : true,
    },
    story : {
        type : String,
        required : true,
    },
    funding : {
        type : String,
    },
    problems : {
        type : String,
    },
    solution : {
        type : String,
    },
    website : {
        type : String,
    },
    linkedIn:{
        type : String,
    },
    futureScope:{
        type:String,
    },
    verified:{
        type: Boolean,
        default: false 
    }

})
module.exports = mongoose.model("story",StorySchema)