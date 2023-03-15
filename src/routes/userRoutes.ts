import { Router } from 'express';
import userController from '../controllers/userController';

const routerUser = Router();

routerUser.post('/users', userController.createUserController);
routerUser.post('/login', userController.loginController);

export default routerUser;