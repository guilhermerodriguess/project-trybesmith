import { Router } from 'express';
import productController from '../controllers/productController';

const routerProducts = Router();

routerProducts.post('/products', productController.createProductController);
routerProducts.get('/products', productController.getAllProductsController);

export default routerProducts;