import express from "express"
import { PostBusiness } from "../../business/PostBusiness"
import { PostDatabase } from "../../data/PostDatabase"
import { PostController } from "../PostController"


export const postRouter = express.Router()

const postDatabase = new PostDatabase
const postBusiness = new PostBusiness(postDatabase)
const postController = new PostController(postBusiness)

postRouter.post("/create", (req, res)=> postController.creatPost(req, res))
// userRouter.post("/login", (req, res)=>userController.login (req, res))

// userRouter.get("/profile", (req, res)=>userController.profile (req, res))
// userRouter.get("/:id", (req, res)=>userController.otherProfile (req, res))