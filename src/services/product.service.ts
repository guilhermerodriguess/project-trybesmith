import { CreateProduct } from '../interfaces';
import productModel from '../models/product.model';

const createProduct = async (product: CreateProduct) => {
  const data = await productModel.createProduct(product);
  return { status: 201, data };
};

const getAllProductsService = async () => {
  const data = await productModel.getAllProducts();
  return { status: 200, data };
};

const productsService = { getAllProductsService, createProduct };

export default productsService;