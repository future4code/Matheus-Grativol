import { UserRepository } from "../../business/UserRepository";
import { user } from "../../model/user";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabese extends BaseDatabase

implements UserRepository{

    public creatUser = async (user: user) =>{
        try{
            await UserDatabese.connection.insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            }).into("labook_users")

        }catch(error:any){
            
            throw new Error(error.message)
        }
    }

    public getUser = async () =>{
        try{
            const users: user = await UserDatabese.connection.select("id", "name", "email")
            .into("labook_users")

            return users
        }catch(error:any){
            throw new Error(error.message)
        }
    }
}