import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getPurcheses (req: Request, res: Response): Promise<void> {
    try{
        let user_id = req.params.user_id
        const purchasesUser = await connection("labecommerce_purchases").select().where({user_id : user_id})
        if(!purchasesUser.length){
            throw new Error("Usuário não encontrado")
        }

        res.status(201).send(purchasesUser)
    }catch(error : any){

    }
}