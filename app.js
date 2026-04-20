const express = require("express");
const cors = require("cors");

const todoRoutes = require("./routes/todoRoutes");   // todo APIs
const authRoutes = require("./routes/authRoutes");   // auth APIs 

const errorHandler = require("./middleware/errorHandler");

const app = express();

// enable CORS so frontend can call backend
app.use(cors());

// JSON parser first
app.use(express.json());

// routes
app.use("/auth", authRoutes);    // place it here (before todos)
app.use("/todos", todoRoutes);   // existing todo routes

// Global error handler (must be last)
app.use(errorHandler);

module.exports = app;
