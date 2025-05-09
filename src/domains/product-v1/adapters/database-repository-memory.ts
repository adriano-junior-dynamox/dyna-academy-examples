import type { Product } from '../core/entity';
import type { ICreateProductRepository, CreateProductInput } from '../core/use-cases/create-product';

export class InMemoryProductRepository implements ICreateProductRepository {
  private products: Product[] = [];
  private nextId = 1;

  async create(input: CreateProductInput): Promise<Product> {
    const now = new Date();
    const product: Product = {
      id: String(this.nextId++),
      name: input.name,
      description: input.description,
      price: input.price,
      createdAt: now,
      updatedAt: now,
    };
    this.products.push(product);
    return product;
  }
}
