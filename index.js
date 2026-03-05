const express = require("express");

const app = express();

app.get("/products", (req, res) => {

    const category = req.query.category;    // query use to send extra information to the server

    res.send("Category: " + category);

});

app.listen(3000, () => {    //localhost port 3000
    console.log("Server running on port 3000");
});
