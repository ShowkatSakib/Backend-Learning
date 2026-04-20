const { pgTable, serial, text, boolean } = require("drizzle-orm/pg-core");

// TODOS TABLE
const todos = pgTable("todos", {
  id: serial("id").primaryKey(),
  task: text("task").notNull(),
  completed: boolean("completed").default(false)
});

// USERS TABLE 
const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  password: text("password").notNull()
});

// export both tables
module.exports = { todos, users };


//This defines postgreSQL database tables --- using code
