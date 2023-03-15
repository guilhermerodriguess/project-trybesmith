import createTokenJWT from '../auth/createTokenJWT';
import { CreateUser } from '../interfaces';
import userModel from '../models/user.model';

const createUserService = async (user: CreateUser) => {
  const data = await userModel.createUser(user);
  const token = createTokenJWT.createToken(data);
  return { status: 201, token };
};

const userService = { createUserService };

export default userService;