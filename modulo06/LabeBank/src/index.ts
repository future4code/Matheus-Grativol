import express, { Request, Response } from "express"
import cors from "cors"
import { v4 as generateId } from 'uuid';
import { AddressInfo } from "net"

const app = express()

app.use(express.json())
app.use(cors())

type typeUsers = {
    id: string,
    name: string,
    cpf: number,
    dataNasc: string,
    saldo: number
    extrato: [{}]
}


const users: typeUsers[] = [
    {
        id: "id01",
        name: "Matheus Grativol",
        cpf: 14029556708,
        dataNasc: "24/10/1990",
        saldo: 0,
        extrato: [
            {
                id: "idExtrato01",
                valor: 149,
                data: "11/04/2022",
                descricao: "torneira"
            }
        ]
    }
]

app.get("/users", (request: Request, response: Response) => {
    response.status(200).send(users)
})

app.post("/cadastro/user", (request: Request, response: Response) => {

    let errorCode = 400
    try {
        const { name, cpf, dataNasc }: typeUsers = request.body
        const verificarCpf = users.find((cpfs) => cpfs.cpf === cpf)
        const dataAtual: number = new Date().getTime()
        const [diaNasc, mesNasc, anoNasc] = dataNasc.split("/")
        const anoNascTime: number = new Date(`${anoNasc}-${mesNasc}-${diaNasc}T00:00:00`).getTime()
        const umAnoEmTimestamp: number = 31556926000

        const idade: number = dataAtual - anoNascTime;

        if (idade <= 18 * umAnoEmTimestamp) {
            errorCode = 404
            throw new Error("Usuário menor de 18 anos")
        }
        if (verificarCpf) {
            errorCode = 409
            throw new Error("CPF ja existente")
        }

        if (!name || !cpf || !dataNasc) {
            errorCode = 422
            throw new Error("Alguma informação está faltando. Consulte a documentação.")
        }
        const userAdd: typeUsers = {
            id: generateId(),
            name,
            cpf,
            dataNasc,
            saldo: 0,
            extrato: [{}]
        }
        users.push(userAdd)
        response.status(201).send(users)

    } catch (error: any) {
        switch (error.message) {
            case "Usuário menor de 18 anos":
                response.status(404).send("Usuário menor de 18 anos")
                break
            case "CPF ja existente":
                response.status(409).send("CPF ja existente")
                break
            case "Alguma informação está faltando. Consulte a documentação.":
                response.status(422).end("Alguma informação está faltando. Consulte a documentação.")
                break
            default:
                response.status(500).send("Algo deu errado")
        }
    }
})

app.get("/user/saldo/:cpf/:name", (request: Request, response: Response) => {
    let errorCode = 422
    try {
        const autorizationCpf = Number(request.params.cpf)
        const autorizationName = (request.params.name)

        if (!autorizationCpf || !autorizationName) {
            errorCode = 401
            throw new Error("Informe o CPF e o nome do usuario")
        }

        const getUser: typeUsers | undefined = users.find((user) => user.cpf === autorizationCpf)

        if (!getUser) {
            errorCode = 404
            throw new Error("conta não encontrada")
        }

        const saldo = getUser.saldo

        response.status(200).send(`Seu saldo é de R$ ${saldo}`)

    } catch (error: any) {

        response.status(errorCode).send(error.message)
    }
})

app.put("/user/add/saldo/:cpf/:name", (request: Request, response: Response) => {
    let errorCode = 422
    try {
        const {saldo} = request.body

        if (!saldo) {
            errorCode = 422
            throw new Error("Informe o valor")
        }
        const autorizationCpf = Number(request.params.cpf)
        const autorizationName = (request.params.name)

        if (!autorizationCpf || !autorizationName) {
            errorCode = 422
            throw new Error("Informe o CPF e o nome do usuario")
        }

        const getUser: typeUsers | undefined = users.find((user) => user.cpf === autorizationCpf)

        if (!getUser) {
            errorCode = 422
            throw new Error("conta não encontrada")
        }

        let newSaldo: number = getUser.saldo + saldo
        
        response.status(200).send(`Seu saldo é de R$ ${newSaldo}`)

    } catch (error: any) {

        response.status(errorCode).send(error.message)
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});