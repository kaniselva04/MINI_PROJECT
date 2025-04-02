import express from "express";
import { register, login, logout, addToSaveList,removeFromSaveList, getSavedList } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.post("/logout", logout);
userRouter.post("/save-list", addToSaveList); 
userRouter.post("/remove-save-list", removeFromSaveList);
userRouter.get("/getSavedList/:userId",getSavedList);

export default userRouter;
