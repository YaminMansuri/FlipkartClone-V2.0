import { Router } from "express";

import {
  getProducts,
  getCategories,
  getProductById,
} from "../controllers/productControllers.js";

const router = Router();

router.get("/categories", getCategories);

router.get("/products", getProducts);

router.get("/product/:productId", getProductById);

export default router;
