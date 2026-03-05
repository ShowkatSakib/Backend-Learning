const express = require("express");
const multer = require("multer");

var upload = multer();    //creates a multer middleware instance
const app = express();   //creates an express application that will handle HTTP requests.
app.use(upload.array());
app.use(express.static("public"));



app.post("/", (req, res) => {

    let jsonData = req.body;  
    let jsonString = JSON.stringify(jsonData);   //json data convert into string
    res.send(jsonString)

});



app.listen(3000, () => {    //localhost port 3000
    console.log("Server running on port 3000");
});
