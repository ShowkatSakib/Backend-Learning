const express = require("express");

const app = express();   
app.use(express.json());   // this middleware allows the server to read JSON data from request body

let users = [              //array with object
  {id:1,name:"Sakib"},
  {id:2,name:"Rahim"}
];

// GET all users
app.get("/users",(req,res)=>{
  res.status(200).json(users);
});

// GET single user
app.get("/users/:id",(req,res)=>{
  const user = users.find(u => u.id == req.params.id);  //find() searches the array for a user whose id matches the requested id

  if(!user){
      return res.status(404).json({message:"User not found"});
  }
  else{
      return res.json(user);
    }
});

// CREATE user
app.post("/users",(req,res)=>{
  const newUser = req.body;    //contains the data sent by the client

  users.push(newUser);   //adds the new user to the users array

  res.status(201).json(newUser);
});

// UPDATE user
app.put("/users/:id",(req,res)=>{
  const user = users.find(u => u.id == req.params.id);

  if(!user){
      return res.status(404).json({message:"User not found"});
  }
  else{
        user.name = req.body.name;

        res.json(user);

    }
});

// DELETE user
app.delete("/users/:id",(req,res)=>{
  users = users.filter(u => u && u.id != req.params.id);   //filter() removes that user from the array

  res.json({message:"User deleted"});
});

app.listen(3000,()=>{
  console.log("Server running on port 3000");
});


