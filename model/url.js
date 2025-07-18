const { Timestamp } = require('bson')
const mongoose = require('mongoose')
const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectURL: {
        type: String,
        required: true,
    },
    visitHistory: [{Timestamp: {type: Number}}],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, // Use ObjectId for referencing another document
        ref: 'user', // Reference to the user model
    }
},
{timestamps: true} // Automatically add createdAt and updatedAt fields
);

const URL = mongoose.model('url', urlSchema)

module.exports = URL