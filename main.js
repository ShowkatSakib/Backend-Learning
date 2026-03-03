const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {   

    if(req.url=="/"){   //home url
        
        fs.writeFile("Demo.txt", "Hello World", function(error){

            if(error){
                
                res.writeHead(200, {'content-type':'text/html'});
                res.write("File write fail");
                res.end();
            }

            else{

                res.writeHead(200, {'content-type':'text/html'});
                res.write("File write success");
                res.end();
            }

        })      
          
    }


});

server.listen(3000, () => {   //port number 3000
    console.log("Server running at http://localhost:3000");
});
