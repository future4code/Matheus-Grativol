import express, { Request, Response } from "express";
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

type users = {
    id: string,
    name: string,
    phone: number,
    email: string,
    website: string
}

type post = {
    id: string,
    title: string,
    body: string,
    userid: string
}
const posts: post[] = [
    {
        id: "01",
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        userid: "01"
    },
    {
        id: "02",
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        userid: "02"
    },
    {
        id: "03",
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        userid: "03"
    }

]

const usuarios: users[] = [
    {
        id: "01",
        name: "Matheus Grativol",
        phone: 2199999999,
        email: "matheus@hotmail.com",
        website: "www.matheus.com.br"
    },
    {
        id: "02",
        name: "Daniela Grativol",
        phone: 2199999999,
        email: "daniela@hotmail.com",
        website: "www.daniela.com.br"
    },
    {
        id: "03",
        name: "Salomão Grativol",
        phone: 2199999999,
        email: "salomao@hotmail.com",
        website: "www.salomao.com.br"
    }
]
app.get("/matheus", (request: Request, response: Response) => {

    response.status(201).send("Bateu OK!")
})
app.get("/usuarios", (request: Request, response: Response) => {

    response.status(201).send(usuarios)
})
app.get("/posts", (request: Request, response: Response) => {

    response.status(201).send(posts)
})

app.get("/posts/:id", (request: Request, response: Response) => {

    const id = request.params.id

    const postsUser = posts.filter((post:any)=> post.userid === id)

    response.status(201).send(postsUser)
})









app.listen(3003, () => {
    console.log("Servidor rodando...")
})