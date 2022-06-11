import { PostRepository } from "../../business/PostRepository";
import { post } from "../../model/post";
import { BaseDatabase } from "./BaseDatabase";


export class PostDatabase extends BaseDatabase

implements PostRepository{
    private static TABLE_NAME = "labook_posts"

    public creatPost = async (post: post) =>{
        try{
            await PostDatabase.connection.insert({
                id: post.id,
                photo: post.photo,
                description: post.description,
                type: post.type,
                created_at: post.created_at,
                author_id: post.author_id
            }). into(PostDatabase.TABLE_NAME)

        }catch(error:any){
            throw new Error(error.message)
        }
    }

    public getPost = async () =>{
        try{
            const posts: post = await PostDatabase.connection.select()
            .into(PostDatabase.TABLE_NAME)

            return posts
        }catch(error:any){
            throw new Error(error.message)
        }
    }
}