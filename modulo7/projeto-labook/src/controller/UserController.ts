import { UserBusiness } from "../business/UserBusiness";
import { Request, Response } from "express";
import { UserInputDTO } from "../model/user";


export class UserController{
    constructor(private userBusiness : UserBusiness){}

    public creatUser = async (req: Request, res: Response) =>{

        try{
            const {name, email, password} = req.body

            const input : UserInputDTO = {
                name,
                email,
                password
            }

            await this.userBusiness.creatUser(input)

            res.status(201).send({ message: "Usuário criado!" })

        }catch(error:any){
            
            res.status(400).send(error.message);
        }
    }
}