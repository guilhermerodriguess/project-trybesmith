import { Request, Response } from 'express';
import { CreateProduct } from '../interfaces';
import * as productService from '../services/product.service';

const createProduct = async (req: Request, res: Response) => {
  const product = req.body as CreateProduct;
  const { status, payload } = await productService.default(product);

  return res.status(status).json(payload);
};

export default createProduct;