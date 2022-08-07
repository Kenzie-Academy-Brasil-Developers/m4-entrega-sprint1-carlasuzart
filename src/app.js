import express from "express";
import userRouter from "./routes/users.routes";

const app = express();
app.use(express.json());

app.use(userRouter);

app.get("/", (request, response) => {
  return response.send("Hello Carla!");
});

app.listen(3000);

export default app;
