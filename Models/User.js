import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username : {
    type : String,
    required : "Name is Required"
  },
  password : {
    type : String,
    required : "Password is Required"
  },
  email : String,
  bios : String,
  kakaoID : String,
  facebookID : String,
  profileURL : {
    type : String,
    default : "https://www.windstream.com/getmedia/b2e4e38a-7cb6-4ca9-9544-54dfeaca6304/icon_user-circle.png.aspx?width=1920"
  },
  nicknames : [
    {
      type : String,
      required : "At least one nickname is required"
    }
  ],
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

const User = mongoose.model("User", UserSchema);
export default User;