import express, {Request , response, Response} from "express";
import cors from "cors";
import connection from "./connection";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/actor", async (req: Request, res: Response): Promise<void> => {
  try {
    
    const result = await connection("Actor").select();

    res.status(200).send(result);
  }catch(error:any){
    res.status(500).send(error.sqlMessage || error.message)
  }
});


app.post("/actor", async (req: Request, res: Response): Promise<void> => {
  try {
    const id = Date.now().toString();

    await connection("Actor").insert({
      id,
      name: req.body.name,
      salary: req.body.salary,
      birth_date: req.body.birthDate,
      gender: req.body.gender,
    });

    res.status(201).send({ message: "Ator criado" });
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message);
  }
});


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app