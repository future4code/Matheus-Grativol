import { profileOutput, user } from "../model/user";

export interface UserRepository {
    insertUser(user: user): Promise<void>
    findUserByEmail(email: string): Promise<any>
    selectProfile(id:string): Promise<profileOutput>
    selectProfileOther(id: string): Promise<profileOutput>
}