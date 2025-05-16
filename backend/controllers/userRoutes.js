const { v4: uuidv4 } = require("uuid");
const userDetails = require("../models/user");
const { setUser } = require("../services/auth");

async function loginPostUser(req, res) {
  const { email, password } = req.body;

  const user = await userDetails.findOne({ email, password });
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }
  const sessionID = uuidv4();
  setUser(sessionID,user)
  res.cookie("uid", sessionID,{
    httpOnly: true,
  secure: false, 
  sameSite: "Lax", 
  });
  return res.status(200).json({ message: "login done" });
}


async function signupUser(req, res) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.json("incomplete information");
  }
  try {
    await userDetails.create({ name, email, password });
    return res.status(201).json({ message: "New entry created" });
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Database error", details: err.message });
  }
}

module.exports = {
  signupUser,
  loginPostUser,
};
