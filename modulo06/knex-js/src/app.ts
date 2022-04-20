import express, {Response , Request} from "express";
import cors from "cors";
import connection from "./connection";
import { AddressInfo } from "net";


const app = express();

app.use(express.json());
app.use(cors());

app.get("/actor", async(req: Request , res: Response): Promise<void> => {
  try{
    const result = await connection("Actor").select();
    res.status(201).send(result)
  }catch (error : any){
    res.status(500).send(error.sqlMessage || error.message)
  }
})

app.get("/actor/:id", async(req: Request , res: Response): Promise<void> => {
  try{
    const result = await connection("Actor").select().where({id: req.params.id});
    res.status(201).send(result)
  }catch (error : any){
    res.status(500).send(error.sqlMessage || error.message)
  }
})

app.get("/actor/name/:name", async(req: Request , res: Response): Promise<void> => {
  try{
    const result = await connection("Actor").select().where({name: req.params.name});
    res.status(201).send(result)
  }catch (error : any){
    res.status(500).send(error.sqlMessage || error.message)
  }
})

app.get("/actor/gender/:gender", async(req: Request , res: Response):Promise<void> =>{
  try{
    const result = await connection("Actor").select("gender").count().where({gender: req.params.gender})
    res.status(201).send(result)
  }catch(error : any){
    res.status(500).send(error.sqlMessage || error.message)
  }
})

app.put("/actor/edit/:id", async(req: Request , res: Response):Promise<void> =>{
  try{
    await connection("Actor").update({
      salary : req.body.salary
    }).where({id : req.params.id})

    res.status(200).send({message : "Ator editado"})
  }catch(error : any){
    res.status(500).send(error.sqlMessage || error.message)
  }
})

app.delete("/actor/delete/:id", async(req: Request , res: Response):Promise<void>=>{
  try{
    await connection("Actor").delete().where({id : req.params.id})
    res.status(200).send("Ator apagado")
  }catch(error : any){
    res.status(500).send(error.sqlMessage || error.message)
  }
})

app.get("/actor/salary/media/:gender", async(req: Request , res: Response): Promise<void>=>{
  try{
    const result = await connection("Actor").select().avg("salary").where({gender : req.params.gender})
    res.status(200).send(result)
  }catch(error : any){
    res.status(500).send(error.sqlMessage || error.message)
  }
})

// app.get("/actor/gender/?gender", async(req: Request , res: Response):Promise<void> =>{
//   try{
//     const result = await connection("Actor").select("gender").count().where({gender: req.query.gender})
//     res.status(201).send(result)
//   }catch(error : any){
//     res.status(500).send(error.sqlMessage || error.message)
//   }
// })

app.post("/actor/add", async(req: Request , res: Response): Promise<void> =>{
  try{
    const id = Date.now().toString();
    await connection("Actor").insert({
      id,
      name: req.body.name,
      salary: req.body.salary,
      birth_date: req.body.birthDate,
      gender: req.body.gender,
      // favorite_ice_cream_flavor: req.body.favorite_ice_cream_flavor,
      // type: req.body.type
    })
    res.status(201).send("Ator criado")
  }catch(error : any){
    res.status(500).send(error.sqlMessage || error.message)
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