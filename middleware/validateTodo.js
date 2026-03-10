//check if task in the request body for post and put
const validateTodo = (req, res, next) => {

  // Check if body exists
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: "Task is required" });
  }

  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ message: "Task is required" });
  }

  next(); // go to next middleware or controller

};

module.exports = validateTodo;