const users = [
  { id: 1, name: "Sakib" },
  { id: 2, name: "Islam" }
];

exports.getUsers = (req, res) => {
  res.json(users);
};

// GET all users
exports.getUsers=(req,res)=>{
  res.status(200).json(users);
};

exports.getUserById = (req, res) => {    //GET single user

  const id = req.params.id;

  const user = users.find(u => u.id == id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
};

exports.createUser = (req, res) => {   //Create new users

  const newUser = req.body;

  users.push(newUser);

  res.status(201).json(newUser);

};
