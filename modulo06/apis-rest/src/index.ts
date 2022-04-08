import express, {request, Request , response, Response} from "express"
import cors from "cors"
import { AddressInfo } from "net"

const app = express()

app.use(express.json())
app.use(cors())

type user ={
    id : string | number,
    name : string,
    email : string,
    type : userType.ADMIN | userType.NORMAL
    age : number
}

enum userType{
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}
let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: userType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: userType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: userType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: userType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: userType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: userType.ADMIN,
        age: 60
    }
]

app.get("/usuarios",(request:Request , response:Response)=>{
    response.status(200).send(users)
})

app.get("/usuarios/:type",(request:Request , response:Response)=>{
    const type = request.params.type
    const filterTypes = users.filter((typ)=> typ.type === type)

    response.status(200).send(filterTypes)
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });