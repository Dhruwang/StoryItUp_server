const mongoose = require('mongoose')
const { Schema } = mongoose;

const InvestorSchema = new Schema({
    imgLink:
    {
        type:String,
        required:true
    },
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    profession : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    experience : {
        type : String,
        required : true,
    },
    interest:{
        type:String,
        required :true,
    },
    
    linkedIn:{
        type : String,
        required:true
    },
    twitter:{
        type:String,
    }

})
module.exports = mongoose.model("investor",InvestorSchema)