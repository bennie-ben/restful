import Note from "../Models/Note";

export const getNote = async (req, res) =>{
  try{
    const notes = await Note.find({});
    if (notes) return res.status(200).json({notes});
    else return res.status(500).json({error:"There is no notes."});
  } catch(error){
    console.log(error);
  }
};

export const postNote = async (req, res) =>{
  const {
    body: { title, text }
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