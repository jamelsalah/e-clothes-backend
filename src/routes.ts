import express from "express";
import productsController from "./controllers/productsController";
import categoriesController from "./controllers/categoriesController";
import { SignUpController } from "./controllers/RegisterController";

const router = express.Router();
const sign = new SignUpController();
router.get("/home", productsController.getProducts);
router.get("/categories", categoriesController.getCategories);
router.post("/categories/add_category", categoriesController.addCategory);
router.get("/add_product", productsController.addProductGet);
router.post("/add_product", productsController.addProduct);
router.post("/register", sign.handle);

export default router;
