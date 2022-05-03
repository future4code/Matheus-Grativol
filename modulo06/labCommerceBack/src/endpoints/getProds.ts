import { Request, Response } from "express";
import { connection } from "../data/connection";

export async function getProds (req: Request, res: Response): Promise<void> {
    try{

        const result = await connection("labecommerce_users").select()

        res.status(200).send(result)
    }catch(error : any){}
}