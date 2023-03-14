import { CreateProduct } from '../interfaces';
import * as productModel from '../models/createProduct.model';
import getAllProducts from '../models/getAllProducts.model';

export async function createProduct(product: CreateProduct) {
  const data = await productModel.default(product);
  return { status: 201, data };
}

export async function getAllProductsService() {
  const data = await getAllProducts();
  return { status: 200, data };
}