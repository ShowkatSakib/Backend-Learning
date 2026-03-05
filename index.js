const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.json());    //use json from bodyparser method


app.post("/", (req, res) => {

    let jsonData = req.body;  
    let jsonString = JSON.stringify(jsonData);   //json data convert into string
    res.send(jsonString)

});






app.listen(3000, () => {    //localhost port 3000
    console.log("Server running on port 3000");
});
