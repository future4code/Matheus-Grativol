import { PostRepository } from "../business/PostRopository"
import { CustomError } from "../error/customError"
import { post } from "../model/post"
import { BaseDatabase } from "./BaseDatabase"
import { UserDatabase } from "./UserDatabase"


export class PostDatabase extends BaseDatabase implements PostRepository{

    private TABLE_NAME = "Cookenu_post"

    public insertPost = async (post: post)=>{
        try{
            await UserDatabase.connection
                .insert({
                    id: post.id,
                    title: post.title,
                    description: post.description,
                    creation_data: post.creation_data,
                    user_id: post.user_id
                }).into(this.TABLE_NAME)

        }catch(error: any){
            throw new CustomError(400, error.message)
        }
    }

}