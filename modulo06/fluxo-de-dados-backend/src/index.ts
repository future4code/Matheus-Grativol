import express, { Request, Response } from 'express';
import cors from 'cors';
import { v4 as generateId } from 'uuid';
import { produtos } from './data'
// import { next Tick } from 'process';

const app = express();

app.use(express.json());
app.use(cors());

type prod = {
   id: string
   name: string
   price: number
}

app.get('/test', (request: Request, response: Response) => {
   response.status(210).send("test ok");
});

app.get("/produtos/add", (request: Request, response: Response) => {

   try {

      const { name, price } = request.body

      if(typeof name !== 'string' ){
         throw new Error("Favor informe um nome")
      }

      if(!name || !price){
         throw new Error("Favor informar name e price no body")
      }
      const newProduto: prod = {
         id: generateId(),
         name: name,
         price: price
      }

      produtos.push(newProduto)
      
   } catch (error: any) {
      response.status(422).send("Favor informar name e price no body")
   }

   response.status(201).send(produtos)
})

app.get("/produtos", (request: Request, response: Response) => {
   response.status(201).send(produtos)
})

// app.put("/produtos/edit", (request: Request, response: Response)=>{
//    const prodId = request.query.id
//    const {price} = request.body 

//    const prod = produtos.find(produto => produto.id === prodId)
//    if(!prod) {
//       response.status(404).send("Informe o Body");
//       return
//    }

//    prod.price === price


// })

app.delete("/produtos/delet/:id", (request: Request, response: Response) => {
   const id = request.params.id

   const filterDelet = produtos.filter((prod) => prod.id !== id)

   response.status(201).send(filterDelet)
})


app.listen(3003, () => console.log('Server rodando.....'));
