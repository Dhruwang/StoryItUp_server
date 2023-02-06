const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
    role : {
        type : String,
        required : true,
    }
})
module.exports = mongoose.model("user",UserSchema)