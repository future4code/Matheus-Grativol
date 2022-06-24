import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { getProfile, LoginInputDTO, profileOutput, UserInputDTO } from "../model/user";

export class UserController {
    constructor(private userBusiness: UserBusiness){}

    public signup = async (req:Request, res:Response) => {
        try{
            const input: UserInputDTO ={
                name: req.body.name,
                nickname: req.body.nickname,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role
            }

            const token = await this.userBusiness.createUser(input)

            res.status(201).send({ message: "Usuário criado!", token})
        }catch(error: any){
            res.status(400).send(error.message)
        }
    }

    public login = async (req: Request, res: Response) =>{
        try{
            const input: LoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            }

            const token = await this.userBusiness.login(input)

            res.status(200).send({message: "Usuário logado!", token})
        }catch(error:any){
            res.status(400).send(error.message)
        }
    }

    public profile = async (req:Request, res:Response) => {
        try{

            const token = req.headers.authorization!

            const profile = await this.userBusiness.getProfile(token)

            res.status(201).send(profile)

        }catch(error: any) {
            res.status(400).send(error.message)
        }
    }

    public otherProfile = async (req:Request, res:Response) => {
        try{

            const input : getProfile = {
                id: req.params.id,
                token: req.headers.authorization!
            }
            
            const profile = await this.userBusiness.getProfileOther(input)

            res.status(201).send(profile)

        }catch(error: any) {
            res.status(400).send(error.message)
        }
    }
}