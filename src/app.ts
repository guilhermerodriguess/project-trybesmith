import express from 'express';
import routerProducts from './routes/productRoutes';
import routerUser from './routes/userRoutes';

const app = express();

app.use(express.json());

app.use('/', routerProducts);
app.use('/', routerUser);

export default app;
