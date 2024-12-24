export interface IProductInteractor {
  createProduct(input: any): void;
  updateStock(id: number, stock: number): void;
  getProduct(limit: number, offset: number): any;
}
