import { Request, Response } from 'express';
import { CreateProduct } from '../interfaces';
import productsService from '../services/product.service';

const createProductController = async (req: Request, res: Response) => {
  const product = req.body as CreateProduct;
  const { status, data } = await productsService.createProduct(product);

  return res.status(status).json(data);
};

const getAllProductsController = async (_req: Request, res: Response) => {
  const { status, data } = await productsService.getAllProductsService();
  return res.status(status).json(data);
};

const productController = { createProductController, getAllProductsController };

export default productController;