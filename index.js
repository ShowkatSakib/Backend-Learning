const express = require("express");

const app = express();

app.get("/one", (req, res) => {

    res.send("Simple string response");   // res.send mens response body

});

app.post("/two", (req, res) => {

    res.send("Simple string response");

});

app.get("/three", (req, res) => {

    res.end("Simple string response");   // res.end mens response ending point

});

app.post("/four", (req, res) => {

    res.end("Simple string response");

});

app.listen(3000, () => {    //localhost port 3000
    console.log("Server running on port 3000");
});
