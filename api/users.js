import express from "express";
import { registerUser, getUser, loginUser, authenticateUser } from "../controllers/userController";
const Router = express.Router();


// Registers a User
Router.post("/users", registerUser);

// Login a User
Router.post("/users/login", loginUser);

// Gets User profile
Router.get("/users/:id", getUser);

// Gets User's Nicknames
Router.get("/users/:id/nicknames", (req, res)=>res.json({nicknames : "Nickname Lists"}));

// Create Nicknames
Router.post("/users/:id/nicknames", ()=>console.log('Nickname Created!'));


export default Router;

