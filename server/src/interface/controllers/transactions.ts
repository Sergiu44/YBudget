import { NextFunction, Request, Response } from "express";
import { ITransaction } from "../../domain/entities/Transaction.js";

export class TransactionController {
  public static get(req: Request, res: Response, next: NextFunction) {
    return async (getTransactionsAsync: () => Promise<ITransaction[]>) => {
      try {
        const transactions = await getTransactionsAsync();
        res.status(200).send(transactions);
        res.end();
      } catch (error) {
        res.status(500).send(error);
      }
    };
  }

  public static post(req: Request, res: Response, next: NextFunction) {
    return async (
      createTransactionAsync: (obj: ITransaction) => Promise<boolean>
    ) => {
      try {
        const isCreated = await createTransactionAsync(req.body);
        isCreated
          ? res.status(201).send(isCreated)
          : res.status(400).send(isCreated);
      } catch (error) {
        res.status(500).send(error);
      }
    };
  }
}
