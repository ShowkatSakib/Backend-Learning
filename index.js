const express = require("express");

const app = express();

//Simple string response----------------------------------------------------
app.get("/one", (req, res) => {

    res.send("Simple string response");   // res.send means response body

});

app.post("/two", (req, res) => {

    res.send("Simple string response");

});

app.get("/three", (req, res) => {

    res.end("Simple string response");   // res.end means response ending point

});

app.post("/four", (req, res) => {

    res.end("Simple string response");

});


//Status code response----------------------------------------------------
app.get("/five", (req, res) => {

    res.status(401).end("Unauthorize");   // res.status means status code

});

app.get("/six", (req, res) => {

    res.status(201).end();   

});



//json response----------------------------------------------------
app.get("/seven", (req, res) => {

    let myJsonArray=[
        {   name:"sakib",
            city:"Dhaka"
        },
        {   name:"Rakib",
            city:"chandpur"
        }
    ]
    res.json(myJsonArray);    //call json array 

});


//download response----------------------------------------------------
app.get("/eight", (req, res) => {

    res.download("./uploads/goku.jpg")    //give file path

});


//response redircet----------------------------------------------------
app.get("/bangladesh", (req, res) => {

    res.redirect("http://localhost:3000/india")    //give url name where ridirect

});

app.get("/india", (req, res) => {

    res.send("This is india")    

});



//response header----------------------------------------------------
app.get("/nine", (req, res) => {

    //header
    res.append("name","sakib");    //key value pair
    res.append("city","dhaka");    
    res.append("occupation","student");  

    //status code 201 and body has hello
    res.status(201).end("hello");

});


//response cookie set----------------------------------------------------
app.get("/ten", (req, res) => {

    res.cookie("name","sakib");    //key value pair
    res.cookie("city","dhaka");    
    res.cookie("occupation","student");  

    res.end("cookie set success");

});


//response cookie set----------------------------------------------------
app.get("/eleven", (req, res) => {

    res.clearCookie("name");   //property name which should be clear
    res.clearCookie("city");   


    res.end("clear cookie success");

});


app.listen(3000, () => {    //localhost port 3000
    console.log("Server running on port 3000");
});
