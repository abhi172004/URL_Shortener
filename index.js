const express = require('express');
const {connectToMongoDB} = require('./connect');
const urlRoute = require('./routes/url'); 
const userRoute = require('./routes/user');
const URL = require('./model/url'); 
const cookieParser = require('cookie-parser');
const { checkForAuthentication, restrictTo } = require('./middleware/auth'); // Importing middleware for user restriction
const app = express();
const PORT = 8001;
const path = require('path');  // Importing path module for serving static files
const staticRoute = require('./routes/staticRouter')

connectToMongoDB("mongodb://127.0.0.1:27017/shortURL")
.then(() => console.log("Connected to mongoDB"))
.catch((err) => console.log("Error connecting to mongoDB", err));

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies  
app.use(cookieParser()); // Middleware to parse cookies 
app.use(checkForAuthentication)

app.use("/url", restrictTo(["Normal_User", 'Admin']), urlRoute);
app.use("/", staticRoute); // Serve static files from the staticRouter
app.use("/user", userRoute); // Serve user-related routes

// Set up EJS as the template engine    
app.set("view engine", "ejs");
app.set('views', path.resolve('./views')); // Set the views directory for EJS templates

app.get("/test", async (req, res) => {
   const allURL = await URL.find({}); 
    return res.render("home", {
        title: "Home Page",
        urls: allURL,
    });
})

app.get("/:shortID", async (req, res) => {
    const shortID = req.params.shortID;
    let entry = await URL.findOneAndUpdate(
        {
            shortId: shortID,
        },
        {
            $push:{
                visitHistory:{
                    timestamp: Date.now(),
                }
            }
        },
        {new: true}
    )
     if (!entry) {
        return res.status(404).json({ error: "Short URL not found" });
    }
    res.redirect(entry.redirectURL)
})

app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`));