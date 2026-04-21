// import required libraries
const bcrypt = require("bcryptjs");      // for hashing password
const jwt = require("jsonwebtoken");     // for creating token

// import database and users table
const { db } = require("../db");
const { users } = require("../db/schema");

// import helper for where condition
const { eq } = require("drizzle-orm");


//  REGISTER 
exports.register = async (req, res) => {

  try {

    // get email and password from request body
    const { email, password } = req.body;

    // check if user already exists
    const existingUser = await db.select().from(users).where(eq(users.email, email));

    if (existingUser.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // hash the password (security)
    const hashedPassword = await bcrypt.hash(password, 10);

    // insert new user into database
    const newUser = await db.insert(users).values({
      email,
      password: hashedPassword
    }).returning();

    // send created user as response
    res.status(201).json(newUser[0]);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//LOGIN 
exports.login = async (req, res) => {

  try {

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
      { id: user[0].id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // send token to frontend
    res.json({ token });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
