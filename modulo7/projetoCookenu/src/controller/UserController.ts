import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/user";

const userBusiness = new UserBusiness
export class UserController {
    
    public signup = async (req:Request, res:Response) => {
        try{
            const input: UserInputDTO ={
                name: req.body.name,
                nickname: req.body.nickname,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role
            }

            const token = await userBusiness.createUser(input)

            res.status(201).send({ message: "Usuário criado!", token})
        }catch(error: any){
            res.status(400).send(error.message)
        }
    }
}