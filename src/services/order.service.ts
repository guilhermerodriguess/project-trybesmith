import orderModel from '../models/order.model';

const getAllOrdersService = async () => {
  const data = await orderModel.getAllOrders();
  return { status: 200, data };
};

const orderService = { getAllOrdersService };

export default orderService;