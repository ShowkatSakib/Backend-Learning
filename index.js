const express = require("express");

const app = express();

app.get("/", (req, res) => {    //get method call  and home url call
    res.send("Hello from Express Server");  //send method call
});

app.listen(3000, () => {    //localhost port 3000
    console.log("Server running on port 3000");
});
