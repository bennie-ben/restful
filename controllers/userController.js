import User from "../Models/User";
import passport from "passport";
import generateTokens from "../config/generateTokens";

export const getUser = (req, res) =>{
 
};

export const loginUser = async (req, res) =>{
  const { body : { username, email, password }} = req;
  console.log(username)
  try{
    const user = await User.findOne({username, email});
    if(user){
      if(password === user.password){
        return generateTokens(user._id);
      }else{
        return res.status(400).json("Incorrect Password")
      }
    }
    else return res.status(404).json({error : "No User"})
  }
  catch(error){
    console.log(error);
  }
};

export const registerUser = async (req, res) =>{
  const { body : {username, email, password}} = req;
  try{
  const user = await User.findOne({ username });
    if(!user){
      await User.create({ username, email, password });
    }else{
      return res.json({error:"Bad Username 😢"});
    }
  }catch(error){
      return console.log(error);
    };
};

export const authenticateJWT = (req, res, next) => 
  passport.authenticate('jwt',{ session : false }, (error,user)=>{
    if(user){
      req.user = user;
    }
    next();
  })(req, res, next);