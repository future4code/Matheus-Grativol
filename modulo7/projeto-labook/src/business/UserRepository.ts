import { user } from "../model/user";


export interface UserRepository {
    creatUser(User: user): Promise<void>
}