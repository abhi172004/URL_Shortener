const {getUser} = require("../service/auth")

function checkForAuthentication(req, res, next){ // authentication
    const tokenCookie = req.cookies?.token;
    req.user = null;

    if(!tokenCookie) return next() // if no token then continue to next middleware
   
    const token = tokenCookie  // Extract token from cookie
    const user = getUser(token);

    req.user = user; // Attach user to request object
    return next();
}
function restrictTo(roles = []) {  // authorization
    return function (req, res, next) { 
        if(!req.user) return res.redirect('/login')
            if(!roles.includes(req.user.role)) return res.end("UnAuthorized") // if user not satisfies the role 
        return next();
    }
}

module.exports = {
    checkForAuthentication,
    restrictTo
}