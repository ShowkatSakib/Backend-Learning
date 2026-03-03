const http = require("http");

const server = http.createServer((req, res) => {   
    
    if(req.url==="/"){
        res.writeHead(200,{'content-type':'text/html'})   //header portion 
        res.write("<h1> This is home page</h1>")    //body portion- show this to client in browser
        res.end();
    }
    else if(req.url==="/about"){
        res.write("<h1> This is about page</h1>")
        res.end();
    }
    else {
        res.write("404- Page not found")
        res.end();
    }
});

server.listen(3000, () => {   //port number 3000
    console.log("Server running at http://localhost:3000");
});
