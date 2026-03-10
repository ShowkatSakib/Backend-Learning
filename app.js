const express = require("express");

const todoRoutes = require("./routes/todoRoutes");   //contains all user-related endpoints (like GET, POST, PUT, DELETE)

const logger = require("./middleware/logger");

const app = express();

app.use(logger);


app.use(express.json());   //configure middleware to parse JSON

app.use("/todos", todoRoutes);   //conncet routes

module.exports = app;
