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
        userId: "01",
        id: "01",
        title: "estudar",
        completed: false
    },
    {
        userId: "01",
        id: "01",
        title: "dormir",
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

    console.log(newTarefa)
    tarefas.push(newTarefa)

    response.status(201).send(tarefas)
})





const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;