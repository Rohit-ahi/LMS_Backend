

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ['instructor','student'],
        default : "student"
    },
    enroled_courses : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Course"
    },],
        
    photo_Url :{
         type : String ,
         default : ''
    }

},{timestamps:true})

module.exports = mongoose.model('User',UserSchema)   // Default export in Nodejs and access it without curly braces.


