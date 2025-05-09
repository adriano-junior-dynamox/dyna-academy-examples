import express from 'express';
import { V1UsersController } from './domains/user-v1/adapters/routes/v1/users/controller';
import productRoutes from './domains/product-v1/adapters/routes/product-routes';

const app = express();
app.use(express.json());

const v1UsersController = new V1UsersController();

app.post('/v1/users', v1UsersController.create);
app.use('/v1/products', productRoutes);

export default app;