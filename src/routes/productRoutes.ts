import { Router } from 'express';
import productController from '../controllers/productController';
import validateBody from '../middlewares/productMiddlewares';

const routerProducts = Router();

routerProducts.post('/products', validateBody, productController.createProductController);
routerProducts.get('/products', productController.getAllProductsController);

export default routerProducts;