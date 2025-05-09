import type { Product } from '../core/entity';

export class MongoDbProductRepository {
  async create(input: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product> {
    throw Error('Not implemented');
  }

  async findAll(): Promise<Product[]> {
    throw Error('Not implemented');
  }

  async findById(id: string): Promise<Product> {
    throw Error('Not implemented');
  }

  async update(id: string, input: Partial<Omit<Product, 'id' | 'createdAt' | 'updatedAt'>>): Promise<Product> {
    throw Error('Not implemented');
  }

  async delete(id: string): Promise<void> {
    throw Error('Not implemented');
  }

  generateUniqueId(): string {
    throw Error('Not implemented');
  }
}
