import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidPassword, invalidProfile, UnauthorizedUser } from "../error/customError";
import { AuthenticationData, getProfile, LoginInputDTO, profileOutput, user, UserInputDTO } from "../model/user";
import { generateToken, getTokenData } from "../services/authenticator";
import { compareHash, generateHash } from "../services/hashManager";
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

    public login = async (input: LoginInputDTO): Promise<string> =>{

        try{
            let {email, password} = input

            if (!email || !password) {
                throw new CustomError(400, "Preencha corretamente os campos");
            }

            const user = await this.userDatabase.findUserByEmail(email)

            const hashComparison = await compareHash(password, user.password)

            if(!hashComparison) {
                throw new InvalidPassword()
            }

            const payload: AuthenticationData = {id : user.id, role: user.role}

            const token = generateToken(payload)

            return token
        } catch(error:any){
            throw new CustomError(400, error.message)
        }
    }

    public getProfile = async(token: string): Promise<profileOutput> =>{
        try{


            const { role, id } = getTokenData(token);

            if (role !== "ADMIN") {
                throw new UnauthorizedUser();
            }

            const profile : profileOutput = await this.userDatabase.selectProfile(id)

            if(!profile) {
                throw new invalidProfile()   
            }

            return profile
        }catch(error: any){
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public getProfileOther = async(input: getProfile): Promise<profileOutput> =>{
        try{

            const{id, token} = input

            const { role } = getTokenData(token);

            if (role !== "ADMIN") {
                throw new UnauthorizedUser();
            }

            const profile : profileOutput = await this.userDatabase.selectProfileOther(id)

            if(!profile) {
                throw new invalidProfile()   
            }

            return profile
        }catch(error: any){
            throw new Error(error.sqlMessage || error.message)
        }
    }
}