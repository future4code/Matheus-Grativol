import { PostDatabase } from "../data/mySQL/PostDatabase";
import { post, postInputDTO } from "../model/post";
import { generateId } from "../services/generateId";


export class PostBusiness {
    public creatPost = async (input: postInputDTO)=>{
        try{
            const {photo, description, type, created_at, author_id} = input

            if(!photo || !description || !type || !created_at || !author_id){
                throw new Error(
                    '"photo", "description", "type", "created_at" e "author_id" são obrigatórios'
                )
            }

            const id:string = generateId()

            const postDatabase = new PostDatabase()

            const post: post ={
                id,
                photo,
                description,
                type,
                created_at,
                author_id
            }

            await postDatabase.creatPost(post)

        }catch(error:any){
            throw new Error(error.message)
        }
    }

    public getPost = async () =>{
        const postDatabase = new PostDatabase

        return await postDatabase.getPost()
    }

}