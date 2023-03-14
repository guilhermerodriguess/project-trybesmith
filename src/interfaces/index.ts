export interface CreateProduct {
  name: string;
  amount: string;
}

export interface Product extends CreateProduct {
  id: number;
}