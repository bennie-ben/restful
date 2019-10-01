import express from "express";
import { home, pageOne, pageTwo, pageThree } from "../controllers/controller";

const Router = express.Router();

Router.get('/', home);

Router.get('/page1', pageOne);

Router.get('/page2', pageTwo);

Router.get('/page3', pageThree);

export default Router;