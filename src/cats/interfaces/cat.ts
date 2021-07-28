export interface Cat {
  id: string;
  name: string;
  age: number;
  color?: CatColor;
}

export enum CatColor {
  red = 'red',
  orange = 'orange',
  grey = 'grey',
  black = 'black',
  brown = 'brown',
}
