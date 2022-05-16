import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";
import { getProds } from "./endpoints/getProds";
import { getPurcheses } from "./endpoints/getPurchases";
import { getUsers } from "./endpoints/getUsers";
import { postProds } from "./endpoints/postProds";
import { postPurchases } from "./endpoints/postPurchases";
import {postUsers} from "./endpoints/postUsers";

app.post("/users", postUsers)

app.get("/users", getUsers)

app.post("/products", postProds)

app.get("/products", getProds)

app.post("/purchases", postPurchases)

app.get("/users/:user_id/purchases", getPurcheses)




app.get("/recipes", getAllRecipes)

