import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const { email, name, password } = req.body;

      const userBusiness = new UserBusiness();
      await userBusiness.create({ email, name, password });

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });

    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  async getUser(req: Request, res: Response):Promise<void>{
    try{  
      const userBusiness = new UserBusiness()
      const Users = await userBusiness.getUser()

      res.status(200).send(Users)
    }catch(error:any){
      res.status(400).send(error.message)
    }
  }
}
