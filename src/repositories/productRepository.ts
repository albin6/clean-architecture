import { Product } from "../entities/Product";
import { IProductRepository } from "../interfaces/IProductRepository";

export class ProductRepository implements IProductRepository {
  async create(data: Product): Promise<Product> {
    return Promise.resolve({
      name: data.name,
      description: data.description,
      stock: data.stock,
      price: data.price,
      id: data.id,
    });
  }
  async update(id: number, stock: number): Promise<Product> {
    return Promise.resolve({
      name: "Product",
      description: "Description",
      stock: stock,
      price: 9.99,
      id,
    });
  }
  async find(limit: number, offset: number): Promise<Product[]> {
    return Promise.resolve([
      {
        name: "Product",
        description: "Description",
        stock: 10,
        price: 9.99,
        id: 1,
      },
      {
        name: "Product",
        description: "Description",
        stock: 5,
        price: 9.99,
        id: 2,
      },
    ]);
  }
}
