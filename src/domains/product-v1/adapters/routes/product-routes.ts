import express, { type Request, type Response } from 'express';
import { JsonFileProductRepository } from '../database-repository-jsonfile';
const repository = new JsonFileProductRepository();
const router = express.Router();

// Listar todos os produtos
router.get('/', async (req: Request, res: Response) => {
  try {
    const products = await repository.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
});

// Buscar produto por ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await repository.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: (error as Error).message });
  }
});

// Criar produto
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, description, price } = req.body;
    if (!name || typeof price !== 'number') {
      return res.status(400).json({ message: 'Name and price are required.' });
    }
    const product = await repository.create({ name, description, price });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error });
  }
});

// Atualizar produto
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;
    if (name === undefined && description === undefined && price === undefined) {
      return res.status(400).json({ message: 'At least one field (name, description, price) must be provided.' });
    }
    if (price !== undefined && typeof price !== 'number') {
      return res.status(400).json({ message: 'Price must be a number.' });
    }
    const updated = await repository.update(id, { name, description, price });
    res.status(200).json(updated);
  } catch (error) {
    res.status(404).json({ message: (error as Error).message });
  }
});

// Deletar produto
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await repository.delete(id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ message: (error as Error).message });
  }
});

export default router;
