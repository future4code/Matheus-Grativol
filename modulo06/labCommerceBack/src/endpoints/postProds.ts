import { Request, Response } from "express";
import { connection } from "../data/connection";
import { v4 as generateId } from 'uuid';

export async function postProds (req: Request, res: Response): Promise<void> {
    try{

        let name = req.body.name
        let price = req.body.price
        let image_url = req.body.image_url

        if(!name){
            throw new Error("Informe o Nome")
        }
        if(!price || typeof price !== "number"){
            throw new Error("Preço incorreto!")
        }
        if(!image_url){
            throw new Error("Informe a URL!")
        }

        await connection("labecommerce_products").insert({
            id: generateId(),
            name,
            price,
            image_url
        })

        res.status(201).send("Produto criado com sucesso!")
    }catch(error : any){
        res.status(400).send(error.message)
    }
}