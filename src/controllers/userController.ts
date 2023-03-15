import { Request, Response } from 'express';
import { CreateUser } from '../interfaces';
import userService from '../services/user.service';

const createUserController = async (req: Request, res: Response) => {
  const user = req.body as CreateUser;
  const { status, token } = await userService.createUserService(user);

  return res.status(status).json({ token });
};

const userController = { createUserController };

export default userController;