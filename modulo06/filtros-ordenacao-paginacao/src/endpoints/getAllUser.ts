import { Request, Response } from "express"
import { connection } from "../data/connection"


export const getAllUsers = async (req: Request, res: Response): Promise<void> => {

    try {

        const users = await connection("aula48_exercicio").select()

        if (!users.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(users)

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}