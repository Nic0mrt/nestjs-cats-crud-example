import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { generateId } from 'src/utils/helpers';
import { InsertOneDTO } from './dtos/insertOneDTO';
import { UpdateOneDTO } from './dtos/updateOneDTO';
import { Cat } from './interfaces/cat';
import { Catservice } from './interfaces/catService';

@Injectable()
export class CatInMemoryService implements Catservice {
  cats: Cat[];
  constructor() {
    this.cats = [];
  }

  getAll(): Promise<Cat[]> {
    return Promise.resolve(this.cats);
  }

  insertOne(insertOneDTO: InsertOneDTO): Promise<Cat> {
    const { name, age, color } = insertOneDTO;

    if (!name || !age) throw new BadRequestException();

    const newCat: Cat = { id: generateId(), name, age, color };
    this.cats.push(newCat);
    return Promise.resolve(newCat);
  }

  deleteOne(id: string): Promise<void> {
    this.findOne(id);
    this.cats = this.cats.filter((cat) => cat.id != id);
    return Promise.resolve();
  }

  updateOne(id: string, updateOneDTO: UpdateOneDTO): Promise<Cat> {
    const { name, age, color } = updateOneDTO;
    const [cat, index] = this.findOne(id);

    const newCat = { ...cat };
    if (name) newCat.name = name;
    if (age) newCat.age = age;
    if (color) newCat.color = color;

    this.cats[index] = newCat;
    return Promise.resolve(newCat);
  }

  private findOne(id: string): [Cat, number] {
    const index = this.cats.findIndex((cat) => cat.id === id);

    const cat: Cat = this.cats.find((cat) => cat.id === id);
    console.log(id);
    console.log(this.cats);
    if (index === -1) throw new NotFoundException();

    return [cat, index];
  }
}
