import express from 'express';
import usersRoutes from './domains/user-v1/adapters/routes/v1/users';
import productRoutes from './domains/product-v1/adapters/routes/product-routes';

const app = express();
app.use(express.json());

app.use('/v1/users', usersRoutes);
app.use('/v1/products', productRoutes);

export default app;