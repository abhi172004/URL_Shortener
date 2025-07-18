const jwt = require('jsonwebtoken');
const secret = 'abhi@1704$'
function setUser(user) {  // creates token for user
    return jwt.sign({
        _id: user.id,
        email: user.email,
        role: user.role,
    }, secret)
}

function getUser(token) {
    if(!token) return null; // If no token is provided, return null
    return jwt.verify(token, secret)
}

module.exports = {
    setUser,
    getUser
}