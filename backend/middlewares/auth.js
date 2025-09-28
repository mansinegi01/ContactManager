const { getUser } = require("../services/auth");

async function authenticatedUser(req, res, next) {
    console.log(req.cookies);
    
  const userID = req.cookies?.uid;
  if (!userID) {
    return res.status(401).json({ message: "Unauthorized : please login first" });
  }

  const user = await getUser(userID);
  if (!user) {
    return res.status(401).json({ message: "cookie not found" });
  }

  req.user = user;
  next();
}
module.exports = { authenticatedUser };
