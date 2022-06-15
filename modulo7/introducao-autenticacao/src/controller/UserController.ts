import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { EditUserInputDTO, LoginInputDTO, UserInputDTO } from "../model/user";

export class UserController {

  public signup = async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, nickname, email, password } = req.body;

      const input: UserInputDTO = {
        name,
        nickname,
        email,
        password,
      };
      const userBusiness = new UserBusiness()
      const token = await userBusiness.createUser(input);

      res.status(201).send({ message: "Usuário criado!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public login = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body;

      const input: LoginInputDTO = {
        email,
        password,
      };
      const userBusiness = new UserBusiness()
      const token = await userBusiness.login(input);

      res.status(200).send({ message: "Token:", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public getUserLog = async (req: Request, res: Response) => {
    try {

      const id = req.headers.authorization as string;


      const userBusiness = new UserBusiness()
      const user = await userBusiness.userLog(id);

      res.status(201).send({ id: user.id, email: user.email });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

}
