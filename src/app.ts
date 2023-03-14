import express from 'express';
import router from './routes/productRoutes';

const app = express();

app.use(express.json());

app.use('/', router);

export default app;
