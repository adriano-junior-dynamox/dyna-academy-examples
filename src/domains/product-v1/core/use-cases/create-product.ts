import type { Product } from '../entity';

export interface CreateProductInput {
  name: string;
  description?: string;
  price: number;
}

export interface CreateProductOutput extends Product {}

export interface ICreateProductRepository {
  create(product: CreateProductInput): Promise<Product>;
}

export async function createProduct(
  repository: ICreateProductRepository,
  input: CreateProductInput
): Promise<CreateProductOutput> {
  const product = await repository.create(input);
  return product;
}
