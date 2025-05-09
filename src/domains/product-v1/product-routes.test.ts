import request from 'supertest';
import express from 'express';
import productRoutes from './adapters/routes/product-routes';

const app = express();
app.use(express.json());
app.use('/products', productRoutes);

describe('Product Endpoints', () => {
  let createdId: string;
  const productPayload = {
    name: 'Produto Teste',
    price: 100,
    description: 'Descrição do produto teste',
    stock: 10
  };

  it('should create a new product', async () => {
    const res = await request(app)
      .post('/products')
      .send(productPayload);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    createdId = res.body.id;
  });

  it('should get all products', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should get a product by id', async () => {
    const res = await request(app).get(`/products/${createdId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', createdId);
  });

  it('should update a product', async () => {
    const res = await request(app)
      .put(`/products/${createdId}`)
      .send({ ...productPayload, price: 200 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('price', 200);
  });

  it('should delete a product', async () => {
    const res = await request(app).delete(`/products/${createdId}`);
    expect(res.statusCode).toBe(204);
  });

  it('should return 404 for non-existent product', async () => {
    const res = await request(app).get('/products/nonexistentid');
    expect(res.statusCode).toBe(404);
  });
});
