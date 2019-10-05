import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import notesRouter from "./api/notes";
import usersRouter from "./api/users";
import "./config/passport";
import {authenticateJWT} from "./controllers/userController";

require('dotenv').config();

const app = express();

// Middlewares

app.use(morgan("dev"));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors());
app.use(authenticateJWT);

// Routers

app.use("/", notesRouter);
app.use("/", usersRouter);

export default app;