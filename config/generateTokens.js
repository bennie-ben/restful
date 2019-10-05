import jwt from "jsonwebtoken";
import jwtSecret from "./jwtConfig";
const generateTokens = id => jwt.sign({id}, jwtSecret.secret)

export default generateTokens;