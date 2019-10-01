import mongoose from "mongoose";
import { CommentSchema } from "../Schemas";

const Comment = mongoose.model("Comment", CommentSchema);
export default Comment;