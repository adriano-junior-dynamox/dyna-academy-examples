import type { Product } from '../core/entity';
import { promises as fs } from 'node:fs';
import path from 'node:path';

const PRODUCTS_FILE = path.resolve(__dirname, 'products-db.json');

async function readProducts(): Promise<Product[]> {
  try {
    const data = await fs.readFile(PRODUCTS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === 'ENOENT') {
      return [];
    }
    throw err;
  }
}

async function writeProducts(products: Product[]): Promise<void> {
  await fs.writeFile(PRODUCTS_FILE, JSON.stringify(products, null, 2), 'utf-8');
}

export class JsonFileProductRepository {
  async create(input: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product> {
    const products = await readProducts();
    const now = new Date();
    const id = Date.now().toString(36) + Math.floor(Math.random() * 1000).toString(36);
    const product: Product = {
      ...input,
      id,
      createdAt: now,
      updatedAt: now,
    };
    products.push(product);
    await writeProducts(products);
    return product;
  }

  async findAll(): Promise<Product[]> {
    return readProducts();
  }

  async findById(id: string): Promise<Product> {
    const products = await readProducts();
    const product = products.find(p => p.id === id);
    if (!product) throw new Error('Product not found');
    return product;
  }

  async update(id: string, input: Partial<Omit<Product, 'id' | 'createdAt' | 'updatedAt'>>): Promise<Product> {
    const products = await readProducts();
    const index = products.findIndex(p => p.id === id);
    if (index === -1) throw new Error('Product not found');
    products[index] = {
      ...products[index],
      ...input,
      updatedAt: new Date(),
    };
    await writeProducts(products);
    return products[index];
  }

  async delete(id: string): Promise<void> {
    const products = await readProducts();
    const index = products.findIndex(p => p.id === id);
    if (index === -1) throw new Error('Product not found');
    products.splice(index, 1);
    await writeProducts(products);
  }
}
