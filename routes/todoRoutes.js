const express = require("express");

const router = express.Router();   //creates a modular router

const todoController = require("../controllers/todoController");   //todoController contains the functions that handle route logic

const validateTodo = require("../middleware/validateTodo");
const authMiddleware = require("../middleware/authMiddleware");  // import auth middleware


// protect all routes (PLACE HERE)
router.use(authMiddleware);


// GET all todos
router.get("/", todoController.getTodos);

// GET todo by id
router.get("/:id", todoController.getTodoById);

// CREATE todo
router.post("/", validateTodo, todoController.createTodo);

// UPDATE todo
router.put("/:id", validateTodo, todoController.updateTodo);

// DELETE todo
router.delete("/:id", todoController.deleteTodo);

module.exports = router;
