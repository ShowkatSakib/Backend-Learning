const express = require("express");

const userRoutes = require("./routes/userRoutes");   //contains all user-related endpoints (like GET, POST, PUT, DELETE)

const logger = require("./middleware/logger");

const app = express();

app.use(logger);


app.use(express.json());   //configure middleware

app.use("/users", userRoutes);   //conncet routes

module.exports = app;
