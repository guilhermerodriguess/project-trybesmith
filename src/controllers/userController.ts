import { Request, Response } from 'express';
import { CreateUser, Login } from '../interfaces';
import userService from '../services/user.service';

const createUserController = async (req: Request, res: Response) => {
  const user = req.body as CreateUser;
  const { status, token } = await userService.createUserService(user);

  return res.status(status).json({ token });
};

const loginController = async (req: Request, res: Response) => {
  const login = req.body as Login;
  const { status, message, token } = await userService.loginService(login);

  if (message) {
    return res.status(status).json({ message });
  }

  return res.status(status).json({ token });
};

const userController = { createUserController, loginController };

export default userController;