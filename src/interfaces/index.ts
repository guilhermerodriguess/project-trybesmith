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