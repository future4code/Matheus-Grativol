import express, {Request , Response} from "express"
import cors from "cors"
import { v4 as generateId } from 'uuid';
import { AddressInfo } from "net"

const app = express()

app.use(express.json())
app.use(cors())

type typeUsers ={
    id : string,
    name : string,
    cpf : number,
    dataNasc : string
}

const users: typeUsers[] = [
    {
        id : "id01",
        name : "Matheus Grativol",
        cpf: 14029556708,
        dataNasc: "24/10/1990"
    }
]

app.get("/users",(request:Request , response:Response)=>{
    response.status(200).send(users)
})

app.post("cadastro/user",(request:Request , response:Response)=>{
    const {name , cpf , dataNasc}:typeUsers = request.body

    const userAdd: typeUsers = {
        id : generateId(),
        name,
        cpf,
        dataNasc
    }

    users.push(userAdd)

    response.status(200).send(users)
})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});