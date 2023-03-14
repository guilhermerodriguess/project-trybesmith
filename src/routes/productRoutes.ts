import { Router } from 'express';

import * as productController from '../controllers/productController';

const router = Router();

router.post('/products', productController.createProductController);
router.get('/products', productController.getAllProductsController);

export default router;