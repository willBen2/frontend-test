export interface IProduct {
  id: number;
  title: string;
}

export default class Product implements IProduct {
  id: number;
  title: string;

  constructor(product: IProduct) {
    this.id = product.id;
    this.title = product.title
  }
}
