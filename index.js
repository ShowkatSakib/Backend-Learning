const express = require("express");


const app = express();   

app.use("/about",function(req,res,next){   //middle ware for about route
    console.log("middleware gor about route")
    next();
})

app.get("/", (req, res) => {     
    res.send("Home page");  
});

app.get("/about", (req, res) => {    
    res.send("About Page");
});

app.get("/contact", (req, res) => {   
    res.send("Contact Page");
});



app.listen(3000, () => {    //localhost port 3000
    console.log("Server running on port 3000");
});
