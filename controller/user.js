const {v4: uuidv4} = require('uuid') // unique ids
const User = require('../model/user');
const {setUser} = require('../service/auth'); // Importing auth service for session management

async function handleUserSignup(req, res) {
    const { name, email, password } = req.body; 
    await User.create({
        Name: name, // Use uppercase 'N' to match schema
        email,
        password,
    });
    return res.redirect('/')
}
async function handleUserLogin(req, res) {
    const {email, password } = req.body; 
    const user = await User.findOne({email, password});
    if(!user)
        return res.render('login', {
            error: "Invalid email or password"
        });
        
    const token = setUser(user);
    res.cookie('token', token)
    return res.redirect('/'); // Return token as JSON response
}
module.exports = {
    handleUserSignup,
    handleUserLogin
};