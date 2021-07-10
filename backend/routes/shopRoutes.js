import { Router } from "express";
import {
  addToCart,
  deleteCartItem,
  getCart,
} from "../controllers/shopControllers.js";

const router = Router();

router.post("/cart", addToCart);
router.get("/user/:userId/cart", getCart);
router.delete("/user/:userId/cart/:productId", deleteCartItem);

export default router;
