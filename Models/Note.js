import mongoose from "mongoose";

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  title : {
    type : String,
    required : "Title is required."
  },
  text : {
    type : String,
    required : "Empty Note is not allowed."
  },
  nickname : [
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : "Nickname",
      default : null
    }
  ],
  createdAt : {
    type : String,
    default : new Date()
  }
});

const Note = mongoose.model("Note", NoteSchema);
export default Note;