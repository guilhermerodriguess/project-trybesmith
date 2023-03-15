import { Request, Response } from 'express';
import orderService from '../services/order.service';

const getAllOrdersController = async (_req: Request, res: Response) => {
  const { status, data } = await orderService.getAllOrdersService();
  return res.status(status).json(data);
};

const orderController = { getAllOrdersController };

export default orderController;