// import required libraries
const bcrypt = require("bcryptjs");      // for hashing password
const jwt = require("jsonwebtoken");     // for creating token

// import database and users table
const { db } = require("../db");
const { users } = require("../db/schema");

// import helper for where condition
const { eq } = require("drizzle-orm");


// REGISTER 
exports.register = async (req, res) => {

  // get email and password from request body
  const { email, password } = req.body;

  // hash the password (security)
  const hashedPassword = await bcrypt.hash(password, 10);
  // 10 = salt rounds (more secure but slower)

  // insert new user into database
  const newUser = await db.insert(users).values({
    email,
    password: hashedPassword
  }).returning();   // return inserted data

  // send created user as response
  res.json(newUser[0]);
};


// LOGIN 
exports.login = async (req, res) => {

  // get email and password from request body
  const { email, password } = req.body;

  // find user in database by email
  const user = await db.select().from(users).where(eq(users.email, email));

  // if user not found
  if (!user.length) {
    return res.status(401).json({ message: "User not found" });
  }

  // compare entered password with hashed password in DB
  const isMatch = await bcrypt.compare(password, user[0].password);

  // if password is wrong
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid password" });
  }

  // CREATE JWT TOKEN
  const token = jwt.sign(
    { id: user[0].id },          // payload (store user id)
    process.env.JWT_SECRET,      // secret key from .env
    { expiresIn: "1h" }          // token valid for 1 hour
  );

  // send token to frontend
  res.json({ token });
};
