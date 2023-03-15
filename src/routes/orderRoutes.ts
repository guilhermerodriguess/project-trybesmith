import { Router } from 'express';
import orderController from '../controllers/orderController';

const routerOrder = Router();

routerOrder.get('/', orderController.getAllOrdersController);

export default routerOrder;