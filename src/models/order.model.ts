import { Order } from '../interfaces';
import connection from './connection';

const getAllOrders = async (): Promise<Order[] | Order> => {
  const query = `
    SELECT o.id , o.user_id as userId, JSON_ARRAYAGG(p.id) as productsIds
    FROM Trybesmith.orders o
    INNER JOIN Trybesmith.products p
    ON o.id = p.order_id
    GROUP BY o.id;
  `;
  
  const [orders] = await connection.execute(query);

  return orders as Order[] | Order;
};

export default { getAllOrders };