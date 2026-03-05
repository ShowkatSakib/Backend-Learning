const express = require("express");

const app = express();

//simple post request----------------------------------------------------
app.post("/", (req, res) => {

    res.send("Simple post request response");   

});


//url parameter post request----------------------------------------------------
app.post("/first", (req, res) => {

    let firstName= req.query.firstName;
    let lastName= req.query.lastName;

    res.send(firstName+" "+ lastName);   

});


//post request header----------------------------------------------------
app.post("/second", (req, res) => {

    let userName= req.header.userName;
    let password= req.header.password;

    res.send("User Name:"+ userName+" "+ "Password:" + password);   

});



app.listen(3000, () => {    //localhost port 3000
    console.log("Server running on port 3000");
});
