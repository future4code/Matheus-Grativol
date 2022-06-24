
export type post = {
    id: string,
    title: string,
    description: string,
    creation_data: string,
    user_id: string
 }


 export interface PostInputDTO {
    title: string,
    description: string,
    token: string,
 }