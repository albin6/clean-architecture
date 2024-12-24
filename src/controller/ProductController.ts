import { NextFunction, Request, Response } from "express";
import { IProductInteractor } from "../interfaces/IProductInteractor";

export class ProductController {
  private interactor: IProductInteractor;

  constructor(interactor: IProductInteractor) {
    this.interactor = interactor;
  }
  async onCreateProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.interactor.createProduct(req.body);
      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  async onGetProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const limit = parseInt(req.query.limit as string) || 10;
      const offset = parseInt(req.query.offset as string) || 0;
      const data = await this.interactor.getProduct(limit, offset);
      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  async onUpdateStock(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      const stock = parseInt(req.body.stock as string);
      const data = await this.interactor.updateStock(id, stock);
      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}
