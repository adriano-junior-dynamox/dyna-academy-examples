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

  async findAll(): Promise<Product[]> {
    return this.products;
  }

  async findById(id: string): Promise<Product> {
    const product = this.products.find(p => p.id === id);
    if (!product) throw new Error('Product not found');
    return product;
  }

  async update(id: string, input: Partial<CreateProductInput>): Promise<Product> {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) throw new Error('Product not found');
    this.products[index] = {
      ...this.products[index],
      ...input,
      updatedAt: new Date(),
    };
    return this.products[index];
  }

  async delete(id: string): Promise<void> {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) throw new Error('Product not found');
    this.products.splice(index, 1);
  }
}

