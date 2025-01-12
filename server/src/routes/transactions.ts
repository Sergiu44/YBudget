import Express from "express";
import path from "path";
import { TransactionController } from "../interface/controllers/transactions";
import { TransactionService } from "../application/services/transactions/transactionService";

const filePathname = "/" + path.basename(__filename, ".ts");
const router = Express.Router();

router.get(`${filePathname}`, (req, res, next) =>
  TransactionController.get(
    req,
    res,
    next
  )(TransactionService.getAllTransactions)
);

router.post(`${filePathname}`, (req, res, next) =>
  TransactionController.post(req, res, next)(TransactionService.postTransaction)
);

export default router;
