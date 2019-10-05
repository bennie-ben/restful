import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  title: {
    type : String,
    required : "Title is required."
  },
  text : {
    type : String,
    required : " Any kind of comment is required."
  },
  createdAt : {
    type : String,
    default : new Date()
  },
  nickname : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Nickname"
  }
});

const Comment = mongoose.model("Comment", CommentSchema);
export default Comment;