import express, { Request, Response } from "express";
import productRouter from "./routes/ProductRoutes";

const app = express();
const port = 3000;

app.use(productRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
