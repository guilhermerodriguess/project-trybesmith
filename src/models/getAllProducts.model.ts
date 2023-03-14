import { Product } from '../interfaces';
import connection from './connection';

const getAllProducts = async (): Promise<Product[]> => {
  const query = 'SELECT * FROM Trybesmith.products';

  const [products] = await connection.execute(query);

  return products as Product[];
};

export default getAllProducts;
