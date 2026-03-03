const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {   

    if(req.url=="/"){
        
        var myData= fs.readFileSync("Home.html")      //synchronous file read
        res.writeHead(200, {'content-type':'text/html'});
        res.write(myData);
        res.end();
          
    }


});

server.listen(3000, () => {   //port number 3000
    console.log("Server running at http://localhost:3000");
});
