import express, { type Request, type Response } from 'express';
import { InMemoryProductRepository } from '../database-repository-memory';
import { createProduct } from '../../core/use-cases/create-product';

const repository = new InMemoryProductRepository();
const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, description, price } = req.body;
    if (!name || typeof price !== 'number') {
      return res.status(400).json({ message: 'Name and price are required.' });
    }
    const product = await createProduct(repository, { name, description, price });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
});

export default router;
