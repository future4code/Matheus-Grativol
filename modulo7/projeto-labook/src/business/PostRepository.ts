import { post } from "../model/post";


export interface PostRepository {
    creatPost(Post: post): Promise<void>
    getPost(): Promise<any>
}