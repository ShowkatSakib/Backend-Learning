const express = require("express");

const todoRoutes = require("./routes/todoRoutes");   //contains all user-related endpoints (like GET, POST, PUT, DELETE)

const errorHandler = require("./middleware/errorHandler");

const app = express();


// JSON parser first
app.use(express.json());   //configure middleware to parse JSON

// routes
app.use("/todos", todoRoutes);   //conncet routes

// Global error handler (must be last)
app.use(errorHandler);


module.exports = app;
