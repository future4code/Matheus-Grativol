import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostInputDTO } from "../model/post";


export class PostController {
    constructor(private postBusiness: PostBusiness){}

    public creatPost = async (req:Request, res:Response) => {
        try{
            const input: PostInputDTO ={
                title: req.body.title,
                description: req.body.description,
                token: req.headers.authorization!
            }

            await this.postBusiness.createPost(input)

            res.status(201).send({ message: "Post criado!"})
        }catch(error: any){
            res.status(400).send(error.message)
        }
    }

}