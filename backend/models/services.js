const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    name : {
        type : String,
        require : true,
    },
    phone : {
        type : Number,
        require : true,
        unique : true,
    },
    profileImage : {
        type : String,
        default : "/public/download.png"
    }
})

const servicesModel = mongoose.model("servicesModel",userSchema);

module.exports = {servicesModel};