
import { CustomError, UnauthorizedUser } from "../error/customError";
import { post, PostInputDTO } from "../model/post";
import { getTokenData } from "../services/authenticator";
import { generateId } from "../services/IdGenerator";
import { PostRepository } from "./PostRopository";



export class PostBusiness {
    constructor(private postDatabase: PostRepository){}

    public createPost = async (input: PostInputDTO): Promise<void> =>{

        try{
            let {title, description, token} = input

            if(!title || !description || !token){
                throw new CustomError(400, "Preencha corretamente os campos")
            }

            const { role, id } = getTokenData(token);

            if (role !== "ADMIN") {
                throw new UnauthorizedUser();
            }

            const id_post = generateId()
            const creation_data = Date.now().toString()

            const post: post={
                id: id_post,
                title,
                description,
                creation_data,
                user_id: id
            }

            await this.postDatabase.insertPost(post)

        }catch(error: any){
            throw new CustomError(400, error.message)
        }
    }
}