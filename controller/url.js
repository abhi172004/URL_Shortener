const shortid = require("shortid")
const URL = require("../model/url")
async function handleGenerateShortURL(req, res) {
    const body = req.body;
    if(!body.url){
        return res.status(400).json({error: "URL is required"})
    }
    const shortID = shortid()
    await URL.create({
        shortId: shortID,
        redirectURL: body.url, 
        visitHistory: [],
        createdBy: req.user._id // Assuming req.user is set by authentication middleware(auth.js)
    })
    return res.render("home", {
        id: shortID
    })
}

module.exports = {
    handleGenerateShortURL, 
}