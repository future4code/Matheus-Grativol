import express, { Request, response, Response } from "express";
import cors from "cors";
import connection from "./connection";
import { AddressInfo } from "net";
import { v4 as generateId } from 'uuid';

const app = express();

app.use(express.json());
app.use(cors());

app.get("/user/all", async (req: Request, res: Response): Promise<void> => {
  try {

    const result = await connection("User").select();

    res.status(200).send(result);
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message)
  }
});

const Errors: { [chave: string]: { status: number, message: string } } = {
  AUTHORIZATION_NOT_FOUND: {status: 401, message: "Favor enviar header authorization"},
  USER_NOT_FOUND: {status: 404, message: "Usuário não encontrada"},
  TASK_EXISTS: {status: 409, message: "Essa tarefa já existe"},
  MISSING_PARAMETERS: {status: 422, message: "Alguma informação está faltando. Consulte a documentação."},
  SOMETHING_WENT_WRONG: {status: 500, message: "Algo deu errado"},
}

app.post("/user", async (req: Request, res: Response): Promise<void> => {
  try {
    // const id = Date.now().toString();
    const id = generateId()
    const name = req.body.name
    const nickName = req.body.nickName
    const email = req.body.email

    if (!name || !nickName || !email) {
      throw new Error(Errors.MISSING_PARAMETERS.message)
    }

    await connection("User").insert({
      id,
      name,
      nickName,
      email
    })

    res.status(201).send({ message: "Ator criado" });
  } catch (error: any) {
    res.status(Errors.MISSING_PARAMETERS.status).send(Errors.MISSING_PARAMETERS.message);
  }
});

app.get("/user/:id", async (req: Request, res: Response): Promise<void>=>{
  try{
    const userId = req.params.id

    if(!userId){
      throw new Error(Errors.USER_NOT_FOUND.message)
    }
    const result = await connection("User").select().where({ id : userId})

    if(!result){
      throw new Error(Errors.USER_NOT_FOUND.message)
    }

    res.status(201).send(result)

  }catch(error:any){
    res.status(Errors.USER_NOT_FOUND.status).send(Errors.USER_NOT_FOUND.message)
  }
})

app.put("/user/edit/:id", async (req: Request, res: Response): Promise<void> =>{
  try{
    const userId = req.params.id
    const name = req.body.name
    const nickName = req.body.nickName

    if(!name || !nickName){
      throw new Error(Errors.MISSING_PARAMETERS.message)
    }
    await connection("User")
    .update({
      name,
      nickName
    }).where({id : userId});

    res.status(200).send("Usuário editado")
  }catch(error: any){
    res.status(Errors.MISSING_PARAMETERS.status).send(Errors.MISSING_PARAMETERS.message)
  }
})

app.post("/task", async (req: Request, res: Response): Promise<void>=>{
  try{
    const title = req.body.title
    const description = req.body.description
    const limitDate = req.body.limitDate
    const creatorUserId = req.body.creatorUserId
    const id = generateId()

    if(!title || !description || !limitDate || !creatorUserId){
      throw new Error(Errors.MISSING_PARAMETERS.message)
    }
    await connection("Task_user").insert({
      id,
      title,
      description,
      limitDate,
      creatorUserId
    })

    res.status(201).send("Tarefa criada com sucesso")
  }catch(error:any){
    res.status(Errors.MISSING_PARAMETERS.status).send(Errors.MISSING_PARAMETERS.message)
  }
})

app.get("/task/:id", async(req: Request, res: Response): Promise<void>=>{
  try{

    const result = await connection("Task_user").select()
    .where({id : req.params.id})

    if(result === []){
      throw new Error("Tarefa não encontrada")
    }
    console.log(result)

    res.status(200).send(result)
  }catch(error:any){
    res.status(Errors.TASK_EXISTS.status).send("Tarefa não encontrada")
  }
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app