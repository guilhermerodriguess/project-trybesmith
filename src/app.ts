import express from 'express';
import routerOrder from './routes/orderRoutes';
import routerProducts from './routes/productRoutes';
import routerUser from './routes/userRoutes';

const app = express();

app.use(express.json());
app.use('/users', routerUser);
app.use('/orders', routerOrder);
app.use('/products', routerProducts);

export default app;
