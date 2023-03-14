import { ResultSetHeader } from 'mysql2';
import { CreateProduct, Product } from '../interfaces';
import connection from './connection';

const createProduct = async (product: CreateProduct): Promise<Product> => {
  const { name, amount } = product;
    
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct: Product = { id, name, amount };
  return newProduct;
};

export default createProduct;
