import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidName, InvalidPassword } from "../error/customError";
import {
  UserInputDTO,
  user,
  EditUserInputDTO,
  EditUserInput,
  LoginInputDTO,
} from "../model/user";
import { Authenticator } from "../services/Authenticator";
import { generateId } from "../services/generateId";

export class UserBusiness {
  public createUser = async (input: UserInputDTO): Promise<string> => {
    try {
      const { name, nickname, email, password } = input;

      if (!name || !nickname || !email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "name","nickname", "email" e "password"'
        );
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      if (password.length < 6) {
        throw new InvalidPassword
      }

      if (!email || !email.includes("@")) {
        throw new InvalidEmail();
      }

      const id: string = generateId()

      const user: user = {
        id,
        name,
        nickname,
        email,
        password,
      };
      const userDatabase = new UserDatabase();
      await userDatabase.insertUser(user);

      const authenticator = new Authenticator();
      const token = authenticator.generateToken({ id });

      return token
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: LoginInputDTO): Promise<string> => {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new CustomError(400, 'Preencha os campos "email" e "password"');
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const userDatabase = new UserDatabase();
      const user = await userDatabase.getUserByEmail(email);

      if( password !== user.password){
        throw new InvalidPassword()
      }

      const authenticator = new Authenticator();
      const token = authenticator.generateToken({id: user.id})

      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public userLog = async(id:string): Promise<any> =>{
    const userDatabase = new UserDatabase();
    const user = await userDatabase.getUserByEmail(id);

    return user
  }
}
