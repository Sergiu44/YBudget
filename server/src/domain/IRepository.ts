import { ObjectId } from "mongoose";
import { IEntity } from "./IEntity";

export interface IRepository<T extends IEntity> {
  getAllAsync: () => Promise<T[]>;
  getByIdAsync: (id: ObjectId) => Promise<T | null>;
  addAsync: (object: T) => Promise<boolean>;
  updateAsync: (id: ObjectId, object: T) => Promise<boolean>;
  deleteAsync: (id: ObjectId) => Promise<boolean>;
}
