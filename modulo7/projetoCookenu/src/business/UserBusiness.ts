import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidPassword } from "../error/customError";
import { user, UserInputDTO } from "../model/user";
import { generateToken } from "../services/authenticator";
import { generateHash } from "../services/hashManager";
import { generateId } from "../services/IdGenerator";
import { UserRepository } from "./UserRepository";

export class UserBusiness {
    constructor(private userDatabase: UserRepository){}

    public createUser = async (input: UserInputDTO): Promise<string> =>{

        try{
            let {name, nickname, email, password, role} = input

            if(!name || !nickname || !email || !password|| !role){
                throw new CustomError(400, "Preencha corretamente os campos")
            }

            if(role !== "ADMIN") {
                role = "NORMAL"
            }

            if (password.length < 6){
                throw new InvalidPassword()
            }
            const id = generateId()
            const hashPassword = await generateHash(password)

            const user: user={
                id,
                name,
                email,
                nickname,
                password: hashPassword,
                role
            }

            await this.userDatabase.insertUser(user)
            const token = generateToken({id, role})

            return token
        }catch(error: any){
            throw new CustomError(400, error.message)
        }
    }
}