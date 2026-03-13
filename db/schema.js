const { pgTable, serial, text, boolean } = require("drizzle-orm/pg-core");

const todos = pgTable("todos", {
  id: serial("id").primaryKey(),
  task: text("task").notNull(),
  completed: boolean("completed").default(false)
});

module.exports = { todos };




//This defines postgreSQL database todos table --- using code