const pkg = require("pg");   //pg is the official PostgreSQL client for Node.js
const { drizzle } = require("drizzle-orm/node-postgres");  //node-postgres part tells Drizzle we are using PostgreSQL as the database
require("dotenv").config();

const { Pool } = pkg;   //Pool manages multiple database connections

const pool = new Pool({   //create a new pool of connections to PostgreSQL
  connectionString: process.env.DATABASE_URL
});

const db = drizzle(pool);   //db is now your main object to run queries using Drizzle ORM

module.exports = { db };
