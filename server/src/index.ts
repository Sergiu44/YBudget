import Express from "express";
import transactionRoutes from "./routes/transactions";
import Database from "./infrastructure/db";
import dotenv from "dotenv";
import bodyParser from "body-parser";

const app = Express();
dotenv.config({ path: "./.env" });

Database.connect(process.env.MONGODB_URI);

app.use(bodyParser.json());

app.use(transactionRoutes);

app.listen(8000, () => {
  console.log("Server started at port 8000");
});
