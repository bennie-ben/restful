import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  name : {
    type : String,
    required : "Name is Required"
  },
  password : {
    type : String,
    required : "Password is Required"
  },
  nicknames : [
    {
      type : String,
      required : "At least one nickname is required"
    }
  ],
  kakaoID : String,
  facebookID : String,
  notes:[
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : "Note"
    }
  ],
  comments:[
    {
      type : mongoose.Schema.Types.ObjectId,
      ref : "Comment"
    }
  ]
});

export const CommentSchema = new Schema({
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
  }
});

export const NoteSchema = new Schema({
  title : {
    type : String,
    required : "Title is required."
  },
  text : {
    type : String,
    required : "Empty Note is not allowed."
  },
  
  createdAt : {
    type : String,
    default : new Date()
  }
});