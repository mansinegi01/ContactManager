const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    sender: String,
    message: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})


const chat = mongoose.model("chat",userSchema)

module.exports = chat;