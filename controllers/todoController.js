const { db } = require("../db");      //for query operation using db
const { todos } = require("../db/schema");   // to access todos table from database
const { eq } = require("drizzle-orm");  // to write where condition

// GET all todos
exports.getTodos = async (req, res) => {    

  const result = await db.select().from(todos);
  res.json(result);
};

// GET todo by id
exports.getTodoById = async (req, res, next) => {

  const id = parseInt(req.params.id);   //Gets ID from URL and convert it into integer

  const todo = await db.select().from(todos).where(eq(todos.id, id));

  if (!todo.length) {
    const error = new Error("Todo not found");
    return next(error); // pass error to middleware
  }

  res.json(todo[0]);
};

// CREATE new todo
exports.createTodo = async (req, res) => {

  const newTodo = await db.insert(todos).values({
    task: req.body.task,    //taken from request body
    completed: false       //default value = false
  }).returning();     //new row return

  res.status(201).json(newTodo[0]);
};

// UPDATE todo
exports.updateTodo = async (req, res, next) => {

  const id = parseInt(req.params.id);

 const updated = await db.update(todos)
    .set({
      task: req.body.task,
      completed: req.body.completed
    })
    .where(eq(todos.id, id))
    .returning();

  if (!updated.length) {
    return next(new Error("Todo not found"));
  }

  res.json(updated[0]);
};

// DELETE todo
exports.deleteTodo = async (req, res,next) => {

  const id = parseInt(req.params.id);

  const deleted = await db.delete(todos)
    .where(eq(todos.id, id))
    .returning();

  if (!deleted.length) {
    return next(new Error("Todo not found"));
  }

  res.json({ message: "Todo deleted successfully" });
};
