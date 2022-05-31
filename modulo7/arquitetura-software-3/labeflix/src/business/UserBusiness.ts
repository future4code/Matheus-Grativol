import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid'
import { User, UserInputDTO } from "../model/User"
import { CustomError, InvalidEmail, InvalidName, InvalidPassword } from "../error/customError"

export class UserBusiness {
  public create = async({ email, name, password }: UserInputDTO) =>{
    try{
      if (!email || !name || !password) {
        throw new CustomError(400, 'Preencha os campos "name", "email" e "password"')
      }

      if(name.length < 4){
        throw new InvalidName()
      }
 
      if(!email.includes("@")){
       throw new InvalidEmail()
     }

     if(password.length < 6){
       throw new InvalidPassword()
     }
  
      const id = generateId()
  
      const userDatabase = new UserDatabase()
  
      const user: User = {
        id,
        name,
        email,
        password
      }
      await userDatabase.create(user)

    }catch(error:any){
      throw new Error(error.message)
    }
    
  }

  async getUser(): Promise<any> {
    const userDatabase = new UserDatabase
    
    return await userDatabase.getUser()
  }
}
