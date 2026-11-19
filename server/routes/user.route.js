import express from 'express';
import { getUser } from '../controllers/user.controller.js';
import {isAuth} from '../middlewares/isAuth.js';

const userRouter = express.Router();

userRouter.get("/current-user", isAuth, getUser);

export default userRouter;