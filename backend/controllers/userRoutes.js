const express = require('express')

const userDetails = require('../models/user')


async function loginPostUser(req,res) {
    const {email,password} = req.body;
    
   
    const user = await userDetails.findOne({email,password});
    if(user){
        return res.status(200).json({message : "login done"})
    }
    return res.status(404).json({message : "user not found"})
}
async function signupUser(req,res) {
    const {name,email,password} = req.body;
    if(!name || !email || !password) {
        return res.json("incomplete information")
    }
    try {
        await userDetails.create({ name, email, password });
        return res.status(201).json({ message: "New entry created" });
    } catch (err) {
        return res.status(500).json({ error: "Database error", details: err.message });
    }

}


module.exports = {
     signupUser, loginPostUser
}