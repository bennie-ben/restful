import mongoose from "mongoose";

const Schema = mongoose.Schema;

const NicknameSchema = new Schema({
  user : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
  },
  nickname : {
    type : String,
    required : "Nickname is Required."
  },
  notes:{
    type : mongoose.Schema.Types.ObjectId,
    ref : "Note"
  }
});

const Nickname = mongoose.model("Nickname", NicknameSchema);
export default Nickname;
