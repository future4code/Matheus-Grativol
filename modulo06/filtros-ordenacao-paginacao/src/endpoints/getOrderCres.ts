import { Request, Response } from "express"
import { connection } from "../data/connection"


export const getOrderCres = async (req: Request, res: Response): Promise<void> => {

    try {

        let sort = req.query.sort as string 
        let order = req.query.order as string

        const usersOrder = await connection("aula48_exercicio")
        .select().orderBy(sort, order)

        if (!usersOrder.length) {
            res.statusCode = 404
            throw new Error("No recipes found")
        }

        res.status(200).send(usersOrder)

    } catch (error) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}