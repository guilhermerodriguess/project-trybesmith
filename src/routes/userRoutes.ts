import { Router } from 'express';
import userController from '../controllers/userController';
import validateBody from '../middlewares/userMiddlewares';

const routerUser = Router();

routerUser.post('/users', validateBody, userController.createUserController);
routerUser.post('/login', userController.loginController);

export default routerUser;