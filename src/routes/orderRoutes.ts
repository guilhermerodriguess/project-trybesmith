import { Router } from 'express';
import orderController from '../controllers/orderController';

const routerOrder = Router();

routerOrder.get('/orders', orderController.getAllOrdersController);

export default routerOrder;