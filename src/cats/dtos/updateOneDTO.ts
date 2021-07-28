import { CatColor } from '../interfaces/cat';

export interface UpdateOneDTO {
  name?: string;
  age?: number;
  color?: CatColor;
}
