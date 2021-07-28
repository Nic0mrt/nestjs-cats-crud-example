import { InsertOneDTO } from '../dtos/insertOneDTO';
import { UpdateOneDTO } from '../dtos/updateOneDTO';
import { Cat } from './cat';

export interface Catservice {
  getAll(): Promise<Cat[]>;
  insertOne(inserOneDTO: InsertOneDTO): Promise<Cat>;
  deleteOne(id: string): Promise<void>;
  updateOne(id: string, updateOneDTO: UpdateOneDTO): Promise<Cat>;
}
