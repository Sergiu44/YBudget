import Express from "express";
import dotenv from "dotenv";
import cors from "cors";

import transactionRoutes from "./routes/transactions.js";
import path from "path";

const app = Express();
dotenv.config({ path: path.join(__dirname, "../.env") });

// if (!process.env.MONGODB_URI)
//   throw new Error("Invalid/Missing environment variable: 'MONGODB_URI'");

app.use(cors());
app.use(Express.json());
app.set("trust proxy", true);

app.get("/api/test", (req, res) => {
  res.send(process.env.TEST);
});

// app.use(transactionRoutes);

app.listen(8000, () => {
  console.log("Server started at port 8000");
});
