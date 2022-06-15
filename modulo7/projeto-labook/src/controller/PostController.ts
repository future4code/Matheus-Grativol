import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { postInputDTO } from "../model/post";


export class PostController {
    constructor(private postBusiness: PostBusiness){}

    public creatPost = async (req:Request, res:Response) =>{
        try{
            const {photo, description, type, created_at, author_id} = req.body

            const input: postInputDTO = {
                photo,
                description,
                type,
                created_at,
                author_id
            }

            await this.postBusiness.creatPost(input)

            res.status(201).send({ message: "Post criado com Sucesso!" })
        }catch(error:any){
            res.status(400).send(error.message)
        }
    }

    public getPost = async (req:Request, res:Response)=>{
        try{
            const posts = await this.postBusiness.getPost()

            res.status(200).send(posts)
        }catch(error:any){
            res.status(400).send(error.message)
        }
    }
}