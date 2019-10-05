import jwtSecret from "./jwtConfig";
import passport from "passport";
import User from "../Models/User";
const JWTStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt;

const opts = {
  jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey : jwtSecret.secret
};

const verifyUser = async(jwt_playload, done) =>{
    try{
      const user = await User.findOne({_id: jwt_playload.id});
      if(user) {
        console.log("User found in db in passport");
        return done(null, user);
      }else{
        console.log("User not found in db");
        return done(null, false, {message:"No user"});
      }
    } 
    catch(error){
      return console.log(error);
    }
};

passport.use(new JWTStrategy(opts,verifyUser));
passport.initialize();