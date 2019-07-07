import { CategoryType } from "./category-type";

export class Product {
  constructor(
    public id?: number,
    public name?: string,
    public category?: CategoryType
  ) { }
}
