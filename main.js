const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {   

    if(req.url=="/"){   //home url
        
        var result = fs.existsSync("Demo.txt")    //return result type

            if(result){
                
                res.writeHead(200, {'content-type':'text/html'});
                res.write("File exist");
                res.end();
            }

            else{

                res.writeHead(200, {'content-type':'text/html'});
                res.write("File does not exist");
                res.end();
            }
      
          
    }


});

server.listen(3000, () => {   //port number 3000
    console.log("Server running at http://localhost:3000");
});
