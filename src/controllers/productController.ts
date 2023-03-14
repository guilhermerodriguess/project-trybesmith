import { Request, Response } from 'express';
import { CreateProduct } from '../interfaces';
import * as productService from '../services/product.service';

export async function createProductController(req: Request, res: Response) {
  const product = req.body as CreateProduct;
  const { status, data } = await productService.createProduct(product);

  return res.status(status).json(data);
}

export async function getAllProductsController(_req: Request, res: Response) {
  const { status, data } = await productService.getAllProductsService();
  return res.status(status).json(data);
}