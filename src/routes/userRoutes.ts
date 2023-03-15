import { Router } from 'express';
import userController from '../controllers/userController';

const routerUser = Router();

routerUser.post('/users', userController.createUserController);

export default routerUser;