const http = require("http");
const URL = require("url");

const server = http.createServer((req, res) => {   

    var myURL = "https://www.example.com/products/list?category=electronics&sort=price"
    
    var myURLObj = URL.parse(myURL, true);   //parse uesd for split url and it return an object 

    var myHostName = myURLObj.host;   //find url host name
    var myPathName = myURLObj.pathname;   //find url path name
    var mySearchName = myURLObj.search;   //find url search query name

    res.write(myHostName);
    res.end();


});

server.listen(3000, () => {   //port number 3000
    console.log("Server running at http://localhost:3000");
});
