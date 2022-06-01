import express, { Request, Response } from "express";

import { v4 as generateId } from 'uuid';

import { AddressInfo } from "net";


const app = express();

app.use(express.json());

type typeTarefa = {
    userId: string,
    id: string,
    title: string,
    completed: boolean
}

const tarefas: typeTarefa[] = [
    {
        userId: "01",
        id: "01",
        title: "tomar café",
        completed: true
    },
    {
        userId: "02",
        id: "02",
        title: "trabalhar",
        completed: true
    },
    {
        userId: "03",
        id: "03",
        title: "estudar",
        completed: false
    },
    {
        userId: "04",
        id: "04",
        title: "dormir",
        completed: false
    },
    {
        userId: "04",
        id: "05",
        title: "acordar",
        completed: false
    }
]
app.get("/ping", (request: Request, response: Response) => {
    response.status(201).send("Pong")
})

app.get("/tarefas/completa", (request: Request, response: Response) => {
    const tarefasOk = tarefas.filter((tarefas) => tarefas.completed === true)
    response.status(201).send(tarefasOk)
})


app.post("/tarefas/add", (request: Request, response: Response) => {
    const tarefa = request.body.title

    if (!tarefa) {
        response.status(400).send("Favor informar a tarefa.");
        return
    }

    const newTarefa = {
        userId: generateId(),
        id: generateId(),
        title: tarefa,
        completed: false
    }

    tarefas.push(newTarefa)

    response.status(201).send(tarefas)
})

app.put("/tarefas/editar", (request: Request, response: Response)=>{
    const tarefaCompleta = request.body.completed
    if(!tarefaCompleta){
        response.status(400).send("Favor informar o completed")
        return
    }
    const idTarefa = request.headers.authorization
    if(!idTarefa){
        response.status(400).send("Favor informar o id da tarefa")
        return
    }

    const tarefa = tarefas.find((taref)=> taref.id === idTarefa)
    // if(!tarefa){
    //     response.status(400).send("Favor informar o id da tarefa")
    // }

    // tarefa.completed = tarefaCompleta

    response.status(201).send(tarefa)
})

app.delete("/tarefas/delet",(request: Request, response: Response)=>{
    const idTarefa = request.headers.authorization
    if(!idTarefa){
        response.status(400).send("Favor informar o id da tarefa")
        return
    }

    const tarefaDel = tarefas.filter((tarefa)=> tarefa.id !== idTarefa)

    response.status(201).send(tarefaDel)
})

app.get("/tarefas/:userId",(request: Request, response: Response)=>{

    const idUser = request.params.userId

    if(!idUser){
        response.status(400).send("Favor informar o id do usuario")
        return
    }

    const tarefasUser = tarefas.filter((taf) => taf.userId === idUser)

    response.status(201).send(tarefasUser)
})



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;