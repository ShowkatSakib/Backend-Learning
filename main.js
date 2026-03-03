const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {   

    if(req.url=="/"){
        fs.readFile("Home.html",function(error, data){      //Asynchronous file read

        res.writeHead(200, {'content-type':'text/html'});
        res.write(data);
        res.end();
        } );  
    }


});

server.listen(3000, () => {   //port number 3000
    console.log("Server running at http://localhost:3000");
});
