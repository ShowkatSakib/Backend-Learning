const express = require("express");

const app = express();

app.get("/", (req, res) => {    //get method call  and home url call
    res.send("Home pagSe");  //send method call
});

app.post("/about", (req, res) => {    //post method call and about url
    res.send("About Page");
});

app.put("/contact", (req, res) => {   //contact url
    res.send("Contact Page");
});

app.delete("/terms", (req, res) => {   //terms url
    res.send("Terms Page");
});

app.listen(3000, () => {    //localhost port 3000
    console.log("Server running on port 3000");
});
