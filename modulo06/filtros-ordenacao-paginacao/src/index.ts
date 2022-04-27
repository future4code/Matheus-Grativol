import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUser"
import { getUserType } from "./endpoints/getUserType"
import { getUserName } from "./endpoints/getUserName"
import { getOrderCres } from "./endpoints/getOrderCres";

app.get("/user", getUserName)

app.get("/users", getAllUsers)

app.get("/user/:type", getUserType)

app.get("/user/order", getOrderCres)