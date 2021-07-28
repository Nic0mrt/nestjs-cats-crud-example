import { CatColor } from '../interfaces/cat';

export interface InsertOneDTO {
  name: string;
  age: number;
  color: CatColor;
}
