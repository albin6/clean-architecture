import express from "express";
import { ProductController } from "../controller/ProductController";
import { ProductRepository } from "../repositories/productRepository";
import { ProductInteractor } from "../interactors/ProductInterator";

const respository = new ProductRepository();
const interactor = new ProductInteractor(respository);

const controller = new ProductController(interactor);

const productRouter = express.Router();

productRouter.post("/products", controller.onCreateProduct.bind(controller));
productRouter.get("/products", controller.onGetProducts.bind(controller));
productRouter.put("/products/:id", controller.onUpdateStock.bind(controller));

export default productRouter;
