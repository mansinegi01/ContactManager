const jwt = require('jsonwebtoken')
const secret = "mansinegi123"

function setUser(user){
    const payload = {
        email : user.email
    }
    return jwt.sign(payload,secret)
}
function getUser(token){
    if(!token) {return null}
    return jwt.verify(token,secret)
}

module.exports = {
    setUser, getUser
}