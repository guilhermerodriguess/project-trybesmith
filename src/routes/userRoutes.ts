import { Router } from 'express';
import userController from '../controllers/userController';

const routerUser = Router();

routerUser.post('/', userController.createUserController);
routerUser.post('/', userController.loginController);

export default routerUser;