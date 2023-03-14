import { CreateProduct } from '../interfaces';
import * as productModel from '../models/product.model';

const createProduct = async (product: CreateProduct) => {
  const payload = await productModel.default(product);
  return { status: 201, payload };
};

export default createProduct;

// export async function create(user: IUser) {
//   const userExists = await userModel.getByEmail(user.email);
//   if (userExists) {
//     return { status: 400, error: { message: MESSAGES.USER_EXISTS } };
//   }

//   const payload = await userModel.create(user);
//   const token = jwt.sign({ payload }, secret, config);
//   const data = { token, ...payload };
//   return { status: 201, data };
// }
