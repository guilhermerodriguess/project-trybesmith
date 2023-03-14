import { Router } from 'express';

import * as productController from '../controllers/productController';

const router = Router();

router.post('/products', productController.default);

export default router;