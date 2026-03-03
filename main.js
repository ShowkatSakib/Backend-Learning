const http = require("http");

const server = http.createServer((req, res) => {   
    
        res.writeHead(200,{'content-type':'application/json'})   //header portion 
        const user = {    //object
        name: "Sakib",
        profession: "Developer"
    };

    res.end(JSON.stringify(user));   // json respone convert to string

});

server.listen(3000, () => {   //port number 3000
    console.log("Server running at http://localhost:3000");
});
