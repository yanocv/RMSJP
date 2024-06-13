import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.post("/api/send-data", (req: Request, res: Response) => {
  const data = req.body;
  console.log("Data received:", data);
  res.send({ status: "Success", data });
});

app.listen(port, (): void => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
