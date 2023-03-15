import { Router } from 'express';
import productController from '../controllers/productController';
import validateBody from '../middlewares/productMiddlewares';

const routerProducts = Router();

routerProducts.post('/', validateBody, productController.createProductController);
routerProducts.get('/', productController.getAllProductsController);

export default routerProducts;