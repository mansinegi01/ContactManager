const { getUser } = require("../services/auth");

function authenticatedUser(req, res, next) {
    console.log(req.cookies);
    
  const userID = req.cookies?.uid;
  if (!userID) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const user = getUser(userID);
  if (!user) {
    return res.status(401).json({ message: "cookie not found" });
  }

  req.user = user;
  next();
}
module.exports = { authenticatedUser };
