import { Request, Response } from "express";
import { connection } from "../data/connection";
import { v4 as generateId } from 'uuid';

export async function postPurchases (req: Request, res: Response): Promise<void> {
    try{

        let product_id = req.body.product_id
        let user_id = req.body.user_id
        let quantidade = req.body.quantidade

        const [priceProd] = await connection("labecommerce_products").select("price").where({id : product_id})

        let total_price = quantidade * priceProd.price

        if(!user_id){
            throw new Error("Informar ID do usuário!")
        }
        if(!product_id){
            throw new Error("Informar ID do produto!")
        }
        if(!quantidade){
            throw new Error("Informar quantidade de Produtos!")
        }
    
        await connection("labecommerce_purchases").insert({
            id: generateId(),
            user_id,
            product_id,
            quantidade,
            total_price
        })

    }catch(error : any){
        res.status(400).send(error.message)
    }

}