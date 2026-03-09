const express = require("express");

const router = express.Router();   //creates a modular router

const userController = require("../controllers/userController");   //userController contains the functions that handle route logic

router.get("/", userController.getUsers);    //calls getUsers() from the controller

router.get("/:id", userController.getUserById);   

router.post("/", userController.createUser);

module.exports = router;
