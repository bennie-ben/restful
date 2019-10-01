import mongoose from "mongoose";
import { UserSchema } from "../Schemas";

const User = mongoose.model("User", UserSchema);
export default User;