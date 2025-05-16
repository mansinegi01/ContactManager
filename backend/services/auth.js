const mapSessionId = new Map();
function setUser(id,user){
    mapSessionId.set(id,user);
}
function getUser(id){
    return mapSessionId.get(id)
}

module.exports = {
    setUser, getUser
}