const express = require("express");

const app = express();

app.get("/users/:id", (req, res) => {

    const userId = req.params.id;    // params use to capture dynamic values from url

    res.send("User ID: " + userId);

});

app.listen(3000, () => {    //localhost port 3000
    console.log("Server running on port 3000");
});
