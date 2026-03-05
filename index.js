const express = require("express");

const app = express();

app.get("/", (req, res) => {    //get method call  and home url call
    res.send("Home pahe");  //send method call
});

app.get("/about", (req, res) => {    //about url
    res.send("About Page");
});

app.get("/contact", (req, res) => {   //contact url
    res.send("Contact Page");
});

app.listen(3000, () => {    //localhost port 3000
    console.log("Server running on port 3000");
});
