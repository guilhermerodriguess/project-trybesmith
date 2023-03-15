import createTokenJWT from '../auth/createTokenJWT';
import { CreateUser, Login } from '../interfaces';
import userModel from '../models/user.model';

const createUserService = async (user: CreateUser) => {
  const data = await userModel.createUser(user);
  const token = createTokenJWT.createToken(data);
  return { status: 201, token };
};

const loginService = async (login: Login) => {
  if (!login.username) {
    return {
      status: 400, message: '"username" is required',
    };
  }
  if (!login.password) {
    return {
      status: 400, message: '"password" is required',
    };
  }

  const user = await userModel.getUserByUsername(login);

  if (user.length === 0 || user[0].password !== login.password) {
    return { 
      status: 401, message: 'Username or password invalid',
    };
  }
  const token = createTokenJWT.createToken(user[0]);
  return { status: 200, token };
};

const userService = { createUserService, loginService };

export default userService;