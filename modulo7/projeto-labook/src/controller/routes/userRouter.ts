import express from "express";
import { UserBusiness } from "../../business/UserBusiness";
import { UserDatabese } from "../../data/mySQL/UserDatabase";
import { UserController } from "../UserController";

export const userRouter = express.Router()

const userDatabase = new UserDatabese()
const userBusiness = new UserBusiness(userDatabase)
const userController = new UserController(userBusiness)

userRouter.post("/create", (req, res)=> userController.creatUser(req, res))
userRouter.get("/get", (req, res)=> userController.getUser(req, res))
