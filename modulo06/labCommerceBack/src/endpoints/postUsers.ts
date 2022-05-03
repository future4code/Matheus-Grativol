import e, { Request, Response } from "express";
import { connection } from "../data/connection";
import { v4 as generateId } from 'uuid';

export async function postUsers(req: Request, res: Response): Promise<void> {
    try {

        let name = req.body.name
        let email = req.body.email
        let password = req.body.password

        if (!name) {
            throw new Error("Informe o Nome")
        }
        if (!email || email.includs("@")) {
            throw new Error("Verifique o E-mail")
        }
        if (password < 6) {
            throw new Error("Senha menor que 6")
        }
        const [checkEmail] = await connection("suaTabela")
            .select("email")
            .where({ "email": email })
        console.log(checkEmail);

        if (checkEmail) {
            throw new Error("Este email já existe...")
        }
        await connection("labecommerce_users").insert({
            id: generateId(),
            name,
            email,
            password
        })

        res.status(200).send("Usuário criado com sucesso")

    } catch (error: any) {
        res.status(400).send(error.message)
    }
}