import express, {Request , response, Response} from "express";
import cors from "cors";
import connection from "./connection";
import { AddressInfo } from "net";
import { v4 as generateId } from 'uuid';

const app = express();

app.use(express.json());
app.use(cors());

app.get("/users", async (req: Request, res: Response): Promise<void> => {
  try {
    
    const result = await connection("User").select();

    res.status(200).send(result);
  }catch(error:any){
    res.status(500).send(error.sqlMessage || error.message)
  }
});


app.post("/user", async (req: Request, res: Response): Promise<void> => {
  try {
    // const id = Date.now().toString();
    // const id = generateId()

    await connection("User").insert({
      id: generateId(),
      name: req.body.name,
      nickName: req.body.nickName,
      email: req.body.email,
    })

    // if(! || !nickName || !email){
    //   throw new Error()
    // }

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