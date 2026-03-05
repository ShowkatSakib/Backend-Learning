const express = require("express");

const app = express();

//simple get request----------------------------------------------------
app.get("/", (req, res) => {

    res.send("Simple get request response");   

});


//url parameter get request----------------------------------------------------
app.get("/first", (req, res) => {

    let firstName= req.query.firstName;
    let lastName= req.query.lastName;

    res.send(firstName+" "+ lastName);   

});


//get request header----------------------------------------------------
app.get("/second", (req, res) => {

    let firstName= req.header.firstName;
    let lastName= req.header.lastName;

    res.send(firstName+" "+ lastName);   

});



app.listen(3000, () => {    //localhost port 3000
    console.log("Server running on port 3000");
});
