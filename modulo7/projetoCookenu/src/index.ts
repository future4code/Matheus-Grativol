import { app } from "./controller/app";
import { userRouter } from "./controller/router/userRouter";

app.use("/user", userRouter)