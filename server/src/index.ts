import Express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

import transactionRoutes from "./routes/transactions.js";
import authRoutes from "./auth.js";

const app = Express();
dotenv.config({ path: "../.env" });

// if (!process.env.MONGODB_URI)
//   throw new Error("Invalid/Missing environment variable: 'MONGODB_URI'");

app.use(cors());
app.use(bodyParser.json());
app.set("trust proxy", true);

app.get("/api/test", (req, res) => {
  res.send("test");
});

// app.use(authRoutes);
// app.use(transactionRoutes);

app.listen(8000, () => {
  console.log("Server started at port 8000");
});
