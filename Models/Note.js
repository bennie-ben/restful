import mongoose from "mongoose";
import { NoteSchema } from "../Schemas";

const Note = mongoose.model("Note", NoteSchema);
export default Note;