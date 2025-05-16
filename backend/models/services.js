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
    }
})

const servicesModel = mongoose.model("servicesModel",userSchema);

module.exports = {servicesModel};