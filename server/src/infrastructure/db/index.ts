import mongoose from "mongoose";
import { Transaction } from "../../domain/entities/Transaction";

class Database {
  private constructor() {}

  public static connect(connectionUri: string | undefined) {
    if (connectionUri) {
      mongoose.connect(connectionUri, { dbName: "y-budget" });
    }
  }
}

export default Database;
