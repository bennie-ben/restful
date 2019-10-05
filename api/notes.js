import express from "express";
import { getNote, postNote} from "../controllers/noteController";

const Router = express.Router();

// Show all notes
Router.get('/notes', getNote);

// Make a note
Router.post('/notes', postNote);



export default Router;