const express = require('express');
const URL = require('../model/url');
const { restrictTo } = require('../middleware/auth');

const router = express.Router();

router.get("/admin/urls", restrictTo(['Admin']), async(req, res) => {  // this routes is only accessible by admin
    const allurls = await URL.find({}); // Fetch all URLs created by any user as admin can see all URLs
    return res.render('home', {
        urls: allurls,
    })
})

router.get('/', restrictTo(['Normal_User', 'Admin']), async(req, res) => {  // normal user and admin both can access home page
    const allurls = await URL.find({createdBy: req.user._id});
    return res.render('home', {
        urls: allurls,
    })
})

router.get('/signup', (req,res) => {
    return res.render("signup");
})

router.get('/login', (req,res) => {
    return res.render("login");
})
module.exports = router;