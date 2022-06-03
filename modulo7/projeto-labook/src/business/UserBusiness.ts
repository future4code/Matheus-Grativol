import { CustomError } from "../error/customError";
import { user, UserInputDTO } from "../model/user";
import { generateId } from "../services/generateId";
import { UserRepository } from "./UserRepository";


export class UserBusiness{
    constructor(private userDatabase: UserRepository){}

    public creatUser = async (input : UserInputDTO) => {
        try{
            const {name, email, password} = input

            if(!name || !email || !password){
                throw new CustomError(400, 'Preencha os campos "name", "email" e "password"')
            }

            const id = generateId()

            const user :user = {
                id,
                name,
                email,
                password
            }
            await this.userDatabase.creatUser(user)
        }catch(error:any){
            throw new Error(error.message);
        }
    }
}