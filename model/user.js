const mongoose = require('mongoose')
const urlSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type:String,
        required: true,
        default: "Normal_User"    
    },
    password: {
        type: String,
        required: true,
    },
}, {timestamps: true}) // Automatically add createdAt and updatedAt fields

const user = mongoose.model('user', urlSchema)

module.exports = user