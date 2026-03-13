require("dotenv").config(); // load .env

module.exports = {
  schema: "./db/schema.js",   // path to your Drizzle schema
  out: "./drizzle",           // folder for migration files
  dialect: "postgresql",      // must be exactly this
  dbCredentials: {
    url: process.env.DATABASE_URL // PostgreSQL connection string
  }
};
