const express = require("express");
const multer = require("multer");


const app = express();   //creates an express application that will handle HTTP requests

var storage = multer.diskStorage({      //store uploaded files on disk (server folder)
    destination:function(req, file, callBack){
        callBack(null,"./upload")  //where the uploaded file will be stored
    },
    filename:function(req, file, callBack){
        callBack(null, file.originalname)  //save the file with its original name
    }
})


var upload = multer({storage:storage}).single("myfile");   //accept one file from a form field named myfile



app.post("/", (req, res) => {

    upload(req,res,function(error){
        if(error){
            res.send("file upload fail")
        }
        else{
            res.send("file upload success")
        }
    });

});



app.listen(3000, () => {    //localhost port 3000
    console.log("Server running on port 3000");
});
