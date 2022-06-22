import { UserRepository } from "../business/UserRepository";
import { CustomError } from "../error/customError";
import { user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase implements UserRepository{

    private TABLE_NAME = "Auth_users"

    public insertUser = async (user: user)=>{
        try{
            await UserDatabase.connection
                .insert({
                    id: user.id,
                    name: user.name,
                    nickname: user.nickname,
                    email: user.email,
                    password: user.password,
                    role: user.role
                }).into(this.TABLE_NAME)

        }catch(error: any){
            throw new CustomError(400, error.message)
        }
    }
}