import dotenv from "dotenv"
import { AuthenticationData } from "../model/type"
import * as jwt from "jsonwebtoken";


dotenv.config

export class Authenticator {
    public generateToken = (payLoad: AuthenticationData) =>{
        const token = jwt.sign(payLoad,
            process.env.JWT_KEY as string,
            {expiresIn: "3h"})
    
        return token
    }

    public getTokenData = (token: string): AuthenticationData =>{
        const payLoad = jwt.verify(token, process.env.JWT_KEY as string)as jwt.JwtPayload
        const result: AuthenticationData = {id: payLoad.id}
        return result
    }
}