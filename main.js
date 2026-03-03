const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {   

    if(req.url=="/"){

        let data= fs.readFileSync("Home.html","utf-8")   //utf-8 is a character set
        res.end(data);

    }
    else if(req.url=="/About"){

        let data= fs.readFileSync("About.html","utf-8")   //utf-8 is a character set
        res.end(data);

    }
    else if(req.url=="/Contact"){

        let data= fs.readFileSync("Contact.html","utf-8")   //utf-8 is a character set
        res.end(data);

    }
    else if(req.url=="/Terms"){

        let data= fs.readFileSync("Terms.html","utf-8")   //utf-8 is a character set
        res.end(data);

    }



});

const PORT = process.env.PORT || 3000;   //works on real hosting server or local host 3000

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
