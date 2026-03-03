const http = require("http");

const server = http.createServer((req, res) => {   //server create
    res.write("Hello from Node Server");    // send data to the browser who requested
    res.end();    //response finished
});

server.listen(3000, () => {   //port number 3000
    console.log("Server running at http://localhost:3000");
});
