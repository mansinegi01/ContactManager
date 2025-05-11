const express = require('express')

const userDetails = require('../models/user')

async function loginUser(req,res) {
    const {email,password} = req.body;
    const user = await userDetails.findOne({email,password})
    if(!user){
        return res.send("no user found")
    }
    return res.json('/home')
}

async function loginPostUser(req,res) {
    const {email,password} = req.body;
    
    if(!email || !password){
        return res.send("no user found")
    }
    return res.send('/home')
}
async function signupUser(req,res) {
    const {fullname,email,password} = req.body;
    if(!fullname || !email || !password) {
        return res.send("incomplete information")
    }
    await userDetails.create({
        fullname,
        email,
        password
    })
    return res.send("new entry created")
}


module.exports = {
    loginUser, signupUser, loginPostUser
}