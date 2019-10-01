import User from "../Models/User";
import Comment from "../Models/Comment";
import Note from "../Models/Note";

export const getNote = async (req, res) =>{
  console.log(req.body);
};

export const postNote = async (req, res) =>{
  const {
    body:{title, text}
  } = req;
  try{
    const notes = await Note.create({
      title,
      text
    });
    console.log(notes);
  } catch(error) {
    console.log(error);
  }
  
  
  
};


export const postLogin = (req, res) =>{
  res.send("It's page Two")
};

export const getUser = (req, res) =>{
  res.send("It's page Three")
};