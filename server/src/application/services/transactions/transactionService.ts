import {
  ITransaction,
  Transaction,
} from "../../../domain/entities/Transaction.js";
import { TransactionRepository } from "../../../infrastructure/repositories/TransactionRepository.js";

export class TransactionService {
  private constructor() {}

  static transactionRepository: TransactionRepository | null = null;
  static getTransactionRepository = () => {
    if (!TransactionService.transactionRepository) {
      TransactionService.transactionRepository = new TransactionRepository();
    }
    return TransactionService.transactionRepository;
  };

  static getAllTransactions = async () => {
    const transactionRepository = this.getTransactionRepository();
    console.log("t");
    const transactions = await transactionRepository.getAllAsync();
    return transactions;
  };

  static postTransaction = async (obj: ITransaction) => {
    const transactionRepository = this.getTransactionRepository();
    Transaction.validate(obj);
    return await transactionRepository.addAsync(obj);
  };
}
