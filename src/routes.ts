import express from "express";
import productsController from "./controllers/productsController";
import categoriesController from "./controllers/categoriesController";

const router = express.Router();

router.get("/home", productsController.getProducts);
router.get("/categories", categoriesController.getCategories);
router.post("/categories/add_category", categoriesController.addCategory);
router.get("/add_product", productsController.addProductGet);
router.post("/add_product", productsController.addProduct);

export default router;
