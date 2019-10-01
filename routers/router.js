import express from "express";
import { getNote, postNote, getUser, postLogin } from "../controllers/controller";

const Router = express.Router();

// Show all notes
Router.get('/notes', getNote);

// Make a note
Router.post('/notes', postNote);

// Show current user
Router.get('/users', getUser);

// Athenticate login
Router.post('/login', postLogin);

export default Router;