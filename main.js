const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {   

    if(req.url=="/"){   //home url
        
        var error= fs.unlinkSync("DemoAsyncNew.txt")

            if(error){
                
                res.writeHead(200, {'content-type':'text/html'});
                res.write("File delete fail");
                res.end();
            }

            else{

                res.writeHead(200, {'content-type':'text/html'});
                res.write("File delete  success");
                res.end();
            }
      
          
    }


});

server.listen(3000, () => {   //port number 3000
    console.log("Server running at http://localhost:3000");
});
