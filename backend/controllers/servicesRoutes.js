const { servicesModel } = require("../models/services");

async function Add(req, res) {
  const { name, phone, profileImage } = req.body;

  try {
    await servicesModel.create({
      name,
      phone,
      profileImage

    });
    return res.status(201).json({message : "new entry created"})
  } catch (error) {
    console.log("add contact error",error);
    return res.status(500).json({message : "entry not created"})
  }
}

async function Remove(req, res) {
  const {name, phone} = req.body;
  const user = await servicesModel.findOne({name,phone});

  try {
    if(!user){
        return res.status(404).json({message : "user not found"})
    }
    await servicesModel.deleteOne({name,phone})
    return res.status(200).json({message : "entry deleted sucessfully"})
  } catch (error) {
    return res.status(500).json({message : "server Error"})
  }
}

async function View_all(req, res) {
  const users = await servicesModel.find({})
  try {
    if(!users || users.length === 0){
    return res.status(404).json({message : "Empty data"})
  }
  return res.status(200).json({
    message : "Data fetched sucessfully",
    data : users
  })
  } catch (error) {
    
    return res.status(500).json({message : "Please login first"})
  }
  
}


module.exports = {
    Add, Remove, View_all
}
