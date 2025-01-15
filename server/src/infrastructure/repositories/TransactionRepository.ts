import { ObjectId } from "mongoose";
import { IRepository } from "../../domain/IRepository.js";
import {
  ITransaction,
  Transaction,
} from "../../domain/entities/Transaction.js";

export class TransactionRepository implements IRepository<ITransaction> {
  getAllAsync = async () => {
    return (await Transaction.find({}).exec()) || [];
  };
  getByIdAsync = async (id: ObjectId) => {
    return await Transaction.findById(id);
  };
  addAsync = async (obj: ITransaction) => {
    try {
      await Transaction.create(obj);
      return true;
    } catch {
      return false;
    }
  };
  updateAsync = async (id: ObjectId, object: ITransaction) => {
    const transaction = await Transaction.findById(id);
    if (transaction === null) {
      throw new Error(`Transaction with id ${id} does not exist`);
    }
    try {
      await Transaction.updateOne({ id: { eq: id } }, object);
      return true;
    } catch {
      return false;
    }
  };
  deleteAsync = async (id: ObjectId) => {
    try {
      await Transaction.deleteOne({ id: { eq: id } });
      return true;
    } catch {
      return false;
    }
  };
}
