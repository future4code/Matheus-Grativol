import express from "express"
import { PostBusiness } from "../../business/PostBusiness"
// import { UserBusiness } from "../../business/UserBusiness"
// import { PostDatabase } from "../../data/mySQL/PostDatabase"
// import { UserDatabese } from "../../data/mySQL/UserDatabase"
import { PostController } from "../PostController"


export const postRouter = express.Router()

// const postDatabase = new PostDatabase()
const postBusiness = new PostBusiness()
const postController = new PostController(postBusiness)


postRouter.post("/create",(req, res)=> postController.creatPost(req, res))
postRouter.get("/get",(req, res)=> postController.getPost(req, res))