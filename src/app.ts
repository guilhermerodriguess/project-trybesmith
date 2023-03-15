import express from 'express';
import routerOrder from './routes/orderRoutes';
import routerProducts from './routes/productRoutes';
import routerUser from './routes/userRoutes';

const app = express();

app.use(express.json());
app.use('/', routerUser);
app.use('/', routerOrder);
app.use('/', routerProducts);

export default app;
