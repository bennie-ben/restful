import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import Router from "./routers/router";

require('dotenv').config();

const app = express();

// Middlewares

app.use(morgan("dev"));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors());


// Routers

app.use("/", Router);

export default app;