import mongoose, { Document } from "mongoose";

const Schema = mongoose.Schema;

export interface ITransaction extends Document {
  text: string;
}
const TransactionSchema = new Schema<ITransaction>({
  text: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
});

export const Transaction = mongoose.model<ITransaction>(
  "transaction",
  TransactionSchema
);
