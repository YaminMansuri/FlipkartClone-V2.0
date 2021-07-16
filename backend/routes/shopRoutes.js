import { Router } from "express";
import {
  addToCart,
  placeOrder,
  deleteCartItem,
  getCart,
  getOrders,
  deleteOrderItem,
} from "../controllers/shopControllers.js";

const router = Router();

// Cart Routes
router.post("/cart", addToCart);
router.get("/user/:userId/cart", getCart);
router.delete("/user/:userId/cart/:productId", deleteCartItem);

// Order Routes
router.post("/order", placeOrder);
router.get("/user/:userId/order", getOrders);
router.delete("/user/:userId/order/:productId", deleteOrderItem);

export default router;
