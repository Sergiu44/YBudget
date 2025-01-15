import { MongoClient, ServerApiVersion } from "mongodb";

class Database {
  public constructor() {}

  private static Client: MongoClient | null;
  public static GetClient(connectionString: string) {
    if (this.Client === null) {
      this.Client = new MongoClient(connectionString, {
        appName: "y-budget",
        serverApi: {
          deprecationErrors: true,
          strict: true,
          version: ServerApiVersion.v1,
        },
      });
    }
    return this.Client;
  }
}

export default Database;
