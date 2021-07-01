import axios from "axios";

export const addToCart = (userId, productId) =>
  axios.post("/shop/cart", { userId, productId });

export const getCart = (userId) => axios.get(`shop/user/${userId}/cart`);
