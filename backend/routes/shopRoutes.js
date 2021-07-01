import { Router } from "express";
import { addToCart, getCart } from "../controllers/shopControllers.js";

const router = Router();

router.post("/cart", addToCart);
router.get("/user/:userId/cart", getCart);

export default router;
