import express from 'express';
import createProduct from './controllers/productController';

const app = express();

app.use(express.json());

app.use('/', createProduct);

export default app;
