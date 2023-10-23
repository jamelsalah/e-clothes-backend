import express from "express";
import productsController from "./controllers/productsController";
import categoriesController from "./controllers/categoriesController";
import { SignUpController } from "./controllers/RegisterController";
import { SignInController } from "./controllers/LoginController";

const router = express.Router();
const signUp = new SignUpController();
const signIn = new SignInController();

router.get("/home", productsController.getProducts);
router.get("/categories", categoriesController.getCategories);
router.post("/categories/add_category", categoriesController.addCategory);
router.get("/add_product", productsController.addProductGet);
router.post("/add_product", productsController.addProduct);
router.post("/register", signUp.handle);
router.post("/login", signIn.handle);
export default router;
