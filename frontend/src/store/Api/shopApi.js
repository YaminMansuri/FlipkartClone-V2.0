import axios from "axios";

export const addToCart = (userId, productId, value) =>
  axios.post("/shop/cart", { userId, productId, value });

export const getCart = (userId) => axios.get(`/shop/user/${userId}/cart`);

export const deleteCartItem = (userId, productId) =>
  axios.delete(`/shop/user/${userId}/cart/${productId}`);
