const todos = require("../models/todoModel");

// GET all todos
exports.getTodos = (req, res) => {
  res.json(todos);
};

// GET todo by id
exports.getTodoById = (req, res, next) => {

  const id = parseInt(req.params.id);   //Gets ID from URL and convert it into integer

  const todo = todos.find(t => t.id === id);

  if (!todo) {
    const error = new Error("Todo not found");
    return next(error); // pass error to middleware
  }

  res.json(todo);
};

// CREATE new todo
exports.createTodo = (req, res) => {

  const newTodo = {
    id: todos.length + 1,   //automatically generated
    task: req.body.task,    //taken from request body
    completed: false       //default value = false
  };

  todos.push(newTodo);   //push means add

  res.status(201).json(newTodo);
};

// UPDATE todo
exports.updateTodo = (req, res, next) => {

  const id = parseInt(req.params.id);

  const todo = todos.find(t => t.id === id);

  if (!todo) {
    return next(new Error("Todo not found"));
  }

  todo.task = req.body.task;
  todo.completed = req.body.completed;

  res.json(todo);
};

// DELETE todo
exports.deleteTodo = (req, res,next) => {

  const id = parseInt(req.params.id);

  const index = todos.findIndex(t => t.id === id);    //Returns the position of the todo in the array

  if (index === -1) {
    return next(new Error("Todo not found"));
  }

  todos.splice(index, 1);   //removes the item from the array

  res.json({ message: "Todo deleted successfully" });
};
