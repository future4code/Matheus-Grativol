import { Request, Response } from "express"
import { connection } from "../data/connection"


export const getUserType = async (req: Request, res: Response): Promise<void> => {

    try {
        let types = req.params.type

        
        const usersType = await connection("aula48_exercicio").select().where({type : types})

        if (!usersType.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(usersType)

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}