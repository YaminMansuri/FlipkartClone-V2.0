import axios from "axios";

export const addToCart = (userId, productId, value) =>
  axios.post("/shop/cart", { userId, productId, value });

export const getCart = (userId) => axios.get(`/shop/user/${userId}/cart`);

export const deleteCartItem = (userId, productId) =>
  axios.delete(`/shop/user/${userId}/cart/${productId}`);

// Order Api
export const placeOrder = async (userId, productId, value) =>
  axios.post("/shop/order", { userId, productId, value });

export const getOrder = async (userId) =>
  axios.get(`/shop/user/${userId}/order`);

export const deleteOrderItem = (userId, productId) =>
  axios.delete(`/shop/user/${userId}/order/${productId}`);
