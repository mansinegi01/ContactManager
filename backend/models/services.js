const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    phone : {
        type : Number,
        required : true,
        unique : true,
    },
    profileImage : {
        type : String,
        default : "/public/download.png"
    },
},{timestamps : true})

const servicesModel = mongoose.model("servicesModel",userSchema);

module.exports = {servicesModel};