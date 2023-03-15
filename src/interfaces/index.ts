export interface CreateProduct {
  name: string;
  amount: string;
}

export interface Product extends CreateProduct {
  id: number;
}

export interface CreateUser {
  username: string;
  vocation: string;
  level: number;
  password: string;
}

export interface IUser extends CreateUser {
  id: number;
}

export interface CreateOrder {
  userId: number;
  productsIds: number[];
}

export interface Order extends CreateOrder {
  id: number;
}

export interface Login {
  username: string;
  password: string;
}