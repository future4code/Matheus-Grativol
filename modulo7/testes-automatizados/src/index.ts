import { User } from "./types";

export const performPurchase = (user: User, value: number) =>{
    if(user.balance >= value){
        return{
            ...user,
            balance: user.balance - value
        }
    }
    return undefined
}